const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const logger = require('./middlewares/log-middleware')
const auth = require('./middlewares/auth')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(logger.logger)
app.use(auth.auth)

app.post('/createNote', (req, res) => {
    db
        .createNote({
            name: req.body.name,
            description: req.body.description
        })
        .then(() => res.sendStatus(200))
})

app.get('/getNotes', (req, res) => {
    db
        .getNotes()
        .then((data) => res.send(JSON.stringify(data)))
})

app.listen(7555, () => {
    console.log('Server running on http://localhost:7555')
})