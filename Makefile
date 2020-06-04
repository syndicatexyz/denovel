
server: 
	deno run -A --unstable server.ts

server-with: 
	deno run -A --unstable server.ts --p=$(or $(port),$(p))