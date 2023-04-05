import('@polygon.io/client-js').then(({ restClient }) => {
  const rest = restClient('API KEY', 'https://api.polygon.io');

	// https://polygon.io/docs/options/get_v3_reference_options_contracts
	rest.reference.optionsContracts().then((data) => {
		console.log(data);
	}).catch(e => {
		console.error('An error happened:', e);
	});

});
