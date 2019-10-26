import { cryptoClient } from "./crypto";
export * from "./crypto";

import { forexClient } from "./forex";
export * from "./forex";

import { stocksClient } from "./stocks";
export * from "./stocks";

import { referenceClient } from "./reference";
export * from "./reference";

export const restClient = apiKey => ({
  crypto: cryptoClient(apiKey),
  forex: forexClient(apiKey),
  stocks: stocksClient(apiKey),
  reference: referenceClient(apiKey)
});

export default restClient;
