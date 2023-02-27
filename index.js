const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

// also define a default route to handle incoming http request
app.get('/', (req, res) => {
    res.send("Welcome to MyApp");
});

// define a route to handle incoming http request from whatsSpot
app.post('/message', (req, res) => {
    console.log("Received Message :")
    console.log(req.body);
    res.send("Message Received");
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})