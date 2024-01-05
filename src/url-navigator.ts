// noinspection JSUnusedGlobalSymbols

/*
    URL Navigator
    -------------
    Wrappers for URL data.
    https://github.com/ministryotech/url-navigator
*/

/**
 * Gets a parameter by name from a provided URL.
 * @param name The name of the parameter.
 * @param url The URL to query.
 * @returns The parameter value, if found.
 */
const getParamByName = function(name: string, url: string) {
    name = name.replace(/[[\]]/g, '\\$&')
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
    const results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ''
    return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

/**
 * A helper for navigating around the web in code.
 */
const UrlNavigator = {

    /**
     * Navigates to the provided URL.
     * @param url The destination.
     */
    go(url: string) {
        location.href = url
    },

    /**
     * Navigates to the provided URL, replacing the current URL in the history.
     * @param url The destination.
     */
    redirect(url: string) {
        location.replace(url)
    },

    /**
     * Obtains a parameter from the provided URL.
     * @param url The URL.
     * @param name The name of the parameter.
     */
    getParameter(url: string, name: string): string | null {
        return getParamByName(name, url)
    },

    /**
     * Functions to operate on the current URL.
     */
    current: {

        /**
         * Get the protocol from the current URL.
         */
        get protocol() {
            return location.protocol
        },

        /**
         * Get the host from the current URL.
         */
        get host() {
            return location.host
        },

        /**
         * Get the current URL.
         */
        get url() {
            return location.href
        },

        /**
         * Get the named parameter from the current URL.
         * @param name The name of the parameter.
         */
        urlParameter(name: string): string | null {
            return getParamByName(name, location.href)
        },
    },
}

export default UrlNavigator
