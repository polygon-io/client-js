const { restClient } = require('@polygon.io/client-js');
const rest = restClient("API KEY", "https://api.polygon.io");

// https://polygon.io/docs/options/get_v1_indicators_macd__optionsticker
rest.options.macd("O:SPY241220P00720000").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});