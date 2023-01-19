import { w3cwebsocket as Websocket } from 'websocket';
export interface IAggregateCryptoEvent {
    ev: string;
    pair: string;
    o: number;
    c: number;
    h: number;
    l: number;
    v: number;
    s: number;
    e: number;
}
export interface ITradeCryptoEvent {
    ev: string;
    pair: string;
    p: number;
    t: number;
    s: number;
    c: number[];
    i: string;
    x: number;
    r: number;
}
export interface IQuoteCryptoEvent {
    ev: string;
    pair: string;
    bp: number;
    bs: number;
    ap: number;
    as: number;
    t: number;
    x: number;
    r: number;
}
export interface ILevel2CryptoEvent {
    ev: string;
    pair: string;
    b: any[];
    a: any[];
    t: number;
    x: number;
    r: number;
}
export declare const getCryptoWebsocket: (apiKey: string, apiBase?: string) => Websocket;
