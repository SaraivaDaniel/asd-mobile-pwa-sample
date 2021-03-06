'use strict';

const CACHE_NAME = 'static-cache-v1';

const FILES_TO_CACHE = [
    'images/offline.svg',
    'offline_001.html',
];

self.addEventListener('install', (evt) => {
    console.log('[ServiceWorker] Instalando');

    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[ServiceWorker] Fazendo cache da página estática');
            return cache.addAll(FILES_TO_CACHE);
        })
    );

    self.skipWaiting();
});
