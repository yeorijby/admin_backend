import mongoose from "mongoose";
//import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
//loadType(mongoose);

// 회비 
const membersSchema = new Schema({
    _id  : {
        type : String,
        require : true,
    },  
    name  : {
        type : String,
        require : true,
    },
    email  : {
        type : String,
        require : false,
    },
    address  : {
        type : String,
        require : true,
    },
    phone1  : {
        type : String,
        require : true,
    },
    phone2  : {
        type : String,
        require : false,
    },
    classKind  : {
        type : String,
        require : true,
    },
    dueDate  : {
        type : Number,
        require : true,
    },
});


const Members = mongoose.model('Members', membersSchema);

export default Members;