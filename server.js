require('dotenv').config()
const express = require('express')
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const app = express()
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('express-flash')
const passport = require('passport')
const MongoDbStore = require('connect-mongo')(session)
const PORT = process.env.PORT || 3000

const route = require('./routes/web.js');
const passportInit = require('./app/config/passport');

// Database connection
const url = 'mongodb://localhost/jawdrop'
mongoose.connect(url, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true})
const connection = mongoose.connection
connection.once('open', () => {
	console.log('Database connected...');
}).catch(err => {
	console.log('Connection failed...');
})

// Session Store
const mongoStore = new MongoDbStore({
	mongooseConnection: connection,
	collection: 'sessions'
})

// Session Config
app.use(session({
	secret: process.env.COOKIE_SECRET,
	resave: false,
	saveUninitialized: false,
	store: mongoStore,
	cookie: {maxAge: 1000 * 60 * 60 * 24 }	
}))
app.use(flash())

// Passport config
passportInit(passport)
app.use(passport.initialize())
app.use(passport.session())

// Assets
app.use(express.static('public'))

app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Global middleware
app.use((req, res, next) => {
	res.locals.session = req.session
	res.locals.user = req.user
	next()
})

//set template engine
app.use(expressLayout)
app.set('views', path.join(__dirname,'/resources/views'))
app.set('view engine', 'ejs')

route(app);

app.listen(PORT, () => {
	console.log("Listening on port: " + PORT)
})
