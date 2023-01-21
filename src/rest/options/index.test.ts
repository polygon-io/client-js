import * as sinon from "sinon";
import * as chai from "chai";

import * as fetch from "cross-fetch";
import { optionsClient } from "./index";

describe("[REST] Options", () => {
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
  let options;
  const sandbox = sinon.createSandbox();
  const getPath = (url) => url.slice(mocks.base.length, url.indexOf('?'));
  const setStub = (returnVal, status = 200) => {
    fetchStub?.restore();
    fetchStub = sandbox.stub(fetch, "default").returns(
      Promise.resolve({ json: () => Promise.resolve(returnVal), status } as Response)
    );
    options = optionsClient(mocks.key, mocks.base, mocks.globalOptions);
  }
  beforeEach(async () => {
    setStub({});
  });
  afterEach(() => {
    sandbox.restore();
  });

  it("aggregates call /v2/aggs/ticker/{ticker}/range/{multiplier}/{timespan}/{from}/{to}", async () => {
    setStub({ results: [] });
    await options.aggregates("AAPL", 1, "day", "2019-01-01", "2019-02-01", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql(
      "/v2/aggs/ticker/AAPL/range/1/day/2019-01-01/2019-02-01"
    );
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("daily open close call /v1/open-close/{symbol}/{date}", async () => {
    await options.dailyOpenClose("AAPL", "2018-2-2", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v1/open-close/AAPL/2018-2-2");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("previous close call /v2/aggs/ticker/{optionsTicker}/prev", async () => {
    await options.previousClose("AAPL", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v2/aggs/ticker/AAPL/prev");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("trades call /v3/trades/{optionsTicker}", async () => {
    await options.trades("O:TSLA210903C00700000", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v3/trades/O:TSLA210903C00700000");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("last trade call /v2/last/trade/{optionsTicker}", async () => {
    await options.lastTrade("AAPL", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v2/last/trade/AAPL");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("quotes call /v3/quotes/{optionsTicker}  ", async () => {
    await options.quotes("O:SPY241220P00720000", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v3/quotes/O:SPY241220P00720000");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("snapshot - option contract call /v3/snapshot/options/{underlyingAsset}/{optionContract}", async () => {
    await options.snapshotOptionContract("AAPL", "O:AAPL230616C00150000", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v3/snapshot/options/AAPL/O:AAPL230616C00150000");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("snapshots - option chain /v3/snapshot/options/{underlyingAsset}", async () => {
    await options.snapshotOptionChain("AAPL", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v3/snapshot/options/AAPL");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("sma call /v1/indicators/sma/{optionTicker}", async () => {
    await options.sma("O:AAPL230616C00150000", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v1/indicators/sma/O:AAPL230616C00150000");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("ema call /v1/indicators/ema/{optionTicker}", async () => {
    await options.ema("O:AAPL230616C00150000", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v1/indicators/ema/O:AAPL230616C00150000");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("macd call /v1/indicators/macd/{optionTicker}", async () => {
    await options.macd("O:AAPL230616C00150000", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v1/indicators/macd/O:AAPL230616C00150000");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("rsi call /v1/indicators/rsi/{optionTicker}", async () => {
    await options.rsi("O:AAPL230616C00150000", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v1/indicators/rsi/O:AAPL230616C00150000");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("apiKey and apiBase are passed", async () => {
    await options.rsi("O:AAPL230616C00150000", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    fetchStub.getCalls()[0].args[0].indexOf(mocks.base).should.eql(0);
    fetchStub.getCalls()[0].args[1].headers.Authorization.should.eql(`Bearer ${mocks.key}`);
  });

  it("global options are applied if query is not passed in", async () => {
    await options.rsi("O:AAPL230616C00150000");
    fetchStub.callCount.should.eql(1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.globalOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("all options are applied if query is undefined", async () => {
    await options.rsi("O:AAPL230616C00150000", undefined, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });
});
