import { combineResolvers } from 'graphql-resolvers'
import { isAuthenticated } from './auth'

export default {
  Query: {
    allBoats: (parent, args, { models }) =>
      models.Boat.findAll()
  },

  Mutation: {
    createBoat: combineResolvers(isAuthenticated, (parent, { title, description }, { models, userId }) => 
      models.Boat.create({ title, description, userId})
    )
  }
}