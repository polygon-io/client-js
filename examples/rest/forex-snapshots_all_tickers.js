import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.POLY_API_KEY);

// https://polygon.io/docs/forex/get_v2_snapshot_locale_global_markets_forex_tickers
rest.forex.snapshotTicker("").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
