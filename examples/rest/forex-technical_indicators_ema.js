import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.POLY_API_KEY);

// https://polygon.io/docs/forex/get_v1_indicators_ema__fxticker
rest.forex.ema("C:EURUSD", 
	{ 
		timespan: "day", 
		adjusted: true, 
		window: 50, 
		series_type: "close", 
		order: "desc" 
	}).then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
