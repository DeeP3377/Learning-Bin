const mongoose = require('mongoose');

const math11DataSchema = new mongoose.Schema({
    ChapterNo : {
        type : Number,
        //required : true
    },
    ChapterName:{
        type:String
        //required : true
    },
    TopicName:{
        type: [String]
        //value: [String],
        //required : true
    },
    Content:{
        type: [String]
        //value: [String],
        //required : true
    },
    Diagram:{
        type: [String]
        //required : true
    },
    Summary : {
        type : [String]
        //value: [String]
    }
})
const math11Data = new mongoose.model("Math11Data", math11DataSchema);
module.exports = math11Data;