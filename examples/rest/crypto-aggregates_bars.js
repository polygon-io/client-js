import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.POLY_API_KEY);

// https://polygon.io/docs/crypto/get_v2_aggs_ticker__cryptoticker__range__multiplier___timespan___from___to
rest.crypto.aggregates("X:BTCUSD", 1, "day", "2023-01-30", "2023-02-03").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
