import('@polygon.io/client-js').then(({ restClient }) => {
  const rest = restClient('API KEY', 'https://api.polygon.io');

	// https://polygon.io/docs/stocks/get_v2_last_trade__stocksticker
	rest.stocks.lastTrade("AAPL").then((data) => {
		console.log(data);
	}).catch(e => {
		console.error('An error happened:', e);
	});

});