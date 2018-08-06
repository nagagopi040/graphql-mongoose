import {makeExecutableSchema} from 'graphql-tools'
import {resolvers} from './resolvers'

const typeDefs = `
    type Employee {
        _id: ID
        name: String!
        age: Int
    }

    type Query {
        hello(msg: String!): String!
        Employees: [Employee]
    }

    input EmployeeInput{
        name: String!
        age: Int!
    }

    type Mutation {
        createEmployee(input: EmployeeInput): Employee
    }
`

export default makeExecutableSchema({
    typeDefs,
    resolvers
})