import * as sinon from "sinon";
import * as chai from "chai";

import * as request from "../transport/request";
import { optionsClient } from "./index";

describe("[REST] Options", () => {
  chai.should();
  let requestStub;
  const sandbox = sinon.createSandbox();
  const stocks = optionsClient("invalid");
  beforeEach(() => {
    requestStub = sandbox
      .stub(request, "get")
      .returns(Promise.resolve({ ticks: [], results: [], tickers: [] }));
  });
  afterEach(() => {
    sandbox.restore();
  });

  it("aggregates call /v2/aggs/ticker/{ticker}/range/{multiplier}/{timespan}/{from}/{to}", async () => {
    requestStub.restore();
    requestStub = sandbox.stub(request, "get").returns(
      Promise.resolve({
        results: []
      })
    );
    await stocks.aggregates("AAPL", 1, "day", "2019-01-01", "2019-02-01");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql(
        "/v2/aggs/ticker/AAPL/range/1/day/2019-01-01/2019-02-01"
      );
  });

	it("daily open close call /v1/open-close/{symbol}/{date}", async () => {
    await stocks.dailyOpenClose("AAPL", "2018-2-2");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v1/open-close/AAPL/2018-2-2");
  });

	it("previous close call /v2/aggs/ticker/{stocksTicker}/prev", async () => {
		await stocks.previousClose("AAPL");
		requestStub.callCount.should.eql(1);
		requestStub
			.getCalls()[0]
			.args[0].should.eql("/v2/aggs/ticker/AAPL/prev");
	});

	it("last trade call /v2/last/trade/{stocksTicker}", async () => {
		await stocks.lastTrade("AAPL");
		requestStub.callCount.should.eql(1);
		requestStub
			.getCalls()[0]
			.args[0].should.eql("/v2/last/trade/AAPL");
	});

	it("snapshot - option contract call /v3/snapshot/options/{underlyingAsset}/{optionContract}", async () => {
    await stocks.snapshotOptionContract("AAPL", "O:AAPL230616C00150000");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v3/snapshot/options/AAPL/O:AAPL230616C00150000");
  });
});
