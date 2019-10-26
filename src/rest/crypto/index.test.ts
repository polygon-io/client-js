import * as sinon from "sinon";
import * as chai from "chai";

import * as request from "../transport/request";
import { cryptoClient } from "./index";

describe("[REST] Crypto", () => {
  chai.should();
  let requestStub;
  const sandbox = sinon.createSandbox();
  const crypto = cryptoClient("invalid");
  beforeEach(() => {
    requestStub = sandbox.stub(request, "get").returns(Promise.resolve({}));
  });
  afterEach(() => {
    sandbox.restore();
  });

  it("cryptoPreviousClose call /v2/aggs/ticker/{ticker}/prev", async () => {
    requestStub.restore();
    requestStub = sandbox.stub(request, "get").returns(
      Promise.resolve({
        results: []
      })
    );
    await crypto.previousClose("BTC");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v2/aggs/ticker/BTC/prev");
  });

  it("cryptoAggregates call /v2/aggs/ticker/{ticker}/range/{multiplier}/{timespan}/{from}/{to}", async () => {
    requestStub.restore();
    requestStub = sandbox.stub(request, "get").returns(
      Promise.resolve({
        results: []
      })
    );
    await crypto.aggregates("BTC", 1, "day", "2019-01-01", "2019-02-01");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql(
        "/v2/aggs/ticker/BTC/range/1/day/2019-01-01/2019-02-01"
      );
  });

  it("cryptoGroupedDaily call /v2/aggs/grouped/locale/{locale}/market/{market}/{date}", async () => {
    requestStub.restore();
    requestStub = sandbox.stub(request, "get").returns(
      Promise.resolve({
        results: []
      })
    );
    await crypto.groupedDaily("US", "CRYPTO", "2019-02-01");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql(
        "/v2/aggs/grouped/locale/US/market/CRYPTO/2019-02-01"
      );
  });

  it("cryptoExchanges call /v1/meta/crypto-exchanges", async () => {
    await crypto.exchanges();
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v1/meta/crypto-exchanges");
  });

  it("lastTradeForCryptoPair call /v1/last/crypto/{from}/{to}", async () => {
    await crypto.lastTradeForPair("BTC", "ETH");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v1/last/crypto/BTC/ETH");
  });

  it("cryptoDailyOpenClose call /v1/open-close/crypto/{from}/{to}/{date}", async () => {
    await crypto.dailyOpenClose("BTC", "USD", "2019-01-01");
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
    await crypto.historicTrades("BTC", "USD", "2019-01-01");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v1/historic/crypto/BTC/USD/2019-01-01");
  });

  it("cryptoSnapshotAllTickers call /v2/snapshot/locale/global/markets/crypto/tickers", async () => {
    sandbox.restore();
    requestStub = sandbox.stub(request, "get").returns(
      Promise.resolve({
        tickers: []
      })
    );
    await crypto.snapshotAllTickers();
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v2/snapshot/locale/global/markets/crypto/tickers");
  });

  it("cryptoSnapshotSingleTicker call /v2/snapshot/locale/global/markets/crypto/tickers/{ticker}", async () => {
    sandbox.restore();
    requestStub = sandbox.stub(request, "get").returns(
      Promise.resolve({
        status: "",
        ticker: {
          day: {},
          lastTrade: {},
          min: {},
          prevDay: {}
        }
      })
    );
    await crypto.snapshotSingleTicker("X:BTCUSD");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql(
        "/v2/snapshot/locale/global/markets/crypto/tickers/X:BTCUSD"
      );
  });

  it("cryptoSnapshotGainersLosers call /v2/snapshot/locale/global/markets/crypto/{direction}", async () => {
    sandbox.restore();
    requestStub = sandbox.stub(request, "get").returns(
      Promise.resolve({
        tickers: []
      })
    );
    await crypto.snapshotGainersLosers();
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v2/snapshot/locale/global/markets/crypto/gainers");
  });

  it("cryptoSnapshotSingleTickerFullBook call /v2/snapshot/locale/global/markets/crypto/tickers/{ticker}/book", async () => {
    sandbox.restore();
    requestStub = sandbox.stub(request, "get").returns(
      Promise.resolve({
        data: {}
      })
    );
    await crypto.snapshotSingleTickerFullBook("BTCUSD");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql(
        "/v2/snapshot/locale/global/markets/crypto/tickers/BTCUSD/book"
      );
  });
});
