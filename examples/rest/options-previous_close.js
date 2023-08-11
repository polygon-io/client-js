import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.POLY_API_KEY);

// https://polygon.io/docs/options/get_v2_aggs_ticker__optionsticker__prev
rest.options.previousClose("O:SPY251219C00650000").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
