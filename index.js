const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')

const app = express()
app.use(express.static('public'))
app.use(bodyParser.json())
app.post('/createNote', (req, res) => {
    db
        .createNote({
            name: req.body.name,
            description: req.body.description
        })
        .then(() => res.sendStatus(200))
})

app.listen(7555, () => {
    console.log('Server running on http://localhost:7555')
})