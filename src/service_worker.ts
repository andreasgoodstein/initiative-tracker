import { CAN_UPDATE_KEY } from './config';
/* istanbul ignore file */

export default null;
declare const self: ServiceWorkerGlobalScope;

const CACHE_NAME = 'the-initiative-tracker-v1';
const URLS_TO_CACHE = [self.location.origin];

self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(asyncPopulateCacheOnInstall);
});

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(asyncReturnThenUpdateCacheResource(event));
  }
});

async function asyncPopulateCacheOnInstall() {
  const cache = await caches.open(CACHE_NAME);

  cache.addAll(URLS_TO_CACHE);
}

async function asyncReturnThenUpdateCacheResource(event: FetchEvent) {
  const urlString = getNormalizedUrlString(event.request.url);

  const fetchResponsePromise = fetch(urlString);
  const responsePromiseClone = fetchResponsePromise.then((r) => r.clone());

  event.waitUntil(
    asyncUpdateCacheWithLatestResponse(
      urlString,
      responsePromiseClone,
      event.clientId || event.resultingClientId
    )
  );

  // Prefer the cached response, falling back to the fetch response.
  return (await caches.match(urlString)) || fetchResponsePromise;
}

function getNormalizedUrlString(requestUrl: string) {
  const normalizedUrl = new URL(requestUrl);
  normalizedUrl.search = '';

  return normalizedUrl.toString();
}

async function asyncUpdateCacheWithLatestResponse(
  urlString: string,
  responsePromise: Promise<Response>,
  clientId: string
) {
  const response = await responsePromise;
  const responseToCompare = response.clone();

  const cacheIsOutdated = await responseHasUpdated(
    urlString,
    responseToCompare
  );
  if (cacheIsOutdated) {
    postMessageToClient(clientId);
  }

  const cache = await caches.open(CACHE_NAME);
  await cache.put(urlString, response);
}

async function responseHasUpdated(
  urlString: string,
  response: Response
): Promise<Boolean> {
  const storedResponse = await caches.match(urlString);

  if (!storedResponse) {
    return true;
  }

  const [storedText, responseText] = await Promise.all([
    storedResponse.text(),
    response.text(),
  ]);

  return storedText !== responseText;
}

async function postMessageToClient(clientId: string) {
  const client = (await self.clients.get(clientId)) as WindowClient;

  if (client) {
    client.postMessage(CAN_UPDATE_KEY);
  }
}
