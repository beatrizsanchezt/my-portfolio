module.exports = {
  use: {
      loader: "babel-loader",
      options: {
          presets: [
              "@babel/preset-env",
              "@babel/preset-react"
          ],
          plugins: [
              "@babel/plugin-syntax-dynamic-import"
          ]
      }
  }
};
