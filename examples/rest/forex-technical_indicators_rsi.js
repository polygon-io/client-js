const { restClient } = require('@polygon.io/client-js');
const rest = restClient("API KEY", "https://api.polygon.io");

// https://polygon.io/docs/forex/get_v1_indicators_rsi__fxticker
rest.forex.rsi("C:EURUSD").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
