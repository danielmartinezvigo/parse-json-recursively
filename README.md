> Unescapes JSON recursively

# Install

```shell
npm install --save unscape-json-recursively
```

# Usage

```js
JSON.unscapeRecursively = require('unscape-json-recursively');

const abcd = "{\"a\":\"{\\\"b\\\":\\\"{\\\\\\\"c\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"d\\\\\\\\\\\\\\\":null}\\\\\\\"}\\\"}\"}";
const unscaped = JSON.unscapeRecursively(abcd);

console.log(JSON.stringify(unscaped));
/* 
    Result:
    {"a":{"b":{"c":{"d":null}}}}
*/
```

# License

MIT