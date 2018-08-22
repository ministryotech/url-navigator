# Introduction
This project provides simple functions for working with URLs.

```
var urlNavigator = require("url-navigator");

var protocol = urlNavigator.current.protocol();
var host = urlNavigator.current.host();
var url = urlNavigator.current.href();
var urlParameter = urlNavigator.current.urlParameter("search");

urlNavigator.go("http://www.google.co.uk");

urlNavigator.redirect("http://www.google.com");

var fishString = urlNavigator.getParameter("http://www.google.co.uk?name=keith&searh=fish&color=red", "search")

```

# The Ministry of Technology Open Source Products
Welcome to The Ministry of Technology open source products. All open source Ministry of Technology products are distributed under the MIT License for maximum re-usability. Details on more of our products and services can be found on our website at http://www.ministryotech.co.uk

Our other open source repositories can be found here...

* [https://bitbucket.org/ministryotech](https://bitbucket.org/ministryotech)
* [https://github.com/ministryotech](https://github.com/ministryotech)
* [https://github.com/tiefling](https://github.com/tiefling)

Newer content prefers Github. Bitbucket is no longer actively used.

### Where can I get it?
You can download the package for this project from any of the following package managers...

- **NPM** - [https://www.npmjs.com/url-navigator](https://www.npmjs.com/url-navigator

### Contribution guidelines
If you would like to contribute to the project, please contact me.

### Who do I talk to?
* Keith Jackson - keith@ministryotech.co.uk
