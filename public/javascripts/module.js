(function(b){function a(d,l,e){var g=d.split("."),m=b,j,k;if(typeof l!=="function"){e=l;l=null}e=e||c();for(var f=0,h=g.length;f<h;f++){k=(f==h-1);m[g[f]]=(k?e:m[g[f]]||{});m=m[g[f]]}if(l){l.call(m,m)}return m}a.fetch=function(f){var h=f.split("."),e=b;for(var d=0,g=h.length;d<g;d++){e=e[h[d]];if(!e){break}}return e};a.run=function(f,d){var e=a.fetch(f);if(e){return e.apply(null,d)}};function c(){var e,d;e=function(){var f=new d();f.initialize.apply(f,arguments);return f};d=function(){};d.prototype=e.prototype;e.fn=e.prototype;e.fn.initialize=function(){};return e}b.Module=a})(window);