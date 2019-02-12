import { combineResolvers } from 'graphql-resolvers'
import { isAuthenticated } from './auth'
import * as userService from '../services/user'

export default {
  Query: {
    me: combineResolvers(isAuthenticated, (parent, args, { models, userId }) => {
      models.User.findOne({ where: { id: userId } })
    }),
    allUsers: (parent, args, { models }) => models.User.findAll(),
    getUser: (parent, { id }, { models }) =>
      models.User.findOne({ where: { id } })
  },

  Mutation: {
    registerUser: (parent, { firstName, lastName, email, passwordHash }, { models }) =>
      userService.register(firstName, lastName, email, passwordHash),

    loginUser: (parent, { email, passwordHash }, { models }) =>
      userService.login(email, passwordHash),

    updateUser: (parent, { id, firstName, email }, { models }) =>
      models.User.update({ firstName, email }, { where: { id } }),

    deleteUser: (parent, args, { models }) =>
      models.User.destroy({ where: { id: args.id } })
  },
};