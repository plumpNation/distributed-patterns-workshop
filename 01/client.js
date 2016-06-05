const nano = require('nanomsg')
const req = nano.socket('req')

req.bind('tcp://127.0.0.1:7789')

req.on('data', (buffer) => {
  console.log(String(buffer));
  req.close();
});

setTimeout(() => req.send('is this'), 100);
