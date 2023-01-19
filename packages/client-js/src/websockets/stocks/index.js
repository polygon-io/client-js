import getWsClient from '../transport';
export const getStocksWebsocket = (apiKey, apiBase = 'wss://socket.polygon.io') => getWsClient(`${apiBase}/stocks`, apiKey);
