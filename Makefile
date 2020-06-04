
server: 
	deno run -A --unstable server.ts

server-with: 
	deno run -A --unstable server.ts --p $(or $(port),$(p))

controller:
	deno run -A --unstable denomand.ts --name $(or $(n),$(name))