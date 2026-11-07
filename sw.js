/* Italiano con Luke — offline support. Network first (always fresh when online), cache as fallback. */
var CACHE = 'italiano-luke-v7';
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) { return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); })); }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var req = e.request; if (req.method !== 'GET') return;
  var url = new URL(req.url);
  var photo = url.hostname === 'images.unsplash.com';
  var fonts = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (url.origin !== location.origin && !photo && !fonts) return;
  if (photo || fonts) {
    /* cache first for photos and fonts */
    e.respondWith(caches.open(CACHE).then(function (c) { return c.match(req).then(function (hit) { return hit || fetch(req).then(function (res) { if (res && (res.ok || res.type === 'opaque')) c.put(req, res.clone()); return res; }); }); }));
    return;
  }
  e.respondWith(
    fetch(req).then(function (res) { if (res && res.ok) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); } return res; })
      .catch(function () { return caches.match(req, { ignoreSearch: false }).then(function (hit) { return hit || caches.match('index.html'); }); })
  );
});
