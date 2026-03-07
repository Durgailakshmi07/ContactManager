import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
{
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    notes:{
        type:String
    },
    tags:[String]
},
{timestamps:true}
);

export default mongoose.model("Contact", contactSchema);