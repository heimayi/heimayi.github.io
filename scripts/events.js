var exec = require('child_process').exec;

// new 后自动打开编辑器
hexo.on('new', function (data) {
  console.log('"C:\\Program Files\\Sublime Text 3\\sublime_text.exe" ' + data.path);
  exec('"C:\\Program Files\\Sublime Text 3\\sublime_text.exe" ' + data.path);
});