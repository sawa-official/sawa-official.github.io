

const cacheVersion = 'v1.0.286'

console.log('service worker version', '1.0.286')

const routes = ['home','pay','test','login','fines','']

const public_path = '/'

const putInCache = async (request, response) => {
  const cache = await caches.open(cacheVersion)
  await cache.put(request, response)
}

const addResourcesToCache = async (resources) => {
  const cache = await caches.open(cacheVersion)
  await cache.addAll(resources)
}

const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    await self.registration.navigationPreload.enable()
  }
}

function clearOldCache() {
  return caches.keys().then(function (keyList) {
    return Promise.all(
      keyList.map(function (key) {
        if (key !== cacheVersion) {
          return caches.delete(key)
        }
      })
    )
  })
}

self.addEventListener('activate', (event) => {
  console.log('service worker active', '1.0.286', event)
  event.waitUntil(clearOldCache())
  event.waitUntil(clients.claim())
})

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.f4de25af.js','_nuxt/AboutSA.mobile.00b12cac.js','_nuxt/AboutSA2-legacy.04517010.js','_nuxt/AboutSA2.0ec91228.js','_nuxt/AboutSA2.3fa5b0cf.css','_nuxt/PayUtils-legacy.dad7590c.js','_nuxt/PayUtils.223dc9cd.js','_nuxt/UICarouselView-legacy.7abc52f7.js','_nuxt/UICarouselView.d13c09c5.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.91631a64.js','_nuxt/account-item-legacy.d7359fa6.js','_nuxt/account-item.1383bb7c.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.dc45bab0.js','_nuxt/api-legacy.0012a38f.js','_nuxt/api.17aa02e2.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.d42cd81a.js','_nuxt/bank-views.3135d851.js','_nuxt/base-comp-factory-legacy.5f0bfda1.js','_nuxt/base-comp-factory.42afc6f5.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/e885bca3-0c4c-4db9-b398-0a4903f3b80f.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.b546c40a.js','_nuxt/channel-view.b438f15f.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.4075f4bb.js','_nuxt/enter-legacy.b52a63fd.js','_nuxt/enter.4fb59149.css','_nuxt/enter.5a0fe7a9.js','_nuxt/enter.a4171ebf.css','_nuxt/enter.add32957.js','_nuxt/enterMixin-legacy.bf40303e.js','_nuxt/enterMixin.422a1f04.js','_nuxt/entry-legacy.962340ab.js','_nuxt/entry.519cc28d.css','_nuxt/entry.cb4f8126.js','_nuxt/error-404-legacy.66fd239d.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.aa2037d2.js','_nuxt/error-500-legacy.930504f0.js','_nuxt/error-500.3329cc79.js','_nuxt/error-500.c5df6088.css','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.00a1c22a.js','_nuxt/index-legacy.02b8ca91.js','_nuxt/index-legacy.130f5917.js','_nuxt/index-legacy.27c31428.js','_nuxt/index-legacy.29e13c3c.js','_nuxt/index-legacy.2a4c24c0.js','_nuxt/index-legacy.3000d160.js','_nuxt/index-legacy.306ffc4c.js','_nuxt/index-legacy.31a8914a.js','_nuxt/index-legacy.326b3f98.js','_nuxt/index-legacy.3a526802.js','_nuxt/index-legacy.3c78012b.js','_nuxt/index-legacy.47d3f092.js','_nuxt/index-legacy.51a854ba.js','_nuxt/index-legacy.5bc85b0a.js','_nuxt/index-legacy.5e8db2b2.js','_nuxt/index-legacy.65f21fa1.js','_nuxt/index-legacy.74d4d9bd.js','_nuxt/index-legacy.7876b169.js','_nuxt/index-legacy.801d0696.js','_nuxt/index-legacy.85525563.js','_nuxt/index-legacy.8896bd0f.js','_nuxt/index-legacy.8d7f8d7c.js','_nuxt/index-legacy.8eb20d24.js','_nuxt/index-legacy.911dcedd.js','_nuxt/index-legacy.9d87c271.js','_nuxt/index-legacy.a09774aa.js','_nuxt/index-legacy.c9654028.js','_nuxt/index-legacy.cf1a1925.js','_nuxt/index-legacy.dd33add6.js','_nuxt/index-legacy.e15f7121.js','_nuxt/index-legacy.e5134b72.js','_nuxt/index-legacy.e7e51511.js','_nuxt/index-legacy.f55b946d.js','_nuxt/index-legacy.ff8f89bc.js','_nuxt/index.0489ec41.js','_nuxt/index.06495056.js','_nuxt/index.0af88f6b.css','_nuxt/index.126dcc0d.js','_nuxt/index.139511b2.css','_nuxt/index.153c46ae.js','_nuxt/index.1550e476.js','_nuxt/index.15d47fd8.css','_nuxt/index.1c18e6bb.css','_nuxt/index.222a3006.js','_nuxt/index.23a90349.css','_nuxt/index.26282a00.js','_nuxt/index.274da384.js','_nuxt/index.27517127.css','_nuxt/index.37f0df57.js','_nuxt/index.3b7b6279.css','_nuxt/index.3e3f66aa.css','_nuxt/index.4503525c.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.529bb29b.js','_nuxt/index.56c7af88.js','_nuxt/index.5cbb2e05.js','_nuxt/index.5f6d14c5.css','_nuxt/index.60396109.js','_nuxt/index.60398fa9.js','_nuxt/index.609a047b.css','_nuxt/index.632d912c.js','_nuxt/index.6b308f11.css','_nuxt/index.6d7efbdd.css','_nuxt/index.71d24d3c.css','_nuxt/index.73bc9a2c.js','_nuxt/index.75b6b5f1.js','_nuxt/index.7b7671a9.css','_nuxt/index.815202c8.css','_nuxt/index.8af976bb.js','_nuxt/index.8b966481.css','_nuxt/index.8d01aec9.js','_nuxt/index.966177ea.js','_nuxt/index.99177701.js','_nuxt/index.a046d504.css','_nuxt/index.a2cab3f8.css','_nuxt/index.a380910c.css','_nuxt/index.b26ad712.css','_nuxt/index.b423d198.js','_nuxt/index.ba65754b.css','_nuxt/index.bf4826d1.js','_nuxt/index.c067c6d0.js','_nuxt/index.c0ebbd2f.js','_nuxt/index.c3865835.js','_nuxt/index.c4c721be.css','_nuxt/index.c7332711.js','_nuxt/index.c8621a6b.css','_nuxt/index.c8b48596.js','_nuxt/index.cab3bb57.js','_nuxt/index.d20c826e.js','_nuxt/index.d83f749f.css','_nuxt/index.d9c3f665.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e1c05fa5.js','_nuxt/index.e9c3257a.js','_nuxt/index.eeec551a.js','_nuxt/index.f229e4d7.js','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.mobile-legacy.0bd0250b.js','_nuxt/index.mobile-legacy.22acb3ec.js','_nuxt/index.mobile-legacy.5cc48bfa.js','_nuxt/index.mobile-legacy.6cc0f0b0.js','_nuxt/index.mobile.187c8fe4.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.4c07340b.js','_nuxt/index.mobile.51d11963.css','_nuxt/index.mobile.62cade24.js','_nuxt/index.mobile.aa097cfb.js','_nuxt/index.mobile.vue-legacy.5c30867a.js','_nuxt/index.mobile.vue.3b198a54.js','_nuxt/index.moble-legacy.37377f34.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.moble.93c96ea2.js','_nuxt/index.pc-legacy.3f1c0768.js','_nuxt/index.pc-legacy.53cfb9c4.js','_nuxt/index.pc-legacy.5efa15c0.js','_nuxt/index.pc-legacy.ca169bdf.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.31d6c88e.js','_nuxt/index.pc.536e5eb9.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.9a668251.js','_nuxt/index.pc.bbd54f15.js','_nuxt/index.pc.vue-legacy.188d8cc8.js','_nuxt/index.pc.vue-legacy.31ff3b6c.js','_nuxt/index.pc.vue.4dff6240.js','_nuxt/index.pc.vue.88791a3d.js','_nuxt/indexMixin-legacy.d2a70ce2.js','_nuxt/indexMixin.01641322.js','_nuxt/index_mobile-legacy.de54ac8d.js','_nuxt/index_mobile-legacy.f7cc8598.js','_nuxt/index_mobile.02919bd3.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.be641cdd.js','_nuxt/index_pc-legacy.f4400c60.js','_nuxt/index_pc-legacy.ff799de8.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.2d5b1190.js','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.ef8910a4.js','_nuxt/init-legacy.8a58fdb9.js','_nuxt/init.dbe0b766.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.1da6ddef.js','_nuxt/login.modal.pc.21b1187f.css','_nuxt/login.modal.pc.39f8c878.js','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-legacy.129b9121.js','_nuxt/model-legacy.25a201f4.js','_nuxt/model-legacy.2a436e5b.js','_nuxt/model-legacy.3a14beda.js','_nuxt/model-legacy.7d14ad78.js','_nuxt/model-legacy.85ffb82e.js','_nuxt/model-legacy.9e8b7709.js','_nuxt/model-legacy.a3f30ae5.js','_nuxt/model-legacy.b82277e4.js','_nuxt/model-legacy.c413654a.js','_nuxt/model-legacy.df395f83.js','_nuxt/model-legacy.eb681747.js','_nuxt/model-legacy.f7116a6d.js','_nuxt/model-legacy.fad115fd.js','_nuxt/model.17933577.js','_nuxt/model.408a2fb0.js','_nuxt/model.8dcba910.js','_nuxt/model.9a97a445.js','_nuxt/model.a91b9b9f.js','_nuxt/model.aa762dd5.js','_nuxt/model.b8bbf4fe.js','_nuxt/model.ba06fa41.js','_nuxt/model.bfcc9bfd.js','_nuxt/model.dac0dd95.js','_nuxt/model.df6e8a85.js','_nuxt/model.eaa63570.js','_nuxt/model.eeb763c6.js','_nuxt/model.f2a1f0df.js','_nuxt/pay-legacy.00a6c73a.js','_nuxt/pay-legacy.bb3e1dc7.js','_nuxt/pay.3f0269b8.css','_nuxt/pay.5df30a3e.js','_nuxt/pay.8d65d815.css','_nuxt/pay.a63cc9b4.js','_nuxt/payGoodsListItem-legacy.05e58d8c.js','_nuxt/payGoodsListItem-legacy.f83ab95c.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.6ed63ea1.js','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.7a582d0e.js','_nuxt/payMixin-legacy.658aa91d.js','_nuxt/payMixin.5b546f8a.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.939f14b7.js','_nuxt/public.812f29db.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.79090493.js','_nuxt/recentItemMixin.e34d07e7.js','_nuxt/refresh-modal-legacy.f9402b5b.js','_nuxt/refresh-modal.a4ed619d.js','_nuxt/report-legacy.0bb9a17b.js','_nuxt/report-legacy.0bbfbf37.js','_nuxt/report-legacy.1c613293.js','_nuxt/report-legacy.26eaf36e.js','_nuxt/report-legacy.2aec8248.js','_nuxt/report-legacy.44d8d379.js','_nuxt/report-legacy.77046d85.js','_nuxt/report-legacy.7c1fbdaf.js','_nuxt/report-legacy.95c4074f.js','_nuxt/report-legacy.96b249f6.js','_nuxt/report-legacy.9ac06c31.js','_nuxt/report-legacy.b50b3c88.js','_nuxt/report-legacy.b797666a.js','_nuxt/report-legacy.bbdb7942.js','_nuxt/report-legacy.c13a706a.js','_nuxt/report.10f3ab5b.js','_nuxt/report.2bad7141.js','_nuxt/report.332753ab.js','_nuxt/report.49751f07.js','_nuxt/report.60967b1a.js','_nuxt/report.74635ccb.js','_nuxt/report.78653ae2.js','_nuxt/report.91a06725.js','_nuxt/report.b5bd8254.js','_nuxt/report.c2247b70.js','_nuxt/report.cbcbd554.js','_nuxt/report.d037155b.js','_nuxt/report.f32c7b19.js','_nuxt/report.f5324fb1.js','_nuxt/report.f83432af.js','_nuxt/result-view-legacy.1590db04.js','_nuxt/result-view.1f70d006.js','_nuxt/resultModalMixin-legacy.7b49b061.js','_nuxt/resultModalMixin.30b9cfd5.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.45a22697.js','_nuxt/switch-legacy.836246c6.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.cce268e9.js','_nuxt/switch.ef4a0823.js','_nuxt/switchMixin-legacy.edf614a0.js','_nuxt/switchMixin.d6e0594b.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/utilities.appleyPay-legacy.32b943ad.js','_nuxt/utilities.appleyPay.433cbd8d.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.a8e25823.js','_nuxt/vue.f36acd1f.3f4a424d.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/report/index.html','recharge/search/index.html','recharge/search/model/index.html','recharge/search/report/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
})

