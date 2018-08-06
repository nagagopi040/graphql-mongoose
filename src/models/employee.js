import mongoose, { Schema } from 'mongoose'

const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    }
})

export default mongoose.model('employee', EmployeeSchema)