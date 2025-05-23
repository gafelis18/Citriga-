const CACHE_NAME = "citriga-cache-v1";
const urlsToCache = [
  "index.html",
  "dashboard.html",
  "clientes.html",
  "proveedores.html",
  "contratos.html",
  "albaranes.html",
  "anticipos.html",
  "factura.html",
  "style.css",
  "app.js",
  "firebase-config.js",
  "logo.png"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
