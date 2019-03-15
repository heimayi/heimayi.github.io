---
title: GitHub 上文件夹显示灰色无法点击
date: 2019-02-27 10:38:18
tags: [git]
categories: [git]
---

### 问题：github发现文件夹是灰色的,无发打开
{% asset_img 1.png %}

### 原因：文件夹中包含其他仓库 `.git` 文件
### 解决方法：
- 删除github上目录，重新提交，在提交之前需要删除其中的.git 文件
- 如果已经提交，使用下面命令处理

```
git rm -r --cached "文件夹的名称"
git commit -m "xxx"
git push
git add .
git push
```
