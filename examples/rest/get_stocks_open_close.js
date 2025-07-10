import { restClient } from '@polygon.io/client-js';

const apiKey = "GLOBAL_POLYGON_API_KEY";
const rest = restClient(apiKey, 'https://api.polygon.io');

async function example_getStocksOpenClose() {
  try {
    const response = await rest.getStocksOpenClose(
      {
        stocksTicker: "AAPL",
        date: "2023-01-09",
        adjusted: true
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getStocksOpenClose();