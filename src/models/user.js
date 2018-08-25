import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
    id:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
    },
    lastName:{
        type: String,
    },
    email:{
        type: String,
        required: true
    },
    class:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
})

export default mongoose.model('user', UserSchema)