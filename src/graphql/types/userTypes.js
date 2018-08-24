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

const UsersQuery = new GraphQLObjectType({
    name: 'UsersQueryType',
    fields: () => ({
        getUser: {
            type: UserType,
            args: {
                id: { type: GraphQLString }
            },
            resolve(parentValue, args){
                for(var i=0; i< users.length; i++ ){
                    if(users[i].id = args.id){
                        return users[i]
                    }
                }
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parentValue, args){
                return users;
            }
        }
    })
})

module.exports = new GraphQLSchema({
    query: UsersQuery
})