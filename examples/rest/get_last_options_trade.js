import { restClient } from '@polygon.io/client-js';

const apiKey = "GLOBAL_POLYGON_API_KEY";
const rest = restClient(apiKey, 'https://api.polygon.io');

async function example_getLastOptionsTrade() {
  try {
    const response = await rest.getLastOptionsTrade("O:TSLA210903C00700000");
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getLastOptionsTrade();