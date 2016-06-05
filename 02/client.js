const nano = require('nanomsg');
const push = nano.socket('push');
const addr = 'tcp://127.0.0.1:7789';

push.bind(addr);

let n = 1;
Array.from(new Array(100), () => push.send(n++));
