const { restClient } = require('@polygon.io/client-js');
const rest = restClient("API KEY", "https://api.polygon.io");

// https://polygon.io/docs/forex/get_v1_last_quote_currencies__from___to
rest.forex.lastQuote("AUD", "USD").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
