const { restClient } = require('@polygon.io/client-js');
const rest = restClient("API KEY", "https://api.polygon.io");

// https://polygon.io/docs/crypto/get_v2_snapshot_locale_global_markets_crypto__direction
// gainers
rest.crypto.snapshotGainersLosers("gainers").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});

// losers
rest.crypto.snapshotGainersLosers("losers").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
