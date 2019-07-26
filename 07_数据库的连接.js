var mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/test', {useNewUrlParser: true});

mongoose.connection.once('open',function () {
  console.log('success')
})
mongoose.connection.once('close',function () {
  console.log('closed')
})


mongoose.disconnect()