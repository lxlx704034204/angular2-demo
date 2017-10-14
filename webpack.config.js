module.exports = {
  entry: './main.ts', //主入口文件

  output: {
    filename: './bundle.js' 
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  }
};
