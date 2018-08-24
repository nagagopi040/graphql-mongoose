import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
    id:{
        type: String,
    },
    firstName:{
        type: String,
        required: true
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
    }    
})

export default mongoose.model('user', UserSchema)