# unscape-json-recursively

> Unescapes JSON recursively

# Install

```shell
npm install --save unscape-json-recursively
```

# Usage

```js
JSON.unscapeRecursively = require('unscape-json-recursively');

const abcd = "{\"a\":\"{\\\"b\\\":\\\"{\\\\\\\"c\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"d\\\\\\\\\\\\\\\":null}\\\\\\\"}\\\"}\"}";
const abcd_unscaped = JSON.unscapeRecursively(abcd);

console.log(JSON.stringify(abcd_unscaped));
/* 
    Result:
    {"a":{"b":{"c":{"d":null}}}}
*/

const efg = "{\"e\":\"{\\\"f\\\":\\\"[{\\\\\\\"g\\\\\\\":null}]\\\"}\"}";
const efg_unscaped = JSON.unscapeRecursively(efg);

console.log(JSON.stringify(efg_unscaped));
/* 
    Result:
    {"e":{"f":[{"g":null}]}}
*/

const hij = {h:{i:"{\"j\":null}"}}
const hij_unscaped = JSON.unscapeRecursively(hij);

console.log(JSON.stringify(hij_unscaped));
/* 
    Result:
    {"h":{"i":{"j":null}}}
*/

const k = null
const k_unscaped = JSON.unscapeRecursively(k);

console.log(JSON.stringify(k_unscaped));
/* 
    Result:
    null
*/
```

# License

MIT