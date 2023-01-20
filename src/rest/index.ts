import { cryptoClient, ICryptoClient } from "./crypto";
import { forexClient, IForexClient } from "./forex";
import { referenceClient, IReferenceClient } from "./reference";
import { optionsClient, IOptionsClient } from "./options";
import { stocksClient, IStocksClient } from "./stocks";
import { IRequestOptions } from "./transport/request";
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

export const restClient = (apiKey, apiBase?: string, options?: IRequestOptions): IRestClient => ({
  crypto: cryptoClient(apiKey, apiBase, options),
  forex: forexClient(apiKey, apiBase, options),
  reference: referenceClient(apiKey, apiBase, options),
  options: optionsClient(apiKey, apiBase, options),
  stocks: stocksClient(apiKey, apiBase, options),
});

export default restClient;
