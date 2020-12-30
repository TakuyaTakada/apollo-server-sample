import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

const userResolver = {
  Query: {
    user: async (_, { id }, { rdb }) => {
      return await rdb.User.findByPk(id);
    },
    users: async (_, args, { rdb }) => await rdb.User.findAll(),
  },
  Mutation: {
    signUp: async (_, { input }, { cognito, rdb }) => {
      function signUp(email, password) {
        return new Promise((resolve, reject) => {
          cognito.signUp(email, password, [], null, (err, result) => {
            if (err) {
              const error = err.message || JSON.stringify(err);
              console.error("error:", error);
              reject(error);
            } else {
              console.log("result: ", result);
              rdb.User.create({ name: result.userSub });
              resolve(result);
            }
          });
        });
      }
      const result = await signUp(input.email, input.password);
      if (!result.userSub) {
        throw Error(result);
      }
      return true;
    },
    signIn: async (_, { input }, { cognito }) => {
      const authDetails = new AuthenticationDetails({
        Username: input.email,
        Password: input.password,
      });
      const userData = {
        Username: input.email,
        Pool: cognito,
      };
      const cognitoUser = new CognitoUser(userData);
      function signIn() {
        return new Promise((resolve, reject) => {
          cognitoUser.authenticateUser(authDetails, {
            onSuccess: (result) => {
              const accessToken = result.getAccessToken().getJwtToken();
              resolve(accessToken);
            },
            onFailure: (err) => {
              const error = err.message || JSON.stringify(err);
              console.error("error:", error);
              reject(err);
            },
          });
        });
      }
      const result = await signIn();
      if (result.message) {
        throw Error(result.message);
      }
      return { accessToken: result };
    },
  },
};

export default userResolver;
