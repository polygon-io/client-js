import('@polygon.io/client-js').then(({ restClient }) => {
  const rest = restClient('API KEY', 'https://api.polygon.io');

	// https://polygon.io/docs/options/get_v3_snapshot_options__underlyingasset___optioncontract
	rest.options.snapshotOptionContract("AAPL", "O:AAPL230616C00150000").then((data) => {
		console.log(data);
	}).catch(e => {
		console.error('An error happened:', e);
	});

});