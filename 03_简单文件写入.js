var fs = require('fs')


// 异步
/*
fs.writeFile('./hello','hello_world',{flag:'a'},function (err) {
  if(!err){
    console.log('写入成功')

  }
  else {
    console.log('写入失败',err)
  }
})*/

// 同步
fs.writeFileSync('./hello', 'hello_world',{flag:'a'})