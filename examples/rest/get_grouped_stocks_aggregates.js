import { restClient } from '@polygon.io/client-js';

const apiKey = "GLOBAL_POLYGON_API_KEY";
const rest = restClient(apiKey, 'https://api.polygon.io');

async function example_getGroupedStocksAggregates() {
  try {
    const response = await rest.getGroupedStocksAggregates(
      {
        date: "2023-01-09",
        adjusted: true,
        include_otc: "<include_otc>"
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getGroupedStocksAggregates();