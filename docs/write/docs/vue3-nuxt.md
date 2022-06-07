---
date: '2020-06-07'
title: 一些知识
author: Younglina
categories:
 - 文档
tags:
 - 记录
---

### scss配置

```bash
npm install sass -D
```

在assets目录下创建scss目录，scss中新建variables.scss文件，在文件中写入如下内容：
```scss
@mixin line-overflow {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```
全局导入variables.scss文件，配置vite.cofig.ts，[官网配置](https://vitejs.cn/config/#css-preprocessoroptions)  

```js
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/variables.scss";`
      }
    }
  }
})
```
即可随处引用scss中的变量，如：
```scss
.text {
  @include line-overflow;
  width: 50px;
}
```
