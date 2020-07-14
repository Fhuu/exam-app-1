const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    title : String,
    date : Date,
    description : String,
    duration : Number,
    participant : [String]
})

module.exports = Mongoose.model("Course", courseSchema);