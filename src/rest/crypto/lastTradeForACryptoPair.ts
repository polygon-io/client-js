// CF: https://polygon.io/docs/#!/Crypto/get_v1_last_crypto_from_to

import { get } from "../transport/request";

export interface ICryptoTick {
  price: number;
  size: number;
  exchange: number;
  conditions: number[];
  timestamp: number;
}
export interface ILastCryptoAverage {
  avg?: number;
  tradesAveraged?: number;
}
export interface ILastTradeForACryptoPair {
  status: string;
  symbol: string;
  last: ICryptoTick;
  lastAverage: ILastCryptoAverage;
}

export const lastTradeForCryptoPair = (
  apiKey: string,
  from: string,
  to: string
): Promise<ILastTradeForACryptoPair> =>
  get(`/v1/last/crypto/${from}/${to}`, apiKey);
