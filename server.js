const express = require("express")
const moment = require('moment')
const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.status(200).send(req.header('user-agent'))
    })

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
