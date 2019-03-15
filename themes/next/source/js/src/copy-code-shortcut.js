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