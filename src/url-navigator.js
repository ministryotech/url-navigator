// noinspection JSUnusedGlobalSymbols

/*
    URL Navigator
    -------------
    Wrappers for URL data.
    https://github.com/ministryotech/url-navigator
*/
(function() {

    var root = window

    /**
     * Gets a parameter by name from a provided URL.
     * @param {string} name The name of the parameter.
     * @param {string} url The URL to query.
     * @returns {?string} The parameter value, if found.
     */
    var getParamByName = function(name, url) {
        name = name.replace(/[[\]]/g, '\\$&')
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
        var results = regex.exec(url)
        if (!results) return null
        if (!results[2]) return ''
        return decodeURIComponent(results[2].replace(/\+/g, ' '))
    }

    /**
     * A helper for navigating around the web in code.
     */
    var UrlNavigator = {

        /**
         * Navigates to the provided URL.
         * @param {string} url The destination.
         */
        go: function(url) {
            location.href = url
        },

        /**
         * Navigates to the provided URL, replacing the current URL in the history.
         * @param {string} url The destination.
         */
        redirect: function(url) {
            location.replace(url)
        },

        /**
         * Obtains a parameter from the provided URL.
         * @param {string} url The URL.
         * @param {string} name The name of the parameter.
         * @returns {?string}
         */
        getParameter: function(url, name) {
            return getParamByName(name, url)
        },

        /**
         * Functions to operate on the current URL.
         */
        current: {

            /**
             * Get the protocol from the current URL.
             * @returns {string}
             */
            protocol: function() {
                return location.protocol
            },

            /**
             * Get the host from the current URL.
             * @returns {string}
             */
            host: function() {
                return location.host
            },

            /**
             * Get the current URL.
             * @returns {string}
             */
            url: function() {
                return location.href
            },

            /**
             * Get the named parameter from the current URL.
             * @returns {string}
             * @param {string} name The name of the parameter.
             * @returns {?string}
             */
            urlParameter: function(name) {
                return getParamByName(name, location.href)
            },
        },
    }

    /*--------------------------------------------------------------------------*/

    // Export library
    // noinspection JSUnresolvedReference - define check for require.js module support.
    if (typeof define === 'function' && define.amd) {
        // noinspection JSUnresolvedReference - define check for require.js module support.
        define('url-navigator', [], function() {
            return UrlNavigator
        })
    } else if (typeof exports === 'object') {
        module.exports = UrlNavigator
    } else {
        root.UrlNavigator = UrlNavigator
    }

})()
