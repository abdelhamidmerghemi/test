'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6d024520f07790c9026f33677ca773bf",
"assets/AssetManifest.bin.json": "af42dd1d89bc7ed2177f50094b6634b6",
"assets/AssetManifest.json": "ad836ae50b08c77885c02c76d77243c2",
"assets/assets/fonts/BalooBhaijaan2/BalooBhaijaan2-Bold.ttf": "1ae77d2b8fb1307d213babf9d06ce2a7",
"assets/assets/fonts/BalooBhaijaan2/BalooBhaijaan2-ExtraBold.ttf": "07814e2525694e8b77e6aae7ad8886b0",
"assets/assets/fonts/BalooBhaijaan2/BalooBhaijaan2-Medium.ttf": "eb70eb48d568ed7e0d82b981798a66bd",
"assets/assets/fonts/BalooBhaijaan2/BalooBhaijaan2-Regular.ttf": "74bc067fc22ced25987e2794ef5c3b71",
"assets/assets/fonts/BalooBhaijaan2/BalooBhaijaan2-SemiBold.ttf": "db6b9b77c144af0f7a22cb0be58133c9",
"assets/assets/fonts/BalooBhaijaan2/BalooBhaijaan2-VariableFont_wght.ttf": "561f36d2ce33221be07f52d9b634a661",
"assets/assets/images/account-blocked.png": "ceb899ae435bf2e4e64d684d62438642",
"assets/assets/images/benne.png": "12107bf5cc3e843cadd276957a724de0",
"assets/assets/images/camion-grand.png": "ce49245e23b05b4b2809f7a233458e4a",
"assets/assets/images/camion-petit.png": "0a39b8ef17ac04e9ee1c0ad2a49981b6",
"assets/assets/images/citerne-carburant.png": "771b185aa14cbcb55f8183cbafab6e3a",
"assets/assets/images/citerne-eau.png": "eb78c09a0cdefe379be97d6548aef07f",
"assets/assets/images/client.png": "954e0d70f846e427191944a58e8b1bec",
"assets/assets/images/commercial.png": "2234bfbe4f10363804cc036d518ffbc0",
"assets/assets/images/depannage.png": "c7a13c6aec267eab0662ae0700771061",
"assets/assets/images/driver.png": "f8ac3445a63c9426b762bd3b122bd433",
"assets/assets/images/error.png": "55152a17093c712b708f30843fdee8a2",
"assets/assets/images/fourgon-court.png": "9cc4287355083c957516316653f7770c",
"assets/assets/images/fourgon-long.png": "52e1eced2813faaa85596da1968ca1a3",
"assets/assets/images/fourgon-moyen.png": "8c4025a8e99d065cb556f55e516be104",
"assets/assets/images/harbine-double-cabine.png": "04eb905199516a8d4bd256d67e6cf740",
"assets/assets/images/harbine-frigo.png": "f04cbb74aee62795e46cf599c8f3c7f4",
"assets/assets/images/harbine-single-cabine.png": "7355385cd49ab51638c1755668931e60",
"assets/assets/images/illustration.png": "b6e0656b3a66683dd4d1b57254da2284",
"assets/assets/images/language.png": "2ba85ed24a9fbcbf51fa537694d9549d",
"assets/assets/images/logo.png": "43088721ada1a816d1c4a61ee1fa0668",
"assets/assets/images/moto.png": "2413355d37af5d30245ebee63b619416",
"assets/assets/images/my-location.png": "8bea963b5185ec8c836a02c904b2ac41",
"assets/assets/images/notification.png": "afa05d981371d7034a2714111afc05c6",
"assets/assets/images/order.png": "d9c19045c4560580584908d7e928b7af",
"assets/assets/images/otp.png": "a90f8b9e9ea61bf25d70445203b58417",
"assets/assets/images/porte-char.png": "49992c818354bac12230b9f73689282c",
"assets/assets/images/success.png": "854183410811913dd3d249d01c0c16e3",
"assets/assets/images/track.png": "f9109ba8d8df86ce92243dc1df0ffef5",
"assets/assets/images/update.png": "b5a1ddf76aefceb7a202c69d0e0a07fb",
"assets/assets/images/van-court.png": "263b212ab47694405839c8ba8355a010",
"assets/assets/images/van-long.png": "5c32a6a0111d275bf6f77fe098720f22",
"assets/assets/images/vehicle.png": "46afed24524887ffcb273bea0e76add7",
"assets/assets/images/warning.png": "4d186171e8a9602baafe9557ceefc026",
"assets/FontManifest.json": "4721083b76a0d8b7fd0d1b14a7bec79d",
"assets/fonts/MaterialIcons-Regular.otf": "a9c81cd40ff6ccc418a9d765df3728be",
"assets/NOTICES": "0bd32c6dbc8ef85e48a275030ea80f2b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "43088721ada1a816d1c4a61ee1fa0668",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "0abd6a999bb89817f85d4f8d710ca1b3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9c2a4a59e667ce1c73552f2dc6d40597",
"/": "9c2a4a59e667ce1c73552f2dc6d40597",
"logo.png": "43088721ada1a816d1c4a61ee1fa0668",
"main.dart.js": "9b08d8d5b4f419c3c5a41c73b204232c",
"manifest.json": "cb8dcd04522a22f388330ded550482d6",
"version.json": "051228ad48e95d9b300bda8b1b9a4be0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
