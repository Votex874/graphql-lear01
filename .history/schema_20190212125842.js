export default `
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    passwordHash: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query{
    allUsers: [User!]!
    getUser(id: Int!): User
  }
  
  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!, passwordHash: String!): User
    
    updateUser(id: Int!, firstName: String, lastName: String, email: String, passwordHash: String): [Int!]

    deleteUser(id: Int!): Int!
  }
`