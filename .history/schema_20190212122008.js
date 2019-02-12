export default `
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query{
    allUsers: [User!]!
  }  
`