const CACHE_NAME = 'portfolio-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/js/app.js',
    '/images/icons/icon-192x192.png',
    '/images/icons/icon-512x512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                // Add all URLs and catch any that fail
                return Promise.all(
                    urlsToCache.map(url =>
                        cache.add(url).catch(error => {
                            console.warn(`Failed to cache ${url}:`, error);
                            return Promise.resolve();
                        })
                    )
                );
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
            .catch(() => {
                // Return a fallback if both cache and network fail
                return new Response('Offline');
            })
    );
}); 