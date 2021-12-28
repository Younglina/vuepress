---
title: vuepress配置自动部署
author: Younglina
date: '2021-12-10'
categories:
 - 文档
tags:
 - 记录
 - vuepress
---
## 搭建一个简单的 VuePress 文档
### 1.创建并进入一个新目录

```javascript
mkdir vuepress-starter
cd vuepress-starter
```
### 2.使用你喜欢的包管理器进行初始化

```javascript
yarn init
```
### 3.VuePress 安装为本地依赖

```javascript
yarn add -D vuepress
```
### 4.创建你的第一篇文档

```javascript
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

### 5.在 package.json 中添加一些 scripts

```javascript
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

### 6.在本地启动服务器

```javascript
yarn docs:dev
```
## 基本目录结构
::: tip
├── docs  
│   ├── .vuepress  
│   │   ├── public (放静态文件)  
│   │   ├── config.js (配置)  
│   ├── README.md（首页）  
│   └── somemd.md（自己的md）  
:::

## 配置live2d
```javascript
yarn add @vuepress-reco/vuepress-plugin-kan-ban-niang
// .vuepress/config.js
plugins: [
    [
        "@vuepress-reco/vuepress-plugin-kan-ban-niang", //live2d
        {
        theme: ["blackCat", "whiteCat"],
        clean: true,
        },
    ],
],
```
## 自动发布gh-pages
### 1.在github新建一个仓库 younglinaBlog(自定义)
### 2.在vuepress项目根目录新建deploy.sh
```bash
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 拷贝目录和文件
cp -r ../../../.github ./

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Younglina/younglinaBlog.git master:gh-pages

cd -
```
### 3.发布
```javascript
//mac环境直接运行，window环境使用gitbash
sh deploy.sh
```

## 同步提交gitee
### 1.在gitee中导入github仓库
