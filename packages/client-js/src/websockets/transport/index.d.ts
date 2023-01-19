import { w3cwebsocket as Websocket } from 'websocket';
declare const getWsClient: (url: string, apiKey: string) => Websocket;
export default getWsClient;
