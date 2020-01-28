// Crypto QUOTE:
import { w3cwebsocket as Websocket } from "websocket";
import { getWsClient } from "../transport";

export interface IQuoteCryptoEvent {
  ev: string; // Event Type
  pair: string; // Crypto Pair
  lp: number; // Last Trade Price
  ls: number; // Last Trade Size
  bp: number; // Bid Price
  bs: number; // Bid Size
  ap: number; // Ask Price
  as: number; // Ask Size
  t: number; // Exchange Timestamp Unix ( ms )
  x: number; // Exchange ID
  r: number; // Received @ Polygon Timestamp
}

// Crypto TRADE:
export interface ITradeCryptoEvent {
  ev: string; // Event Type
  pair: string; // Crypto Pair
  p: number; // Price
  t: number; // Timestamp Unix ( ms )
  s: number; // Size
  c: number[]; // Condition
  i: string; // Trade ID ( Optional )
  x: number; // Exchange ID
  r: number; // Received @ Polygon Timestamp
}

// Crypto AGGREGATE:
export interface IAggregateCryptoEvent {
  ev: string; // Event Type
  pair: string; // Crypto Pair
  o: number; // Open Price
  ox: number; // Open Exchange
  h: number; // High Price
  hx: number; // High Exchange
  l: number; // Low Price
  lx: number; // Low Exchange
  c: number; // Close Price
  cx: number; // Close Exchange
  v: number; // Volume of Trades in Tick
  s: number; // Tick Start Timestamp
  e: number; // Tick End Timestamp
}

// Crypto SIP ( NBBO ):
export interface ISIPCryptoEvent {
  ev: string; // Event Type
  pair: string; // Crypto Pair
  as: number; // Ask Size
  ap: number; // Ask Price
  ax: number; // Ask Exchange
  bs: number; // Bid Size
  bp: number; // Bid Price
  bx: number; // Bid Exchange
  t: number; // Tick Start Timestamp
}

// Crypto LEVEL2:
export interface ILevel2CryptoEvent {
  ev: string; // Event Type
  pair: string; // Crypto Pair
  b: any[];
  a: any[];
  t: number; // Timestamp Unix ( ms )
  x: number; // Exchange ID
  r: number; // Tick Received @ Polygon Timestamp
}

export const getCryptoWebsocket = (apiKey: string): Websocket =>
  getWsClient("wss://socket.polygon.io/crypto", apiKey);
