const { restClient } = require('@polygon.io/client-js');
const rest = restClient("API KEY", "https://api.polygon.io");

// https://polygon.io/docs/stocks/get_v3_snapshot
rest.reference.universalSnapshot({ "ticker.any_of": "NCLH,O:SPY250321C00380000,C:EURUSD,X:BTCUSD,I:SPX" }).then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});