import { 
  Application
} from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import ProgressBar from "https://deno.land/x/progressbar/progressbar.ts";
import { percentageWidget, amountWidget } from "https://deno.land/x/progressbar/widgets.ts";
import { router } from "../../../../routes/web.ts";

/**
 * Denovel - A Deno Framework for Web Artisan
 *
 * @package  Denovel
 * @author   Muhammad Fauzan <developerfauzan@asraja.com>
 */

/* init application */

const app = new Application();

/**
 * Get the response time of the application
 * 
 * @return {Promise<void>} 
 */

app.use(async (ctx, next): Promise<void> => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`[${ctx.request.method}] ${ctx.request.url} - ${rt}`);
});

/**
 * Set the response time of the application
 * 
 * @return {Promise<void>} 
 */

app.use(async (ctx, next): Promise<void> => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

/**
 * Progress Bar
 * 
 * @return {Promise} 
 */

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const widgets = [percentageWidget, amountWidget];
const pb = new ProgressBar({ total: 200, widgets });

for (let i = 0; i < 30; i++) {
  await pb.update(i);
  await sleep(100);
}

/**
 * Router Plugin
 * 
 * 
 */

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

app.use((ctx) => {
  ctx.throw(404);
});

app.use(async (ctx) => {
  const result = await ctx.request.body({
    contentTypes: {
      raw: ["text"],
      text: ["application/javascript"],
    },
  });
});

export default app;

await pb.finish();