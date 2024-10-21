const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trackSchema = new Schema({
    title:{
        type:String,
        require:true,
    },
    audioUrl:{
        type:String,
        require:true,
    },
    duration:{
        type:String,
        require:true,
    }

});


const programSchema = new Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    image_url:{
        type:String,
        require:true,
    },
    tracks:[trackSchema]
});

module.exports = mongoose.model("Program",programSchema);