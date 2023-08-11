import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.POLY_API_KEY);

// https://polygon.io/docs/stocks/get_v1_indicators_macd__stockticker
rest.stocks.macd("AAPL").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
