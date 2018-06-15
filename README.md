安装webpack webpack-cli
npm install -g webpack webpack-cli
npm install -D webpack webpack-cli

安装react react-dom
npm install -D react react-dom

安装路由解析
npm install -D react-router react-router-dom react-router-native

安装本地服务
npm install -D webpack-dev-server

安装es6语法编译器
npm install -D "babel-loader@^8.0.0-beta" @babel/core @babel/preset-react @babel/plugin-proposal-class-properties

安装图片翻译器
npm install -D file-loader

安装less语法编译器
npm install -D css-loader style-loader less less-loader

npm install -D webpack webpack-cli react react-dom react-router react-router-dom react-router-native webpack-dev-server "babel-loader@^8.0.0-beta" @babel/core @babel/preset-react @babel/plugin-proposal-class-properties file-loader css-loader style-loader less less-loader

入口文件
src/index.js

输出目录
dist

启动本地服务
npx webpack-dev-server

本地打包
npx webpack --mode production