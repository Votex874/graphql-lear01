export default `
type Boat{
  id: Int!
  title: String!
  description: String!
  userId: Int!
  user: User!
}

extend type Query {
  allBoats: [Boat!]!
}

extend type Mutation {
  createBoat(title: String!, description: String!): Boat
}
`