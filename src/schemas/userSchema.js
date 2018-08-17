import {makeExecutableSchema} from 'graphql-tools'
import {resolvers} from '../resolvers/usersResolevrs'

const typeDefs = `
    type User {
        id: String!
        firstName: String!
        lastName: String!
        username:  String!
        email: String!
        class: String!
    }

    type Query {
        getUser(id: ID!): User
        Users: [User]
    }

    input UserInput{
        id: String!
        firstName: String!
        lastName: String!
        username:  String!
        password: String!
        email: String!
        class: String!
    }

    type Mutation {
        updateUser(id: ID!, input: UserInput): User
        deleteUser(id: ID!): User
        createUser(input: UserInput): User
    }
`

export default makeExecutableSchema({
    typeDefs,
    resolvers
})