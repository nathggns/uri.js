uri.js
======

URI Parser (and soon to be URI encoder) in Javascript. 

**[Changelog](Changelog.md)**

## Features

 - Parses query strings in Javascript `URI.query` - URL decodes too. 
 - Creates `window.location.query` if included directly as a script.
 - Includes function to extend objects (similar to `jQuery.extend`) `URI.extend`

Supports use as in many module situations (CommonJS, PhantomJS, RequireJS, NodeJS), or simply including as a script in the browser.

## Usage

```js
var query = URI.query('?key=val&key2=val2');
// { key: 'val', key2: 'val2' }
```

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
