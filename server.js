const express = require("express")
const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.status(200).send("Request ok.")
    })

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
