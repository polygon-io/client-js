import * as chai from "chai";
import { restClient } from "./index.js";

describe("[EXPORT] REST Endpoints", () => {
  chai.should();
  const rest = restClient("invalid");
  it("> crypto", () => {
    rest.should.be.an("object");
    rest.crypto.should.be.an("object");
  });
  it("> forex", () => {
    rest.forex.should.be.an("object");
  });
  it("> reference", () => {
    rest.reference.should.be.an("object");
  });
  it("> options", () => {
    rest.options.should.be.an("object");
  });
  it("> stocks", () => {
    rest.stocks.should.be.an("object");
  });
});
