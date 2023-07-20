const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
    bookCount: Int
  }

  type Query {
    getSingleUser(id: ID, username: String): User
  }

  type Mutation {
    createUser(body: String): User
    login(username: String, email: String, password: String): User
    saveBook(user: ID, body: String): User
    deleteBook(user: ID, params: String): User
  }
`;

module.exports = typeDefs;

