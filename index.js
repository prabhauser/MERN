const Koa = require('koa');
const Koarouter = require('koa-router');
const json = require('koa-json');
const path = require('path');
const render = require('koa-ejs');

const app = new Koa();
const router = new Koarouter();

//Json Prettier Middleware
app.use(json());

//Simple Middleware example
//app.use(async (ctx) => (ctx.body = { msg: 'Hello World' }));

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'layout',
  viewExt: 'html',
  cache: false,
  debug: false,
});

//Router Middleware
app.use(router.routes()).use(router.allowedMethods());

router.get('/test', (ctx) => ctx.render('test', { title: 'My sample route' }));

router.get('/', async (ctx) => {
  await ctx.render('index');
});

app.listen(3000, () => console.log('Server Started..'));
