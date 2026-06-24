const CACHE='devibox-map-v01';
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html','./manibus-map.jpeg','./9F25521C-1D83-4829-BCE9-D1CD37F1B170.png','./manifest.webmanifest']))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
