import { combineResolvers } from 'graphql-resolvers'
import { isAuthenticated } from './auth'

export default {
  Query: {
    allBoats: (parent, args, { models }) =>
      models.Boat.findAll()
  },

  Mutation: {
    createBoat: 
  }
}