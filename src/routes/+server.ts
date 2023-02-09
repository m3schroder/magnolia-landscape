import type { RequestHandler } from './$types';

export const POST: RequestHandler = async () => {

	let res = new Response();
	res.headers.set("Access-Control-Allow-Origin", "https://state.doubleshot.dev")
	res.headers.set("Access-Control-Allow", "GET, POST, PATCH, OPTIONS")
	res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization, Time-Zone")
	res.headers.set("Access-Control-Allow-Credentials", "true")
	res.headers.set("Access-Control-Max-Age", "3600")
	return res;
};