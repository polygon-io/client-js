import { cryptoClient, ICryptoClient } from "./crypto";
import { forexClient, IForexClient } from "./forex";
import { referenceClient, IReferenceClient } from "./reference";
import { stocksClient, IStocksClient } from "./stocks";
export * from "./crypto";
export * from "./forex";
export * from "./reference";
export * from "./stocks";

export interface IRestClient {
  crypto: ICryptoClient;
  forex: IForexClient;
  stocks: IStocksClient;
  reference: IReferenceClient;
}

export const restClient = (apiKey, apiBase?: string): IRestClient => ({
  crypto: cryptoClient(apiKey, apiBase),
  forex: forexClient(apiKey, apiBase),
  stocks: stocksClient(apiKey, apiBase),
  reference: referenceClient(apiKey, apiBase)
});

export default restClient;
