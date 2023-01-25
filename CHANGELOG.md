## [7.0.0](https://github.com/polygon-io/client-js/v6.2.0...v7.0.0) (2023-01-25)

> Description

### Upgrade Steps
* [ACTION REQUIRED]

### Node Version
Version 7 exports ES Modules instead of CommonJS. To use this version in a Node project, you will need to use Node 16 or above.

### Headers and Request Options
The headers parameter has been replaced with a request options parameter which accepts headers. If you were passing headers to an endpoint, your code should change from

```javascript
rest.forex.previousClose("C:EURUSD", {}, myHeaders)
```

to

```javascript
rest.forex.previousClose("C:EURUSD", {}, { headers: myHeaders })
```

You can now pass request options other than headers in the same object. You can pass any of the [available request options for fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options) in the request options object.

You can also pass request options when initializing the client like:

```javascript
const rest = restClient("API KEY", "https://api.polygon.io", { headers: myHeaders });
```

These will be applied to each request unless overridden by options passed directly to the endpoint.

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