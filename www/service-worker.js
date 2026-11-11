const CACHE_NAME = "itma-academy-shell-v4";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./mobile.css",
  "./app.js",
  "./mobile-mode.js",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);

  // Do not intercept APIs, Drive, media, or non-GET requests.
  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(new Request(request, { cache: "no-store" })).then(response => {
      if (response && response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
      }
      return response;
    }).catch(() => caches.match(request).then(cached => cached || caches.match("./index.html")))
  );
});
