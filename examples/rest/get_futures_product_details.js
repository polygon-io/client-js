import { restClient } from '@polygon.io/client-js';

const apiKey = "GLOBAL_POLYGON_API_KEY";
const rest = restClient(apiKey, 'https://api.polygon.io');

async function example_getFuturesProductDetails() {
  try {
    const response = await rest.getFuturesProductDetails(
      {
        product_code: "ES",
        type: "<type>",
        as_of: "<as_of>"
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getFuturesProductDetails();