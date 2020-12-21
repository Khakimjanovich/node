const productRoutes = require("./Product/route");
const cartRoutes = require('./Cart/route')
module.exports = app => {
    app.use("/product", productRoutes);
    app.use("/cart", cartRoutes);
}