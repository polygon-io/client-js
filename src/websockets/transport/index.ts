import { WebSocket } from 'ws'

export const getWsClient = async (url: string, apiKey: string): Promise<WebSocket> => {
  if (!apiKey) {
    throw new Error("api key not provided.");
  }
  const ws = new WebSocket(url)

  ws.onopen = () => {
    ws.send(JSON.stringify({ action: "auth", params: apiKey }));
  };

  while (ws.readyState != ws.OPEN) {
    await sleep(1)
  }

  return ws;
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
