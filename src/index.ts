import Koa from 'koa';
import KoaRouter from 'koa-router';
import json from 'koa-json';
import { connectMongoDb } from './utils/mongodb/node-mongo-wrapper';

const app = new Koa();
const router = new KoaRouter();

app.use(json());
connectMongoDb();

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log('Server Started..'));

router.get('/test', (ctx) => (ctx.body = 'Sample test route'));
