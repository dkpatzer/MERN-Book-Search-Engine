const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const { User, bookSchema } = require('./models');


const resolvers = require('./resolvers');

const typeDefs = require('./typeDefs');


const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

db.once('open', () => {
  app.listen(PORT, () =>
    console.log(`🌍 Now listening on localhost:${PORT}`)
  );
});


