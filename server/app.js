const express = require('express')
const app = express()
const cors = require('cors');
const apiAI = require('./apiAI');
const PORT = 7000;

app.use(cors({origin:'*'}))
app.use(apiAI)
app.listen(PORT, (error) => {
    if (!error) {
        console.log("http://localhost:7000");
    } else
        console.log("Error occurred, server can't start", error);
});
