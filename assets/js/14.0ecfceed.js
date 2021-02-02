(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{385:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"logging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[t._v("#")]),t._v(" Logging "),a("Badge",{attrs:{text:"Since v2.8.0"}})],1),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),a("li",[a("a",{attrs:{href:"#custom-loggers"}},[t._v("Custom loggers")])]),a("li",[a("a",{attrs:{href:"#common-and-combined-access-logs"}},[t._v("Common and Combined access logs")]),a("ul",[a("li",[a("a",{attrs:{href:"#custom-format"}},[t._v("Custom format")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("Logging is an important part of all applications. The framework provides a standard and flexible way to log accesses, errors and regular information. This standard logging feature should be preferred in all applications and modules developed using Goyave for consistency across the framework's environment.")]),t._v(" "),a("h2",{attrs:{id:"custom-loggers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-loggers"}},[t._v("#")]),t._v(" Custom loggers")]),t._v(" "),a("p",[t._v("The framework provides three "),a("a",{attrs:{href:"https://golang.org/pkg/log/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Go standard loggers"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("goyave.Logger")]),t._v(": the logger for regular and miscellaneous information. Outputs to "),a("code",[t._v("os.Stdout")]),t._v(" with "),a("code",[t._v("log.LstdFlags")]),t._v(" by default.")]),t._v(" "),a("li",[a("code",[t._v("goyave.AccessLogger")]),t._v(": the logger used by the logging middleware (see below). Outputs to "),a("code",[t._v("os.Stdout")]),t._v(" with no flags by default.")]),t._v(" "),a("li",[a("code",[t._v("goyave.ErrLogger")]),t._v(": the logger for errors and stacktraces. Outputs to "),a("code",[t._v("os.Stderr")]),t._v(" with "),a("code",[t._v("log.LstdFlags")]),t._v(" by default.")])]),t._v(" "),a("p",[t._v("All these loggers can be modified or replaced entirely. Modifications to standard loggers should be done "),a("strong",[t._v("before")]),t._v(" calling "),a("code",[t._v("goyave.Start()")]),t._v(".")]),t._v(" "),a("p",[a("strong",[t._v("Example:")])]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Replace de default logger")]),t._v("\n    goyave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Logger "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Stdout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myapp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Ldate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Ltime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Lshortfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    goyave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Starting..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    goyave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegisterStartupHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        goyave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Started."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" goyave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("registerRoutes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("goyave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ExitCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"common-and-combined-access-logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-and-combined-access-logs"}},[t._v("#")]),t._v(" Common and Combined access logs")]),t._v(" "),a("p",[t._v("To enable logging of accesses using the "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Common_Log_Format",target:"_blank",rel:"noopener noreferrer"}},[t._v("Common Log Format"),a("OutboundLink")],1),t._v(", simply register the "),a("code",[t._v("CommonLogMiddleware")]),t._v(". Alternatively, you can use "),a("code",[t._v("CombinedLogMiddleware")]),t._v(" for Combined Log Format.")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/System-Glitch/goyave/v3/log"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/System-Glitch/goyave/v3"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerRoutes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("goyave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Common log format")]),t._v("\n    router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Middleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CommonLogMiddleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Combined log format")]),t._v("\n    router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Middleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CombinedLogMiddleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Each request the server receives will be logged using the "),a("code",[t._v("goyave.AccessLogger")]),t._v(" logger.")]),t._v(" "),a("h4",{attrs:{id:"log-commonlogmiddleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-commonlogmiddleware"}},[t._v("#")]),t._v(" log.CommonLogMiddleware")]),t._v(" "),a("p",[t._v("CommonLogMiddleware captures response data and outputs it to the default logger using the common log format.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameters")]),t._v(" "),a("th",[t._v("Return")])])]),t._v(" "),a("tbody",[a("tr",[a("td"),t._v(" "),a("td",[a("code",[t._v("goyave.Middleware")])])])])]),t._v(" "),a("h4",{attrs:{id:"log-combinedlogmiddleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-combinedlogmiddleware"}},[t._v("#")]),t._v(" log.CombinedLogMiddleware")]),t._v(" "),a("p",[t._v("CombinedLogMiddleware captures response data and outputs it to the default logger using the combined log format.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameters")]),t._v(" "),a("th",[t._v("Return")])])]),t._v(" "),a("tbody",[a("tr",[a("td"),t._v(" "),a("td",[a("code",[t._v("goyave.Middleware")])])])])]),t._v(" "),a("h3",{attrs:{id:"custom-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-format"}},[t._v("#")]),t._v(" Custom format")]),t._v(" "),a("p",[t._v("It is possible to implement custom formatters for access logs. A "),a("code",[t._v("Formatter")]),t._v(" is a function with the following signature:")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("goyave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("goyave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" length "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n")])])]),a("ul",[a("li",[a("code",[t._v("now")]),t._v(" is the time at which the server received the request")]),t._v(" "),a("li",[a("code",[t._v("length")]),t._v(" the length of the response body")])]),t._v(" "),a("p",[a("strong",[t._v("Example:")])]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CustomFormatter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("goyave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("goyave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" length "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sprintf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%s %s %s %s %d %d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    now"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TimestampFormat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    strconv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("QuoteToASCII")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetStatus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"log-middleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-middleware"}},[t._v("#")]),t._v(" log.Middleware")]),t._v(" "),a("p",[t._v("Middleware captures response data and outputs it to the default logger using the given formatter.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameters")]),t._v(" "),a("th",[t._v("Return")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("formatter Formatter")])]),t._v(" "),a("td",[a("code",[t._v("goyave.Middleware")])])])])]),t._v(" "),a("p",[a("strong",[t._v("Example:")])]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Middleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Middleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CustomFormatter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);