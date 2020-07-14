"use strict";

const course = require("../models/course");

exports.showAll = (req,res,next) => {
    Course.find({}, (err, savedDoc) => {
        res.json({
            courses : savedDoc
    })  
})}

exports.oneCourse = (req,res,next) => {
    let courseTitle = "Row your boat";
    course.find({title : courseTitle}, (err, foundDocs) => {
        res.json(foundDocs);
    })
}
