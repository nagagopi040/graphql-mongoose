import {makeExecutableSchema} from 'graphql-tools'
import {resolvers} from '../resolvers/employeesResolvers'

const typeDefs = `
    type Employee {
        _id: ID
        name: String!
        age: Int
    }

    type Query {
        getEmployee(_id: ID!): Employee
        Employees: [Employee]
    }

    input EmployeeInput{
        name: String!
        age: Int!
    }

    type Mutation {
        updateEmployee(_id:ID!, input: EmployeeInput): Employee
        deleteEmployee(_id:ID!): Employee
        createEmployee(input: EmployeeInput): Employee
    }
`

export default makeExecutableSchema({
    typeDefs,
    resolvers
})