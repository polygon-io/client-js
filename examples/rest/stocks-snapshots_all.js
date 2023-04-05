import('@polygon.io/client-js').then(({ restClient }) => {
  const rest = restClient('API KEY', 'https://api.polygon.io');

	// https://polygon.io/docs/stocks/get_v2_snapshot_locale_us_markets_stocks_tickers
	rest.stocks.snapshotAllTickers().then((data) => {
		console.log(data);
	}).catch(e => {
		console.error('An error happened:', e);
	});

});