import { UserProvider } from "./user.provider";
import { AuthProvider } from "./auth.provider";

export const resolver = {
  Query: {
    user: async (_, { id }, { injector }) => {
      const response = injector.get(UserProvider).getUser(id);
      return response;
    },
  },
  Mutation: {
    signUp: async (_, { input }, { injector }) => {
      return injector.get(AuthProvider).signUp(input.email, input.password);
    },
    signIn: async (_, { input }) => {
      console.log(input);
      return {
        accessToken: "dummyToken",
      };
    },
  },
};
