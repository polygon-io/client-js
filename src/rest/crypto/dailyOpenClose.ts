import { get } from "../transport/request";
import {
  formatICryptoTickJsonRaw,
  ICryptoDailyOpenCloseFormatted,
  ICryptoDailyOpenCloseRaw
} from "./ICryptoTickJson";

// CF: https://polygon.io/docs/#!/Crypto/get_v1_open_close_crypto_from_to_date
export const cryptoDailyOpenClose = async (
  apiKey: string,
  from: string,
  to: string,
  date: string
): Promise<ICryptoDailyOpenCloseFormatted> => {
  const raw: ICryptoDailyOpenCloseRaw = await get(
    `/v1/open-close/crypto/${from}/${to}/${date}`,
    apiKey
  );
  const data: ICryptoDailyOpenCloseFormatted = {
    symbol: raw.symbol,
    isUTC: raw.isUTC,
    day: raw.day,
    open: raw.open,
    close: raw.close
  };
  if (raw.openTrades) {
    data.openTrades = raw.openTrades.map(formatICryptoTickJsonRaw);
  }
  if (raw.closingTrades) {
    data.closingTrades = raw.closingTrades.map(formatICryptoTickJsonRaw);
  }
  return data;
};
