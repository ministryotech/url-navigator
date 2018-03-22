/*
    URL Navigator
    -------------
    Wrappers for URL data.

    https://github.com/ministryotech/url-navigator
*/
(function() {

    const root = window

    const getParamByName = function(name, url) {
        if (!url) url = location.href
        name = name.replace(/[[\]]/g, "\\$&")
        const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)")
        const results = regex.exec(url)
        if (!results) return null
        if (!results[2]) return ""
        return decodeURIComponent(results[2].replace(/\+/g, " "))
    }

    const funcs = {
        go: function(url) { 
            location.href = url 
        },
        redirect: function(url) { 
            location.replace(url) 
        },
        getParameter: function(url, name) { 
            return getParamByName(name, url) 
        },
        current: {
            protocol: function() { 
                return location.protocol 
            },
            host: function() { 
                return location.host 
            },
            url: function() { 
                return location.href 
            },
            urlParameter: function(name) { 
                return getParamByName(name) 
            }
        }
    }

    // Exports to the global scope
    if (typeof define === "function" && define.amd) {
        define("url-navigator", [], function() { return funcs })
    } else if (typeof exports === "object") {
        module.exports = funcs
    } else {
        root.UrlNavigator = funcs
    }
    
})()