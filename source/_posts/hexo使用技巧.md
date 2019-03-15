---
title: hexo使用技巧
date: 2019-03-04 13:46:22
tags: [hexo]
categories: [hexo]
---
全部技巧：
+ Hexo 博客添加文章时自动打开编辑器
+ Hexo NexT 代码块复制功能


## 1. Hexo 博客添加文章时自动打开编辑器
在博客根目录下创建一个 scripts 文件夹，放一个 events.js 文件。这样每次通过hexo new post 创建新文章就会自动用 sublime 打开了

``` javascript
var exec = require('child_process').exec;

// new 后自动打开编辑器
hexo.on('new', function (data) {
  console.log('"C:\\Program Files\\Sublime Text 3\\sublime_text.exe" ' + data.path);
  exec('"C:\\Program Files\\Sublime Text 3\\sublime_text.exe" ' + data.path);
});
```

## 2. Hexo NexT 代码块复制功能
### 下载 clipboard.js
### 地址：
- [clipboard.js](https://raw.githubusercontent.com/zenorocha/clipboard.js/master/dist/clipboard.js)
- [clipboard.min.js](https://raw.githubusercontent.com/zenorocha/clipboard.js/master/dist/clipboard.min.js)

保存文件 `clipboard.js 或者 clipboard.min.js` ，目录： `.\themes\next\source\lib\clipbaord`

### 使用clipboard
新建文件 `copy-code-shortcut.js`，保存到 `.\themes\next\source\js\src` ，
``` javascript
function changeToSuccess(item) {
    $imgOK = $(".btn-copy span:last");
    $imgCopy = $(".btn-copy span:first");

    if ($imgOK.css("display") == "none") {
        $imgCopy.css("display", "none");
        $imgOK.css({
            opacity: 0,
            display: "block"
        });
        $imgOK.animate({
            opacity: 1
        }, 1000);
        setTimeout(function() {
            $imgOK.animate({
                opacity: 0
            }, 2000);
        }, 2000);
        setTimeout(function() {
            $imgOK.css("display", "none");
            $imgCopy.css("display", "");
        }, 4000);
    };
};

!function (e, t, a) {

  /* code */
  var initCopyCode = function(){
    var copyHtml = '';
    copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
    copyHtml += '  <span><i class="fa fa-paste fa-fw"></i>复制</span>';
    copyHtml += '  <span style="display: none"><i class="fa fa-check-circle fa-fw"></i>已复制</span>';
    copyHtml += '</button>';
    $(".highlight .code pre").before(copyHtml);
    var clipboard = new ClipboardJS('.btn-copy', {
        target: function(trigger) {
            return trigger.nextElementSibling;
        }
    });
        //复制成功事件绑定
    clipboard.on('success',
        function(e) {
            changeToSuccess(e);
        });
    //复制失败绑定事件
    clipboard.on('error',
        function(e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
        });
  }

  initCopyCode();
}(window, document);
```

在 `.\themes\next\source\css\_custom\custom.styl` 样式文件中添加下面代码：
``` javascript
//代码块复制按钮
.highlight{
  //方便copy代码按钮（btn-copy）的定位
  position: relative;
}
.btn-copy {
    display: inline-block;
    cursor: pointer;
    background-color: #eee;
    background-image: linear-gradient(#fcfcfc,#eee);
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-appearance: none;
    font-size: 13px;
    font-weight: 700;
    line-height: 20px;
    color: #333;
    -webkit-transition: opacity .3s ease-in-out;
    -o-transition: opacity .3s ease-in-out;
    transition: opacity .3s ease-in-out;
    padding: 2px 6px;
    position: absolute;
    right: 5px;
    top: 5px;
    opacity: 0;
}
.btn-copy span {
    margin-left: 5px;
}
.highlight:hover .btn-copy{
  opacity: 1;
}
```

新建文件 `copy-code-shortcut.swig` ，保存到 `.\themes\next\layout\_custom`

``` javascript
<script type="text/javascript" src="/lib/clipboard/clipboard.min.js"></script>
<script type="text/javascript" src="/js/src/copy-code-shortcut.js"></script>
```

在 `.\themes\next\layout\_layout.swig` 文件中，添加引用（</body>之前添加）

```
  {% set scheme_script = '_scripts/schemes/' + theme.scheme | lower + '.swig' %}
  {% include scheme_script %}

  {% block script_extra %}{% endblock %}

  {% include '_scripts/boostrap.swig' %}

  {% include '_third-party/comments/index.swig' %}
  {% include '_third-party/search/index.swig' %}
  {% include '_third-party/analytics/lean-analytics.swig' %}
  {% include '_third-party/analytics/firestore.swig' %}
  {% include '_third-party/seo/baidu-push.swig' %}
  {% include '_third-party/needsharebutton.swig' %}
  {% include '_third-party/rating.swig' %}
  {% include '_third-party/mathjax.swig' %}
  {% include '_third-party/scroll-cookie.swig' %}
  {% include '_third-party/exturl.swig' %}

  {% include '_custom/copy-code-shortcut.swig' %} //添加这行
</body>
</html>
```