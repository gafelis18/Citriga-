self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('citriga-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/app.js',
        '/firebase-config.js',
        '/contratos.html',
        '/albaranes.html',
        '/agricultores.html',
        '/comercios.html',
        '/anticipos.html',
        '/dashboard.html',
        '/factura.html',
        '/listas.html'
      ]);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});