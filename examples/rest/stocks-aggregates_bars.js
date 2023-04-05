import('@polygon.io/client-js').then(({ restClient }) => {
  const rest = restClient('API KEY', 'https://api.polygon.io');

	// https://polygon.io/docs/stocks/get_v2_aggs_ticker__stocksticker__range__multiplier___timespan___from___to
	rest.stocks.aggregates("AAPL", 1, "day", "2019-01-01", "2019-02-01").then((data) => {
		console.log(data);
	}).catch(e => {
		console.error('An error happened:', e);
	});

});