import * as sinon from "sinon";
import * as chai from "chai";
import fetchModule from '../transport/fetch';
import {  getWithGlobals } from '../transport/request';

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
  const sandbox = sinon.createSandbox();
  const getPath = (url) => url.slice(mocks.base.length, url.indexOf('?'));
  const setStub = (returnVal, status = 200) => {
    fetchStub?.restore();
    fetchStub = sandbox.stub(fetchModule, 'fetch').returns(
      Promise.resolve({ json: () => Promise.resolve(returnVal), status } as Response)
    );
  }
  const setStubs = (returnVal1, returnVal2, status = 200) => {
    fetchStub?.restore();
    fetchStub = sandbox.stub(fetchModule, 'fetch').onCall(0).returns(
      Promise.resolve({ json: () => Promise.resolve(returnVal1), status } as Response)
    ).onCall(1).returns(
      Promise.resolve({ json: () => Promise.resolve(returnVal2), status } as Response)      
    );
  }
  beforeEach(async () => {
    setStub({ ticks: [], results: [], tickers: [] });
  });
  afterEach(() => {
    sandbox.restore();
  });

  it("Returns the expected result when pagination is not enabled", async () => {
    setStub({ results: [{ a: 1 }] });
    const requestFn = getWithGlobals(mocks.key, mocks.base, mocks.globalOptions);
		const response = await requestFn("/v2/aggs/ticker/AAPL/range/1/day/2019-01-01/2019-02-01", mocks.query, mocks.overrideOptions);
		response.results[0].a.should.eql(1);
    fetchStub.callCount.should.eql(1);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql(
      "/v2/aggs/ticker/AAPL/range/1/day/2019-01-01/2019-02-01"
    );
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });


  it("Returns the expected result when pagination is enabled", async () => {
    setStubs({ results: [{ a: 1 }], next_url: "/v2/aggs/ticker/AAPL/range/1/day/2019-01-01/2019-02-02" }, { results: [{ b: 2 }],  });
    const requestFn = getWithGlobals(mocks.key, mocks.base, {...mocks.globalOptions, pagination: true});
		const response = await requestFn("/v2/aggs/ticker/AAPL/range/1/day/2019-01-01/2019-02-01", mocks.query, mocks.overrideOptions);
    response.results.length.should.eql(2);
		response.results[0].a.should.eql(1);
    response.results[1].b.should.eql(2);
    fetchStub.callCount.should.eql(2);
    getPath(fetchStub.getCalls()[0].args[0]).should.eql(
      "/v2/aggs/ticker/AAPL/range/1/day/2019-01-01/2019-02-01"
    );
    fetchStub.getCalls()[0].args[0].indexOf(mocks.query.query1).should.be.gt(-1);
    fetchStub.getCalls()[0].args[1].referrer.should.eql(mocks.overrideOptions.referrer);
    fetchStub.getCalls()[0].args[1].headers.header1.should.eql(mocks.globalOptions.headers.header1);
  });
});
