# migu

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## 外部库

+ angular-ui-router,angular-cookie,restangular(依赖lodash),angular-ui-bootstrap(日期控件),mobile-angular-ui
+ angular-ui 是一个大库,可以只使用里面需要的部分

```
//查看对应的 README.md
//https://github.com/angular-ui/ui-router/wiki
bower install angular-ui-router --save

//cookie使用的库 angular-cookie, 还有个带有s的,查看README.md
//https://github.com/ivpusic/angular-cookie
bower install angular-cookie --save

//替代原生的http请求, 依赖lodash库
//https://github.com/mgonto/restangular
bower install lodash --save
bower install restangular --save

// angular-ui 的项目地址,介绍网站进不去
//https://github.com/angular-ui
//不能用npm安装,用的包不一样
bower install angular-bootstrap --save 这个库不能真常显示日期控件,要用下面的
bower uninstall angular-bootstrap --save
bower install angular-ui-bootstrap --save
新安装的库一定要在app.js里面添加对应的依赖 在数组里面
angular-bootstrap版本一定要下对,不然默认最新的版本是用不了的,默认是 "~1.1.2"
在bower.json里面加上下面这句 
"angular-bootstrap": "~0.12.1"
或者下载时直接指定版本号
bower install angular-bootstrap#0.12.1 --save
```
