
/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
(function(){function N(p,r){function q(a){if(q[a]!==w)return q[a];var c;if("bug-string-char-index"==a)c="a"!="a"[0];else if("json"==a)c=q("json-stringify")&&q("json-parse");else{var e;if("json-stringify"==a){c=r.stringify;var b="function"==typeof c&&s;if(b){(e=function(){return 1}).toJSON=e;try{b="0"===c(0)&&"0"===c(new t)&&'""'==c(new A)&&c(u)===w&&c(w)===w&&c()===w&&"1"===c(e)&&"[1]"==c([e])&&"[null]"==c([w])&&"null"==c(null)&&"[null,null,null]"==c([w,u,null])&&'{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'==
    c({a:[e,!0,!1,null,"\x00\b\n\f\r\t"]})&&"1"===c(null,e)&&"[\n 1,\n 2\n]"==c([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==c(new C(-864E13))&&'"+275760-09-13T00:00:00.000Z"'==c(new C(864E13))&&'"-000001-01-01T00:00:00.000Z"'==c(new C(-621987552E5))&&'"1969-12-31T23:59:59.999Z"'==c(new C(-1))}catch(f){b=!1}}c=b}if("json-parse"==a){c=r.parse;if("function"==typeof c)try{if(0===c("0")&&!c(!1)){e=c('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');var n=5==e.a.length&&1===e.a[0];if(n){try{n=!c('"\t"')}catch(d){}if(n)try{n=
    1!==c("01")}catch(g){}if(n)try{n=1!==c("1.")}catch(m){}}}}catch(X){n=!1}c=n}}return q[a]=!!c}p||(p=k.Object());r||(r=k.Object());var t=p.Number||k.Number,A=p.String||k.String,H=p.Object||k.Object,C=p.Date||k.Date,G=p.SyntaxError||k.SyntaxError,K=p.TypeError||k.TypeError,L=p.Math||k.Math,I=p.JSON||k.JSON;"object"==typeof I&&I&&(r.stringify=I.stringify,r.parse=I.parse);var H=H.prototype,u=H.toString,v,B,w,s=new C(-0xc782b5b800cec);try{s=-109252==s.getUTCFullYear()&&0===s.getUTCMonth()&&1===s.getUTCDate()&&
    10==s.getUTCHours()&&37==s.getUTCMinutes()&&6==s.getUTCSeconds()&&708==s.getUTCMilliseconds()}catch(Q){}if(!q("json")){var D=q("bug-string-char-index");if(!s)var x=L.floor,M=[0,31,59,90,120,151,181,212,243,273,304,334],E=function(a,c){return M[c]+365*(a-1970)+x((a-1969+(c=+(1<c)))/4)-x((a-1901+c)/100)+x((a-1601+c)/400)};(v=H.hasOwnProperty)||(v=function(a){var c={},e;(c.__proto__=null,c.__proto__={toString:1},c).toString!=u?v=function(a){var c=this.__proto__;a=a in(this.__proto__=null,this);this.__proto__=
    c;return a}:(e=c.constructor,v=function(a){var c=(this.constructor||e).prototype;return a in this&&!(a in c&&this[a]===c[a])});c=null;return v.call(this,a)});B=function(a,c){var e=0,b,f,n;(b=function(){this.valueOf=0}).prototype.valueOf=0;f=new b;for(n in f)v.call(f,n)&&e++;b=f=null;e?B=2==e?function(a,c){var e={},b="[object Function]"==u.call(a),f;for(f in a)b&&"prototype"==f||v.call(e,f)||!(e[f]=1)||!v.call(a,f)||c(f)}:function(a,c){var e="[object Function]"==u.call(a),b,f;for(b in a)e&&"prototype"==
b||!v.call(a,b)||(f="constructor"===b)||c(b);(f||v.call(a,b="constructor"))&&c(b)}:(f="valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "),B=function(a,c){var e="[object Function]"==u.call(a),b,h=!e&&"function"!=typeof a.constructor&&F[typeof a.hasOwnProperty]&&a.hasOwnProperty||v;for(b in a)e&&"prototype"==b||!h.call(a,b)||c(b);for(e=f.length;b=f[--e];h.call(a,b)&&c(b));});return B(a,c)};if(!q("json-stringify")){var U={92:"\\\\",34:'\\"',8:"\\b",
    12:"\\f",10:"\\n",13:"\\r",9:"\\t"},y=function(a,c){return("000000"+(c||0)).slice(-a)},R=function(a){for(var c='"',b=0,h=a.length,f=!D||10<h,n=f&&(D?a.split(""):a);b<h;b++){var d=a.charCodeAt(b);switch(d){case 8:case 9:case 10:case 12:case 13:case 34:case 92:c+=U[d];break;default:if(32>d){c+="\\u00"+y(2,d.toString(16));break}c+=f?n[b]:a.charAt(b)}}return c+'"'},O=function(a,c,b,h,f,n,d){var g,m,k,l,p,r,s,t,q;try{g=c[a]}catch(z){}if("object"==typeof g&&g)if(m=u.call(g),"[object Date]"!=m||v.call(g,
        "toJSON"))"function"==typeof g.toJSON&&("[object Number]"!=m&&"[object String]"!=m&&"[object Array]"!=m||v.call(g,"toJSON"))&&(g=g.toJSON(a));else if(g>-1/0&&g<1/0){if(E){l=x(g/864E5);for(m=x(l/365.2425)+1970-1;E(m+1,0)<=l;m++);for(k=x((l-E(m,0))/30.42);E(m,k+1)<=l;k++);l=1+l-E(m,k);p=(g%864E5+864E5)%864E5;r=x(p/36E5)%24;s=x(p/6E4)%60;t=x(p/1E3)%60;p%=1E3}else m=g.getUTCFullYear(),k=g.getUTCMonth(),l=g.getUTCDate(),r=g.getUTCHours(),s=g.getUTCMinutes(),t=g.getUTCSeconds(),p=g.getUTCMilliseconds();
    g=(0>=m||1E4<=m?(0>m?"-":"+")+y(6,0>m?-m:m):y(4,m))+"-"+y(2,k+1)+"-"+y(2,l)+"T"+y(2,r)+":"+y(2,s)+":"+y(2,t)+"."+y(3,p)+"Z"}else g=null;b&&(g=b.call(c,a,g));if(null===g)return"null";m=u.call(g);if("[object Boolean]"==m)return""+g;if("[object Number]"==m)return g>-1/0&&g<1/0?""+g:"null";if("[object String]"==m)return R(""+g);if("object"==typeof g){for(a=d.length;a--;)if(d[a]===g)throw K();d.push(g);q=[];c=n;n+=f;if("[object Array]"==m){k=0;for(a=g.length;k<a;k++)m=O(k,g,b,h,f,n,d),q.push(m===w?"null":
    m);a=q.length?f?"[\n"+n+q.join(",\n"+n)+"\n"+c+"]":"["+q.join(",")+"]":"[]"}else B(h||g,function(a){var c=O(a,g,b,h,f,n,d);c!==w&&q.push(R(a)+":"+(f?" ":"")+c)}),a=q.length?f?"{\n"+n+q.join(",\n"+n)+"\n"+c+"}":"{"+q.join(",")+"}":"{}";d.pop();return a}};r.stringify=function(a,c,b){var h,f,n,d;if(F[typeof c]&&c)if("[object Function]"==(d=u.call(c)))f=c;else if("[object Array]"==d){n={};for(var g=0,k=c.length,l;g<k;l=c[g++],(d=u.call(l),"[object String]"==d||"[object Number]"==d)&&(n[l]=1));}if(b)if("[object Number]"==
    (d=u.call(b))){if(0<(b-=b%1))for(h="",10<b&&(b=10);h.length<b;h+=" ");}else"[object String]"==d&&(h=10>=b.length?b:b.slice(0,10));return O("",(l={},l[""]=a,l),f,n,h,"",[])}}if(!q("json-parse")){var V=A.fromCharCode,W={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},b,J,l=function(){b=J=null;throw G();},z=function(){for(var a=J,c=a.length,e,h,f,k,d;b<c;)switch(d=a.charCodeAt(b),d){case 9:case 10:case 13:case 32:b++;break;case 123:case 125:case 91:case 93:case 58:case 44:return e=
    D?a.charAt(b):a[b],b++,e;case 34:e="@";for(b++;b<c;)if(d=a.charCodeAt(b),32>d)l();else if(92==d)switch(d=a.charCodeAt(++b),d){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:e+=W[d];b++;break;case 117:h=++b;for(f=b+4;b<f;b++)d=a.charCodeAt(b),48<=d&&57>=d||97<=d&&102>=d||65<=d&&70>=d||l();e+=V("0x"+a.slice(h,b));break;default:l()}else{if(34==d)break;d=a.charCodeAt(b);for(h=b;32<=d&&92!=d&&34!=d;)d=a.charCodeAt(++b);e+=a.slice(h,b)}if(34==a.charCodeAt(b))return b++,e;l();default:h=
    b;45==d&&(k=!0,d=a.charCodeAt(++b));if(48<=d&&57>=d){for(48==d&&(d=a.charCodeAt(b+1),48<=d&&57>=d)&&l();b<c&&(d=a.charCodeAt(b),48<=d&&57>=d);b++);if(46==a.charCodeAt(b)){for(f=++b;f<c&&(d=a.charCodeAt(f),48<=d&&57>=d);f++);f==b&&l();b=f}d=a.charCodeAt(b);if(101==d||69==d){d=a.charCodeAt(++b);43!=d&&45!=d||b++;for(f=b;f<c&&(d=a.charCodeAt(f),48<=d&&57>=d);f++);f==b&&l();b=f}return+a.slice(h,b)}k&&l();if("true"==a.slice(b,b+4))return b+=4,!0;if("false"==a.slice(b,b+5))return b+=5,!1;if("null"==a.slice(b,
        b+4))return b+=4,null;l()}return"$"},P=function(a){var c,b;"$"==a&&l();if("string"==typeof a){if("@"==(D?a.charAt(0):a[0]))return a.slice(1);if("["==a){for(c=[];;b||(b=!0)){a=z();if("]"==a)break;b&&(","==a?(a=z(),"]"==a&&l()):l());","==a&&l();c.push(P(a))}return c}if("{"==a){for(c={};;b||(b=!0)){a=z();if("}"==a)break;b&&(","==a?(a=z(),"}"==a&&l()):l());","!=a&&"string"==typeof a&&"@"==(D?a.charAt(0):a[0])&&":"==z()||l();c[a.slice(1)]=P(z())}return c}l()}return a},T=function(a,b,e){e=S(a,b,e);e===
w?delete a[b]:a[b]=e},S=function(a,b,e){var h=a[b],f;if("object"==typeof h&&h)if("[object Array]"==u.call(h))for(f=h.length;f--;)T(h,f,e);else B(h,function(a){T(h,a,e)});return e.call(a,b,h)};r.parse=function(a,c){var e,h;b=0;J=""+a;e=P(z());"$"!=z()&&l();b=J=null;return c&&"[object Function]"==u.call(c)?S((h={},h[""]=e,h),"",c):e}}}r.runInContext=N;return r}var K=typeof define==="function"&&define.amd,F={"function":!0,object:!0},G=F[typeof exports]&&exports&&!exports.nodeType&&exports,k=F[typeof window]&&
    window||this,t=G&&F[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;!t||t.global!==t&&t.window!==t&&t.self!==t||(k=t);if(G&&!K)N(k,G);else{var L=k.JSON,Q=k.JSON3,M=!1,A=N(k,k.JSON3={noConflict:function(){M||(M=!0,k.JSON=L,k.JSON3=Q,L=Q=null);return A}});k.JSON={parse:A.parse,stringify:A.stringify}}K&&define(function(){return A})}).call(this);

(function(scope){var _toString=Object.prototype.toString;function isDate(o){return'[object Date]'==_toString.call(o);}
    function isRegExp(o){return'[object RegExp]'==_toString.call(o);}
    var Cookie={get:function get(name){return Cookie.has(name)?Cookie.list()[name]:null;},has:function has(name){return new RegExp("(?:;\\s*|^)"+encodeURIComponent(name)+'=').test(document.cookie);},list:function list(nameRegExp){var pairs=document.cookie.split(';'),pair,result={};for(var index=0,len=pairs.length;index<len;++index){pair=pairs[index].split('=');pair[0]=pair[0].replace(/^\s+|\s+$/,'');if(!isRegExp(nameRegExp)||nameRegExp.test(pair[0]))
        result[decodeURIComponent(pair[0])]=decodeURIComponent(pair[1]);}
        return result;},remove:function remove(name,options){var opt2={};for(var key in(options||{}))opt2[key]=options[key];opt2.expires=new Date(0);opt2.maxAge=-1;return Cookie.set(name,null,opt2);},set:function set(name,value,options){options=options||{};var def=[encodeURIComponent(name)+'='+encodeURIComponent(value)];if(options.path)def.push('path='+options.path);if(options.domain)def.push('domain='+options.domain);var maxAge='maxAge'in options?options.maxAge:('max_age'in options?options.max_age:options['max-age']),maxAgeNbr;if('undefined'!=typeof maxAge&&'null'!=typeof maxAge&&(!isNaN(maxAgeNbr=parseFloat(maxAge))))
        def.push('max-age='+maxAgeNbr);console.log(isDate(options.expires));var expires=isDate(options.expires)?options.expires.toUTCString():options.expires;if(expires)def.push('expires='+expires);if(options.secure)def.push('secure');def=def.join(';');document.cookie=def;console.log(def);return def;}};scope.Cookie=Cookie;})(window);

if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback, thisArg) {
        var T, k;
        if (this == null) {
            throw new TypeError('this is null or not defined');
        }
        var O = Object(this);
        var len = O.length >>> 0;
        if (typeof callback !== "function") {
            throw new TypeError(callback + ' is not a function');
        }
        if (arguments.length > 1) {
            T = thisArg;
        }
        k = 0;
        while (k < len) {
            var kValue;
            if (k in O) {
                kValue = O[k];
                callback.call(T, kValue, k, O);
            }
            k++;
        }
    };
}

