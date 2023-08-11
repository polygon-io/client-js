import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.POLY_API_KEY);

// https://polygon.io/docs/options/get_v1_indicators_sma__optionsticker
rest.options.sma("O:SPY241220P00720000").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
