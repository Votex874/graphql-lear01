export default {
  Query: {
    allUsers: (parent, args, { models }) => models.User.findAll(),
    getUser: (parent, { id }, { models }) => 
      models.User.findOne({ where: { id } })
  },

  Mutation: {
    registerUser: (parent, { firstName, lastName, email, passwordHash }, { models }) => 
      models.User.create({ firstName, lastName, email, passwordHash }), 
    updateUser: (parent, { id, firstName, email }, { models }) => 
      models.User.update({ firstName, email }, { where: { id } }),
    deleteUser: (parent, args, { models }) =>
      models.User.destroy({ where: { id: args.id } })
  },
};