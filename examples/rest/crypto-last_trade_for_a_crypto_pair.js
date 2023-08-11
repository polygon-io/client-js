import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.POLY_API_KEY);

// https://polygon.io/docs/crypto/get_v1_last_crypto__from___to
rest.crypto.lastTrade("BTC", "USD").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
