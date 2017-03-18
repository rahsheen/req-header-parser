const express = require("express")
const app = express();
const p = require('ua-parser');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    const lang = req.headers["accept-language"].split(',')[0]+"";
    const userAgent = req.headers['user-agent'];

    var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
     ip = ip.split(',')[0];
     ip = ip.split(':').slice(-1)[0];

    res.status(200).send({
        "IP": ip,
        "lang":  lang,
        "OS": p.parseOS(userAgent).toString()
    })
})
.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
