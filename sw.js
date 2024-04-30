

const cacheVersion = 'v1.0.281'

console.log('service worker version', '1.0.281')

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
  console.log('service worker active', '1.0.281', event)
  event.waitUntil(clearOldCache())
  event.waitUntil(clients.claim())
})

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.56bcc93d.js','_nuxt/AboutSA.mobile.828e9191.js','_nuxt/AboutSA2-legacy.be5af5a4.js','_nuxt/AboutSA2.3fa5b0cf.css','_nuxt/AboutSA2.db6f46ce.js','_nuxt/PayUtils-legacy.a90f0a1f.js','_nuxt/PayUtils.c4d73322.js','_nuxt/UICarouselView-legacy.7c63bfc1.js','_nuxt/UICarouselView.781fb751.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.c4e8e190.js','_nuxt/account-item-legacy.c76bea71.js','_nuxt/account-item.33a0b847.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.62935a5b.js','_nuxt/account-item.950742c1.css','_nuxt/api-legacy.eb256611.js','_nuxt/api.7fbf9524.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.62673f4f.js','_nuxt/bank-views.35c83679.js','_nuxt/base-comp-factory-legacy.77b29bab.js','_nuxt/base-comp-factory.8e5b79a7.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/2f2c5e49-6299-4e39-8c4c-f719e8ec7e03.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.a9e0a19d.js','_nuxt/channel-view.2e933722.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.7d64c98f.js','_nuxt/enter-legacy.ba61739c.js','_nuxt/enter.02a5972e.js','_nuxt/enter.30b73d31.js','_nuxt/enter.4fb59149.css','_nuxt/enter.a4171ebf.css','_nuxt/enterMixin-legacy.f4598c58.js','_nuxt/enterMixin.99a895f5.js','_nuxt/entry-legacy.258d5695.js','_nuxt/entry.519cc28d.css','_nuxt/entry.dc80f6f9.js','_nuxt/error-404-legacy.083b5633.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.506de66c.js','_nuxt/error-500-legacy.dc59a30d.js','_nuxt/error-500.8fb6b2ca.js','_nuxt/error-500.c5df6088.css','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.0661b091.js','_nuxt/index-legacy.1b2db637.js','_nuxt/index-legacy.24ed9717.js','_nuxt/index-legacy.29dfb133.js','_nuxt/index-legacy.29f4aa54.js','_nuxt/index-legacy.30ab3144.js','_nuxt/index-legacy.4211276c.js','_nuxt/index-legacy.5a65be35.js','_nuxt/index-legacy.5b3984f2.js','_nuxt/index-legacy.5f74a991.js','_nuxt/index-legacy.69027cda.js','_nuxt/index-legacy.698cdbd3.js','_nuxt/index-legacy.6b4555ec.js','_nuxt/index-legacy.7d69f522.js','_nuxt/index-legacy.7deb9e95.js','_nuxt/index-legacy.88b7e84c.js','_nuxt/index-legacy.8fff1d8f.js','_nuxt/index-legacy.9dfce942.js','_nuxt/index-legacy.9fb959b5.js','_nuxt/index-legacy.a821e04e.js','_nuxt/index-legacy.a87e2b28.js','_nuxt/index-legacy.aa3467f3.js','_nuxt/index-legacy.aaea2cc2.js','_nuxt/index-legacy.ab523399.js','_nuxt/index-legacy.ba88a7bf.js','_nuxt/index-legacy.bb67de15.js','_nuxt/index-legacy.d2cb5f6e.js','_nuxt/index-legacy.d3959c1e.js','_nuxt/index-legacy.d42286b5.js','_nuxt/index-legacy.d513d7de.js','_nuxt/index-legacy.d7cc3e34.js','_nuxt/index-legacy.e0ae18c3.js','_nuxt/index-legacy.ed178659.js','_nuxt/index-legacy.f0fafc21.js','_nuxt/index-legacy.f7317e9f.js','_nuxt/index.0af88f6b.css','_nuxt/index.139511b2.css','_nuxt/index.15d47fd8.css','_nuxt/index.1c18e6bb.css','_nuxt/index.2085fa8f.js','_nuxt/index.237d7601.js','_nuxt/index.23a90349.css','_nuxt/index.27517127.css','_nuxt/index.3b7b6279.css','_nuxt/index.3ca457ec.js','_nuxt/index.3e3f66aa.css','_nuxt/index.4c493e78.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.5294f918.js','_nuxt/index.5e6815bb.js','_nuxt/index.5f6d14c5.css','_nuxt/index.609a047b.css','_nuxt/index.61b50258.js','_nuxt/index.63471e62.js','_nuxt/index.6b308f11.css','_nuxt/index.6d7efbdd.css','_nuxt/index.71b0f8a5.js','_nuxt/index.71d24d3c.css','_nuxt/index.7a061ecb.js','_nuxt/index.7b7671a9.css','_nuxt/index.7c8f1230.js','_nuxt/index.815202c8.css','_nuxt/index.8b966481.css','_nuxt/index.8c9e9945.js','_nuxt/index.925df7f0.js','_nuxt/index.9aa03a77.js','_nuxt/index.a046d504.css','_nuxt/index.a2cab3f8.css','_nuxt/index.a380910c.css','_nuxt/index.a48e1c61.js','_nuxt/index.a4c5a37e.js','_nuxt/index.a81b2ffe.js','_nuxt/index.a99cb0b8.js','_nuxt/index.b13a90d0.js','_nuxt/index.b26ad712.css','_nuxt/index.b323e87a.js','_nuxt/index.b782b6fa.js','_nuxt/index.ba65754b.css','_nuxt/index.be84ee88.js','_nuxt/index.c4c721be.css','_nuxt/index.c8621a6b.css','_nuxt/index.c86bc1f6.js','_nuxt/index.c94e311c.js','_nuxt/index.c9d13783.js','_nuxt/index.d0169f0d.js','_nuxt/index.d79e7ce5.js','_nuxt/index.d83f749f.css','_nuxt/index.d9c3f665.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.dd65bb1d.js','_nuxt/index.e9a30519.js','_nuxt/index.ec420207.js','_nuxt/index.efe2c397.js','_nuxt/index.f457154a.js','_nuxt/index.f7872780.css','_nuxt/index.f79cab6b.js','_nuxt/index.f8489227.js','_nuxt/index.fa6af505.css','_nuxt/index.fca83f7e.js','_nuxt/index.mobile-legacy.15853d1f.js','_nuxt/index.mobile-legacy.1825c52a.js','_nuxt/index.mobile-legacy.aade711c.js','_nuxt/index.mobile-legacy.b7422d4c.js','_nuxt/index.mobile.08278127.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.51d11963.css','_nuxt/index.mobile.7c113b5d.js','_nuxt/index.mobile.ce534140.js','_nuxt/index.mobile.def774d8.js','_nuxt/index.mobile.vue-legacy.7552679f.js','_nuxt/index.mobile.vue.66d0c556.js','_nuxt/index.moble-legacy.8fa90f27.js','_nuxt/index.moble.181aa0eb.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.pc-legacy.4c3be236.js','_nuxt/index.pc-legacy.ae3bde97.js','_nuxt/index.pc-legacy.cedf2935.js','_nuxt/index.pc-legacy.e263ece7.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.18d79df4.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.6ad1bff7.js','_nuxt/index.pc.adf7af03.js','_nuxt/index.pc.b985ca8c.js','_nuxt/index.pc.vue-legacy.3d84cf3d.js','_nuxt/index.pc.vue-legacy.9ca16141.js','_nuxt/index.pc.vue.1c081531.js','_nuxt/index.pc.vue.d8d2c46a.js','_nuxt/indexMixin-legacy.6811ace5.js','_nuxt/indexMixin.4994a5aa.js','_nuxt/index_mobile-legacy.604c2785.js','_nuxt/index_mobile-legacy.d5f67993.js','_nuxt/index_mobile.26357bca.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.d5577ec4.js','_nuxt/index_pc-legacy.80c81dec.js','_nuxt/index_pc-legacy.f0c2b9e3.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.b27144e3.js','_nuxt/index_pc.fc31e31f.js','_nuxt/init-legacy.c3a39a15.js','_nuxt/init.7f7eb7f3.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.5053f47f.js','_nuxt/login.modal.pc.21b1187f.css','_nuxt/login.modal.pc.6a8b799f.js','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-legacy.016b8ddd.js','_nuxt/model-legacy.1ebcbabb.js','_nuxt/model-legacy.2d2ae5ad.js','_nuxt/model-legacy.4fe23069.js','_nuxt/model-legacy.5461793f.js','_nuxt/model-legacy.5eb24e8a.js','_nuxt/model-legacy.60504f47.js','_nuxt/model-legacy.69e5daeb.js','_nuxt/model-legacy.94446ebf.js','_nuxt/model-legacy.cf630e11.js','_nuxt/model-legacy.d085616e.js','_nuxt/model-legacy.e8748fa3.js','_nuxt/model-legacy.e934ce14.js','_nuxt/model-legacy.f4550739.js','_nuxt/model.153cb88f.js','_nuxt/model.2e2976dc.js','_nuxt/model.368c1875.js','_nuxt/model.3b8deb67.js','_nuxt/model.52d2ef21.js','_nuxt/model.64e298ba.js','_nuxt/model.6ccfd031.js','_nuxt/model.6d00e6f3.js','_nuxt/model.7bc63763.js','_nuxt/model.88a12c20.js','_nuxt/model.b8dfe82f.js','_nuxt/model.bcf3a57e.js','_nuxt/model.bece7a47.js','_nuxt/model.c5fcf7ef.js','_nuxt/pay-legacy.00be27a0.js','_nuxt/pay-legacy.28ff6aa9.js','_nuxt/pay.01729197.js','_nuxt/pay.3f0269b8.css','_nuxt/pay.8d65d815.css','_nuxt/pay.f2566d7d.js','_nuxt/payGoodsListItem-legacy.45d5980a.js','_nuxt/payGoodsListItem-legacy.df21256a.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.db865170.js','_nuxt/payGoodsListItem.df8afb83.js','_nuxt/payMixin-legacy.0e24c0dc.js','_nuxt/payMixin.e0331e32.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.dfec3d72.js','_nuxt/public.96bbdb15.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.7fabb93b.js','_nuxt/recentItemMixin.47325647.js','_nuxt/refresh-modal-legacy.d2a7dbfe.js','_nuxt/refresh-modal.0c7ccc2f.js','_nuxt/report-legacy.2d6af24d.js','_nuxt/report-legacy.3ae7d96d.js','_nuxt/report-legacy.3e718fe3.js','_nuxt/report-legacy.408d9897.js','_nuxt/report-legacy.599690aa.js','_nuxt/report-legacy.7dd50a9a.js','_nuxt/report-legacy.81bc6488.js','_nuxt/report-legacy.875927c2.js','_nuxt/report-legacy.8986c73e.js','_nuxt/report-legacy.8f4e67c8.js','_nuxt/report-legacy.8fae53ed.js','_nuxt/report-legacy.90500a1f.js','_nuxt/report-legacy.9140c59e.js','_nuxt/report-legacy.ad3a3a03.js','_nuxt/report-legacy.e1af93cb.js','_nuxt/report.0acbc747.js','_nuxt/report.1909b561.js','_nuxt/report.1a521fd1.js','_nuxt/report.2188fdd2.js','_nuxt/report.690ab3c7.js','_nuxt/report.7cfe5f9b.js','_nuxt/report.7d4b5b59.js','_nuxt/report.7d55618b.js','_nuxt/report.b1a3e3ba.js','_nuxt/report.b406caf9.js','_nuxt/report.cfb354a2.js','_nuxt/report.e29b0463.js','_nuxt/report.ebc495c1.js','_nuxt/report.f20ffff1.js','_nuxt/report.f2cea327.js','_nuxt/result-view-legacy.05e80a44.js','_nuxt/result-view.b7f75446.js','_nuxt/resultModalMixin-legacy.1d84b717.js','_nuxt/resultModalMixin.4b0470c6.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.cc83c4c0.js','_nuxt/switch-legacy.e4900659.js','_nuxt/switch.26afde8d.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.804fd5db.js','_nuxt/switchMixin-legacy.0387a3c7.js','_nuxt/switchMixin.6d851a9c.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/utilities.appleyPay-legacy.c7648b9e.js','_nuxt/utilities.appleyPay.5e837fcb.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.b2ad754b.js','_nuxt/vue.f36acd1f.3d9e1ed2.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/report/index.html','recharge/search/index.html','recharge/search/model/index.html','recharge/search/report/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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
      console.log('service worker', '1.0.281', event.request, event.request.url)
      event.respondWith(networkFirst(event))
    } else {
      event.respondWith(cacheFirst(event))
    }
  }
})



