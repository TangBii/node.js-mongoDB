var fs = require('fs')

// 创建流
var ws = fs.createWriteStream('./hello', {flags:'a'})

// 写入
ws.once('open',function () {
  ws.write('1')
  ws.write('2')
  ws.write('3')
  ws.write('hello_world')
  ws.end()
})

ws.once('close',function () {
  console.log('写入成功')
})

