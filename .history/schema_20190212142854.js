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

  type AuthenticatedUser {
    token: String!
    user: User!
  }

  type Mutation {
    registerUser(firstName: String!, lastName: String!, email: String!, passwordHash: String!): User

    loginUser(email: String!, passwordHash: String!): AuthenticatedUser

    updateUser(id: Int!, firstName: String, lastName: String, email: String, passwordHash: String): [Int!]

    deleteUser(id: Int!): Int!
  }
`