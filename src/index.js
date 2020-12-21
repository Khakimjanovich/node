const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT_FOR_ECOMMERCE || 3003;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/files', express.static("files"));
app.use(morgan('dev'));
app.get('/', (req, res) => {
    res.json({
        message: 'Arise MERN developers'
    });
});

require("./config/mongoose.js")(app);
require('./app/routerHandler')(app)

app.listen(port, () => {
    console.log(`Application is running on ${port}`);
});