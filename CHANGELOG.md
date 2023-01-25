## [7.0.0](https://github.com/polygon-io/client-js/v6.2.0...v7.0.0) (2023-01-25)

> Description

### Upgrade Steps

#### Node Version
To use this version in a node project you will need to use node 16 or above. This change was made to support exporting ES Modules instead of CommonJS Modules. The ES Modules exported by this package should be fully supported in Node 16+.

#### Headers and Request Options
The headers parameter has been replaced with a request options parameter which accepts headers. If you were passing headers to an endpoint, your code should change from

```javascript
rest.forex.previousClose("C:EURUSD", {}, myHeadersObject)
```

to

```javascript
rest.forex.previousClose("C:EURUSD", {}, { headers: myHeadersObject })
```

This change was made to allow additional request options to be passed to the request. You can pass any of the [available request options for fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options) in the request options object, and they will be passed through to the fetch request.

You can also pass request options when initializing the client like:

```javascript
const rest = restClient("API KEY", "https://api.polygon.io", { headers: myHeaders });
```

These will be applied to each request unless overridden by options passed directly to the endpoint function.

You can find more examples in the [configuration examples file](./examples/rest/configuration.js).

### Breaking Changes
* Node 16+ compilation target
* Pass entire request options as optional parameter instead of just headers

### New Features
* Allow request options to be passed globally to the client, or individually to endpoint functions

### Bug Fixes
* Pass api key in header instead of query parameter to improve security

### Other Changes
* Improved test coverage
* Additional examples