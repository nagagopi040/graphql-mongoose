import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull } from 'graphql'
import User from '../../models/user'

const users = [
    { id: "116607", firstName: "Naga Gopi", lastName: "N", username: "nagagopi040", email: "gopi@gmail.com", class:"class-9A", role: "student" }
]

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () =>({
        id: { type : GraphQLString },
        firstName: { type : GraphQLString },
        lastName: { type : GraphQLString },
        username: { type : GraphQLString },
        email: { type : GraphQLString },
        class: { type : GraphQLString },
        role: { type : GraphQLString }
    })
})

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser:{
            type: UserType,
            args: {
                id: { type : new GraphQLNonNull(GraphQLString) },
                firstName: { type : new GraphQLNonNull(GraphQLString) },
                lastName: { type : new GraphQLNonNull(GraphQLString) },
                username: { type : new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) },
                email: { type : new GraphQLNonNull(GraphQLString) },
                class: { type : new GraphQLNonNull(GraphQLString) },
                role: { type : new GraphQLNonNull(GraphQLString) }
            },
            resolve(parentValue, args){
                return User.create(args)
            }
        },
        updateUser: {
            type: UserType,
            args: {
                id: { type : new GraphQLNonNull(GraphQLString) },
                firstName: { type : GraphQLString },
                lastName: { type : GraphQLString },
                username: { type : GraphQLString },
                email: { type : GraphQLString },
                class: { type : GraphQLString },
                role: { type : GraphQLString }
            },
            resolve(parentValue, args){
                return User.findOneAndUpdate({ id: args.id }, input,{ new: true })
            }
        },
        deleteUser: {
            type: UserType,
            args: {
                id: { type : new GraphQLNonNull(GraphQLString) },
            },
            resolve(parentValue, { id }){
                return User.deleteOne({ id : id })
            }
        }
    }
})

const UsersQuery = new GraphQLObjectType({
    name: 'UsersQueryType',
    fields: () => ({
        getUser: {
            type: UserType,
            args: {
                id: { type: GraphQLString }
            },
            resolve(parentValue, { id }){
                return User.findOne({id:id})
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parentValue, args){
                return User.find();
            }
        }
    })
})

module.exports = new GraphQLSchema({
    query: UsersQuery,
    mutation: mutation
})