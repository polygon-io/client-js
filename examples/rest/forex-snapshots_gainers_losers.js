import('@polygon.io/client-js').then(({ restClient }) => {
  const rest = restClient('API KEY', 'https://api.polygon.io');

	// https://polygon.io/docs/forex/get_v2_snapshot_locale_global_markets_forex__direction
	// gainers
	rest.forex.snapshotGainersLosers("gainers").then((data) => {
		console.log(data);
	}).catch(e => {
		console.error('An error happened:', e);
	});

	// losers
	rest.forex.snapshotGainersLosers("losers").then((data) => {
		console.log(data);
	}).catch(e => {
		console.error('An error happened:', e);
	});

});
