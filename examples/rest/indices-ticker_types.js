import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.POLY_API_KEY);

// https://polygon.io/docs/indices/get_v3_reference_tickers_types
rest.reference.tickerTypes({ asset_class: "indices"}).then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
