import { IMutationSignUpArgs, IResolvers } from "../../__generated__/graphql";

const userResolver: IResolvers = {
  Query: {
    user: async (parent, args, context) => {
      return {
        id: "hoge",
        sub: "hoge",
      };
    },
    users: (parent, args, context) => {
      return [
        {
          id: "hoge",
          sub: "hoge",
        },
      ];
    },
  },
  Mutation: {
    signUp: async (
      parent,
      args: IMutationSignUpArgs,
      { dataSources: { auth, user } }
    ) => {
      const { userSub } = await auth.signUp(args.input);
      const result = await user.create(userSub);
      const response = {
        id: result.dataValues.id,
        sub: result.dataValues.sub,
      };
      return response;
    },
  },
};
export default userResolver;
