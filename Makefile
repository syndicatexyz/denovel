
server: 
	deno run -A --unstable server.ts

server-include: 
	deno run -A --unstable server.ts --p=$(or $(port),$(p))