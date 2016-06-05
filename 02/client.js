const nano = require('nanomsg');
const pull = nano.socket('pull');
const addr = 'tcp://127.0.0.1:7789';

pull.connect(addr);

pull.on('data', (buffer) => {
    pull.pause();
    console.log('got data');

    setTimeout(function () {
      console.log(Number(buffer));
      pull.resume();
    }, 500);
});
