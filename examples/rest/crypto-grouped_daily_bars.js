import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.POLY_API_KEY);

// https://polygon.io/docs/crypto/get_v2_aggs_grouped_locale_global_market_crypto__date
rest.crypto.aggregatesGroupedDaily("2023-03-31").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
