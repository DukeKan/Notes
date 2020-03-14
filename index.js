const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(express.static('public'))
app.use(bodyParser.json())
app.post('/createNote', (req, res) => {
    res.sendStatus(200)
})

app.listen(7555, () => {
    console.log('Server running on http://localhost:7555')
})