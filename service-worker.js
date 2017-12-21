var cacheName = 'doctoubib'; //le nom de mon cache !

// J'assigne un écouteur 'install' à mon service worker
self.addEventListener('install', function(e){
  // Cool il est installé !
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    // Je récupére mon cache du nom de pwa
    caches.open(cacheName).then(function(cache) {
      // Je fais là mise en cache de ma PWA
      console.log('[ServiceWorker] Caching app shell');
      var filesToCache = [
         '/',
         'assets/css/style.css',
         'assets/css/grid.css',
        ];

       return cache.addAll(filesToCache);
       
    })
  );

  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    // Jy réponds soit avec une ressource trouvé dans mon cache (responde) soit en renvoyant la requête
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});