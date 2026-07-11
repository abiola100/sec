// This is the "Offline page" service worker

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const CACHE = "secondary-offline-v2";
const offlineFallbackPage = "offline.html";


// Force new service worker to activate
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});


// Install Service Worker and cache offline files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => {
        return cache.addAll([
          offlineFallbackPage,
          './style2.css',
          './images/goo.png'
        ]);
      })
  );
});


// Remove old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE) {
            return caches.delete(key);
          }
        })
      );
    })
  );

  return self.clients.claim();
});


// Enable navigation preload
if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}


// Offline fallback for pages
self.addEventListener('fetch', (event) => {

  if (event.request.mode === 'navigate') {

    event.respondWith(
      (async () => {

        try {

          const preloadResp = await event.preloadResponse;

          if (preloadResp) {
            return preloadResp;
          }


          const networkResp = await fetch(event.request);

          return networkResp;


        } catch (error) {

          const cache = await caches.open(CACHE);

          const cachedResp = await cache.match(offlineFallbackPage);

          return cachedResp;

        }

      })()
    );

  }

});


// CSS files
workbox.routing.registerRoute(
  ({request}) => request.destination === 'style',
  new workbox.strategies.NetworkFirst({
    cacheName: 'secondary-styles',
  })
);


// Images
workbox.routing.registerRoute(
  ({request}) => request.destination === 'image',
  new workbox.strategies.CacheFirst({
    cacheName: 'secondary-images',
  })
);