const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000

const app = express()
app.use(bodyParser.json())

app.use('/api',require('./route/routes'))


app.listen(PORT, () => {
    console.log(`server is running in port ${PORT}`);
})