// dependencies
 express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const typeDefs = gql`
  type Query {
    property: String
     Define more queries here
  }

  type Mutation {
     Define mutations here
  }
`;

const resolvers = {
  Query: {
    property: () => 'string',
    // Implement more resolvers for queries
  },
  Mutation: {
    // Implement resolvers for mutations
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

db.once('open', () => {
  app.listen(PORT, () => 
    console.log(`🌍 Now listening on localhost:${PORT}`)
    );
});

