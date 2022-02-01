const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const bodyParser =  require('body-parser');

const app = require('./app');




var PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App listen on port : ${PORT}`);
})