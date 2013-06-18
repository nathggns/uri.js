uri.js
======

URI Parser (and soon to be URI encoder) in Javascript. 

**[Changelog](Changelog.md)**

## Features

 - Parses query strings in Javascript `URI.query` - URL decodes too. 
 - Creates `window.location.query` if included directly as a script and configured to do so.
 - Includes function to extend objects (similar to `jQuery.extend`) `URI.extend`

Supports use as in many module situations (CommonJS, PhantomJS, RequireJS, NodeJS), or simply including as a script in the browser.

## Usage

```js
var query = URI.query('?key=val&key2=val2');
// { key: 'val', key2: 'val2' }

// As a RequireJS Module
require(['require', 'uri.js'], function(require, URI) {
    // ..
});

// As a node module
var URI = require('uri.js');
```

### In the browser

`uri.js` can be setup to automatically parse the current page's query string, and assign it to `window.location.query`. This is done using an object assigned to `window.location.query_opts` *(Please let me know if you can think of a better way)*. To set it up to do so, do the following, the `window.location.query_opts` object should look like so.

```js
{
    auto: {
        query: true
    }
}
```

You can also change which key on the `location` object that the parsed query string is assigned to, using the `window.location.query_opts` object. For example, to change the key to `query_string`, you would use the following object.

```js
{
    keys: {
        query: 'query_string'
    }   
}

## Contributing

If you would like to contribute to `uri.js`, make sure you follow the standard styleguide in place across `uri.js`, and that every feature you write has been tested for. Do NOT increment `version` in `package.json`, or touch the `dist` folder. Any pull requests on the `master` branch will be rejected, please pull request on the `dev` branch.

**[View Contributing.md for full information](Contributing.md)**

## Tests

`uri.js` uses mocha for its tests.

```
mocha tests
// ...
```

## Todo

 - Add query string encoding
 - Full URI parsing.
