

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.794dca1e.js','_nuxt/AboutSA.mobile.9934b7d0.js','_nuxt/AboutSA2-legacy.7c3eae91.js','_nuxt/AboutSA2.9f604992.css','_nuxt/AboutSA2.bdd6ec85.js','_nuxt/PayUtils-legacy.30f87d92.js','_nuxt/PayUtils.c41ef708.js','_nuxt/UICarouselView-legacy.43841328.js','_nuxt/UICarouselView.7d8cc221.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.4663c9db.js','_nuxt/account-item-legacy.7c5c8642.js','_nuxt/account-item.28a4b0a3.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.d651e0cb.js','_nuxt/api-legacy.a0728529.js','_nuxt/api.e68ef14c.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.1015c8d4.js','_nuxt/bank-views.969a258e.js','_nuxt/base-comp-factory-legacy.b6be5f8f.js','_nuxt/base-comp-factory.ca3df7d6.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/a30e7eef-8fa3-41aa-a6f0-592961200337.json','_nuxt/builds/meta/dev.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.a4f0d110.js','_nuxt/channel-view.574ee51d.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.5898817f.js','_nuxt/enter-legacy.f1fd2750.js','_nuxt/enter.4fa500d0.js','_nuxt/enter.4fb59149.css','_nuxt/enter.a4171ebf.css','_nuxt/enter.f1a5c708.js','_nuxt/enterMixin-legacy.2a677cea.js','_nuxt/enterMixin.9153642e.js','_nuxt/entry-legacy.a5b7ce85.js','_nuxt/entry.1f6fec67.css','_nuxt/entry.2e3246ee.js','_nuxt/error-404-legacy.95eb1ecf.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.f1dd82f8.js','_nuxt/error-500-legacy.6ff9b1ba.js','_nuxt/error-500.c5df6088.css','_nuxt/error-500.e84d5745.js','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.1d00b188.js','_nuxt/index-legacy.23af1181.js','_nuxt/index-legacy.243728ba.js','_nuxt/index-legacy.2c7bb7bd.js','_nuxt/index-legacy.30a56767.js','_nuxt/index-legacy.37cc9526.js','_nuxt/index-legacy.3a023364.js','_nuxt/index-legacy.3a121539.js','_nuxt/index-legacy.440030a1.js','_nuxt/index-legacy.533d69ce.js','_nuxt/index-legacy.5b760c25.js','_nuxt/index-legacy.675f68ac.js','_nuxt/index-legacy.6cca63c0.js','_nuxt/index-legacy.6e9efa7b.js','_nuxt/index-legacy.720121c3.js','_nuxt/index-legacy.76c4c485.js','_nuxt/index-legacy.7a1ae7b2.js','_nuxt/index-legacy.81d687f3.js','_nuxt/index-legacy.844178ab.js','_nuxt/index-legacy.8a9345c8.js','_nuxt/index-legacy.97c9f3a9.js','_nuxt/index-legacy.983708d0.js','_nuxt/index-legacy.9e2b313c.js','_nuxt/index-legacy.ac690e99.js','_nuxt/index-legacy.c3344db6.js','_nuxt/index-legacy.c609a50d.js','_nuxt/index-legacy.c9654028.js','_nuxt/index-legacy.c9c37b97.js','_nuxt/index-legacy.cd81b559.js','_nuxt/index-legacy.d8d67b2d.js','_nuxt/index-legacy.db99ab75.js','_nuxt/index-legacy.e439b5b8.js','_nuxt/index-legacy.e8c00d4a.js','_nuxt/index-legacy.e96552c3.js','_nuxt/index-legacy.fc1adfe2.js','_nuxt/index.07e714a0.js','_nuxt/index.0af88f6b.css','_nuxt/index.139511b2.css','_nuxt/index.16e398a8.js','_nuxt/index.18ccb916.js','_nuxt/index.18f3903c.js','_nuxt/index.1c18e6bb.css','_nuxt/index.23a90349.css','_nuxt/index.23c28a22.js','_nuxt/index.27517127.css','_nuxt/index.3b7b6279.css','_nuxt/index.3e3f66aa.css','_nuxt/index.433ef004.js','_nuxt/index.4b2c9789.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.52d06359.js','_nuxt/index.54b62aaf.js','_nuxt/index.55ce6ef8.js','_nuxt/index.5f6d14c5.css','_nuxt/index.609a047b.css','_nuxt/index.6317ad86.js','_nuxt/index.6b24c162.css','_nuxt/index.6b308f11.css','_nuxt/index.6b867425.js','_nuxt/index.6d7efbdd.css','_nuxt/index.6fc89bb1.js','_nuxt/index.71d24d3c.css','_nuxt/index.75971451.js','_nuxt/index.7b7671a9.css','_nuxt/index.7ded0e90.js','_nuxt/index.815202c8.css','_nuxt/index.81fcf1cb.js','_nuxt/index.8b966481.css','_nuxt/index.99fcde40.js','_nuxt/index.a1f709b5.js','_nuxt/index.a380910c.css','_nuxt/index.a762d9db.js','_nuxt/index.b0a95d30.js','_nuxt/index.b26ad712.css','_nuxt/index.b3e06488.js','_nuxt/index.b7c4f1f2.js','_nuxt/index.b9e3cbd7.js','_nuxt/index.ba65754b.css','_nuxt/index.bb591fb4.css','_nuxt/index.bb734905.js','_nuxt/index.c4c721be.css','_nuxt/index.c8621a6b.css','_nuxt/index.cce6379b.js','_nuxt/index.cdc4b306.js','_nuxt/index.d39eeaef.js','_nuxt/index.d83f749f.css','_nuxt/index.d9c3f665.css','_nuxt/index.dacda6f7.js','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.dd920f29.js','_nuxt/index.de1015c5.js','_nuxt/index.e0dbb615.js','_nuxt/index.ecb150b8.js','_nuxt/index.f229e4d7.js','_nuxt/index.f446279f.js','_nuxt/index.f7872780.css','_nuxt/index.f9259441.js','_nuxt/index.fa6af505.css','_nuxt/index.mobile-legacy.12567649.js','_nuxt/index.mobile-legacy.c2bc2eec.js','_nuxt/index.mobile-legacy.cada23a7.js','_nuxt/index.mobile-legacy.e6eb17da.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.51d11963.css','_nuxt/index.mobile.6cac68ad.js','_nuxt/index.mobile.a20569b0.js','_nuxt/index.mobile.bce73037.js','_nuxt/index.mobile.db0d546b.js','_nuxt/index.mobile.ebc9e775.css','_nuxt/index.moble-legacy.f74260c1.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.moble.c0e7e40f.js','_nuxt/index.pc-legacy.4adb7ca7.js','_nuxt/index.pc-legacy.7852af6c.js','_nuxt/index.pc-legacy.ae372b82.js','_nuxt/index.pc-legacy.b11bd8de.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.4fad5d9e.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.61a7da80.js','_nuxt/index.pc.9fbb3ff6.js','_nuxt/index.pc.b6502227.js','_nuxt/index.pc.vue-legacy.aa1d5ded.js','_nuxt/index.pc.vue-legacy.ff4c907a.js','_nuxt/index.pc.vue.aac2783a.js','_nuxt/index.pc.vue.f8343e7f.js','_nuxt/indexMixin-legacy.6f549ac5.js','_nuxt/indexMixin.ea9aee78.js','_nuxt/index_mobile-legacy.5886838d.js','_nuxt/index_mobile-legacy.e13cc6f5.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.7aac7333.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.c341b51b.js','_nuxt/index_pc-legacy.97dcd059.js','_nuxt/index_pc-legacy.aa5bec07.js','_nuxt/index_pc.0340f122.js','_nuxt/index_pc.2287e8be.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.4fd28272.css','_nuxt/init-legacy.755bf193.js','_nuxt/init.189c7944.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.1816b4c2.js','_nuxt/login.modal.pc.21b1187f.css','_nuxt/login.modal.pc.3f1ed825.js','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-legacy.10f446ce.js','_nuxt/model-legacy.322dee3a.js','_nuxt/model-legacy.3910be8f.js','_nuxt/model-legacy.46ac5a7b.js','_nuxt/model-legacy.518b8698.js','_nuxt/model-legacy.5ac10d5a.js','_nuxt/model-legacy.6114ebb1.js','_nuxt/model-legacy.67236d55.js','_nuxt/model-legacy.787d07bd.js','_nuxt/model-legacy.a62ee109.js','_nuxt/model-legacy.bf036d02.js','_nuxt/model-legacy.c6210a53.js','_nuxt/model-legacy.cc15cac0.js','_nuxt/model-legacy.ce491f67.js','_nuxt/model-legacy.ce7a1d45.js','_nuxt/model.01fdd3fd.js','_nuxt/model.045e29c7.js','_nuxt/model.11fe7168.js','_nuxt/model.1d9d5eae.js','_nuxt/model.4ed993c7.js','_nuxt/model.50dba4ba.js','_nuxt/model.91368c4c.js','_nuxt/model.9719b40b.js','_nuxt/model.9a3b627c.js','_nuxt/model.a06f65f1.js','_nuxt/model.afece672.js','_nuxt/model.be5d83e5.js','_nuxt/model.dc0941b1.js','_nuxt/model.ec75f399.js','_nuxt/model.fdd9f618.js','_nuxt/mpay-legacy.a839d3f1.js','_nuxt/mpay.991c1396.js','_nuxt/mpay.c95bb85c.css','_nuxt/paccount-legacy.87b717a3.js','_nuxt/paccount.9baa112c.css','_nuxt/paccount.ed19d0c6.js','_nuxt/pay-legacy.5d2f1075.js','_nuxt/pay-legacy.879a5fc6.js','_nuxt/pay.4deb4e98.css','_nuxt/pay.8fbe8659.css','_nuxt/pay.907cb319.js','_nuxt/pay.be67ff0c.js','_nuxt/payGoodsListItem-legacy.61d08bd6.js','_nuxt/payGoodsListItem-legacy.96333ad0.js','_nuxt/payGoodsListItem.0c0d7bc5.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.3ff8d881.js','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payMixin-legacy.83d6507e.js','_nuxt/payMixin.26b315c5.js','_nuxt/pcell-legacy.301e8c11.js','_nuxt/pcell.5a7c5f5a.css','_nuxt/pcell.87e26f21.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.0aa6ceae.js','_nuxt/public.b0fabb3f.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.0a0ac9ac.js','_nuxt/recentItemMixin.28770e9b.js','_nuxt/refresh-modal-legacy.4ffcd485.js','_nuxt/refresh-modal.be2d210e.js','_nuxt/report-legacy.3d9a921a.js','_nuxt/report-legacy.4317707b.js','_nuxt/report-legacy.4c8896f5.js','_nuxt/report-legacy.6ff1e89d.js','_nuxt/report-legacy.782f26b5.js','_nuxt/report-legacy.828bf232.js','_nuxt/report-legacy.921e3af9.js','_nuxt/report-legacy.a39394f2.js','_nuxt/report-legacy.aed5ed10.js','_nuxt/report-legacy.ba3fbdc1.js','_nuxt/report-legacy.c413b4b2.js','_nuxt/report-legacy.cb1b134d.js','_nuxt/report-legacy.df32db0c.js','_nuxt/report-legacy.ef1947b8.js','_nuxt/report-legacy.fa7fbf9f.js','_nuxt/report.288c222b.js','_nuxt/report.52d9d95f.js','_nuxt/report.5d2e2599.js','_nuxt/report.5e384903.js','_nuxt/report.70fa9de1.js','_nuxt/report.7ee72c0a.js','_nuxt/report.85245c6c.js','_nuxt/report.91184e6b.js','_nuxt/report.94824973.js','_nuxt/report.a93dae9c.js','_nuxt/report.b62eaa9d.js','_nuxt/report.e39f7ad7.js','_nuxt/report.e6568149.js','_nuxt/report.ea855226.js','_nuxt/report.f5490a13.js','_nuxt/result-view-legacy.d0571ed7.js','_nuxt/result-view.b4f25e31.js','_nuxt/resultModalMixin-legacy.43031d17.js','_nuxt/resultModalMixin.70002e07.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.886b5c0b.js','_nuxt/search-cell.387d23b0.css','_nuxt/search-cell.97ad87e4.js','_nuxt/search-legacy.cd818c68.js','_nuxt/search-modal.pc-legacy.b30b19fd.js','_nuxt/search-modal.pc.138e9e3c.js','_nuxt/search-modal.pc.c6f133be.css','_nuxt/search-page.mobile-legacy.8167fd5a.js','_nuxt/search-page.mobile.a71ae321.css','_nuxt/search-page.mobile.db7c9edb.js','_nuxt/search.8e667895.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.12347516.js','_nuxt/switch-legacy.9071e7df.js','_nuxt/switch.4af1bb02.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.e82b4737.js','_nuxt/switchMixin-legacy.c164c4a7.js','_nuxt/switchMixin.fc76fb77.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/utilities.appleyPay-legacy.b6cfb32b.js','_nuxt/utilities.appleyPay.da328c02.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.abbb162f.js','_nuxt/vue.f36acd1f.3a225869.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','gray.js','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/mpay/model/index.html','recharge/pay/mpay/mpay/index.html','recharge/pay/mpay/paccount/index.html','recharge/pay/mpay/pcell/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/search/search/index.html','recharge/pay/search/search-cell/index.html','recharge/pay/search/search-modal.pc/index.html','recharge/pay/search/search-page.mobile/index.html','recharge/report/index.html','recharge/search/index.html','recharge/search/model/index.html','recharge/search/report/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



