import { restClient } from '@polygon.io/client-js';

const apiKey = "GLOBAL_POLYGON_API_KEY";
const rest = restClient(apiKey, 'https://api.polygon.io');

async function example_getIndicesSnapshot() {
  try {
    const response = await rest.getIndicesSnapshot(
      {
        "ticker.any_of": "I:DJI",
        ticker: "<ticker>",
        "ticker.gte": "<ticker.gte>",
        "ticker.gt": "<ticker.gt>",
        "ticker.lte": "<ticker.lte>",
        "ticker.lt": "<ticker.lt>",
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

example_getIndicesSnapshot();