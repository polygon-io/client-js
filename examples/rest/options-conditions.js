const { restClient } = require('@polygon.io/client-js');
const rest = restClient("API KEY", "https://api.polygon.io");

// https://polygon.io/docs/options/get_v3_reference_conditions
rest.reference.conditions({ asset_class: "options", limit: 1000 }).then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
