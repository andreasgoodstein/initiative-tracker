export default null;
declare const self: ServiceWorkerGlobalScope;

const CACHE_NAME = 'the-initiative-tracker-v1';

const urlsToCache = [''];

self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        const normalizedUrl = new URL(event.request.url);
        normalizedUrl.search = '';

        const fetchResponseP = fetch(normalizedUrl.toString());
        const fetchResponseCloneP = fetchResponseP.then((r) => r.clone());

        event.waitUntil(
          (async () => {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(
              normalizedUrl.toString(),
              await fetchResponseCloneP
            );
          })()
        );

        // Prefer the cached response, falling back to the fetch response.
        return (await caches.match(normalizedUrl.toString())) || fetchResponseP;
      })()
    );
  }
});
