const express = require('express')
const config = require('config')
const helmet = require('helmet')
const morgan = require('morgan')
const startupDebugger = require('debug')('app:startup')
const dbDebugger = require('debug')('app:db')
const logger = require('./middleware/logger')
const authentication = require('./middleware/authentication')
const courses = require('./routes/courses')
const home = require('./routes/home')
const app = express()
app.set('view Engine', 'pug')
app.set('views','./views')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(helmet())
app.use(logger)
app.use(authentication)
app.use('/api/courses', courses)
app.use('/', home)

//Configuration
console.log('Application Name: ' + config.get('name') )
console.log('Mail Server: ' + config.get('mail.host') )
console.log('Mail Password: ' + config.get('mail.password') )

if(app.get('env') === 'development') {
    app.use(morgan('tiny'))
    startupDebugger('Morgan enabled...')
}

dbDebugger('Connected to the database...')

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))