说明文档

启动本地服务
npm run server

本地打包
npm run build

版本
react16
webpack4

语法环境
babel less

入口位置
src/index.js

核心路径说明
src/css 公用css文件

src/js 公用js文件
src/js/action 组件对应action存放位置，单个组件对应的action单独开文件夹
src/js/reducer 组件对应reducer存放位置，单个组件对应的reducer单独开文件夹
src/js/reducer/index.js reducer的combine输出，store的依赖入口文件，一般有多少个reducer在combine里面就注入多少个
src/js/store 顶层store封装，一般不需要变动

src/mods 所有应用组件位置，单页应用单独开文件夹，webpack.config.js配置入口位置和模版，原则上视图层和接入层完全分离，视图层处理业务逻辑，单独存放在views文件夹内，views内每个文件夹都是一个当前页面的组件，与views文件夹平级的index.js作为接入文件，进行视图渲染、数据接收

src/mui 所有公用组件位置，单个组件单独开文件夹，公用组件理论上不会单独去渲染页面，不需要接入文件

src/template 所有html模板位置

原则上不发生组件内参数事件传递的场景不再使用redux进行状态分发，异步请求通过axios在组件内单独处理