const nano = require('nanomsg');
const pub = nano.socket('pub');
const addr = 'tcp://127.0.0.1:7789';

pub.bind(addr);

let n = 1;

let interval = setInterval(function () {
    if (n === 101) {
      clearInterval(interval);
      return;
    }

    pub.send(n++)
}, 100)
