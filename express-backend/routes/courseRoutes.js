const express = require("express");
const route = express.Router();
const Course = require("../models/course");
const courseController = require("../controllers/courseController")

route.post("/create", (req,res,next) => {
    let newCourse = new Course(
        {
            title : "Row your boat",
            date : "2020-07-13",
            description : "Just row your boat okay!!!",
            duration : 60,
            participant : []
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

route.get("/singleCourse", courseController.oneCourse)

module.exports = route;