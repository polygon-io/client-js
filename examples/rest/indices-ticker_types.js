import('@polygon.io/client-js').then(({ restClient }) => {
  const rest = restClient('API KEY', 'https://api.polygon.io');

	// https://polygon.io/docs/indices/get_v3_reference_tickers_types
	rest.reference.tickerTypes({ asset_class: "indices"}).then((data) => {
		console.log(data);
	}).catch(e => {
		console.error('An error happened:', e);
	});

});
