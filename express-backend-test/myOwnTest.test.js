const server = require("../express-backend/server")
const request = require("supertest");
const course = require("../express-backend/models/course")

//#region simple test

const dummyCourse = {
    title : "dummy course",
    date : "2020-08-17",
    description : "dummy description",
    duration : 60,
    participant : []
};

afterAll(async () => {
    await course.deleteOne({title : dummyCourse.title},(err, result) => {
        if (err) throw err;
        console.log(result);
    });
    console.log("dummy course is deleted");
})

it("should create a course and response with status ok", async done => {
    let res = await request(server).post("/course/create")
    .type("application/json")
    .send(JSON.stringify(dummyCourse))
    expect(res.type).toBe("application/json");
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
    done();
})