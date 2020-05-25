import { Route,router } from "../vendor/Denovel/Support/Facades/Route.ts";
import { RouterContext } from "../vendor/Denovel/Support/Facades/Request.ts";
import { ExampleController } from "../app/Controllers/ExampleController.ts"

const example = new ExampleController();

Route.get('/',example.get);

export { router }