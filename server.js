const five = require('johnny-five');
const chipio = require('chip-io');
const views = require('co-views');
const koa = require('koa');
var path = require('path');
const app = new koa();

const board = new five.Board({
  io: new chipio()
});

board.on('ready', function() {
  // do Johnny-Five stuff

  const user = {
  name: {
    first: 'Tobi',
    last: 'Holowaychuk'
  },
  species: 'ferret',
  age: 3
};

  const render = views(path.join(__dirname, '/'));

  app.use(function *() {
  this.body = yield render('user', { user: user });
});

if (!module.parent) app.listen(3000);

});
