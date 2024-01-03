import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true  // remove whitespaces
    },
    email: {
        type: String,
        required: true,
        unique: true  // only one user can access from one email id
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: {},
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        default: 0,
    },
    registrationDate: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true })
// timestamp : whenever new user will create then new createc time will be added
export default mongoose.model('users', userSchema)