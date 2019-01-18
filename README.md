# other_intermediary

> 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 项目基本搭建

## vue 项目常用依赖包整理

> npm install element-ui --save
>
> npm install vuex --save
>
> npm install axios --save
>
> npm install node-sass sass-loader --save-dev
>
>  npm install px2rem-loader --save-dev  px转换成rem单位  [参考地址](https://segmentfault.com/a/1190000015238394)
>
> 
>
> 最终
>
> npm install element-ui  axios -S
>
> npm install node-sass sass-loader -D

## element-ui

> 全局引入方式

```javascript
main.js中键入如下代码：
// 1.1引入element-ui
import ElementUI from 'element-ui';
//1.2 引入样式
import 'element-ui/lib/theme-chalk/index.css';
//1.3挂载到vue上
Vue.use(ElementUI);
```

> 按需引入方式

```javascript
//借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的
//首先，安装 babel-plugin-component：
npm install babel-plugin-component -D
//然后，将 .babelrc 修改为：
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}

//接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：
import Vue from 'vue';
import { Button, Select } from 'element-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

## vant（移动端ui框架）

> [参考地址](https://youzan.github.io/vant/#/zh-CN/quickstart)

```javascript
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.use(Vant);
```

## awesome字体引入

1. 下载awesome字体

2. 复制font-awesome.min.css到项目CSS目录中 

3. 复制FontAwesome.otf、fontawesome-webfont.eot、fontawesome-webfont.svg、fontawesome-webfont.ttf、fontawesome-webfont.woff到CSS同级的fonts目录中 

4. 在页面中引入css文件 

   ```
   <link href="../css/font-awesome.min.css" rel="stylesheet" type="text/css" />
   ```

   在style标签中增加一下代码 

   ```
   
       [class^="el-icon-fa"], [class*=" el-icon-fa"] {
   		display:inline-block;
   		font-family:"FontAwesome"!important;
   		font-style:normal;
   		font-weight:normal;
   		line-height:1;
   		-webkit-font-smoothing:antialiased;
   		-moz-osx-font-smoothing:grayscale
       };
   ```

   在页面按一下方式引用图标 

   ```	
   <el-button icon="fa fa-ban">取消</el-button>
   ```

   

