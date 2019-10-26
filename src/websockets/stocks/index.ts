// Stocks TRADE:
import { getWsClient } from "../transport";
import * as WebSocket from "ws";

export interface ITradeStockEvent {
  ev: string; // Event Type
  sym: string; // Symbol Ticker
  x: string; // Exchange ID
  i: number; // Trade ID
  z: number; // Tape ( 1=A 2=B 3=C)
  p: number; // Price
  s: number; // Trade Size
  c: number[]; // Trade Conditions
  t: number; // Trade Timestamp ( Unix MS )
}

// Stocks QUOTE:
export interface IQuoteStockEvent {
  ev: string; // Event Type
  sym: string; // Symbol Ticker
  bx: string; // Bix Exchange ID
  bp: number; // Bid Price
  bs: number; // Bid Size
  ax: string; // Ask Exchange ID
  ap: number; // Ask Price
  as: number; // Ask Size
  c: number; // Quote Condition
  t: number; // Quote Timestamp ( Unix MS )
}

// Stocks Aggregate:
export interface IAggregateStockEvent {
  ev: string; // Event Type ( A = Second Agg, AM = Minute Agg )
  sym: string; // Symbol Ticker
  v: number; // Tick Volume
  av: number; // Accumulated Volume ( Today )
  op: number; // Todays official opening price
  vw: number; // VWAP (Volume Weighted Average Price)
  o: number; // Tick Open Price
  c: number; // Tick Close Price
  h: number; // Tick High Price
  l: number; // Tick Low Price
  a: number; // Tick Average / VWAP Price
  s: number; // Tick Start Timestamp ( Unix MS )
  e: number; // Tick End Timestamp ( Unix MS )
}

export const getStocksWebsocket = (apiKey: string): WebSocket =>
  getWsClient("wss://socket.polygon.io/stocks", apiKey);
