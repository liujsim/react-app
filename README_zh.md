#create-react-app 实践

### 获取 webpack 配置

Create React App 默认使用  react-scripts 封装了 webpack 相关配置

执行下列命令，会将封装的 webpack 配置全部反编译到当前项目
```
npm run eject
```
你会看到根目录下多了 config 文件夹

### 添加路由

```
npm install -S react-router-dom
```

### 添加 postcss-cssnext 支持

默认支持 postcss 的 autoprefix ，但是不支持 css-next

```
npm install postcss-nested
```
