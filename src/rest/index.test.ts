import * as chai from "chai";

import * as rest from ".";

describe("[EXPORT] rest endpoints", () => {
  chai.should();
  it("> reference", () => {
    rest.should.be.an("object");
    rest.reference.should.be.an("object");
  });
  it("> stocks", () => {
    rest.stocks.should.be.an("object");
  });
  it("> forex", () => {
    rest.forex.should.be.an("object");
  });
  it("> crypto", () => {
    rest.crypto.should.be.an("object");
  });
});
