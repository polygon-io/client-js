import('@polygon.io/client-js').then(({ restClient }) => {
  const rest = restClient('API KEY', 'https://api.polygon.io');

	// https://polygon.io/docs/crypto/get_v2_snapshot_locale_global_markets_crypto_tickers
	rest.crypto.snapshotAllTickers("").then((data) => {
		console.log(data);
	}).catch(e => {
		console.error('An error happened:', e);
	});

});