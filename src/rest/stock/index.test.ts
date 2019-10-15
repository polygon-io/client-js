import * as sinon from "sinon";
import * as chai from "chai";

import * as request from "../transport/request";

describe("[REST] Stock / equities", () => {
  chai.should();
  let requestStub;
  const sandbox = sinon.createSandbox();
  beforeEach(() => {
    requestStub = sandbox.stub(request, "get");
  });
  afterEach(() => {
    sandbox.restore();
  });
});
