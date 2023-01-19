import getWsClient from '../transport';
export const getOptionsWebsocket = (apiKey, apiBase = 'wss://socket.polygon.io') => getWsClient(`${apiBase}/options`, apiKey);
