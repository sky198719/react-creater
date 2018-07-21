const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  // 打包正式环境
  mode: 'development',
  // 配置多页面入口的接入js文件
  entry: {
    index: './src/mods/index/index.js',
    list: './src/mods/list/index.js',
    form: './src/mods/form/index.js'
  },
  // 输出规则
  output: {
    path: __dirname + "/dist/",
    filename: 'static/js/[name]-[hash].js'
  },
  // 编译
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
  // 配置多入口
  plugins: [
    new HtmlWebpackPlugin({
      filename: __dirname + '/dist/index.html',
      template: __dirname + '/src/template/index/index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({  
      filename: __dirname + '/dist/list.html',
      template: __dirname + '/src/template/list/index.html',
      chunks: ['list'],
    }),
    new HtmlWebpackPlugin({  
      filename: __dirname + '/dist/form.html',
      template: __dirname + '/src/template/form/index.html',
      chunks: ['form'],
    }),
    // 打包
    new CleanWebpackPlugin(
      ['dist'],
      {
        root: __dirname,
        exclude:['json'],
        verbose: true,
        dry: false
      }
    )  
  ],
  // 本地服务
  devServer: {  
    contentBase: "./dist/",  
    historyApiFallback: true,  
    inline: true,  
    hot: true,  
  }
}