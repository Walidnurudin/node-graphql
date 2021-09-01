const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

mongoose.connect("mongodb://127.0.0.1:27017/node-graphql", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
});

const server = new ApolloServer({typeDefs, resolvers});

server.listen()
    .then(({url}) => {
        console.log(`Server Ready At ${url}`)
    })