import { cryptoClient, ICryptoClient } from "./crypto";
import { forexClient, IForexClient } from "./forex";
import { referenceClient, IReferenceClient } from "./reference";
import { optionsClient, IOptionsClient } from "./options";
import { stocksClient, IStocksClient } from "./stocks";
export * from "./crypto";
export * from "./forex";
export * from "./reference";
export * from "./options";
export * from "./stocks";

export interface IRestClient {
  crypto: ICryptoClient;
  forex: IForexClient;
  reference: IReferenceClient;
  options: IOptionsClient;
  stocks: IStocksClient;
}

export const restClient = (apiKey, apiBase?: string): IRestClient => ({
  crypto: cryptoClient(apiKey, apiBase),
  forex: forexClient(apiKey, apiBase),
  reference: referenceClient(apiKey, apiBase),
  options: optionsClient(apiKey, apiBase),
  stocks: stocksClient(apiKey, apiBase),
});

export default restClient;
