import * as sinon from "sinon";
import * as chai from "chai";
import fetchModule from '../transport/fetch';

import { IStocksClient, stocksClient } from "./index.js";

describe("[REST] Stocks", () => {
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
  let stocks: IStocksClient;
  const sandbox = sinon.createSandbox();
  const getPath = (url) => url.slice(mocks.base.length, url.indexOf('?'));
  const setStub = (returnVal, status = 200) => {
    fetchStub?.restore();
    fetchStub = sandbox.stub(fetchModule, 'fetch').returns(
      Promise.resolve({ json: () => Promise.resolve(returnVal), status } as Response)
    );
    stocks = stocksClient(mocks.key, mocks.base, mocks.globalOptions);
  }
  beforeEach(async () => {
    setStub({ ticks: [], results: [], tickers: [] });
  });
  afterEach(() => {
    sandbox.restore();
  });

  it("aggregates call /v2/aggs/ticker/{ticker}/range/{multiplier}/{timespan}/{from}/{to}", async () => {
    setStub({ results: [] });
    await stocks.aggregates("AAPL", 1, "day", "2019-01-01", "2019-02-01", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql(
      "/v2/aggs/ticker/AAPL/range/1/day/2019-01-01/2019-02-01"
    );
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("aggregatesGroupedDaily call /v2/aggs/grouped/locale/us/market/stocks/{date}", async () => {
    setStub({ results: [] });
    await stocks.aggregatesGroupedDaily("2019-02-01", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql(
      "/v2/aggs/grouped/locale/us/market/stocks/2019-02-01"
    );
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("dailyOpenClose call /v1/open-close/{symbol}/{date}", async () => {
    await stocks.dailyOpenClose("AAPL", "2018-2-2", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v1/open-close/AAPL/2018-2-2");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("last quote call /v2/last/nbbo/{stocksTicker}", async () => {
    await stocks.lastQuote("AAPL", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v2/last/nbbo/AAPL");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("last trade call /v2/last/trade/{stocksTicker}", async () => {
    await stocks.lastTrade("AAPL", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v2/last/trade/AAPL");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("previous close call /v2/aggs/ticker/{stocksTicker}/prev", async () => {
    await stocks.previousClose("AAPL", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v2/aggs/ticker/AAPL/prev");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("quotes call /v3/quotes/{stockTicker}  ", async () => {
    await stocks.quotes("AAPL", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v3/quotes/AAPL");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("snapshot - all tickers call /v2/snapshot/locale/us/markets/stocks/tickers", async () => {
    await stocks.snapshotAllTickers(mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v2/snapshot/locale/us/markets/stocks/tickers");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("snapshot - gainers / losers call /v2/snapshot/locale/us/markets/stocks/{direction}", async () => {
    await stocks.snapshotGainersLosers("gainers", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v2/snapshot/locale/us/markets/stocks/gainers");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("snapshot ticker call /v2/snapshot/locale/us/markets/stocks/tickers/{ticker}", async () => {
    setStub({
      ticker: {
        day: {},
        lastTrade: {},
        lastQuote: {},
        min: {},
        prevDay: {},
      },
    });
    await stocks.snapshotTicker("AAPL", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v2/snapshot/locale/us/markets/stocks/tickers/AAPL");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("sma call /v1/indicators/sma/{stockTicker}", async () => {
    await stocks.sma("AAPL", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v1/indicators/sma/AAPL");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("ema call /v1/indicators/ema/{stockTicker}", async () => {
    await stocks.ema("AAPL", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v1/indicators/ema/AAPL");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("macd call /v1/indicators/macd/{stockTicker}", async () => {
    await stocks.macd("AAPL", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v1/indicators/macd/AAPL");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("rsi call /v1/indicators/rsi/{stockTicker}", async () => {
    await stocks.rsi("AAPL", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v1/indicators/rsi/AAPL");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("trades call /v3/trades/{stockTicker}", async () => {
    await stocks.trades("AAPL", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v3/trades/AAPL");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("apiKey and apiBase are passed", async () => {
    await stocks.trades("AAPL", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    fetchStub.getCalls()[0].args[0].indexOf(mocks.base).should.eql(0);
    fetchStub.getCalls()[0].args[1].headers.Authorization.should.eql(`Bearer ${mocks.key}`);
  });
  
  it("global options are applied if query is not passed in", async () => {
    await stocks.trades("AAPL");
    fetchStub.callCount.should.eql(1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.globalOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("all options are applied if query is undefined", async () => {
    await stocks.trades("AAPL", undefined, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("properly handles promise rejections", async () => {
    fetchStub?.restore();
    fetchStub = sandbox.stub(fetchModule, 'fetch').rejects('Error Message')
    stocks = stocksClient(mocks.key, mocks.base, mocks.globalOptions);
    return stocks.summaries({ 'ticker.any_of': "AAPL,TSLA" })
        .then(function() { throw new Error('function should throw error'); })
        .catch(function(e) { chai.expect(e).to.be.an.instanceof (Error); })
  });
});
