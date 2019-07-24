var fs = require('fs')

// 打开
var fd = fs.openSync('./hello.txt','w')

// 写入
fs.writeSync(fd,'世界_hello')

// 关闭
fs.closeSync(fd)