import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.POLY_API_KEY);

// https://polygon.io/docs/options/get_v2_last_trade__optionsticker
rest.options.lastTrade("O:TSLA210903C00700000").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
