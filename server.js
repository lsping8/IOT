const five = require('johnny-five');
const chipio = require('chip-io');
const koa = require('koa');
const app = module.exports = koa();

const board = new five.Board({
  io: new chipio()
});

board.on('ready', function() {
  // do Johnny-Five stuff

  app.use(function *() {
  console.log('hello-world')
});

if (!module.parent) app.listen(3000);

});
