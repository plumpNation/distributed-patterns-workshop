const fs       = require('fs');
const assert   = require('assert');
const protobuf = require('protocol-buffers');

const messages = protobuf(`
  message User {
    string name = 1;
    float age = 2;
  }
`);

const argv = process.argv.slice(2);

assert.equal(argv.length, 2, 'need name and age 2 params fucker')

let buf = messages.User.encode({
    name: argv[0],
    age: argv[1]
});

const ws = fs.createWriteStream('user.message');
ws.end(buf);