const strategies = {
  networkFirst: 1,
  cacheFirst: 2,
}

const cacheFirst = async (event) => {
  let request = event.request
  const responseFromCache = await caches.match(request)
  if (responseFromCache) {
    return responseFromCache
  }
  try {
    const responseFromNetwork = await fetch(request.clone())
    putInCache(request, responseFromNetwork.clone())
    return responseFromNetwork
  } catch (error) {
    return errorRes()
  }
}

const networkFirst = async (event) => {
  let request = event.request
  try {
    const responseFromNetwork = await fetch(request.clone())
    putInCache(request, responseFromNetwork.clone())
    return responseFromNetwork
  } catch (error) {
    postMessage(event, { event: 'offline' })
    const url = request.url.split('?')[0]
    const r = matchRoute(url)
    if (r) {
      const index = getIndexUrl()
      request = index
    }
    const responseFromCache = await caches.match(request)
    if (responseFromCache) {
      return responseFromCache
    }
    return errorRes()
  }
}

function postMessage(event, data) {
  try {
    self.clients.matchAll().then((clients) => {
      clients.forEach((client) => {
          let msg = JSON.stringify({
            client: client.id,
            data: data,
          })
          client.postMessage(msg)
      })
    })
  } catch (e) {
    console.error(e)
  }
}

function errorRes() {
  return new Response('Network error happened', {
    status: 408,
    headers: { 'Content-Type': 'text/plain' },
  })
}

function getResourceByStrategy(request, first) {
  if (first === strategies.cacheFirst) {
    return cacheFirst(request)
  }
  return networkFirst(request)
}

function matchRoute(url) {
  for (let i = 0; i < routes.length; i += 1) {
    const r1 = location.origin + public_path + routes[i]
    const r2 = location.origin + public_path + routes[i] + '/'
    if (url === r1 || url === r2) {
      return true
    }
  }
  return false
}

function getIndexUrl() {
  return location.origin + public_path + 'index.html'
}

self.addEventListener('fetch', function (event) {
  if (event.request.url.indexOf(location.origin) >= 0) {
    if (event.request.url.endsWith('.html') || event.request.url.indexOf('_nuxt') < 0) {
      console.log('service worker', '1.0.286', event.request, event.request.url)
      event.respondWith(networkFirst(event))
    } else {
      event.respondWith(cacheFirst(event))
    }
  }
})



