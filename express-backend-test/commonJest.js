process.env.NODE_ENV = 'test'
const request = require('supertest')
const app = require('../express-backend/app')

// Tests are run against an in-memory db generated by @shelf/jest-mongodb
// to run against a real db, set this environment variable:
// export MONGO_URL_USE_TEST='mongodb://localhost:27017/modulehandbook_test_db'
// (note that the DB is NOT cleaned after test runs!)
const mongodbURI = process.env.MONGO_URL_USE_TEST || process.env.MONGO_URL
console.log('READING commonJest.js with mongodbURI ' + mongodbURI)
const User = require('../express-backend/models/user')

const mongoose = require('mongoose')
beforeAll(() => {
    process.env.NODE_ENV = 'test'
    mongoose.set('bufferCommands', false)
    mongoose.connect(mongodbURI,
        { useNewUrlParser: true, useUnifiedTopology: true })
        .then(console.log('connected to mongoose: ' + mongodbURI))
        .catch(error => console.log('error creating connection to: ' + mongodbURI + error))

    mongoose.connection.on('error', err => {
        console.log(err)
    })
})

afterAll(async () => {
    await mongoose.connection.close()
    console.log('+++++ afterAll DB Close')
})

function removeID (text, id) {
    const idRegExp = new RegExp(id, 'g')
    return text.replace(idRegExp, '<replaced_mongoose_id>')
}

function removeIDs (text, ids) {
    let result = text
    ids.forEach(id => {
        const idRegExp = new RegExp(id, 'g')
        result = result.replace(idRegExp, '<replaced_mongoose_id>')
    })
    return result
}

const { randomUserData, id } = require('./helper/userData')
const all = {
    User: User,
    app: app,
    request: request,
    supertest: request,
    id: id,
    removeID: removeID,
    removeIDs: removeIDs,
    randomUserData: randomUserData,
    db: mongoose.connection
}
module.exports = {
    ...all
}
