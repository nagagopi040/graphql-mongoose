import User from '../models/user'

export const resolvers = {
    Query: {
        async Users() {
            return await User.find();
        },
        async getUser(_,{ id }){
            return await User.findById(id)
        }
    },
    Mutation: {
        async createUser(_,{ input }){
            return await User.create(input)
        },
        async updateUser(_,{ id,input }){
            return await User.findOneAndUpdate({ id }, input,{ new: true })
        },
        async deleteUser(_,{ id }){
            return await User.findByIdAndRemove(_id)
        }
    }
}