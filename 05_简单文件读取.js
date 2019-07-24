var fs = require('fs')

// 异步
/*
fs.readFile('hello.txt',function (err,data) {
  if(!err){
    console.log(data.toString())
  }
})*/

// 同步
var data = fs.readFileSync('hello.txt')
console.log(data.toString())