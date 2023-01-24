import fetch from "cross-fetch";

// es module named exports aren't mutable, so stubbing fetch for the tests wouldn't work with es modules.
// Adding this layer with fetch exported as an object key lets us stub it in tests

export default { fetch: (input, init) => fetch(input, init) };
