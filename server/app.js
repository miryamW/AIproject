const express = require('express')
const app = express()
const cors = require('cors');
const PORT = 8000;

const apiAI = require('./apiAI');

app.use(apiAI)
app.use(cors())
// app.use(cors({ origin: '*'}));

app.listen(PORT, (error) => {
    if (!error) {
        console.log("http://localhost:8000");
    } else
        console.log("Error occurred, server can't start", error);
});
