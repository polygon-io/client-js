import { w3cwebsocket as Websocket } from 'websocket';
const getWsClient = (url, apiKey) => {
    if (!apiKey) {
        throw new Error('api key not provided.');
    }
    const ws = new Websocket(url);
    ws.onopen = () => {
        ws.send(JSON.stringify({ action: 'auth', params: apiKey }));
    };
    return ws;
};
export default getWsClient;
