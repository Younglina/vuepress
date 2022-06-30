#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 获取leetcode
npm run ac_record

# 生成静态文件
npm run build

git add ./docs/.vuepress/leetcode-heatmap/lcData.json
git commit -m "get ac record"
git push

# 进入生成的文件夹
cd docs/.vuepress/dist

# 拷贝目录和文件
cp -r ../../../.github ./
cp -r ../../../CNAME ./

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Younglina/Younglina.github.io.git master:gh-pages

cd -
