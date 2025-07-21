import { restClient } from '@polygon.io/client-js';

const apiKey = "GLOBAL_POLYGON_API_KEY";
const rest = restClient(apiKey, 'https://api.polygon.io');

async function example_getCurrencyConversion() {
  try {
    const response = await rest.getCurrencyConversion(
      {
        from: "AUD",
        to: "USD",
        amount: 100,
        precision: 2
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getCurrencyConversion();