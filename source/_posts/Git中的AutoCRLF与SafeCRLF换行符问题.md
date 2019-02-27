---
title: Git中的AutoCRLF与SafeCRLF换行符问题
date: 2019-02-26 13:05:36
tags: [git]
categories: [git]
---

使用git add命令提交文件, 提示错误
```
$ git add .
fatal: CRLF would be replaced by LF in .gitignore.
```

因为Windows和Linux的换行符不一样，而Git默认应该是Linux的

解决方法是：
git config --global core.autocrlf input
git config --global core.safecrlf false

说明： CR回车 LF换行

|     系统    | 换行符 | 标记 |
|-------------|--------|------|
| MacOS       | CR     | \r   |
| Linux/Unix  | LF     | \n   |
| Windows/Dos | CRLF   | \r\n |

- AutoCRLF
   - 提交时转换为LF，检出时转换为CRLF
   `git config --global core.autocrlf true`

   - 提交时转换为LF，检出时不转换
   `git config --global core.autocrlf input`

   - 提交检出均不转换
   `git config --global core.autocrlf false`
- SafeCRLF
   - 拒绝提交包含混合换行符的文件
   `git config --global core.safecrlf true`

   - 允许提交包含混合换行符的文件
   `git config --global core.safecrlf false`  

   - 提交包含混合换行符的文件时给出警告
   `git config --global core.safecrlf warn`
