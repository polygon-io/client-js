import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.POLY_API_KEY);

// https://polygon.io/docs/stocks/get_v2_snapshot_locale_us_markets_stocks_tickers
rest.stocks.snapshotAllTickers().then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
