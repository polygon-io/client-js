import('@polygon.io/client-js').then(({ restClient }) => {
  const rest = restClient('API KEY', 'https://api.polygon.io');

	// https://polygon.io/docs/forex/get_v2_snapshot_locale_global_markets_forex_tickers
	rest.forex.snapshotTicker("").then((data) => {
		console.log(data);
	}).catch(e => {
		console.error('An error happened:', e);
	});

});