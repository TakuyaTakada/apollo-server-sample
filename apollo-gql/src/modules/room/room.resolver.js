import { RoomProvider } from "./room.provider";

export const resolver = {
  Query: {
    rooms: async (_, args, context) => {
      console.log(context);
      const room = context.injector.get(RoomProvider);
      const response = await room.rooms();
      console.log(response);
      return response;
    },
  },
  Mutation: {
    createRoom: async (_, args, { injector }) => {
      return injector.get(RoomProvider).createRoom(args.name);
    },
  },
};
