const mongoose = require("mongoose");
module.exports = app => {
    mongoose.connect('mongodb://127.0.0.1:3306/cart_node', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        user: 'root',
        pass: 'root'
    }).then(res => console.log("connected")).catch(err => console.log(err))
    mongoose.Promise = global.Promise;
    process.on("SIGINT", cleanup);
    process.on("SIGTERM", cleanup);
    process.on("SIGHUP", cleanup);
    if (app) {
        app.set("mongoose", mongoose);
    }
};

function cleanup() {
    mongoose.connection.close(function () {
        process.exit(0);
    });
}