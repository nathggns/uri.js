uri.js
======

URI Parser (and soon to be URI encoder) in Javascript. 

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

## Todo

 - Add build minification
 - Add query string encoding
