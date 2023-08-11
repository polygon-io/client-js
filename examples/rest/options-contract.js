import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.POLY_API_KEY);

// https://polygon.io/docs/options/get_v3_reference_options_contracts__options_ticker
rest.reference.optionsContract("O:EVRI240119C00002500").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
