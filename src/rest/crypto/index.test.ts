import * as sinon from "sinon";
import * as chai from "chai";
import { cryptoClient, ICryptoClient } from "./index.js";
import fetchModule from '../transport/fetch';

describe("[REST] Crypto", () => {
  chai.should();
  const mocks = {
    key: 'invalid',
    base: 'https://test.api.polygon.io',
    query: { query1: 'queryVal' },
    overrideOptions: {
      referrer: 'overrideVal'
    },
    globalOptions: {
      referrer: 'globalVal1',
      headers: {
        header1: 'headerVal1'
      }
    }
  };
  let fetchStub;
  let crypto: ICryptoClient;
  const sandbox = sinon.createSandbox();
  const getPath = (url) => url.slice(mocks.base.length, url.indexOf('?'));
  const setStub = (returnVal, status = 200) => {
    fetchStub?.restore();
    fetchStub = sandbox.stub(fetchModule, 'fetch').returns(
      Promise.resolve({ json: () => Promise.resolve(returnVal), status } as Response)
    );
    crypto = cryptoClient(mocks.key, mocks.base, mocks.globalOptions);
  }
  beforeEach(async () => {
    setStub({});
  });
  afterEach(() => {
    sandbox.restore();
  });

  it("should have appropriate results", async () => {
    setStub({ results: [{ o: 1}] });
    const response = await crypto.aggregates("AAPL", 1, "day", "2019-01-01", "2019-02-01", mocks.query, mocks.overrideOptions);
    response.results![0].t?.should.eql(1);
  });

  it("aggregates call /v2/aggs/ticker/{ticker}/range/{multiplier}/{timespan}/{from}/{to}", async () => {
    setStub({ results: [] });
    await crypto.aggregates("BTC", 1, "day", "2019-01-01", "2019-02-01", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql(
      "/v2/aggs/ticker/BTC/range/1/day/2019-01-01/2019-02-01"
    );
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("aggregates grouped daily call /v2/aggs/grouped/locale/global/market/market/{date}", async () => {
    setStub({ results: [] });
    await crypto.aggregatesGroupedDaily("2019-02-01", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql(
      "/v2/aggs/grouped/locale/global/market/crypto/2019-02-01"
    );
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("daily open close call /v1/open-close/crypto/{from}/{to}/{date}", async () => {
    await crypto.dailyOpenClose("BTC", "USD", "2019-01-01", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v1/open-close/crypto/BTC/USD/2019-01-01");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("previous close call /v2/aggs/ticker/{ticker}/prev", async () => {
    setStub({ results: [] });
    await crypto.previousClose("BTC", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v2/aggs/ticker/BTC/prev");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("trades call /v3/trades/{cryptoTicker}", async () => {
    setStub({ ticks: [] });
    await crypto.trades("X:BTC-USD", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v3/trades/X:BTC-USD");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("last trade call /v1/last/crypto/{from}/{to}", async () => {
    await crypto.lastTrade("BTC", "ETH", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v1/last/crypto/BTC/ETH");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("snapshot - all tickers call /v2/snapshot/locale/global/markets/crypto/tickers", async () => {
    setStub({ tickers: [] });
    await crypto.snapshotAllTickers(mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v2/snapshot/locale/global/markets/crypto/tickers");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("snapshot - gainers / losers call /v2/snapshot/locale/global/markets/crypto/{direction}", async () => {
    setStub({ tickers: [] });
    await crypto.snapshotGainersLosers("gainers", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v2/snapshot/locale/global/markets/crypto/gainers");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("snapshot - ticker call /v2/snapshot/locale/global/markets/crypto/tickers/{ticker}", async () => {
    setStub({
      status: "",
      ticker: {
        day: {},
        lastTrade: {},
        min: {},
        prevDay: {},
      },
    });
    await crypto.snapshotTicker("X:BTCUSD", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql(
      "/v2/snapshot/locale/global/markets/crypto/tickers/X:BTCUSD"
    );
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("snapshot - full book l2 call /v2/snapshot/locale/global/markets/crypto/tickers/{ticker}/book", async () => {
    setStub({ data: {} });
    await crypto.snapshotTickerFullBookL2("BTCUSD", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql(
      "/v2/snapshot/locale/global/markets/crypto/tickers/BTCUSD/book"
    );
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("snapshot - universal snapshot /v3/snapshot", async () => {
    const query = {'ticker.any_of': 'NCLH,O:SPY250321C00380000,C:EURUSD,X:BTCUSD,I:SPX'}
    await crypto.universalSnapshot(query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v3/snapshot");
    fetchStub.getCalls()[0].args[0].indexOf('ticker.any_of').should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("sma call /v1/indicators/sma/{cryptoTicker}", async () => {
    await crypto.sma("X:BTC-USD", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v1/indicators/sma/X:BTC-USD");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("ema call /v1/indicators/ema/{cryptoTicker}", async () => {
    await crypto.ema("X:BTC-USD", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v1/indicators/ema/X:BTC-USD");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("macd call /v1/indicators/macd/{cryptoTicker}", async () => {
    await crypto.macd("X:BTC-USD", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v1/indicators/macd/X:BTC-USD");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("rsi call /v1/indicators/rsi/{cryptoTicker}", async () => {
    await crypto.rsi("X:BTC-USD", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v1/indicators/rsi/X:BTC-USD");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("apiKey and apiBase are passed", async () => {
    await crypto.rsi("X:BTC-USD", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    fetchStub.getCalls()[0].args[0].indexOf(mocks.base).should.eql(0);
    fetchStub.getCalls()[0].args[1].headers.Authorization.should.eql(`Bearer ${mocks.key}`);
  });

  it("global options are applied if query is not passed in", async () => {
    await crypto.rsi("X:BTC-USD");
    fetchStub.callCount.should.eql(1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.globalOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("all options are applied if query is undefined", async () => {
    await crypto.rsi("X:BTC-USD", undefined, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("properly handles promise rejections", async () => {
    fetchStub?.restore();
    fetchStub = sandbox.stub(fetchModule, 'fetch').rejects('Error Message')
    crypto = cryptoClient(mocks.key, mocks.base, mocks.globalOptions);
    return crypto.summaries({ 'ticker.any_of': "X:BTCUSD,X:USDBTC" })
      .then(() => { throw new Error('function should throw error'); })
      .catch((e) => { chai.expect(e).to.be.an.instanceof (Error); })
  });
});
