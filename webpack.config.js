const path = require ('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: 'js/main.bundle.js',
      },
      resolve: {
        modules: [
            path.join(__dirname, 'node_modules')
        ],
      },
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader",
                "sass-loader",
            ],
          },
        ],
      },
      plugins: [new MiniCssExtractPlugin({filename: 'css/[name].css'})]
  };