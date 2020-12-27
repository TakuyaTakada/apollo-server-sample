import Room from "../../models/rdb/Room";
const DUMMY_USERS = [
  {
    id: "user1",
    name: "user1",
  },
  {
    id: "user2",
    name: "user2",
  },
];
const messageResolver = {
  Message: {
    id: (parent) => parent.id,
    content: (parent) => parent.content,
    postedBy: async (parent) => {
      const user = await DUMMY_USERS.find((user) => user.id === parent.userId);
      // TODO: delete dummy object
      return user || { id: "dummy-user", name: "dummy user" };
    },
    room: async (parent) => {
      const room = await Room.findByPk(parent.roomId);
      // TODO: delete dummy object
      return room || { id: "dummy-room", name: "dummy room" };
    },
  },
  Query: {
    messages: async (_, args, { mongo }) => {
      return mongo.Message.find();
    },
  },
  Mutation: {
    postMessage: async (parent, { input }, { mongo }) => {
      try {
        return mongo.Message.create(input);
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  },
};

export default messageResolver;
