var config = require("../build/webpack.base.conf");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var compiler = webpack(config);
var server = new WebpackDevServer({ open: true, port: "8081" }, compiler);

server.startCallback(() => {
  console.log("Successfully started server on http://localhost:8081");
});
