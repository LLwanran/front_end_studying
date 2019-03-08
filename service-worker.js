/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e461a7f3b55306a0779bb5a83d51a712"
  },
  {
    "url": "assets/css/0.styles.0373d4c1.css",
    "revision": "2f1166af3aca5e4f5e715466fa88d690"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4924765d.js",
    "revision": "1cc01a368eb6a35888acfced0e51b36e"
  },
  {
    "url": "assets/js/11.993bcc99.js",
    "revision": "588c2588810607bbf72af8df64127643"
  },
  {
    "url": "assets/js/12.2aeaf266.js",
    "revision": "96499f4188013c8bf016d9b7a1ee3cc0"
  },
  {
    "url": "assets/js/13.542f4e4d.js",
    "revision": "727bb229ef4095fd80c2c69f1b9f39dc"
  },
  {
    "url": "assets/js/14.45795388.js",
    "revision": "9ee7b50d49468f29f554a165bb268e3e"
  },
  {
    "url": "assets/js/15.96e5648e.js",
    "revision": "0911081ab214db4c6d80d93553fb6c7c"
  },
  {
    "url": "assets/js/16.ff3a5cd8.js",
    "revision": "e3499cb052a07c90c6b19e1310a0803d"
  },
  {
    "url": "assets/js/17.a0170075.js",
    "revision": "f77d347fa464b7a8ddf2dbadc1a6cbdc"
  },
  {
    "url": "assets/js/18.2a23d5f9.js",
    "revision": "9c4bd58f0e7675b7ee305cdd95b7d5bc"
  },
  {
    "url": "assets/js/19.0c4dabed.js",
    "revision": "b8e2303975a742bd11807ccd3a47373e"
  },
  {
    "url": "assets/js/2.d222fbca.js",
    "revision": "0b0cd1f7b5e95ff2dbe95d1caef95945"
  },
  {
    "url": "assets/js/20.87104d4f.js",
    "revision": "c3962254674bdc312140f9954d8189a9"
  },
  {
    "url": "assets/js/21.f7903bda.js",
    "revision": "d614bff1de9530d2a0b8c9de180204ed"
  },
  {
    "url": "assets/js/3.23267d51.js",
    "revision": "10ea4533793f9ffec2b75157e6f7f778"
  },
  {
    "url": "assets/js/4.4eab954a.js",
    "revision": "db5bf857ab93ebbc25104e2f71af90cb"
  },
  {
    "url": "assets/js/5.1754e614.js",
    "revision": "9046e01e74f81322a50834f7084336e0"
  },
  {
    "url": "assets/js/6.14b46a33.js",
    "revision": "5bb0f0d2abc2e4e3c384ebfecc947cd3"
  },
  {
    "url": "assets/js/7.09f12188.js",
    "revision": "1879984ca70635de56e1babe8346a3e3"
  },
  {
    "url": "assets/js/8.03407f1f.js",
    "revision": "762963ac0865af073ef0edadc6546646"
  },
  {
    "url": "assets/js/9.d435ade3.js",
    "revision": "54bbbbc020241540022220b48949e5c6"
  },
  {
    "url": "assets/js/app.9eec5fda.js",
    "revision": "385b983b93c25c85c3fcc17bd124dd98"
  },
  {
    "url": "avatar.jpg",
    "revision": "99464cb12199d52f3d8bd2718efc53f7"
  },
  {
    "url": "base/css.html",
    "revision": "58da3647676dc164ea29ae6640ee34f8"
  },
  {
    "url": "base/html.html",
    "revision": "81507aee3b8b87f3c8cdad6fa6da93c9"
  },
  {
    "url": "base/javascript.html",
    "revision": "0474824a6c925495d5b4f4de48f55f87"
  },
  {
    "url": "code/difficulty.html",
    "revision": "ab3bc56ff0f8043377f8b49df0772481"
  },
  {
    "url": "code/easy.html",
    "revision": "7efc1f2bcbcedd89f81e0a78a6795e89"
  },
  {
    "url": "code/medium.html",
    "revision": "a41c037041dd7d9b13cd0c8c1f0a5137"
  },
  {
    "url": "computer/algorithm.html",
    "revision": "41242c302eace84f490cfd4271f9176d"
  },
  {
    "url": "computer/data_structure.html",
    "revision": "578230ac837c1b899fa8ff79e7a24914"
  },
  {
    "url": "computer/network.html",
    "revision": "5638e98a2c6fe4dc07aa14ceacce342c"
  },
  {
    "url": "index.html",
    "revision": "ced7baba89d00ce042b3fdd933ecd760"
  },
  {
    "url": "mvvm/angular.html",
    "revision": "dbe10662b152f7da7fcdfd630852b524"
  },
  {
    "url": "mvvm/flutter.html",
    "revision": "671bf2af62bc24d725967b811868552a"
  },
  {
    "url": "mvvm/index.html",
    "revision": "489f66a183d24904003d2fb8ab304ce4"
  },
  {
    "url": "mvvm/miniprogram.html",
    "revision": "1b798f725b0ae5245f1c95a99e441461"
  },
  {
    "url": "mvvm/react-native.html",
    "revision": "2aa0e440624b44597e5aa6523e987774"
  },
  {
    "url": "mvvm/react.html",
    "revision": "569742d5b62aea5fb1830aede01245a1"
  },
  {
    "url": "mvvm/vue.html",
    "revision": "e3000d06aa7d55530fe1dd0a126a8000"
  },
  {
    "url": "mvvm/weex.html",
    "revision": "a8e89827736ff4baa0e426b6fc115969"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
