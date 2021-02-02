(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{402:function(t,e,a){"use strict";a.r(e);var s=a(25),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"rate-limiting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rate-limiting"}},[t._v("#")]),t._v(" Rate Limiting "),a("Badge",{attrs:{text:"Since v3.5.0"}})],1),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),a("li",[a("a",{attrs:{href:"#usage"}},[t._v("Usage")])]),a("li",[a("a",{attrs:{href:"#reference"}},[t._v("Reference")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("Rate limiting is a crucial part of public API development. If you want to protect your data from being crawled, protect yourself from DDOS attacks, or provide different tiers of access to your API, you can do it using Goyave's built-in rate limiting middleware.")]),t._v(" "),a("p",[t._v("This middleware uses either a client's IP or an authenticated client's ID (or any other way of identifying a client you may need) and maps a quota, a quota duration and a request count to it. If a client exceeds the request quota in the given quota duration, this middleware will block and return "),a("code",[t._v("HTTP 429 Too Many Requests")]),t._v(".")]),t._v(" "),a("p",[t._v("The middleware will always add the following headers to the response:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("RateLimit-Limit")]),t._v(": containing the requests quota in the time window")]),t._v(" "),a("li",[a("code",[t._v("RateLimit-Remaining")]),t._v(": containing the remaining requests quota in the current window")]),t._v(" "),a("li",[a("code",[t._v("RateLimit-Reset")]),t._v(": containing the time remaining in the current window, specified in seconds")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("This implementation is based on this "),a("a",{attrs:{href:"https://tools.ietf.org/id/draft-polli-ratelimit-headers-04.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("IETF "),a("strong",[t._v("draft")]),a("OutboundLink")],1),t._v(". Being a "),a("strong",[t._v("draft")]),t._v(", this is "),a("strong",[t._v("not")]),t._v(" yet a standard.")])]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[t._v("The rate middleware initializer takes a function as parameter. This function will be executed "),a("strong",[t._v("for each")]),t._v(" request and returns a limiter configuration.")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/System-Glitch/goyave/v3/middleware/ratelimiter"')]),t._v("\n\nratelimiterMiddleware "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" ratelimiter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("goyave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ratelimiter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Config "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ratelimiter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Config "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        RequestQuota"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        QuotaDuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Minute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 100 requests per minute allowed")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Client IP will be used as identifier")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Middleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ratelimiterMiddleware"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("If you want to identify authenticated users, set the "),a("code",[t._v("ClientID")]),t._v(" field in the "),a("code",[t._v("ratelimiter.Config")]),t._v(". Additionally, you can set a different quota and quota duration based on the user.")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("ratelimiterMiddleware "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" ratelimiter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("goyave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ratelimiter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Config "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    user "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ratelimiter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Config "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ClientID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        RequestQuota"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RequestQuota"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        QuotaDuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Minute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("If either "),a("code",[t._v("RequestQuota")]),t._v(" or "),a("code",[t._v("QuotaDuration")]),t._v(" is equal to 0 in the returned "),a("code",[t._v("ratelimiter.Config")]),t._v(", the middleware is skipped and immediately passes to the next handler.")])]),t._v(" "),a("h2",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),a("h4",{attrs:{id:"ratelimiter-new"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ratelimiter-new"}},[t._v("#")]),t._v(" ratelimiter.New")]),t._v(" "),a("p",[t._v("Create a new rate limiter middleware.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameters")]),t._v(" "),a("th",[t._v("Return")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("configFn ratelimiter.ConfigFunc")])]),t._v(" "),a("td",[a("code",[t._v("goyave.Middleware")])])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[a("code",[t._v("ratelimiter.ConfigFunc")]),t._v(" is an alias for "),a("code",[t._v("func(request *goyave.Request) ratelimiter.Config")])])]),t._v(" "),a("h4",{attrs:{id:"ratelimiter-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ratelimiter-config"}},[t._v("#")]),t._v(" ratelimiter.Config")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Config "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Maximum number of requests in a client can send")]),t._v("\n    RequestQuota "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Duration or time taken until the quota expires and renews")]),t._v("\n    QuotaDuration time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Duration\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Unique identifier for requestors. Can be userID or IP")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Defaults to Remote Address if it is empty")]),t._v("\n    ClientID "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);