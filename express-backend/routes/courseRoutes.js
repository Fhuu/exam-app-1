const express = require("express");
const route = express.Router();
const Course = require("../models/course");
const courseController = require("../controllers/courseController")

route.post("/create", (req,res,next) => {
    let newCourse = new Course(
        {
            title : req.body.title,
            date : req.body.date,
            description : req.body.description,
            duration : req.body.duration,
            participant : req.body.participant
        }
    ); 
    
    newCourse.save((err,savedDoc) => {
        if(err) throw err;
        console.log(savedDoc);
        res.send({status : "ok"})
    })
})

route.get("/render", (req,res,next) => {
    res.render("prompt");
})

route.get("/courses", courseController.showAll)

route.post("/singleCourse", courseController.oneCourse)

module.exports = route;