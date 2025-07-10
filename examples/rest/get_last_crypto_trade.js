import { restClient } from '@polygon.io/client-js';

const apiKey = "GLOBAL_POLYGON_API_KEY";
const rest = restClient(apiKey, 'https://api.polygon.io');

async function example_getLastCryptoTrade() {
  try {
    const response = await rest.getLastCryptoTrade(
      {
        from: "BTC",
        to: "USD"
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getLastCryptoTrade();