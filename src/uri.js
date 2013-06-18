(function(window, undefined) {

    var URIParser = {
        query: function(query_string, decode) {
            if (typeof decode === 'undefined') decode = true;

            query_string = query_string.replace(/^\?/, '');
            var parts = query_string.split('&');
            var query = {};

            for (var i = 0, l = parts.length; i < l; i++) {
                var part = parts[i];
                var key;
                var val = '';

                if (part.match('=')) {
                    var part_parts = part.split('=');
                    key = part_parts[0];
                    val = part_parts[1];
                } else {
                    key = part;
                }

                if (val !== '') {
                    val = decodeURIComponent(val);
                }

                query[key] = val;
            }

            return query;
        },

        _extend: function() {
            if (arguments.length > 2) {
                var obj = Array.prototype.shift.call(arguments);

                while (arguments.length > 0) {
                    obj = arguments.callee(obj, Array.prototype.shift.call(arguments));
                }

                return obj;
            }

            var one = arguments[0];
            var two = arguments[1];

            for (var key in two) {
                if (typeof two.hasOwnProperty === 'undefined' || two.hasOwnProperty(key)) {
                    var current = two[key];

                    if (typeof current === 'object' && typeof one[key] === 'object') {
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
        module.exports = exports = URIParser;
    } else if (typeof define !== 'undefined') {
        define(function(require, exports, module) {
            module.exports = exports = URIParser;
        });
    } else {
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