import { w3cwebsocket as Websocket } from 'websocket';
export interface IAggregateStockEvent {
    ev: string;
    sym: string;
    v: number;
    av: number;
    op: number;
    vw: number;
    o: number;
    c: number;
    h: number;
    l: number;
    a: number;
    z: number;
    s: number;
    e: number;
}
export interface ITradeStockEvent {
    ev: string;
    sym: string;
    x: string;
    i: number;
    z: number;
    p: number;
    s: number;
    c: number[];
    t: number;
}
export interface IQuoteStockEvent {
    ev: string;
    sym: string;
    bx: string;
    bp: number;
    bs: number;
    ax: string;
    ap: number;
    as: number;
    c: number;
    t: number;
    z: number;
}
export declare const getStocksWebsocket: (apiKey: string, apiBase?: string) => Websocket;
