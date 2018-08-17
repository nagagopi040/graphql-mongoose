import Employee from '../models/employee'

export const resolvers = {
    Query: {
        async Employees() {
            return await Employee.find();
        },
        async getEmployee(_,{ _id }){
            return await Employee.findById(_id)
        }
    },
    Mutation: {
        async createEmployee(_,{ input }){
            return await Employee.create(input)
        },
        async updateEmployee(_,{ _id,input }){
            return await Employee.findOneAndUpdate({ _id }, input,{ new: true })
        },
        async deleteEmployee(_,{ _id }){
            return await Employee.findByIdAndRemove(_id)
        }
    }
}