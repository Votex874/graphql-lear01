import express from 'express'
import graphqlHTTP from 'express-graphql'
import { makeExecutableSchema } from 'graphql-tools'

import typeDefs from './schema'
import resolvers from './resolvers'
import models from './db/models'

import { getUserIdMiddleware } from './services/user'

import DataLoader from 'dataloader'

const batchUsers = async (keys, models) => {
  const users = await models.User.findAll({
    where: {
      id: {
        $in: keys,
      }
    }
  })

  return keys.map(key => usersfind(user => user.id === key))
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

const app = express()

app.use(getUserIdMiddleware) 

app.use('/graphql', graphqlHTTP( req => ({
  schema,
  context: { 
    models,
    userId: req.userId,
    loaders: {
      user: new DataLoader(keys => batchUsers(keys, models))
    }
   },
  graphiql: true,
})));
app.listen(4000)
console.log('Running a GraphQL API server at localhost:4000/graphql')