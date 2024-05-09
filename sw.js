

const cacheVersion = 'v1.0.290'

console.log('service worker version', '1.0.290')

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
  console.log('service worker active', '1.0.290', event)
  event.waitUntil(clearOldCache())
  event.waitUntil(clients.claim())
})

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.2508afdf.js','_nuxt/AboutSA.mobile.402edeb3.js','_nuxt/AboutSA2-legacy.ad6d440d.js','_nuxt/AboutSA2.86ffb50a.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.b493ed29.js','_nuxt/PayUtils.bdfcf7e8.js','_nuxt/UICarouselView-legacy.bdbe22c4.js','_nuxt/UICarouselView.a63eb7ab.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.91d8336f.js','_nuxt/account-item-legacy.e42e8fd6.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.8da3ef1e.js','_nuxt/account-item.950742c1.css','_nuxt/account-item.e7ef063d.js','_nuxt/api-legacy.c5d47199.js','_nuxt/api.09d08119.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.88b57ec7.js','_nuxt/bank-views.7723d08c.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/181bce62-f14d-4630-b8dc-9895f116a076.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.215eaf10.js','_nuxt/channel-view.dab42f7c.js','_nuxt/cko-card-list-legacy.2a99a68b.js','_nuxt/cko-card-list.15a4eabf.js','_nuxt/cko-card-list.6193db4f.css','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.227013a7.js','_nuxt/enter-legacy.d382d53e.js','_nuxt/enter.30c22f55.js','_nuxt/enter.342b3289.css','_nuxt/enter.90782378.js','_nuxt/enter.d7350a96.css','_nuxt/enterMixin-legacy.752fa77f.js','_nuxt/enterMixin.86f5d1e1.js','_nuxt/entry-legacy.3c01abbc.js','_nuxt/entry.52209fbe.css','_nuxt/entry.e45ee818.js','_nuxt/error-404-legacy.ea001cfb.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.63b84e2a.js','_nuxt/error-500-legacy.b2a1cd58.js','_nuxt/error-500.9d34b82b.js','_nuxt/error-500.c5df6088.css','_nuxt/error-legacy.10fae17e.js','_nuxt/error.06313295.css','_nuxt/error.5b69eca6.js','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/frames-legacy.1025ac6c.js','_nuxt/frames.e4eb9e01.js','_nuxt/home-legacy.dbb0f91a.js','_nuxt/home.63eb863a.css','_nuxt/home.831e77c0.js','_nuxt/home.pc-legacy.d1d3d60d.js','_nuxt/home.pc.8be3e011.css','_nuxt/home.pc.b14973ff.js','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.01a15e1e.js','_nuxt/index-legacy.02378705.js','_nuxt/index-legacy.0403948d.js','_nuxt/index-legacy.0513dd21.js','_nuxt/index-legacy.0a5da121.js','_nuxt/index-legacy.12dc37df.js','_nuxt/index-legacy.14fcd4c1.js','_nuxt/index-legacy.16ea6ecb.js','_nuxt/index-legacy.1c8ee5e8.js','_nuxt/index-legacy.294d3421.js','_nuxt/index-legacy.2adfdc65.js','_nuxt/index-legacy.2eda3274.js','_nuxt/index-legacy.31bf13dc.js','_nuxt/index-legacy.31f96d61.js','_nuxt/index-legacy.44914fdc.js','_nuxt/index-legacy.455e3064.js','_nuxt/index-legacy.479ea30c.js','_nuxt/index-legacy.4f402435.js','_nuxt/index-legacy.585b4291.js','_nuxt/index-legacy.5a4c23e1.js','_nuxt/index-legacy.5daebbc9.js','_nuxt/index-legacy.60697442.js','_nuxt/index-legacy.62adc792.js','_nuxt/index-legacy.67e52dd3.js','_nuxt/index-legacy.6f3d46b8.js','_nuxt/index-legacy.7942880f.js','_nuxt/index-legacy.79f0ccba.js','_nuxt/index-legacy.7b49ecb4.js','_nuxt/index-legacy.7b8393d8.js','_nuxt/index-legacy.809a185b.js','_nuxt/index-legacy.98e92caa.js','_nuxt/index-legacy.9a99581c.js','_nuxt/index-legacy.9b1c57ae.js','_nuxt/index-legacy.9f40542f.js','_nuxt/index-legacy.a2aaf406.js','_nuxt/index-legacy.a5ac3758.js','_nuxt/index-legacy.abb2eb70.js','_nuxt/index-legacy.b062e9c4.js','_nuxt/index-legacy.b102a71c.js','_nuxt/index-legacy.b99d2a8c.js','_nuxt/index-legacy.bead40db.js','_nuxt/index-legacy.d17df473.js','_nuxt/index-legacy.d5767519.js','_nuxt/index-legacy.e4fa229a.js','_nuxt/index-legacy.f569c526.js','_nuxt/index-legacy.f8a3db69.js','_nuxt/index.047e94db.js','_nuxt/index.076fce13.js','_nuxt/index.0a33af3e.js','_nuxt/index.0c519367.js','_nuxt/index.0e807d01.js','_nuxt/index.100dcc7d.css','_nuxt/index.139511b2.css','_nuxt/index.1584c461.css','_nuxt/index.1c18e6bb.css','_nuxt/index.1ee22ed4.js','_nuxt/index.208042de.js','_nuxt/index.23a90349.css','_nuxt/index.27517127.css','_nuxt/index.2946457b.js','_nuxt/index.29b6e819.js','_nuxt/index.2abc9c8e.js','_nuxt/index.2acf8381.js','_nuxt/index.3626f3db.js','_nuxt/index.37208104.js','_nuxt/index.3e3f66aa.css','_nuxt/index.44638243.css','_nuxt/index.4478cd02.js','_nuxt/index.47599534.css','_nuxt/index.4ab0db0e.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.5804ce6d.js','_nuxt/index.5fe0aadc.js','_nuxt/index.607a16b2.js','_nuxt/index.609a047b.css','_nuxt/index.60a3cb1e.js','_nuxt/index.6334e6f6.js','_nuxt/index.669f5400.js','_nuxt/index.69c12705.css','_nuxt/index.6b308f11.css','_nuxt/index.6b37a938.js','_nuxt/index.6c1277f7.css','_nuxt/index.71d24d3c.css','_nuxt/index.771c13e6.css','_nuxt/index.7abf4e46.js','_nuxt/index.7b7671a9.css','_nuxt/index.7d3c897c.js','_nuxt/index.7d9ebca1.js','_nuxt/index.815202c8.css','_nuxt/index.8c5b42de.js','_nuxt/index.9074a0d8.js','_nuxt/index.96d4779f.js','_nuxt/index.9a0cbb7c.js','_nuxt/index.9a5d56a7.js','_nuxt/index.9ae0163e.js','_nuxt/index.9b1599a9.css','_nuxt/index.9d1de308.css','_nuxt/index.9d2ceffb.js','_nuxt/index.9faa3fdf.css','_nuxt/index.a14b218a.js','_nuxt/index.a186eb11.css','_nuxt/index.a2d19b9c.js','_nuxt/index.a76252f9.css','_nuxt/index.ab16b642.js','_nuxt/index.ae40bec6.css','_nuxt/index.b26ad712.css','_nuxt/index.b4b750e6.js','_nuxt/index.b6b233ed.css','_nuxt/index.c0a2c05e.css','_nuxt/index.c7e3e070.js','_nuxt/index.c8621a6b.css','_nuxt/index.d0233f63.css','_nuxt/index.d1ea6fe7.css','_nuxt/index.d83f749f.css','_nuxt/index.da231b27.js','_nuxt/index.dad14dde.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e347bd15.css','_nuxt/index.e46c25fd.css','_nuxt/index.e5bd70b2.js','_nuxt/index.e860d2f1.js','_nuxt/index.ed9df05f.js','_nuxt/index.f05a0cca.js','_nuxt/index.f35711b2.js','_nuxt/index.f55c2aef.js','_nuxt/index.f5bd0d93.js','_nuxt/index.f7872780.css','_nuxt/index.f9cb1d5d.js','_nuxt/index.fa6af505.css','_nuxt/index.mobile-legacy.0a53cf13.js','_nuxt/index.mobile-legacy.8d9a5087.js','_nuxt/index.mobile-legacy.ad7a1d1e.js','_nuxt/index.mobile-legacy.cf90cb9a.js','_nuxt/index.mobile-legacy.eec144bd.js','_nuxt/index.mobile.0a96abeb.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.1dd303e5.js','_nuxt/index.mobile.5fd58da9.js','_nuxt/index.mobile.a1466456.css','_nuxt/index.mobile.a8a2dbae.js','_nuxt/index.mobile.b0a7dccf.css','_nuxt/index.mobile.c1ea917d.js','_nuxt/index.mobile.e6e7523a.css','_nuxt/index.moble-legacy.8cd7fb8a.js','_nuxt/index.moble.0bc2c986.js','_nuxt/index.moble.4669505e.css','_nuxt/index.pc-legacy.66a80a67.js','_nuxt/index.pc-legacy.6bde8083.js','_nuxt/index.pc-legacy.a0206fe7.js','_nuxt/index.pc-legacy.ad5cf299.js','_nuxt/index.pc-legacy.b54ddf3d.js','_nuxt/index.pc-legacy.c0cad5bf.js','_nuxt/index.pc-legacy.d2c8438e.js','_nuxt/index.pc-legacy.e40e50c9.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.0ef4d946.js','_nuxt/index.pc.1b002edd.js','_nuxt/index.pc.1fbe0c69.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.654af8f5.css','_nuxt/index.pc.68ad04c8.js','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.a15d5c72.js','_nuxt/index.pc.aab4ada2.css','_nuxt/index.pc.acc2c69b.js','_nuxt/index.pc.b3990fc1.js','_nuxt/index.pc.c31f35b3.css','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.d73d63b5.js','_nuxt/index.pc.vue-legacy.a061eaf9.js','_nuxt/index.pc.vue-legacy.f73a3e1f.js','_nuxt/index.pc.vue.10f463d1.js','_nuxt/index.pc.vue.973f6765.js','_nuxt/index.vue-legacy.1a553bae.js','_nuxt/index.vue-legacy.1e9deb74.js','_nuxt/index.vue-legacy.349e49b0.js','_nuxt/index.vue-legacy.85ff7b58.js','_nuxt/index.vue-legacy.895f7dce.js','_nuxt/index.vue.04d2f75b.js','_nuxt/index.vue.c7bbacd7.js','_nuxt/index.vue.cdf930c2.js','_nuxt/index.vue.d300f7bf.js','_nuxt/index.vue.ef10406c.js','_nuxt/indexMixin-legacy.2db7c217.js','_nuxt/indexMixin.b8997350.js','_nuxt/index_mobile-legacy.23b5aa18.js','_nuxt/index_mobile-legacy.4503f8e8.js','_nuxt/index_mobile.13b188cb.js','_nuxt/index_mobile.4e0960a3.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.ec3c2fe3.css','_nuxt/index_pc-legacy.379e9013.js','_nuxt/index_pc-legacy.9cae256d.js','_nuxt/index_pc.37148f42.css','_nuxt/index_pc.399a0d99.js','_nuxt/index_pc.a71cff98.css','_nuxt/index_pc.f1814bfd.js','_nuxt/init-legacy.6e2bb784.js','_nuxt/init.e57e84bb.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.f2cff4d2.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/login.modal.pc.d38d5ecc.js','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.0378abaf.js','_nuxt/model-cell.48fed35a.js','_nuxt/model-legacy.0e35fc91.js','_nuxt/model-legacy.0fd2c229.js','_nuxt/model-legacy.11bbc695.js','_nuxt/model-legacy.139d5b4a.js','_nuxt/model-legacy.1894884c.js','_nuxt/model-legacy.4255fb40.js','_nuxt/model-legacy.4ddaff1a.js','_nuxt/model-legacy.5578bf32.js','_nuxt/model-legacy.55a7c912.js','_nuxt/model-legacy.608c2978.js','_nuxt/model-legacy.690cda37.js','_nuxt/model-legacy.6f3cb95d.js','_nuxt/model-legacy.7f2c0346.js','_nuxt/model-legacy.8ea0a4a5.js','_nuxt/model-legacy.9135519b.js','_nuxt/model-legacy.91b6ff43.js','_nuxt/model-legacy.96342bd1.js','_nuxt/model-legacy.9713ad8d.js','_nuxt/model-legacy.c74f63fd.js','_nuxt/model-legacy.dbb3aeff.js','_nuxt/model-legacy.e7f3a3aa.js','_nuxt/model-legacy.ef5d5c61.js','_nuxt/model.0508591c.js','_nuxt/model.18602cbb.js','_nuxt/model.1dd55bf5.js','_nuxt/model.2bc31f8f.js','_nuxt/model.4aa50302.js','_nuxt/model.4dc9e283.js','_nuxt/model.69f28857.js','_nuxt/model.80d51b46.js','_nuxt/model.81200c6e.js','_nuxt/model.84d90cfe.js','_nuxt/model.964ed6af.js','_nuxt/model.a4eed1d0.js','_nuxt/model.ace4c651.js','_nuxt/model.b08ae50f.js','_nuxt/model.c52c1e58.js','_nuxt/model.ca2c3cc6.js','_nuxt/model.ce46d4ab.js','_nuxt/model.d49dfe44.js','_nuxt/model.df7287ce.js','_nuxt/model.ebac81e5.js','_nuxt/model.f45773f4.js','_nuxt/model.fb39f743.js','_nuxt/pay-drawer-legacy.67bc6673.js','_nuxt/pay-drawer.64366f16.css','_nuxt/pay-drawer.9ca919a7.js','_nuxt/pay-legacy.8a0750c2.js','_nuxt/pay-legacy.b81757ab.js','_nuxt/pay-step-legacy.641d718c.js','_nuxt/pay-step.66eaf4e7.js','_nuxt/pay-step.pc-legacy.a2444454.js','_nuxt/pay-step.pc.5aa940fc.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay.4bf1bf41.css','_nuxt/pay.63cd6270.js','_nuxt/pay.92e74254.js','_nuxt/pay.cf9e3b84.css','_nuxt/payGoodsListItem-legacy.8f1acf3c.js','_nuxt/payGoodsListItem-legacy.df31734b.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.bddcee3f.js','_nuxt/payGoodsListItem.f1167c14.js','_nuxt/payMixin-legacy.e0351c82.js','_nuxt/payMixin.9c1d81be.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.782862f3.js','_nuxt/public.342dbb8b.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.ca82df91.js','_nuxt/recentItemMixin.0f0209d4.js','_nuxt/recharge-item-legacy.6a814440.js','_nuxt/recharge-item.00e3943c.js','_nuxt/recharge-item.935b9836.css','_nuxt/refresh-modal-legacy.c23880d0.js','_nuxt/refresh-modal.4bba1e0a.js','_nuxt/report-legacy.19397113.js','_nuxt/report-legacy.194c73a6.js','_nuxt/report-legacy.310b4f3e.js','_nuxt/report-legacy.3312f073.js','_nuxt/report-legacy.6fae0a0b.js','_nuxt/report-legacy.7d424006.js','_nuxt/report-legacy.7d74a34a.js','_nuxt/report-legacy.84693c99.js','_nuxt/report-legacy.9d4e01aa.js','_nuxt/report-legacy.9d70de66.js','_nuxt/report-legacy.9f947d24.js','_nuxt/report-legacy.a5b8e7a5.js','_nuxt/report-legacy.b2223014.js','_nuxt/report-legacy.c1c80fe3.js','_nuxt/report-legacy.c914e244.js','_nuxt/report-legacy.c9713ef0.js','_nuxt/report-legacy.ca804d1c.js','_nuxt/report-legacy.faee1ca2.js','_nuxt/report.06aa77cd.js','_nuxt/report.0ae86180.js','_nuxt/report.15cfb813.js','_nuxt/report.181bd989.js','_nuxt/report.5f200b4b.js','_nuxt/report.5fd64b47.js','_nuxt/report.79b1f332.js','_nuxt/report.85314d56.js','_nuxt/report.96e44cbc.js','_nuxt/report.9a5965e4.js','_nuxt/report.9d8ae8c1.js','_nuxt/report.9f88b9e5.js','_nuxt/report.a9e76873.js','_nuxt/report.bf5fd949.js','_nuxt/report.d08018a9.js','_nuxt/report.d2dfed75.js','_nuxt/report.e14a7d87.js','_nuxt/report.f33b7eae.js','_nuxt/result-view-legacy.6c748908.js','_nuxt/result-view.80103113.js','_nuxt/resultModalMixin-legacy.03c1d8c9.js','_nuxt/resultModalMixin.828014fd.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.c7d47c1e.js','_nuxt/search-cell.0b44601e.css','_nuxt/search-cell.e27cab22.js','_nuxt/search-legacy.ec8d8308.js','_nuxt/search-modal.pc-legacy.b1926ffb.js','_nuxt/search-modal.pc.0981274b.css','_nuxt/search-modal.pc.dc13bbba.js','_nuxt/search-page.mobile-legacy.b7c5159a.js','_nuxt/search-page.mobile.697c78e6.js','_nuxt/search-page.mobile.6fc89380.css','_nuxt/search.2d355869.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/style-legacy.bec7b2b1.js','_nuxt/style.2a26d1c2.css','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.8a4152fa.js','_nuxt/swiper-bundle.35c6f966.js','_nuxt/swiper-bundle.44a6bf01.css','_nuxt/switch-legacy.6729b62b.js','_nuxt/switch-legacy.6b24656a.js','_nuxt/switch.1d47b1b9.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.ed30b8e5.js','_nuxt/switchMixin-legacy.fcfb1b67.js','_nuxt/switchMixin.e0c044c9.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.1c63a1e7.js','_nuxt/user-info.4367f262.js','_nuxt/user-info.a92680ae.css','_nuxt/utilities.appleyPay-legacy.28cb97a0.js','_nuxt/utilities.appleyPay.0e7a05a2.js','_nuxt/utils-legacy.2c9c5fcf.js','_nuxt/utils.39d19989.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.253abc2d.js','_nuxt/vue.f36acd1f.b111778c.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','gray.js','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/expirePopup/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-channel-item/report/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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
      console.log('service worker', '1.0.290', event.request, event.request.url)
      event.respondWith(networkFirst(event))
    } else {
      event.respondWith(cacheFirst(event))
    }
  }
})



