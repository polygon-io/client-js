import('@polygon.io/client-js').then(({ restClient }) => {
  const rest = restClient('API KEY', 'https://api.polygon.io');

	// https://polygon.io/docs/stocks/get_v1_indicators_ema__stockticker
	rest.stocks.ema("AAPL").then((data) => {
		console.log(data);
	}).catch(e => {
		console.error('An error happened:', e);
	});

});
