const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const config = require("./config")

console.log("config: "+JSON.stringify(config))

const passport = require('passport')
const User = require('./models/user')
const helmet = require('helmet')
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'"],
        upgradeInsecureRequests: true
    }
}))

passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

const authenticationProxy = require('./proxies/authenticationProxy')
authenticationProxy.defineProxy(app)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

// const morgan = require('morgan')
// app.use(morgan(':method :url :status * :response-time ms'))

const router = require('./routes/index')
const courseRoutes = require("./routes/courseRoutes");
app.use('/', router)
app.use('/course', courseRoutes);
module.exports = app