const path = require("path");

const src = (...file) => path.join(__dirname, ...file);

module.exports = {
    entry: src("main"),
    mode: "development",
    devtool: "source-map",
    devServer: {
        overlay: true,
        hot: true,
        watchContentBase: true
    }
};
