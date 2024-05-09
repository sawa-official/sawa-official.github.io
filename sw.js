

const cacheVersion = 'v1.0.288'

console.log('service worker version', '1.0.288')

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
  console.log('service worker active', '1.0.288', event)
  event.waitUntil(clearOldCache())
  event.waitUntil(clients.claim())
})

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.315f952c.js','_nuxt/AboutSA.mobile.c0f57205.js','_nuxt/AboutSA2-legacy.d8f0233a.js','_nuxt/AboutSA2.92628c59.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.12dde91b.js','_nuxt/PayUtils.f2f0f586.js','_nuxt/UICarouselView-legacy.fafd7d58.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/UICarouselView.ed8aee08.js','_nuxt/account-item-legacy.5d01bea6.js','_nuxt/account-item-legacy.d0a09151.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.63ccc531.js','_nuxt/account-item.950742c1.css','_nuxt/account-item.9a4a5c05.js','_nuxt/api-legacy.105b49fd.js','_nuxt/api.482777f5.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.b609085f.js','_nuxt/bank-views.c4aec842.js','_nuxt/base-comp-factory-legacy.f262f1a3.js','_nuxt/base-comp-factory.2120e644.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/3fbcecf6-1ae2-4dfc-84cd-32671d71cdd5.json','_nuxt/builds/meta/dev.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.3b17c63b.js','_nuxt/channel-view.0e854f85.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.913c32fe.js','_nuxt/enter-legacy.b2d9dba8.js','_nuxt/enter.4fb59149.css','_nuxt/enter.6bb406bf.js','_nuxt/enter.9ec5f60a.js','_nuxt/enter.a4171ebf.css','_nuxt/enterMixin-legacy.e78f14e4.js','_nuxt/enterMixin.7c2a6ee4.js','_nuxt/entry-legacy.2a9f067b.js','_nuxt/entry.1f6fec67.css','_nuxt/entry.d87a8bb6.js','_nuxt/error-404-legacy.518d1829.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.2256a386.js','_nuxt/error-500-legacy.5e620bd7.js','_nuxt/error-500.c4729905.js','_nuxt/error-500.c5df6088.css','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.04648974.js','_nuxt/index-legacy.0d782c49.js','_nuxt/index-legacy.1ce43c55.js','_nuxt/index-legacy.267f67fa.js','_nuxt/index-legacy.2765829b.js','_nuxt/index-legacy.32aebef3.js','_nuxt/index-legacy.36bac056.js','_nuxt/index-legacy.385d690b.js','_nuxt/index-legacy.409639df.js','_nuxt/index-legacy.40d9f104.js','_nuxt/index-legacy.4377e123.js','_nuxt/index-legacy.4ad0b293.js','_nuxt/index-legacy.4ee22aa6.js','_nuxt/index-legacy.561d2c0e.js','_nuxt/index-legacy.6fc6b901.js','_nuxt/index-legacy.74e3d6ba.js','_nuxt/index-legacy.76b9379d.js','_nuxt/index-legacy.7cf47672.js','_nuxt/index-legacy.866eec59.js','_nuxt/index-legacy.8ed862fb.js','_nuxt/index-legacy.a1ec4613.js','_nuxt/index-legacy.a33a661c.js','_nuxt/index-legacy.ac1985fe.js','_nuxt/index-legacy.b4c1ffd0.js','_nuxt/index-legacy.b83ac0db.js','_nuxt/index-legacy.bf70a69d.js','_nuxt/index-legacy.c51503b5.js','_nuxt/index-legacy.d14b67f6.js','_nuxt/index-legacy.d3f144d8.js','_nuxt/index-legacy.d69a10c9.js','_nuxt/index-legacy.dd19917c.js','_nuxt/index-legacy.ed006a0e.js','_nuxt/index-legacy.f28443dd.js','_nuxt/index-legacy.f3166f31.js','_nuxt/index-legacy.f8814318.js','_nuxt/index.04b9f750.js','_nuxt/index.0af88f6b.css','_nuxt/index.139511b2.css','_nuxt/index.1b630765.js','_nuxt/index.1c18e6bb.css','_nuxt/index.20770eef.js','_nuxt/index.23a90349.css','_nuxt/index.27517127.css','_nuxt/index.27d5b2fc.js','_nuxt/index.3b7b6279.css','_nuxt/index.3e3f66aa.css','_nuxt/index.3e6bfbf6.js','_nuxt/index.404f90eb.js','_nuxt/index.437e219f.js','_nuxt/index.44b3ecd6.js','_nuxt/index.45241f05.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.541e752c.js','_nuxt/index.5a546369.js','_nuxt/index.5c335864.js','_nuxt/index.5f6d14c5.css','_nuxt/index.609a047b.css','_nuxt/index.65a5abf2.js','_nuxt/index.6b24c162.css','_nuxt/index.6b308f11.css','_nuxt/index.6d7efbdd.css','_nuxt/index.71d24d3c.css','_nuxt/index.7aa67d5c.js','_nuxt/index.7b7671a9.css','_nuxt/index.8118c550.js','_nuxt/index.815202c8.css','_nuxt/index.87c408ba.js','_nuxt/index.8af8ec08.js','_nuxt/index.8b966481.css','_nuxt/index.8c980043.js','_nuxt/index.90955d4f.js','_nuxt/index.9c546000.js','_nuxt/index.9cb7339a.js','_nuxt/index.a063d077.js','_nuxt/index.a335a3d2.js','_nuxt/index.a380910c.css','_nuxt/index.a4407b2a.js','_nuxt/index.a5d7adc3.js','_nuxt/index.b26ad712.css','_nuxt/index.b726725c.js','_nuxt/index.ba65754b.css','_nuxt/index.bb591fb4.css','_nuxt/index.bdbd6704.js','_nuxt/index.c3f2e32f.js','_nuxt/index.c4c721be.css','_nuxt/index.c8621a6b.css','_nuxt/index.d54cbae5.js','_nuxt/index.d83f749f.css','_nuxt/index.d9c3f665.css','_nuxt/index.dc9126cc.js','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e88075ea.js','_nuxt/index.f14ecd44.js','_nuxt/index.f21d4383.js','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.fad91bef.js','_nuxt/index.fc30de3f.js','_nuxt/index.mobile-legacy.07f9915f.js','_nuxt/index.mobile-legacy.83a6329d.js','_nuxt/index.mobile-legacy.df80e894.js','_nuxt/index.mobile-legacy.ee2fe137.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.3f2e5647.js','_nuxt/index.mobile.51d11963.css','_nuxt/index.mobile.c8492a42.js','_nuxt/index.mobile.d213bb01.js','_nuxt/index.mobile.e3299546.js','_nuxt/index.mobile.ebc9e775.css','_nuxt/index.moble-legacy.a8948580.js','_nuxt/index.moble.32a7e7c6.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.pc-legacy.2c60c6ca.js','_nuxt/index.pc-legacy.55c17208.js','_nuxt/index.pc-legacy.89d1644f.js','_nuxt/index.pc-legacy.95c66f7b.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.25b14c5c.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.5e31109d.js','_nuxt/index.pc.b6670b9d.js','_nuxt/index.pc.b8dd2831.js','_nuxt/index.pc.vue-legacy.19628e8d.js','_nuxt/index.pc.vue-legacy.34f319f1.js','_nuxt/index.pc.vue.a8eeb358.js','_nuxt/index.pc.vue.c2ec8d1b.js','_nuxt/indexMixin-legacy.cedbaece.js','_nuxt/indexMixin.d654fde7.js','_nuxt/index_mobile-legacy.a55df93a.js','_nuxt/index_mobile-legacy.e765b671.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.36b7d513.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.b9474ff3.js','_nuxt/index_pc-legacy.07fef1a5.js','_nuxt/index_pc-legacy.8556e542.js','_nuxt/index_pc.1e42586a.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.e1ab8b95.js','_nuxt/init-legacy.8abe9bea.js','_nuxt/init.b1845d33.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.c756a693.js','_nuxt/login.modal.pc.051042b0.js','_nuxt/login.modal.pc.21b1187f.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-legacy.0474b9a9.js','_nuxt/model-legacy.11e2866b.js','_nuxt/model-legacy.1acf7e04.js','_nuxt/model-legacy.3151af38.js','_nuxt/model-legacy.3e3186aa.js','_nuxt/model-legacy.518b8698.js','_nuxt/model-legacy.531f51de.js','_nuxt/model-legacy.536ad627.js','_nuxt/model-legacy.67253b93.js','_nuxt/model-legacy.8ba3b66f.js','_nuxt/model-legacy.bb2e4ec9.js','_nuxt/model-legacy.d673befb.js','_nuxt/model-legacy.e260938f.js','_nuxt/model-legacy.f4455cbd.js','_nuxt/model-legacy.f6b04ec4.js','_nuxt/model.1d4f08f9.js','_nuxt/model.269d3c1c.js','_nuxt/model.34167d42.js','_nuxt/model.443951bd.js','_nuxt/model.444ecbc4.js','_nuxt/model.4ed993c7.js','_nuxt/model.53b11b4f.js','_nuxt/model.6a56f9d7.js','_nuxt/model.71193a58.js','_nuxt/model.9c1341d0.js','_nuxt/model.b4b8d56a.js','_nuxt/model.ca86b1a9.js','_nuxt/model.cac37568.js','_nuxt/model.da4fbebf.js','_nuxt/model.e78484c6.js','_nuxt/mpay-legacy.c548bdea.js','_nuxt/mpay.7fb286ff.js','_nuxt/mpay.c95bb85c.css','_nuxt/paccount-legacy.da56db04.js','_nuxt/paccount.4d48552c.js','_nuxt/paccount.9baa112c.css','_nuxt/pay-legacy.1d30fbeb.js','_nuxt/pay-legacy.9e1ba5f2.js','_nuxt/pay.224c8a22.js','_nuxt/pay.4deb4e98.css','_nuxt/pay.8fbe8659.css','_nuxt/pay.bdb68dfe.js','_nuxt/payGoodsListItem-legacy.75c43e47.js','_nuxt/payGoodsListItem-legacy.98442b14.js','_nuxt/payGoodsListItem.1e4d59ad.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.da4881a2.js','_nuxt/payMixin-legacy.14d3f4ce.js','_nuxt/payMixin.f06ecea9.js','_nuxt/pcell-legacy.d67b474b.js','_nuxt/pcell.5a7c5f5a.css','_nuxt/pcell.bb3b2808.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.50fa9799.js','_nuxt/public.9a1c48e6.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.4af773c3.js','_nuxt/recentItemMixin.5bf4d60f.js','_nuxt/refresh-modal-legacy.5f330127.js','_nuxt/refresh-modal.0a7f0efe.js','_nuxt/report-legacy.047fdf13.js','_nuxt/report-legacy.096fb78c.js','_nuxt/report-legacy.59a5704a.js','_nuxt/report-legacy.5df60689.js','_nuxt/report-legacy.82d4296a.js','_nuxt/report-legacy.8aa0aeb2.js','_nuxt/report-legacy.9a39df95.js','_nuxt/report-legacy.9c37f862.js','_nuxt/report-legacy.a7a1e603.js','_nuxt/report-legacy.a862261c.js','_nuxt/report-legacy.b58ae4df.js','_nuxt/report-legacy.b6e3b27a.js','_nuxt/report-legacy.cc635b4f.js','_nuxt/report-legacy.cde36e4b.js','_nuxt/report-legacy.ecf4aad4.js','_nuxt/report.0c396593.js','_nuxt/report.470d6f62.js','_nuxt/report.5f06d368.js','_nuxt/report.76a2883d.js','_nuxt/report.7812e5b0.js','_nuxt/report.87f18fb9.js','_nuxt/report.a356d713.js','_nuxt/report.a8de2bd6.js','_nuxt/report.b03cc0c4.js','_nuxt/report.b4b115d0.js','_nuxt/report.cc6516af.js','_nuxt/report.d58190db.js','_nuxt/report.dcbb974c.js','_nuxt/report.ec3b3958.js','_nuxt/report.f5e8937f.js','_nuxt/result-view-legacy.472afc86.js','_nuxt/result-view.21a3460b.js','_nuxt/resultModalMixin-legacy.aa92ace9.js','_nuxt/resultModalMixin.18bcc14f.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.b7f4e64a.js','_nuxt/search-cell.387d23b0.css','_nuxt/search-cell.8b167bb4.js','_nuxt/search-legacy.e79eb6ef.js','_nuxt/search-modal.pc-legacy.12455dec.js','_nuxt/search-modal.pc.c6f133be.css','_nuxt/search-modal.pc.cd8a89fb.js','_nuxt/search-page.mobile-legacy.1f7873ee.js','_nuxt/search-page.mobile.a71ae321.css','_nuxt/search-page.mobile.d0046600.js','_nuxt/search.d933340d.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.9cd7b4ca.js','_nuxt/switch-legacy.bf393eab.js','_nuxt/switch.0720bce3.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.e52b9b51.js','_nuxt/switchMixin-legacy.82655942.js','_nuxt/switchMixin.7606387f.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/utilities.appleyPay-legacy.55720573.js','_nuxt/utilities.appleyPay.bf7b4624.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.5ec30baf.js','_nuxt/vue.f36acd1f.29b3746c.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','gray.js','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/mpay/model/index.html','recharge/pay/mpay/mpay/index.html','recharge/pay/mpay/paccount/index.html','recharge/pay/mpay/pcell/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/search/search/index.html','recharge/pay/search/search-cell/index.html','recharge/pay/search/search-modal.pc/index.html','recharge/pay/search/search-page.mobile/index.html','recharge/report/index.html','recharge/search/index.html','recharge/search/model/index.html','recharge/search/report/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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
      console.log('service worker', '1.0.288', event.request, event.request.url)
      event.respondWith(networkFirst(event))
    } else {
      event.respondWith(cacheFirst(event))
    }
  }
})



