const { restClient } = require('@polygon.io/client-js');
const rest = restClient("API KEY", "https://api.polygon.io");

// https://polygon.io/docs/stocks/get_v1_open-close__stocksticker___date
rest.stocks.dailyOpenClose("AAPL", "2023-03-31").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
