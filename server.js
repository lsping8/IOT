const five = require('johnny-five');
const chipio = require('chip-io');
const koa = require('koa');
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

  const render = views(path.join(__dirname, '/'), { ext: 'html' });

  app.use(function *() {
  this.body = yield render('user', { user: user });
});

if (!module.parent) app.listen(3000);

});
