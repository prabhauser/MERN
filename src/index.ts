import Koa from "koa";
import KoaRouter from "koa-router";
import json from "koa-json";
import { MongoConnect } from "./utils/mongodb/node-mongo-wrapper";
import { getProduct1 } from "./controller/users";
import cors from "koa-cors";

const app = new Koa();
const router = new KoaRouter();

app.use(json());
app.use(cors());

app.use(router.routes()).use(router.allowedMethods());

router.get("/getUsers", async (ctx: any) => {
  const users = await getProduct1();
  ctx.body = users;
  ctx.status = 200;
});

MongoConnect(() => {
  app.listen(3000, () => console.log(`App listening on port ${3000}!`));
});
