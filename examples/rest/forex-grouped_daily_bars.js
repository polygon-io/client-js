import('@polygon.io/client-js').then(({ restClient }) => {
  const rest = restClient('API KEY', 'https://api.polygon.io');

	// https://polygon.io/docs/forex/get_v2_aggs_grouped_locale_global_market_fx__date
	rest.forex.aggregatesGroupedDaily("2023-03-31").then((data) => {
		console.log(data);
	}).catch(e => {
		console.error('An error happened:', e);
	});

});
