import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.POLY_API_KEY);

// https://polygon.io/docs/forex/get_v1_indicators_sma__fxticker
rest.forex.sma("C:EURUSD").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
