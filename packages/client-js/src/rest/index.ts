import { cryptoClient, ICryptoClient } from './crypto';
import { forexClient, IForexClient } from './forex';
import { referenceClient, IReferenceClient } from './reference';
import { optionsClient, IOptionsClient } from './options';
import { stocksClient, IStocksClient } from './stocks';
import { IHeaders } from './transport/request';

export * from './crypto';
export * from './forex';
export * from './reference';
export * from './options';
export * from './stocks';

export interface IRestClient {
	crypto: ICryptoClient;
	forex: IForexClient;
	reference: IReferenceClient;
	options: IOptionsClient;
	stocks: IStocksClient;
}

const restClient = (
	apiKey: string,
	apiBase?: string,
	headers?: IHeaders
): IRestClient => ({
	crypto: cryptoClient(apiKey, apiBase, headers),
	forex: forexClient(apiKey, apiBase, headers),
	reference: referenceClient(apiKey, apiBase, headers),
	options: optionsClient(apiKey, apiBase, headers),
	stocks: stocksClient(apiKey, apiBase, headers)
});

export default restClient;
