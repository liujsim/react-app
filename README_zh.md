#create-react-app 实践

### 获取 webpack 配置

Create React App 默认使用  react-scripts 封装了 webpack 相关配置

执行下列命令，会将封装的 webpack 配置全部反编译到当前项目
```
npm run eject
```
你会看到根目录下多了 config 文件夹

[如何扩展 Create React App 的 Webpack 配置](http://zhaozhiming.github.io/blog/2018/01/08/create-react-app-override-webpack-config/)

### 添加路由

```
npm install -S react-router-dom
```

### 添加 postcss-cssnext 支持

默认支持 postcss 的 autoprefix ，但是不支持 css-next

```
npm install postcss-nested -D
```
[Using nested CSS with PostCSS in “create-react-app”](https://medium.com/@paritosh_pundir/using-nested-css-with-postcss-in-create-react-app-b8424f1317f2)

修改 webpack.config.dev.js 配置

```
   plugins: () => [
      require('postcss-nested'),  // add
      require('postcss-cssnext'), // add 
      require('postcss-flexbugs-fixes'),
```

### 配置 px2rem

```
npm install postcss-px2rem postcss-loader --S
```
修改 webpack.config.dev.js 配置
```
{
  loader: require.resolve('postcss-loader'),
  options: {
    // Necessary for external CSS imports to work
    // https://github.com/facebookincubator/create-react-app/issues/2677
    ident: 'postcss',
    plugins: () => [
      require('postcss-flexbugs-fixes'),
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ],
        flexbox: 'no-2009',
      }),
      //这个位置
        px2rem({remUnit: 75})
    ],
  },
},
```

### 添加 axios
