import * as sinon from "sinon";
import * as chai from "chai";

import * as request from "../transport/request";

import {
  cryptoAggregates,
  cryptoDailyOpenClose,
  cryptoExhanges,
  cryptoGroupedDaily,
  cryptoPreviousClose,
  cryptoSnapshotAllTickers,
  cryptoSnapshotGainersLosers,
  cryptoSnapshotSingleTicker,
  cryptoSnapshotSingleTickerFullBook,
  historicCryptoTrades,
  lastTradeForCryptoPair
} from ".";

describe("[REST] Crypto", () => {
  chai.should();
  let requestStub;
  const sandbox = sinon.createSandbox();
  beforeEach(() => {
    requestStub = sandbox.stub(request, "get").returns(Promise.resolve({}));
  });
  afterEach(() => {
    sandbox.restore();
  });

  it("cryptoPreviousClose call /v2/aggs/ticker/{ticker}/prev", async () => {
    await cryptoPreviousClose("BTC");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v2/aggs/ticker/BTC/prev");
  });

  it("cryptoAggregates call /v2/aggs/ticker/{ticker}/range/{multiplier}/{timespan}/{from}/{to}", async () => {
    await cryptoAggregates("BTC", 1, "day", "2019-01-01", "2019-02-01");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql(
        "/v2/aggs/ticker/BTC/range/1/day/2019-01-01/2019-02-01"
      );
  });

  it("cryptoGroupedDaily call /v2/aggs/grouped/locale/{locale}/market/{market}/{date}", async () => {
    await cryptoGroupedDaily("US", "CRYPTO", "2019-02-01");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql(
        "/v2/aggs/grouped/locale/US/market/CRYPTO/2019-02-01"
      );
  });

  it("cryptoExchanges call /v1/meta/crypto-exchanges", async () => {
    await cryptoExhanges();
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v1/meta/crypto-exchanges");
  });

  it("lastTradeForCryptoPair call /v1/last/crypto/{from}/{to}", async () => {
    await lastTradeForCryptoPair("BTC", "ETH");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v1/last/crypto/BTC/ETH");
  });

  it("cryptoDailyOpenClose call /v1/open-close/crypto/{from}/{to}/{date}", async () => {
    await cryptoDailyOpenClose("BTC", "USD", "2019-01-01");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v1/open-close/crypto/BTC/USD/2019-01-01");
  });

  it("historicCryptoTrade call /v1/historic/crypto/{from}/{to}/{date}", async () => {
    sandbox.restore();
    requestStub = sandbox.stub(request, "get").returns(
      Promise.resolve({
        ticks: []
      })
    );
    await historicCryptoTrades("BTC", "USD", "2019-01-01");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v1/historic/crypto/BTC/USD/2019-01-01");
  });

  it("cryptoSnapshotAllTickers call /v2/snapshot/locale/global/markets/crypto/tickers", async () => {
    // TODO: test update
    await cryptoSnapshotAllTickers();
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v2/snapshot/locale/global/markets/crypto/tickers");
  });

  it("cryptoSnapshotSingleTicker call /v2/snapshot/locale/global/markets/crypto/tickers/{ticker}", async () => {
    // TODO: test update
    await cryptoSnapshotSingleTicker("X:BTCUSD");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql(
        "/v2/snapshot/locale/global/markets/crypto/tickers/X:BTCUSD"
      );
  });

  it("cryptoSnapshotGainersLosers call /v2/snapshot/locale/global/markets/crypto/{direction}", async () => {
    // TODO: test update
    await cryptoSnapshotGainersLosers();
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v2/snapshot/locale/global/markets/crypto/gainers");
  });

  it("cryptoSnapshotSingleTickerFullBook call /v2/snapshot/locale/global/markets/crypto/tickers/{ticker}/book", async () => {
    // TODO: test update
    await cryptoSnapshotSingleTickerFullBook("BTCUSD");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql(
        "/v2/snapshot/locale/global/markets/crypto/tickers/BTCUSD/book"
      );
  });
});
