---
title: sublime-text3集成Markdown编辑器
date: 2019-02-26 13:58:29
tags: [sublime,markdown]
categories: [sublime,markdown]
---
## Sublime插件安装方法
1. 组合键<kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>P</kbd>
2. 输入`Package Control: Install Package`，回车
3. 在搜索框中输入要安装的包名（一个一个，不能同时安多个）
4. 几秒后可安装成功

## 编辑插件 Markdown Editing
[Github: Markdown Editing](https://github.com/SublimeText-Markdown/MarkdownEditing)

在`首选项->Package Setting->Markdown Editing`可以切换theme和修改主题的配置，我的配置
``` cpp
"color_scheme": "Packages/MarkdownEditing/MarkdownEditor-Dark.tmTheme", // 修改风格的主题,我这里是sublime的boxy主题自带的,默认有这几种主题
"highlight_line": true, // 高亮正在编辑的行
"line_numbers": true,   // 显示行号
"tab_size": 4,          // tab宽度
"translate_tabs_to_spaces": true,   // tab转换为空格
"trim_trailing_white_space_on_save": true,  // 保存时去掉行尾空格
"word_wrap": true,      // 自动换行
"wrap_width": 280,    // 换行的宽度,默认80会造成左侧大量留白
"mde.keep_centered": true,  // 可以保持你正在编辑的行始终处于屏幕的中间
```

## 表格格式化插件 Table Editor
[Github: Table Editor](https://github.com/vkocubinsky/SublimeTableEditor)
Table Editor 用于在文档中快速创建整齐好看的表格。

### 激活 & 关闭
1. 组合键<kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>P</kbd>
2. 输入`Table Editor`，回车
3. 选择`Enable for current syntax`（激活）或 `Disable for current syntax` （关闭）


## 预览插件 MarkdownPreview

1. 组合键 <kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>P</kbd>
2. 输入mdp找到并选中Markdown Preview： Preview in Browser
3. 出现两个选项：github和markdown。任选其一即可，github是利用GitHub的在线API来解析.md文件，支持在线资源的预览，如在线图片它的解析速度取决于你的联网速度。该方式据说一天只能打开60次。markdown就是传统的本地打开，不支持在线资源的预览。
4. 默认浏览器中显示预览结果