if (!Date.now) {
    Date.now = function now() {
        return new Date().getTime();
    };
}

if (!Date.prototype.toISOString) {
    (function() {
        function pad(number) {
            if (number < 10) {
                return '0' + number;
            }
            return number;
        }

        Date.prototype.toISOString = function() {
            return this.getUTCFullYear() +
                '-' + pad(this.getUTCMonth() + 1) +
                '-' + pad(this.getUTCDate()) +
                'T' + pad(this.getUTCHours()) +
                ':' + pad(this.getUTCMinutes()) +
                ':' + pad(this.getUTCSeconds()) +
                '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
                'Z';
        };
    }());
}

if (!document.querySelectorAll) {
    document.querySelectorAll = function (selectors) {
        var style = document.createElement('style'), elements = [], element;
        document.documentElement.firstChild.appendChild(style);
        document._qsa = [];

        style.styleSheet.cssText = selectors + '{x-qsa:expression(document._qsa && document._qsa.push(this))}';
        window.scrollBy(0, 0);
        style.parentNode.removeChild(style);

        while (document._qsa.length) {
            element = document._qsa.shift();
            element.style.removeAttribute('x-qsa');
            elements.push(element);
        }
        document._qsa = null;
        return elements;
    };
}

if (!document.querySelector) {
    document.querySelector = function (selectors) {
        var elements = document.querySelectorAll(selectors);
        return (elements.length) ? elements[0] : null;
    };
}

