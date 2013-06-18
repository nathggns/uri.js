(function(window, undefined) {

    var URIParser = {

        /**
         * Parse URI query strings
         * @param  {string} query_string The query string to parse
         * @param  {bool}   decode       Should values be URI decoded?
         * @return {object}              The decoded query string
         */
        query: function(query_string, decode) {
            // Default decode to true
            if (typeof decode === 'undefined') decode = true;

            // Replace the starting ?, if it is there
            query_string = query_string.replace(/^\?/, '');

            // Split the query string into key value parts
            var parts = query_string.split('&');

            // Iniate the return value
            var query = {};

            // Loop through each other the parts, splitting it into keys and values
            for (var i = 0, l = parts.length; i < l; i++) {
                var part = parts[i];
                var key;
                var val = '';

                if (part.match('=')) {
                    // If it is in the format key=val
                    
                    // Split into the key and value by the = symbol
                    var part_parts = part.split('=');

                    // Assign key and value
                    key = part_parts[0];
                    val = part_parts[1];
                } else {
                    // If there is no value, just set the key to the full part
                    key = part;
                }

                // If we actually have a value, URI decode it
                if (val !== '') {
                    val = decodeURIComponent(val);
                }

                // Assign to the return value
                query[key] = val;
            }

            return query;
        },

        _extend: function() {
            // If we have more than two objects to merge
            if (arguments.length > 2) {
                // Get the first object.
                // Everything will merge into this.
                var obj = Array.prototype.shift.call(arguments);

                // While we have any more arguments, call extend with the initial obj and the next argument
                while (arguments.length > 0) {
                    obj = arguments.callee(obj, Array.prototype.shift.call(arguments));
                }

                return obj;
            }

            // Pull our objects out of the arguments array.
            var one = arguments[0];
            var two = arguments[1];

            // Loop through the second object to merge it with the first
            for (var key in two) {
                // If this key actually belongs to the second argument
                if (typeof two.hasOwnProperty === 'undefined' || two.hasOwnProperty(key)) {
                    var current = two[key];

                    if (typeof current === 'object' && typeof one[key] === 'object') {
                        // Deep copy
                        one[key] = extend(one[key], current);
                    } else {
                        one[key] = current;
                    }
                }
            }

            return one;
        }
    }

    if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        // CommonJS, Node, PhantomJS, etc modules
        module.exports = exports = URIParser;
    } else if (typeof define !== 'undefined') {
        // RequireJS Module
        define(function(require, exports, module) {
            module.exports = exports = URIParser;
        });
    } else {
        // Being included directly in the browser
        window.URIParser = URIParser;
        
        var location = window.location;
        var defaults = {
            auto: {
                query: false
            },

            keys: {
                query: 'query'
            }
        };

        if (!location.query_opts) {
            location.query_opts = {};
        };

        var opts = URIParser._extend({}, defaults, location.query_opts);
        delete location['query_opts'];

        if (opts.auto || (typeof opts.auto === 'object' && opts.auto.query)) {
            location[opts.keys.query] = URIParser.query(location.search);
        }
    }
})(window);