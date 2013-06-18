uri.js
======

URI Parser (and soon to be URI encoder) in Javascript. 

## Features

 - Parses query strings in Javascript `URIParser.query` - URL decodes too. 
 - Creates `window.location.query` if included directly as a script.
 - Includes function to extend objects (similar to `jQuery.extend`) `URIParser._extend`

Supports use as CommomJS or RequireJS module, or simply including in the browser.

## Usage

```js
var query = URIParser.query('?key=val&key2=val2');
// { key: 'val', key2: 'val2' }
```

## Todo

 - Rename `URIParser` to `URI`
 - Add tests
 - Add build minification
 - Add query string encoding
