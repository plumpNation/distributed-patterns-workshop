const nano = require('nanomsg')
const rep = nano.socket('rep')

rep.connect('tcp://127.0.0.1:7789')
rep.on('data', function (data) {
  console.log(String(data))
})
