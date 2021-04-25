const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

//Graphql schema
const schema = buildSchema(`
    type Query {
        message: String
    }
`);

//root resolver
const root = {
    message: () => 'Hello World!'
};

// Create an express server and a GraphQL endpoint
const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

// Start server
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));