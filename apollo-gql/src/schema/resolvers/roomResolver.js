const roomResolver = {
  Query: {
    rooms: (_, args, { rdb }) => {
      return rdb.User.findAll();
    },
  },
  Mutation: {
    createRoom: async (parent, { input }, { rdb }) => {
      console.log(rdb.Room);
      try {
        return await rdb.Room.create(input);
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  },
};

export default roomResolver;
