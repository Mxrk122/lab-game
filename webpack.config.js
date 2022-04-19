const path = require('path')
const htmlwebpackplugin = require("html-webpack-plugin")

module.exports = {
  //exporta un objeto,
  entry: "./src/index.js", //Archio de entrada
  output: {
    path: path.resolve(__dirname /*Ruta raiz*/, "dist"), //Aqui pone el archivo condensado
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },

  plugins: [
    new htmlwebpackplugin({
      template: path.join(__dirname, "./src/index.html"),
    }),
  ],

  devServer: {
    static: {
        directory: path.join(__dirname, "public")
      },
  
      compress: true,
      port: 3010, // default 8000
  },
  
};