const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  
const ExtractTextPlugin = require("extract-text-webpack-plugin");  
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/mods/index/index.js',
    list: './src/mods/list/index.js',
    form: './src/mods/form/index.js'
  },
  output: {
    path: __dirname + "/dist/",
    filename: 'static/js/[name]-[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' }, 
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({  
      filename: __dirname + '/dist/index.html',  
      template: __dirname + "/src/template/index/index.html",  
      chunks: ['index'],  
    }),  
    new HtmlWebpackPlugin({  
      filename: __dirname + '/dist/list.html',  
      template: __dirname + "/src/template/list/index.html",  
      chunks: ['list'],
    }),  
    new HtmlWebpackPlugin({  
      filename: __dirname + '/dist/form.html',  
      template: __dirname + "/src/template/form/index.html",  
      chunks: ['form'],
    }), 
    new CleanWebpackPlugin(  
      ['dist/*', 'dist/*',],
      {  
        root: __dirname, 
        verbose: true,  
        dry: false
      }  
    )  
  ],
  devServer: {  
    contentBase: "./dist/",  
    historyApiFallback: true,  
    inline: true,  
    hot: true,  
  }
}