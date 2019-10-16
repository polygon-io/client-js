//CF: https://polygon.io/docs/#!/Crypto/get_v1_meta_crypto_exchanges

import { get } from "../transport/request";

export interface ICryptoExchanges {
  id: number;
  type: string;
  market: string;
  name: string;
  url: string;
}

export const cryptoExhanges = (): Promise<ICryptoExchanges[]> =>
  get(`/v1/meta/crypto-exchanges`);
