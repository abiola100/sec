const CACHE_NAME = 'secondary-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/manifest.json',
  '/terms/first-term/agric-first/agric-first.html',
  '/terms/second-term/agric-second/agric-second.html',
  '/terms/third-term/agric-third/agric-third.html',
  '/terms/first-term/agric-first/first-term-js2-agric.html',
  '/terms/second-term/agric-second/second-term-js2-agric.html',
  '/terms/third-term/agric-third/third-term-js3-agric.html',
  '/terms/first-term/agric-first/first-term-js3-agric.html',
  '/terms/second-term/agric-second/second-term-js3-agric.html',
  '/terms/third-term/agric-third/third-term-js3-agric.html',

  '/style.css',   
  '/style2.css',
  '/script.js',
  '/script2.js'
  // Add CSS, JS, fonts, etc., if applicable
];


self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate: optional cleanup for old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
