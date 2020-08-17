const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  entry: path.join(__dirname, "/src/index.js"),
  devtool: "source-map",
  mode: "development",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
