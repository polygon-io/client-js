const { restClient } = require('@polygon.io/client-js');
const rest = restClient("API KEY", "https://api.polygon.io");

// https://polygon.io/docs/crypto/get_v2_aggs_ticker__cryptoticker__prev
rest.crypto.previousClose("X:BTCUSD").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
