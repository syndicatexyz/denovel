import { Route,router } from "../vendor/Denovel/Support/Facades/Route.ts";
import { RouterContext } from "../vendor/Denovel/Support/Facades/Request.ts";

Route.get('/','HomeController@get');

Route.get('/about',() => {
	return "About";
});

Route.get('/denovel',(Context: RouterContext) => {
	Context.response.body = "Yes, This Is Denovel!";
});

Route.get('/async',async () => {
	return "Async Function";
});

Route.group({
	prefix: 'user'
},() => {
	Route.get('/detail',() => {
		return "Test";
	});
});

export { router }