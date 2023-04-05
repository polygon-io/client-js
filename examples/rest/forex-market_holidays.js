import('@polygon.io/client-js').then(({ restClient }) => {
  const rest = restClient('API KEY', 'https://api.polygon.io');

	// https://polygon.io/docs/forex/get_v1_marketstatus_upcoming
	rest.reference.marketHolidays().then((data) => {
		console.log(data);
	}).catch(e => {
		console.error('An error happened:', e);
	});

});
