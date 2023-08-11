import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.POLY_API_KEY);

// https://polygon.io/docs/stocks/get_v2_aggs_ticker__stocksticker__prev
rest.stocks.previousClose("AAPL").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
