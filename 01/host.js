const nano = require('nanomsg')
const rep = nano.socket('rep')

rep.connect('tcp://127.0.0.1:7789')

rep.on('data', function (buffer) {
    console.log(String(buffer));
      rep.send('the real RPC?');

      setTimeout(() => rep.close(), 100);
});
