const nano = require('nanomsg');
const sub = nano.socket('sub');
const addr = 'tcp://127.0.0.1:7789';

sub.connect(addr);

sub.on('data', (buffer) => {
  console.log(Number(buffer));
});
