import mongoose from "mongoose";
const contactSchema = mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true
    },
    phone: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    address: {
        type: String
    },
    email:{
        type: String,
        trim: true,
        required: true,
    },
    category: {
        type: String,
        default: false,
        enum: ["Doctors", "Family", "Friends","Work"]
    }
   }, 
   {
    timestamps: true
   }
)

const Contact = mongoose.model("Contact", contactSchema)

export default Contact; 