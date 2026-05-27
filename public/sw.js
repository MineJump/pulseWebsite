// Kill-switch service worker.
// Reason: an earlier version of this site registered a service worker that
// kept serving stale assets from its cache after the v2 deploy. This file
// replaces that worker, deregisters itself, clears all caches, and forces
// every controlled client to reload to the fresh page.
//
// Safe to remove once analytics show no live clients still controlled by
// the old worker (typically 1–2 weeks after deploy).

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      try {
        const keys = await caches.keys();
        await Promise.all(keys.map((k) => caches.delete(k)));
      } catch (_) {}
      try {
        await self.registration.unregister();
      } catch (_) {}
      try {
        const clients = await self.clients.matchAll({ type: "window" });
        for (const client of clients) {
          client.navigate(client.url);
        }
      } catch (_) {}
    })()
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
