import('@polygon.io/client-js').then(({ restClient }) => {
  const rest = restClient('API KEY', 'https://api.polygon.io');

	// https://polygon.io/docs/options/get_v3_reference_options_contracts__options_ticker
	rest.reference.optionsContract("O:EVRI240119C00002500").then((data) => {
		console.log(data);
	}).catch(e => {
		console.error('An error happened:', e);
	});

});
