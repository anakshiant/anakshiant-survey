const HtmlWebpackPlugin = require("html-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      scriptLoading: "defer",
      template: "index.html",
    }),
    new DashboardPlugin(),
  ],
  devServer: {
    overlay: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ico$/,
        loader: "file-loader?name=[name].[ext]", // <-- retain original file name
      },
    ],
  },
};
