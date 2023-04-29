'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e2ac3ffde28cee0fa3f5b7e214c5bc00",
"assets/assets/banners/banner_per_page/arthritis.jpg": "f75f4ef08208f64506d67f8cb7c98cec",
"assets/assets/banners/banner_per_page/beef.jpg": "6532993c82ded5e8000b0f89bbfdea18",
"assets/assets/banners/banner_per_page/chicken.jpg": "4396702ebe07b221fff3d0ba62c864c5",
"assets/assets/banners/banner_per_page/dessert.jpg": "371552182d8e5726e70ef3af6af0c60e",
"assets/assets/banners/banner_per_page/diabetic.jpg": "96221526173f3729e1f48ac1fa6e0d08",
"assets/assets/banners/banner_per_page/egg.jpg": "ad50f513718a7f8c92bb429814a2c41c",
"assets/assets/banners/banner_per_page/fish.jpg": "f0cc27349d151e88f11fbdb19bcc6bd7",
"assets/assets/banners/banner_per_page/pork.jpg": "334ec2a65f9b9e7cad0fcdd464d81501",
"assets/assets/banners/banner_per_page/rice.jpg": "2b1e13ccb3d704deb0dcc459d131c3ec",
"assets/assets/banners/banner_per_page/seafood.jpg": "cafbb36c61b682e66aacd46532f7781a",
"assets/assets/banners/banner_per_page/soup.jpg": "e3fffac0de896266c8e6849ab5c736de",
"assets/assets/banners/banner_per_page/standard.jpg": "4fb3b94912fa864b66136644ed4e5987",
"assets/assets/banners/banner_per_page/vegan.jpg": "89678b0636da586253444c162f1ee79d",
"assets/assets/banners/banner_per_page/vegetable.jpg": "26bb64af996ff7601913fa70f98c870b",
"assets/assets/banners/banner_per_page/weight.jpg": "0cf2abc6ae04250539a7eb63f3b400b0",
"assets/assets/banners/category_banner/beef.jpg": "c5cbeb48f548ca5c2173f4034df62d0c",
"assets/assets/banners/category_banner/chicken.jpg": "8d72c694ff1473f050cd268eb1643624",
"assets/assets/banners/category_banner/dessert.jpg": "262f04c7ec9f15fe3985ab6273460337",
"assets/assets/banners/category_banner/egg.jpg": "d3b07213bfa050f571c2c54a74a38af3",
"assets/assets/banners/category_banner/fish.jpg": "0855e2ff1dfb842076c78eed6692dd6f",
"assets/assets/banners/category_banner/pork.jpg": "cd98d8bacf27e77c70c2b83b27a58457",
"assets/assets/banners/category_banner/rice.jpg": "932057082560ae339e053a672d5be504",
"assets/assets/banners/category_banner/seafood.jpg": "b67de1a03a5e2f861711546b262baa4f",
"assets/assets/banners/category_banner/soup.jpg": "1a713dfe1ac38ff6786a572707a1c21d",
"assets/assets/banners/category_banner/vegetables.jpg": "ed8c6dd8bae231a4934f5c2eaa34d5ef",
"assets/assets/banners/health_options_banner/arthritis.png": "433ab8382b57c10ed3ce59c446b04bc3",
"assets/assets/banners/health_options_banner/diabetic.png": "4ae6ee50ff1a091bbb0706c812194e0e",
"assets/assets/banners/health_options_banner/standard.png": "39c4db5e46202dcf763ad3c709724e03",
"assets/assets/banners/health_options_banner/vegan.png": "655ef7d7a2638d38379498c7fbaba30d",
"assets/assets/banners/health_options_banner/weight.png": "e4c053ae43a5f010f12b3831b171fa4b",
"assets/assets/banners/home_banner/home_banner.jpg": "e03f0e7427965fbac94312cf8c67241e",
"assets/assets/fridge.png": "3c3082b56557a1d86bc4d6827885dadd",
"assets/assets/fridge_icon.png": "5b243fbe3ff40e5394e515dec05e7595",
"assets/assets/fridge_tuts/get.gif": "684bc2406767dc0ee4e87ce974b544ca",
"assets/assets/fridge_tuts/if.gif": "5b5a54cac8f361f432c2dcbac82b489f",
"assets/assets/fridge_tuts/press.gif": "1f4f9f160716a635133e9122f55b073b",
"assets/assets/fridge_tuts/select.gif": "3464898322251619cfea043ef30f3cba",
"assets/assets/fridge_tuts/type.gif": "a004c1ed943d8c5e55e288a1cf208689",
"assets/assets/general_tuts/choose.gif": "821c565fefb750c43d719310b8ecde5b",
"assets/assets/general_tuts/delicious.gif": "633074478532bd5673742165474e6944",
"assets/assets/general_tuts/explore.gif": "ea8a1d831d04b84bfab4e1ff8b6ecea9",
"assets/assets/general_tuts/find.gif": "d796511ad64867a289f37d8fe2df98f7",
"assets/assets/general_tuts/get.gif": "79b0df5826ead941eace53fb1b388759",
"assets/assets/health_page/arthritis.jpg": "2ddd500e328c5440c9575cfbdc0e8857",
"assets/assets/health_page/diabetic.jpg": "f7c36b1bfceea36e26628eebfa214e77",
"assets/assets/health_page/standard.jpg": "8163a3f8b33f5675fe7bdea890b0e29d",
"assets/assets/health_page/vegan.jpg": "f42c0a2daf3fa0ad8e2a9908a92a249c",
"assets/assets/health_page/weight.jpg": "a98f36bd0c7d56658ec4bba13e16a26f",
"assets/assets/health_tuts/arthritis.gif": "3bd01c57e7a80434adc90d499e91aa38",
"assets/assets/health_tuts/diabetic.gif": "ef6820fc8a8cd0cfa27bcc42c9a1a333",
"assets/assets/health_tuts/explore.gif": "ea8a1d831d04b84bfab4e1ff8b6ecea9",
"assets/assets/health_tuts/standard.gif": "14426456a33d876941e2358ba1fa3ede",
"assets/assets/health_tuts/vegan.gif": "4554d03eeca01281d1805f57f82fa10d",
"assets/assets/health_tuts/weight.gif": "baa37f99cbf43740e73687a4c1c241ed",
"assets/assets/home_carousel/home_banner.png": "fa9dd45f1857b13a5d5f943b82d94bbd",
"assets/assets/home_carousel/home_banner2.png": "4897dfd0b35ed373491e913934001240",
"assets/assets/home_carousel/home_banner3.png": "e7cec5ecc06b47e9ffd93bd39629b845",
"assets/assets/home_carousel/home_banner4.png": "48214dbc3eda6fb12eec5830578b22b7",
"assets/assets/information.gif": "24835a03f029b7962db9a0b7a9f543e9",
"assets/assets/kaon_text.png": "2286ea517767cab5d98b5adfcba0b7a3",
"assets/assets/splash.png": "a60f75225595ca4319d398b10038c30b",
"assets/assets/tutorial.png": "8361bbe1eb397d3d643d6947a5046321",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "af2f435e4749d3e38d9526a8140700d3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dd2bd12fb04acbdfbb989c983a6c621c",
"/": "dd2bd12fb04acbdfbb989c983a6c621c",
"main.dart.js": "b639c5db822a8690197f4432158657bb",
"manifest.json": "a990f0d2b5266a0dc7a1be079e115ca0",
"splash/img/dark-1x.png": "4111a74428cd73f74c6a87ec17e90bdd",
"splash/img/dark-2x.png": "ea05ea315139061e07c717b588f6bd5c",
"splash/img/dark-3x.png": "eb39a1ac56e4a057a8852058fffa5f2b",
"splash/img/dark-4x.png": "c2af9b08d7792d2ecc350d8d9b2cd829",
"splash/img/light-1x.png": "4111a74428cd73f74c6a87ec17e90bdd",
"splash/img/light-2x.png": "ea05ea315139061e07c717b588f6bd5c",
"splash/img/light-3x.png": "eb39a1ac56e4a057a8852058fffa5f2b",
"splash/img/light-4x.png": "c2af9b08d7792d2ecc350d8d9b2cd829",
"splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"splash/style.css": "66b4f492954a35a3e8ab906c1bbc7904",
"version.json": "5bc9edc5a9a8858968012a5ae6c787e0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
