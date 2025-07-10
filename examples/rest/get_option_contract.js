import { restClient } from '@polygon.io/client-js';

const apiKey = "GLOBAL_POLYGON_API_KEY";
const rest = restClient(apiKey, 'https://api.polygon.io');

async function example_getOptionContract() {
  try {
    const response = await rest.getOptionContract(
      {
        underlyingAsset: "EVRI",
        optionContract: "O:EVRI260116C00015000"
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getOptionContract();