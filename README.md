# node-express-logging
A wrapper around [winston](https://github.com/winstonjs/winston) and [express-winston](https://github.com/bithavoc/express-winston) for logging within Express/NodeJS applications

### Installation

```
npm install --save node-express-logging
```

### Usage

```javascript
const { logger, loggerMiddleware } = require('node-express-logging');
```

See example usage in [`example/`](/example).

### Configuration

Set configuration as environment variables:

|Variable|Accepts|Description|
|-|-|-|
|`LOG_COLORS`|`[true\|false]`|Colorize log output (this is mutually exclusive with `LOG_JSON`)|
|`LOG_JSON`|`[true\|false]`|Output logs in JSON format|
|`LOG_LEVEL`|[`[levels]`](https://github.com/winstonjs/winston#logging-levels)|The level at which to log|
|`LOG_META`|`[true\|false]`|Whether or not to log additonal metadata in the request middleware|
