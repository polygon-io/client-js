import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.POLY_API_KEY);

// https://polygon.io/docs/crypto/get_v2_snapshot_locale_global_markets_crypto_tickers__ticker__book
rest.crypto.snapshotTickerFullBookL2("X:BTCUSD").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
