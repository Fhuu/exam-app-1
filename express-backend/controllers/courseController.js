"use strict";

const course = require("../models/course");

exports.showAll = (req,res,next) => {
    course.find({}, (err, savedDoc) => {
        res.json({
            courses : savedDoc
    })  
})}

//#region index_draft
exports.oneCourse = (req,res,next) => {
    let courseTitle = req.body.title;
    course.findOne({title : courseTitle}, (err, foundDocs) => {
        res.json(
            {
                title : foundDocs.title,
                date : foundDocs.date,
                description : foundDocs.description,
                duration : foundDocs.duration,
                participant : foundDocs.participant
            }
        );  
    })
}