if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(searchString, position) {
        var subjectString = this.toString();
        if (position === undefined || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
    };
}

if (!Event.prototype.preventDefault) {
    Event.prototype.preventDefault=function() {
        this.returnValue=false;
    };
}

if (!Event.prototype.stopPropagation) {
    Event.prototype.stopPropagation=function() {
        this.cancelBubble=true;
    };
}

if (!Element.prototype.addEventListener) {
    var eventListeners=[];

    var addEventListener=function(type,listener /*, useCapture (will be ignored) */) {
        var self=this;
        var wrapper=function(e) {
            e.target=e.srcElement;
            e.currentTarget=self;
            if (listener.handleEvent) {
                listener.handleEvent(e);
            } else {
                listener.call(self,e);
            }
        };
        if (type=="DOMContentLoaded") {
            var wrapper2=function(e) {
                if (document.readyState=="complete") {
                    wrapper(e);
                }
            };
            document.attachEvent("onreadystatechange",wrapper2);
            eventListeners.push({object:this,type:type,listener:listener,wrapper:wrapper2});

            if (document.readyState=="complete") {
                var e=new Event();
                e.srcElement=window;
                wrapper2(e);
            }
        } else {
            this.attachEvent("on"+type,wrapper);
            eventListeners.push({object:this,type:type,listener:listener,wrapper:wrapper});
        }
    };
    var removeEventListener=function(type,listener /*, useCapture (will be ignored) */) {
        var counter=0;
        while (counter<eventListeners.length) {
            var eventListener=eventListeners[counter];
            if (eventListener.object==this && eventListener.type==type && eventListener.listener==listener) {
                if (type=="DOMContentLoaded") {
                    this.detachEvent("onreadystatechange",eventListener.wrapper);
                } else {
                    this.detachEvent("on"+type,eventListener.wrapper);
                }
                eventListeners.splice(counter, 1);
                break;
            }
            ++counter;
        }
    };
    Element.prototype.addEventListener=addEventListener;
    Element.prototype.removeEventListener=removeEventListener;
    if (HTMLDocument) {
        HTMLDocument.prototype.addEventListener=addEventListener;
        HTMLDocument.prototype.removeEventListener=removeEventListener;
    }
    if (Window) {
        Window.prototype.addEventListener=addEventListener;
        Window.prototype.removeEventListener=removeEventListener;
    }
}

