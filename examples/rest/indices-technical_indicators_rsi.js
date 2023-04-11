const { restClient } = require('@polygon.io/client-js');
const rest = restClient("API KEY", "https://api.polygon.io");

// https://polygon.io/docs/indices/get_v1_indicators_rsi__indicesticker
rest.indices.rsi("I:SPX").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
