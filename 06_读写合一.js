var fs = require('fs')

var rs = fs.createReadStream('./hello.txt')
var ws = fs.createWriteStream('./hello1.txt')
// rs.pipe(ws)

rs.on('data',function (data) {
  ws.write(data)
})

rs.once('close',function () {
  ws.end()
})

ws.on("close", function () {
  console.log('写入完成')
})