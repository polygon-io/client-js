import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.POLY_API_KEY);

// https://polygon.io/docs/crypto/get_v1_open-close_crypto__from___to___date
rest.crypto.dailyOpenClose("BTC", "USD", "2019-01-01").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
