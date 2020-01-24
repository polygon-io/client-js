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

export const restClient = (apiKey): IRestClient => ({
  crypto: cryptoClient(apiKey),
  forex: forexClient(apiKey),
  stocks: stocksClient(apiKey),
  reference: referenceClient(apiKey)
});

export default restClient;
