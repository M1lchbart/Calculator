const CACHE_NAME = 'pwa-cache-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './icon-192x192.png',
    './icon-256x256.png',
    './icon-384x384.png',
    './icon-512x512.png'
];

// Installationsphase: Dateien werden in den Cache geladen
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Aktivierungsphase: Alte Caches löschen
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Fetch-Event: Netzwerk- oder Cache-Antwort bereitstellen
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});