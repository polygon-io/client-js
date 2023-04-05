import('@polygon.io/client-js').then(({ restClient }) => {
  const rest = restClient('API KEY', 'https://api.polygon.io');

	// https://polygon.io/docs/options/get_v2_aggs_ticker__optionsticker__range__multiplier___timespan___from___to
	rest.options.aggregates("O:SPY251219C00650000", 1, "day", "2023-01-09", "2023-01-09").then((data) => {
		console.log(data);
	}).catch(e => {
		console.error('An error happened:', e);
	});

});
