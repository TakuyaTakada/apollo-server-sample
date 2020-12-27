const userResolver = {
  Query: {
    user: async (_, { id }, { rdb }) => {
      return await rdb.User.findByPk(id);
    },
    users: async (_, args, { rdb }) => await rdb.User.findAll(),
  },
};

export default userResolver;
