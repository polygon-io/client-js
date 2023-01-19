import * as sinon from 'sinon';
import * as chai from 'chai';
import * as request from '../transport/request';
import { forexClient } from './index';

describe('[REST] Forex / Currencies', () => {
	chai.should();
	let requestStub;
	const sandbox = sinon.createSandbox();
	const fx = forexClient('fakeApiKey');
	beforeEach(() => {
		requestStub = sandbox.stub(request, 'get').returns(Promise.resolve({}));
	});
	afterEach(() => {
		sandbox.restore();
	});

	it('aggregates call /v2/aggs/ticker/{ticker}/range/{multiplier}/{timespan}/{from}/{to}', async () => {
		requestStub.restore();
		requestStub = sandbox.stub(request, 'get').returns(
			Promise.resolve({
				results: []
			})
		);
		await fx.aggregates('EURCHF', 1, 'day', '2019-01-01', '2019-02-01');
		requestStub.callCount.should.eql(1);
		requestStub
			.getCalls()[0]
			.args[0].should.eql(
				'/v2/aggs/ticker/EURCHF/range/1/day/2019-01-01/2019-02-01'
			);
	});

	it('aggregates grouped daily call /v2/aggs/grouped/locale/market/{date}', async () => {
		requestStub.restore();
		requestStub = sandbox.stub(request, 'get').returns(
			Promise.resolve({
				results: []
			})
		);
		await fx.aggregatesGroupedDaily('2019-02-01');
		requestStub.callCount.should.eql(1);
		requestStub
			.getCalls()[0]
			.args[0].should.eql(
				'/v2/aggs/grouped/locale/global/market/forex/2019-02-01'
			);
	});

	it('previous close call /v2/aggs/ticker/{ticker}/prev', async () => {
		requestStub.restore();
		requestStub = sandbox.stub(request, 'get').returns(
			Promise.resolve({
				results: []
			})
		);
		await fx.previousClose('EURCHF');
		requestStub.callCount.should.eql(1);
		requestStub.getCalls()[0].args[0].should.eql('/v2/aggs/ticker/EURCHF/prev');
	});

	it('quotes call /v3/quotes/{fxTicker}', async () => {
		requestStub.restore();
		requestStub = sandbox.stub(request, 'get').returns(
			Promise.resolve({
				ticks: []
			})
		);
		await fx.quotes('C:EUR-USD');
		requestStub.callCount.should.eql(1);
		requestStub.getCalls()[0].args[0].should.eql('/v3/quotes/C:EUR-USD');
	});

	it('last quote call /v1/last_quote/currencies/{from}/{to}', async () => {
		await fx.lastQuote('USD', 'AUD');
		requestStub.callCount.should.eql(1);
		requestStub
			.getCalls()[0]
			.args[0].should.eql('/v1/last_quote/currencies/USD/AUD');
	});

	it('conversion call /v1/conversion/{from}/{to}', async () => {
		await fx.conversion('AUD', 'USD');
		requestStub.callCount.should.eql(1);
		requestStub.getCalls()[0].args[0].should.eql('/v1/conversion/AUD/USD');
	});

	it('snapshot - all tickers call /v2/snapshot/locale/global/markets/forex/tickers', async () => {
		requestStub.restore();
		requestStub = sandbox.stub(request, 'get').returns(
			Promise.resolve({
				tickers: []
			})
		);
		await fx.snapshotAllTickers();
		requestStub.callCount.should.eql(1);
		requestStub
			.getCalls()[0]
			.args[0].should.eql('/v2/snapshot/locale/global/markets/forex/tickers');
	});

	it('snapshot - gainers / losers call /v2/snapshot/locale/global/markets/forex/{direction}', async () => {
		requestStub.restore();
		requestStub = sandbox.stub(request, 'get').returns(
			Promise.resolve({
				tickers: []
			})
		);
		await fx.snapshotGainersLosers('gainers');
		requestStub.callCount.should.eql(1);
		requestStub
			.getCalls()[0]
			.args[0].should.eql('/v2/snapshot/locale/global/markets/forex/gainers');
	});

	it('snapshot ticker call /v2/snapshot/locale/global/markets/forex/tickers/{ticker}', async () => {
		sandbox.restore();
		requestStub = sandbox.stub(request, 'get').returns(
			Promise.resolve({
				ticker: {
					day: {},
					lastTrade: {},
					lastQuote: {},
					min: {},
					prevDay: {}
				}
			})
		);
		await fx.snapshotTicker('AAPL');
		requestStub.callCount.should.eql(1);
		requestStub
			.getCalls()[0]
			.args[0].should.eql(
				'/v2/snapshot/locale/global/markets/forex/tickers/AAPL'
			);
	});

	it('sma call /v1/indicators/sma/{fxTicker}', async () => {
		await fx.sma('C:EUR-USD');
		requestStub.callCount.should.eql(1);
		requestStub
			.getCalls()[0]
			.args[0].should.eql('/v1/indicators/sma/C:EUR-USD');
	});

	it('ema call /v1/indicators/ema/{fxTicker}', async () => {
		await fx.ema('C:EUR-USD');
		requestStub.callCount.should.eql(1);
		requestStub
			.getCalls()[0]
			.args[0].should.eql('/v1/indicators/ema/C:EUR-USD');
	});

	it('macd call /v1/indicators/macd/{fxTicker}', async () => {
		await fx.macd('C:EUR-USD');
		requestStub.callCount.should.eql(1);
		requestStub
			.getCalls()[0]
			.args[0].should.eql('/v1/indicators/macd/C:EUR-USD');
	});

	it('rsi call /v1/indicators/rsi/{fxTicker}', async () => {
		await fx.rsi('C:EUR-USD');
		requestStub.callCount.should.eql(1);
		requestStub
			.getCalls()[0]
			.args[0].should.eql('/v1/indicators/rsi/C:EUR-USD');
	});
});
