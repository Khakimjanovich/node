require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const morgan = require('morgan');

const app = express();

require("./config/mongoose.js")(app);

app.use(morgan('dev'));
// app.use(cors());
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.json({
        message: 'Arise MERN developers'
    });
});

const port = process.env.PORT_FOR_ECOMMERCE;
app.listen(port, () => {
    console.log(`Application is running on ${port}`);
});