(function (data) {
    try {
        data.endpoint;
        data.config.cookieID;
        data.config.cookieDuration;
        data.config.sessionID;
        data.config.sessionDuration;
        data.config.clientId;
        data.config.projectId;
        data.config.sourceApi;
        data.config.version;
        data.config.eventTypes.pageView;
        data.config.channels.browser;
    } catch (e) {
        if (window.console) {
            console.error('Data is malformed, sad times; exiting.');
        }

        return;
    }

    var config = data.config,
        endpoint = data.endpoint,

        cookieId = Cookie.get(config.cookieID),
        sessionId = Cookie.get(config.sessionID),

        urlParams = getURLParams(),
        testMode = !!urlParams.tm,

        events = [],
        processingEventQueue = false,

        div = document.createElement('div'),
        form = document.createElement('form'),
        iframe = document.createElement('iframe'),
        input = document.createElement('input'),

        additionalEventProperties = getAdditionalEventProperties();

    function getURLParams () {
        var params = {},
            search = (config.iframe ? document.referrer : window.location.href).split('?');

        if (search[1]) {
            search[1].split('&').forEach(function (item) {
                item = item.split('=');
                params[decodeURIComponent(item[0])] = decodeURIComponent(item[1]);
            });
        }

        return params;
    }

    function getAdditionalEventProperties () {
        var props = {},
            prop;

        if (config.additionalEventProperties) {
            for (var attr in config.additionalEventProperties) {
                prop = config.additionalEventProperties[attr];

                switch (prop.location) {
                    case 'cookie':
                        props[attr] = findPropertyInCookies(prop);

                        break;

                    case 'gtm':
                        props[attr] = findPropertyInGTM(prop);

                        break;

                    case 'window':
                        props[attr] = findPropertyInWindow(prop);

                        break;

                    case 'cssText':
                        props[attr] = findTextFromCSS(prop);

                        break;
                }
            }
        }

        return props;
    }

    function findPropertyInGTM (prop) {
        var value;

        if (window.dataLayer && typeof window.dataLayer[0] === 'object') {
            value = findValueFromProperty(window.dataLayer[0][prop.name], prop);
        }

        return value;
    }

    function findPropertyInCookies (prop) {
        var value = Cookie.get(prop.name);

        if (value) {
            value = findValueFromProperty(value, prop);
        }

        return value;
    }

    function findPropertyInWindow (prop) {
        var tree = prop.name.split('.'),
            value = window[tree.shift()];

        while (tree.length) {
            value = value[tree.shift()];
        }

        if (typeof value === 'object' && prop.returnJSONField) {
            value = findValueFromProperty(value, prop);
        }

        return value;
    }

    function findTextFromCSS (prop) {
        var element = document.querySelector(prop.name);

        if (element) {
            return element.innerHTML;
        }
    }

    function findValueFromProperty (value, prop) {
        if (prop.returnJSONField) {
            value = JSON.parse(value);

            if (value) {
                value = value[prop.returnJSONField];
            }
        }

        return value;
    }

    function uuid () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }

    function init () {
        setupElements();
        identify();
        sendEvent(config.eventTypes.pageView, getPageMeta(config.eventTypes.pageView));
        listenToEvents();
    }

    function setupElements () {
        iframe.name = 'tumra_iframe_' + Date.now();
        iframe.src = 'about:blank';

        input.name = config.payloadName;
        input.type = 'hidden';

        form.appendChild(input);
        form.action = endpoint;
        form.method = 'POST';
        form.target = iframe.name;

        div.style.display = 'none';
        div.appendChild(iframe);
        div.appendChild(form);

        document.body.appendChild(div);
    }

    function identify () {
        var expires;

        if (!cookieId) {
            expires = new Date();
            expires.setSeconds(expires.getSeconds() + config.cookieDuration);
            cookieId = uuid();
            Cookie.set(config.cookieID, cookieId, {
                expires: expires
            });
        }

        if (!sessionId) {
            expires = new Date();
            expires.setSeconds(expires.getSeconds() + config.sessionDuration);
            sessionId = uuid();
            Cookie.set(config.sessionID, sessionId, {
                expires: expires
            });
        }
    }

    function getPageMeta (eventType, defaults) {
        var meta = {
            messageId: uuid(),
            anonymousId: cookieId,
            sessionId: sessionId,
            channel: config.channels.browser,
            context: {
                library: {
                    name: config.libraryName,
                    version: config.libraryVersion
                },
                page: {
                    url: config.iframe ? document.referrer : window.location.href,
                    referrer: document.referrer,
                    title: document.title
                },
                tzOffset: (new Date()).getTimezoneOffset()
            },
            clientId: config.clientId,
            projectId: config.projectId,
            eventType: eventType,
            timestamp: Date.now(),
            properties: additionalEventProperties
        };

        if (defaults) {
            for (var attr in defaults) {
                meta[attr] = defaults[attr];
            }
        }

        return meta;
    }

    function listenToEvents () {
        config.listenToEvents.forEach(function (event) {
            document.documentElement.addEventListener(event, handleListenedEvent);
        });
    }

    function handleListenedEvent (event) {
        var element;

        if (config.listenToEvents.indexOf(event.type) !== -1) {
            element = event.target;

            sendEvent(event.type, getPageMeta(event.type, {
                trigger: event.type,
                css: getDomPath(element)
            }));
        }
    }

    function getDomPath (el) {
        var stack = [];

        while (el.parentNode !== null) {
            var sibCount = 0;
            var sibIndex = 0;

            for (var i = 0; i < el.parentNode.childNodes.length; i++) {
                var sib = el.parentNode.childNodes[i];
                if (sib.nodeName === el.nodeName) {
                    if (sib === el) {
                        sibIndex = sibCount;
                    }
                    sibCount++;
                }
            }

            if (el.hasAttribute('id') && el.id !== '') {
                stack.unshift(el.nodeName.toLowerCase() + '#' + el.id);
            } else if (sibCount > 1) {
                stack.unshift(el.nodeName.toLowerCase() + ':eq(' + sibIndex + ')');
            } else {
                stack.unshift(el.nodeName.toLowerCase());
            }

            el = el.parentNode;
        }

        return stack.slice(1).join(' > ');
    }

    function sendEvent (type, payload) {
        events.push(payload);

        processEventQueue();
    }

    function processEventQueue () {
        var event;

        if (!events.length) {
            processingEventQueue = false;
            return;
        }

        if (processingEventQueue) {
            return;
        }

        processingEventQueue = true;
        processEvent(events.shift());
    }

    function processEvent (event) {
        iframe.onload = function () {
            processingEventQueue = false;
            processEventQueue();
        };

        input.value = JSON.stringify(event);
        form.submit();
    }

    function check () {
        if (document.body) {
            init();
        } else {
            setTimeout(check, 9);
        }
    }

    check();
})(/* json goes here */
{
        "endpoint": "https://api2.tumra.com/events/track",
        "config": {
            "cookieID": "__tdev",
            "cookieDuration": 31536000,
            "sessionID": "__tvis",
            "sessionDuration": 31536000,
            "clientId": "b274803a-26d6-433e-aaad-a7d228ee3957",
            "projectId": "foo",
            "libraryName": "tumra-js",
            "libraryVersion": "2.0",
            "payloadName": "payload",
            "eventTypes": {
                "pageView": "page"
            },
            "listenToEvents": [
                "click",
                "submit",
                "change",
                "scroll",
                "mouseenter",
                "mouseleave"
            ],
            "channels": {
                "browser": "browser"
            },
            "additionalEventProperties": {
                "quoteID": {
                    "location": "cookie",
                    "name": "quoteRequest",
                    "returnJSONField": "Ref"
                },
                "applicationID": {
                    "location": "gtm",
                    "name": "applicationID"
                },
                "screenHeight": {
                    "location": "window",
                    "name": "screen.availHeight"
                },
                "screenWidth": {
                    "location": "window",
                    "name": "screen.availWidth"
                },
                "screenDensity": {
                    "location": "window",
                    "name": "devicePixelRatio"
                },
                "mainTitle": {
                    "location": "cssText",
                    "name": ".well h1"
                }
            }
        }
    }

);
