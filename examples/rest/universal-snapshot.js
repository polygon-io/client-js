import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.POLY_API_KEY);

// You can access the universal snapshot endpoint from any asset class client

// https://polygon.io/docs/stocks/get_v3_snapshot
rest.stocks.universalSnapshot({ "ticker.any_of": "NCLH,O:SPY250321C00380000,C:EURUSD,X:BTCUSD,I:SPX" }).then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});

// https://polygon.io/docs/crypto/get_v3_snapshot
rest.crypto.universalSnapshot({ "ticker.any_of": "NCLH,O:SPY250321C00380000,C:EURUSD,X:BTCUSD,I:SPX" }).then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});

// https://polygon.io/docs/options/get_v3_snapshot
rest.options.universalSnapshot({ "ticker.any_of": "NCLH,O:SPY250321C00380000,C:EURUSD,X:BTCUSD,I:SPX" }).then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});

// https://polygon.io/docs/forex/get_v3_snapshot
rest.forex.universalSnapshot({ "ticker.any_of": "NCLH,O:SPY250321C00380000,C:EURUSD,X:BTCUSD,I:SPX" }).then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});