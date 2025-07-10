import { restClient } from '@polygon.io/client-js';

const apiKey = "GLOBAL_POLYGON_API_KEY";
const rest = restClient(apiKey, 'https://api.polygon.io');

async function example_listConditions() {
  try {
    const response = await rest.listConditions(
      {
        asset_class: "<asset_class>",
        data_type: "<data_type>",
        id: "<id>",
        sip: "<sip>",
        order: "<order>",
        limit: "<limit>",
        sort: "<sort>"
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_listConditions();