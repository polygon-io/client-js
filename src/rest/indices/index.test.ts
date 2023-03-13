import * as sinon from "sinon";
import * as chai from "chai";
import fetchModule from '../transport/fetch';

import { IIndicesClient, indicesClient } from "./index.js";

describe("[REST] Indices", () => {
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
  let indices: IIndicesClient;
  const sandbox = sinon.createSandbox();
  const getPath = (url) => url.slice(mocks.base.length, url.indexOf('?'));
  const setStub = (returnVal, status = 200) => {
    fetchStub?.restore();
    fetchStub = sandbox.stub(fetchModule, 'fetch').returns(
      Promise.resolve({ json: () => Promise.resolve(returnVal), status } as Response)
    );
    indices = indicesClient(mocks.key, mocks.base, mocks.globalOptions);
  }
  beforeEach(async () => {
    setStub({ ticks: [], results: [], tickers: [] });
  });
  afterEach(() => {
    sandbox.restore();
  });

  it("aggregates call /v2/aggs/ticker/{ticker}/range/{multiplier}/{timespan}/{from}/{to}", async () => {
    setStub({ results: [] });
    await indices.aggregates("AAPL", 1, "day", "2019-01-01", "2019-02-01", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql(
      "/v2/aggs/ticker/AAPL/range/1/day/2019-01-01/2019-02-01"
    );
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("dailyOpenClose call /v1/open-close/{symbol}/{date}", async () => {
    await indices.dailyOpenClose("AAPL", "2018-2-2", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v1/open-close/AAPL/2018-2-2");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("previous close call /v2/aggs/ticker/{indexTicker}/prev", async () => {
    await indices.previousClose("AAPL", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v2/aggs/ticker/AAPL/prev");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("snapshot index call /v3/indices", async () => {
    setStub({
      index: {
        market_status: "open",
        name: "open",
        session: {
          change: -50.01,
          change_percent: -1.45,
          close: 3822.39,
          high: 3834.41,
          low: 38217.11,
          open: 3827.38,
          previous_close: 3812.19
        },
        ticker: "I:SPX",
        type: "Indices",
        value: 3822.39
      },
    });
    await indices.snapshotTicker(mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v3/snapshot/indices/");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("sma call /v1/indicators/sma/{indexTicker}", async () => {
    await indices.sma("AAPL", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v1/indicators/sma/AAPL");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("ema call /v1/indicators/ema/{indexTicker}", async () => {
    await indices.ema("AAPL", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v1/indicators/ema/AAPL");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("macd call /v1/indicators/macd/{indexTicker}", async () => {
    await indices.macd("AAPL", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v1/indicators/macd/AAPL");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("rsi call /v1/indicators/rsi/{stockTicker}", async () => {
    await indices.rsi("AAPL", mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql("/v1/indicators/rsi/AAPL");
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("apiKey and apiBase are passed", async () => {
    await indices.snapshotTicker(mocks.query, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    fetchStub.getCalls()[0].args[0].indexOf(mocks.base).should.eql(0);
    fetchStub.getCalls()[0].args[1].headers.Authorization.should.eql(`Bearer ${mocks.key}`);
  });
  
  it("global options are applied if query is not passed in", async () => {
    await indices.snapshotTicker();
    fetchStub.callCount.should.eql(1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.globalOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("all options are applied if query is undefined", async () => {
    await indices.snapshotTicker(undefined, mocks.overrideOptions);
    fetchStub.callCount.should.eql(1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });

  it("properly handles promise rejections", async () => {
    fetchStub?.restore();
    fetchStub = sandbox.stub(fetchModule, 'fetch').rejects('Error Message')
    indices = indicesClient(mocks.key, mocks.base, mocks.globalOptions);
    return indices.snapshotTicker()
        .then(() => { throw new Error('function should throw error'); })
        .catch((e) => { chai.expect(e).to.be.an.instanceof (Error); })
  });
});
