import mongoose from "mongoose";
const AuthSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},
    { timestamps: true }

);

export default mongoose.model("Auth", AuthSchema)