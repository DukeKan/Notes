const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const jwtmodule = require('./jwt')

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

app.get('/getNotes', (req, res) => {
    jwtmodule.decode('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhdXRobWljcm9zZXJ2aWNlIiwidXNlcklkIjoidGVzdCJ9.IaGKv2ZCr88Bjyg0evDF7cs6uR3887QIj-o5Mcl5LXU');

    db
        .getNotes()
        .then((data) => res.send(JSON.stringify(data)))
})

app.listen(7555, () => {
    console.log('Server running on http://localhost:7555')
})