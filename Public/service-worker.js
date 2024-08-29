const CACHE_NAME = "metro-boomin-radio-v1";
const songList = [
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/3500.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/allThemoney.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/allThewayIlive.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/amIdreaming.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/annhilate.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/aroundMe.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/badAndboujee.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/bankAcc.mp3",

  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/givinUp.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/heartless.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/home.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/hummingbird.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/iCantsaveYou.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/jumpman.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/knifeTalk.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/linkUp.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/lockOnme.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/lowlife.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/mamacita.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/maskoff.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/metrospider.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/nasMorales.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/niagraFalls.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/noComplains.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/nonViolentcommunity.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/onTime.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/raindrop.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/ricFlairdrip.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/runin.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/selfLove.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/skyfall.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/superhero.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/tooManyNights.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/trance.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/umbrella.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/walkemdown.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/waves.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/wicked.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/aintNolove.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/cindrella.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/claustrophobic.mp3",

  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/WTFYM.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/YoungMetro.mp3",
  "https://raw.githubusercontent.com/R1SH4BH81/metroBoomin-Radio/master/songs/RichNiggaShit.mp3",
];

// Install event - cache the songs
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(songList);
    })
  );
});

// Fetch event - serve cached content if offline
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return the response
      if (response) {
        return response;
      }

      // IMPORTANT: Clone the request. A request is a stream and
      // can only be consumed once. Since we are consuming this
      // once by cache and once by the browser for fetch, we need
      // to clone the request.
      var fetchRequest = event.request.clone();

      return fetch(fetchRequest).then(function (response) {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        // IMPORTANT: Clone the response. A response is a stream
        // and because we want the browser to consume the response
        // as well as the cache consuming the response, we need
        // to clone it so we have two streams.
        var responseToCache = response.clone();

        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});

// Activate event - cleanup old caches
self.addEventListener("activate", function (event) {
  var cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
