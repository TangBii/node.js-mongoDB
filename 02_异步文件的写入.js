var fs = require('fs')

// 打开
fs.open('./hello','w',function (err, fd) {
  if(!err){
    fs.write(fd,'世界_welcome',function (err) {
      if(err){
        console.log('写入错误', err)
      }
      else {
        fs.close(fd,function (err) {
          if(err){
            console.log('关闭错误', err)
          }
          else {
            console.log('写入成功')
          }
        })
      }
    })
  }
  else {
    console.log('打开错误', err)
  }
})