var C="savdo-v1";
self.addEventListener("install",function(e){self.skipWaiting();e.waitUntil(caches.open(C).then(function(c){return c.addAll(["./","index.html","config.js","manifest.json"])}).catch(function(){}))});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",function(e){var u=new URL(e.request.url);
  if(e.request.method!=="GET")return;
  if(u.origin!==location.origin&&u.hostname!=="www.gstatic.com")return;
  e.respondWith(fetch(e.request).then(function(r){var cp=r.clone();caches.open(C).then(function(c){c.put(e.request,cp)});return r})
    .catch(function(){return caches.match(e.request).then(function(r){return r||caches.match("index.html")})}))});
