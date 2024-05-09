

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.8180ad28.js','_nuxt/AboutSA.mobile.43472dda.js','_nuxt/AboutSA2-legacy.65958e7e.js','_nuxt/AboutSA2.318f14bf.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.8fa78c6f.js','_nuxt/PayUtils.afb2f995.js','_nuxt/UICarouselView-legacy.1f33772c.js','_nuxt/UICarouselView.b6c34bcc.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.8a951dc5.js','_nuxt/account-item-legacy.941a9c20.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.c9a6c265.js','_nuxt/account-item.d62c5d34.js','_nuxt/api-legacy.b258c0c6.js','_nuxt/api.25cd2e72.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.7cf6c18e.js','_nuxt/bank-views.ecc3ced4.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/81227851-4565-429a-9314-65e24d199857.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.41310784.js','_nuxt/channel-view.ff36704c.js','_nuxt/cko-card-list-legacy.2eb02296.js','_nuxt/cko-card-list.483b4687.js','_nuxt/cko-card-list.6193db4f.css','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.b5fd9732.js','_nuxt/enter-legacy.eea5dd05.js','_nuxt/enter.342b3289.css','_nuxt/enter.8bd530e7.js','_nuxt/enter.d1b03e9b.js','_nuxt/enter.d7350a96.css','_nuxt/enterMixin-legacy.0cc68b34.js','_nuxt/enterMixin.d3a9f5ae.js','_nuxt/entry-legacy.8cc609d5.js','_nuxt/entry.52209fbe.css','_nuxt/entry.7c93622a.js','_nuxt/error-404-legacy.88b0e5fb.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.39c35bb0.js','_nuxt/error-500-legacy.130a7d58.js','_nuxt/error-500.3189f0e6.js','_nuxt/error-500.c5df6088.css','_nuxt/error-legacy.e33b2073.js','_nuxt/error.06313295.css','_nuxt/error.8bf54a52.js','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/frames-legacy.9bc9765c.js','_nuxt/frames.72dc15da.js','_nuxt/home-legacy.d6030b02.js','_nuxt/home.63eb863a.css','_nuxt/home.74eea4a0.js','_nuxt/home.pc-legacy.184136d5.js','_nuxt/home.pc.2bb0b049.js','_nuxt/home.pc.8be3e011.css','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.09de4e24.js','_nuxt/index-legacy.0dbfab20.js','_nuxt/index-legacy.1182bbac.js','_nuxt/index-legacy.12dcd420.js','_nuxt/index-legacy.1e4ce266.js','_nuxt/index-legacy.239bbb42.js','_nuxt/index-legacy.4543389c.js','_nuxt/index-legacy.4d87be8c.js','_nuxt/index-legacy.4d9debfb.js','_nuxt/index-legacy.4f9837ca.js','_nuxt/index-legacy.4fffa15d.js','_nuxt/index-legacy.50a6a133.js','_nuxt/index-legacy.56e245ac.js','_nuxt/index-legacy.5ad688db.js','_nuxt/index-legacy.6473d38a.js','_nuxt/index-legacy.6c108fd0.js','_nuxt/index-legacy.77124c55.js','_nuxt/index-legacy.7cc1d6d9.js','_nuxt/index-legacy.82a0d6aa.js','_nuxt/index-legacy.85edfdd1.js','_nuxt/index-legacy.8e233145.js','_nuxt/index-legacy.993791a8.js','_nuxt/index-legacy.9bc4adf8.js','_nuxt/index-legacy.a24653b6.js','_nuxt/index-legacy.a4fee542.js','_nuxt/index-legacy.a8b8dbbd.js','_nuxt/index-legacy.aa99f455.js','_nuxt/index-legacy.ab9b3d1f.js','_nuxt/index-legacy.b44916a7.js','_nuxt/index-legacy.b509f815.js','_nuxt/index-legacy.bbf6f095.js','_nuxt/index-legacy.c091ef23.js','_nuxt/index-legacy.c7fb44d9.js','_nuxt/index-legacy.c995c4c9.js','_nuxt/index-legacy.d28a0929.js','_nuxt/index-legacy.d7a421fd.js','_nuxt/index-legacy.d8ff63c9.js','_nuxt/index-legacy.ddaf890a.js','_nuxt/index-legacy.ddd1688c.js','_nuxt/index-legacy.e3b25906.js','_nuxt/index-legacy.e99cb776.js','_nuxt/index-legacy.e9a8604c.js','_nuxt/index-legacy.f4869532.js','_nuxt/index-legacy.f564ac00.js','_nuxt/index-legacy.f9ff85b8.js','_nuxt/index-legacy.fbb735b0.js','_nuxt/index.0062d419.js','_nuxt/index.00af5e46.js','_nuxt/index.021df40f.js','_nuxt/index.0352559d.js','_nuxt/index.063331c4.js','_nuxt/index.0cd971fc.js','_nuxt/index.100dcc7d.css','_nuxt/index.139511b2.css','_nuxt/index.1584c461.css','_nuxt/index.1c18e6bb.css','_nuxt/index.23a90349.css','_nuxt/index.27517127.css','_nuxt/index.295bede4.js','_nuxt/index.2bb5f1a0.js','_nuxt/index.339b204f.js','_nuxt/index.39e22e66.js','_nuxt/index.3e3f66aa.css','_nuxt/index.3f10e840.js','_nuxt/index.41337d46.js','_nuxt/index.44638243.css','_nuxt/index.46d3cc78.js','_nuxt/index.47599534.css','_nuxt/index.4e64c774.js','_nuxt/index.51e52fcd.css','_nuxt/index.526fbd85.js','_nuxt/index.52871309.css','_nuxt/index.57785df4.js','_nuxt/index.5b213cb2.js','_nuxt/index.5d718854.js','_nuxt/index.609a047b.css','_nuxt/index.6307a1c7.js','_nuxt/index.650903d5.js','_nuxt/index.68b3d156.js','_nuxt/index.69c12705.css','_nuxt/index.6b308f11.css','_nuxt/index.6c1277f7.css','_nuxt/index.6f60104c.js','_nuxt/index.71d24d3c.css','_nuxt/index.7333a3fd.js','_nuxt/index.771c13e6.css','_nuxt/index.7a1e2e89.js','_nuxt/index.7a7ed312.js','_nuxt/index.7b7671a9.css','_nuxt/index.7c9f3c77.js','_nuxt/index.815202c8.css','_nuxt/index.82a5cdd9.js','_nuxt/index.86ffd41a.js','_nuxt/index.876e027c.js','_nuxt/index.8b0a6f68.js','_nuxt/index.8cb54bff.js','_nuxt/index.8d74862d.js','_nuxt/index.94fe14f5.js','_nuxt/index.981741ec.js','_nuxt/index.9b1599a9.css','_nuxt/index.9d1de308.css','_nuxt/index.9faa3fdf.css','_nuxt/index.a039d154.js','_nuxt/index.a186eb11.css','_nuxt/index.a76252f9.css','_nuxt/index.ae40bec6.css','_nuxt/index.b26ad712.css','_nuxt/index.b6b233ed.css','_nuxt/index.b9cc29a7.js','_nuxt/index.c0a2c05e.css','_nuxt/index.c1520bd0.js','_nuxt/index.c18e4f7a.js','_nuxt/index.c8621a6b.css','_nuxt/index.c95c6185.js','_nuxt/index.d0233f63.css','_nuxt/index.d1ea6fe7.css','_nuxt/index.d83f749f.css','_nuxt/index.dad14dde.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e347bd15.css','_nuxt/index.e3483fc3.js','_nuxt/index.e46c25fd.css','_nuxt/index.eaa6d982.js','_nuxt/index.ef9685fe.js','_nuxt/index.f46104bb.js','_nuxt/index.f56959d8.js','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.fcdf4d98.js','_nuxt/index.fd51d501.js','_nuxt/index.mobile-legacy.42cc4440.js','_nuxt/index.mobile-legacy.ac402191.js','_nuxt/index.mobile-legacy.d43379fa.js','_nuxt/index.mobile-legacy.ebab463e.js','_nuxt/index.mobile-legacy.edc236aa.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.5265d888.js','_nuxt/index.mobile.5366e59f.js','_nuxt/index.mobile.66755c0b.js','_nuxt/index.mobile.81efe856.js','_nuxt/index.mobile.a1466456.css','_nuxt/index.mobile.b0a7dccf.css','_nuxt/index.mobile.e6e7523a.css','_nuxt/index.mobile.fbcca4f2.js','_nuxt/index.moble-legacy.ef335943.js','_nuxt/index.moble.4669505e.css','_nuxt/index.moble.eeef2e2f.js','_nuxt/index.pc-legacy.43129db0.js','_nuxt/index.pc-legacy.70858922.js','_nuxt/index.pc-legacy.7146cedd.js','_nuxt/index.pc-legacy.96c6a3d8.js','_nuxt/index.pc-legacy.a244a2ac.js','_nuxt/index.pc-legacy.c4426388.js','_nuxt/index.pc-legacy.f5fe0fef.js','_nuxt/index.pc-legacy.ff032fab.js','_nuxt/index.pc.00960f23.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.0c36df2f.js','_nuxt/index.pc.144cc9df.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.5b16b15e.js','_nuxt/index.pc.654af8f5.css','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.779820e2.js','_nuxt/index.pc.7ccdb27f.js','_nuxt/index.pc.892b6d40.js','_nuxt/index.pc.aab4ada2.css','_nuxt/index.pc.b6474b3d.js','_nuxt/index.pc.c31f35b3.css','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.vue-legacy.1a91ca14.js','_nuxt/index.pc.vue-legacy.a7d17eb6.js','_nuxt/index.pc.vue.1ecf2ab1.js','_nuxt/index.pc.vue.2ec0bb03.js','_nuxt/index.vue-legacy.08cc66d0.js','_nuxt/index.vue-legacy.2e7293d9.js','_nuxt/index.vue-legacy.303107d6.js','_nuxt/index.vue-legacy.8ce89229.js','_nuxt/index.vue-legacy.d9da9bfe.js','_nuxt/index.vue.0aa9a106.js','_nuxt/index.vue.2a8c6117.js','_nuxt/index.vue.366986da.js','_nuxt/index.vue.6b42faf1.js','_nuxt/index.vue.c3a4e1c7.js','_nuxt/indexMixin-legacy.dc05dfe8.js','_nuxt/indexMixin.a94ca5c4.js','_nuxt/index_mobile-legacy.89810a83.js','_nuxt/index_mobile-legacy.990cb3e1.js','_nuxt/index_mobile.3063b07f.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.ec3c2fe3.css','_nuxt/index_mobile.f2ed3877.js','_nuxt/index_pc-legacy.55091868.js','_nuxt/index_pc-legacy.615717aa.js','_nuxt/index_pc.03f27d74.js','_nuxt/index_pc.37148f42.css','_nuxt/index_pc.71706fc6.js','_nuxt/index_pc.a71cff98.css','_nuxt/init-legacy.7bf2b5a6.js','_nuxt/init.25823494.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.07ec75c8.js','_nuxt/login.modal.pc.417f8209.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.e4152819.js','_nuxt/model-cell.a9a20fea.js','_nuxt/model-legacy.06e89995.js','_nuxt/model-legacy.07ef9088.js','_nuxt/model-legacy.0d5397e7.js','_nuxt/model-legacy.24f423ac.js','_nuxt/model-legacy.46be9204.js','_nuxt/model-legacy.5d45bc97.js','_nuxt/model-legacy.61ff035f.js','_nuxt/model-legacy.65f82908.js','_nuxt/model-legacy.6e9a6e1f.js','_nuxt/model-legacy.90b495c6.js','_nuxt/model-legacy.93c7da21.js','_nuxt/model-legacy.9e25dea4.js','_nuxt/model-legacy.ac55196e.js','_nuxt/model-legacy.c5c57016.js','_nuxt/model-legacy.c91344d9.js','_nuxt/model-legacy.e1f6dadd.js','_nuxt/model-legacy.e218adba.js','_nuxt/model-legacy.e79c8fb7.js','_nuxt/model-legacy.e991eb50.js','_nuxt/model-legacy.eb584ac0.js','_nuxt/model-legacy.efe21c3b.js','_nuxt/model-legacy.fd3de1f8.js','_nuxt/model.004271e0.js','_nuxt/model.04e07670.js','_nuxt/model.2a058f37.js','_nuxt/model.2c285ab6.js','_nuxt/model.350df7d1.js','_nuxt/model.3f675443.js','_nuxt/model.4c5aee35.js','_nuxt/model.53995802.js','_nuxt/model.53ff307b.js','_nuxt/model.64f3c90b.js','_nuxt/model.7f020e0f.js','_nuxt/model.841da17c.js','_nuxt/model.914a68d8.js','_nuxt/model.ae3ddcc5.js','_nuxt/model.b3f866ab.js','_nuxt/model.b68088ac.js','_nuxt/model.b9c824bd.js','_nuxt/model.d04c5eae.js','_nuxt/model.edd165ce.js','_nuxt/model.ef828704.js','_nuxt/model.f37b08af.js','_nuxt/model.fba8169f.js','_nuxt/pay-drawer-legacy.0f3c5335.js','_nuxt/pay-drawer.64366f16.css','_nuxt/pay-drawer.7514be2c.js','_nuxt/pay-legacy.29c858fa.js','_nuxt/pay-legacy.5147f511.js','_nuxt/pay-step-legacy.0622d532.js','_nuxt/pay-step.2d6a072a.js','_nuxt/pay-step.pc-legacy.841a9a5c.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay-step.pc.a630cf3b.js','_nuxt/pay.3db4b00b.js','_nuxt/pay.4bf1bf41.css','_nuxt/pay.cf9e3b84.css','_nuxt/pay.edec7f4c.js','_nuxt/payGoodsListItem-legacy.214abbe7.js','_nuxt/payGoodsListItem-legacy.32dc5619.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.b3a63c0e.js','_nuxt/payGoodsListItem.d94e963e.js','_nuxt/payMixin-legacy.c6418bb6.js','_nuxt/payMixin.a419e375.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.2f8b13a3.js','_nuxt/public.5a48a8ac.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.a407b888.js','_nuxt/recentItemMixin.d9ab5c43.js','_nuxt/recharge-item-legacy.02c58a53.js','_nuxt/recharge-item.935b9836.css','_nuxt/recharge-item.efab278b.js','_nuxt/refresh-modal-legacy.a167b0d1.js','_nuxt/refresh-modal.cbe7ed11.js','_nuxt/report-legacy.3613b076.js','_nuxt/report-legacy.3ace4a3b.js','_nuxt/report-legacy.44954e80.js','_nuxt/report-legacy.4bf6604a.js','_nuxt/report-legacy.4ccf5f08.js','_nuxt/report-legacy.4d9527a7.js','_nuxt/report-legacy.4fa425f0.js','_nuxt/report-legacy.562f0ab8.js','_nuxt/report-legacy.9bce0c39.js','_nuxt/report-legacy.a0b35a03.js','_nuxt/report-legacy.a42229f9.js','_nuxt/report-legacy.aaf090a7.js','_nuxt/report-legacy.b3643332.js','_nuxt/report-legacy.b964cef3.js','_nuxt/report-legacy.d42f76f6.js','_nuxt/report-legacy.e6d504c1.js','_nuxt/report-legacy.ef035d7d.js','_nuxt/report-legacy.f5e1a707.js','_nuxt/report.106f835a.js','_nuxt/report.1c8dd03a.js','_nuxt/report.1e07d276.js','_nuxt/report.21065f00.js','_nuxt/report.3043b209.js','_nuxt/report.41e55f76.js','_nuxt/report.53c7b871.js','_nuxt/report.67bfcd8b.js','_nuxt/report.6ad8eaec.js','_nuxt/report.82e1c903.js','_nuxt/report.8e5a677b.js','_nuxt/report.9e89210a.js','_nuxt/report.ba0935c3.js','_nuxt/report.c3ec874c.js','_nuxt/report.cd27326a.js','_nuxt/report.cf6ea8e3.js','_nuxt/report.e7e63146.js','_nuxt/report.fae3df8b.js','_nuxt/result-view-legacy.187fa89a.js','_nuxt/result-view.d0a36123.js','_nuxt/resultModalMixin-legacy.460d580e.js','_nuxt/resultModalMixin.c5d591c9.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.02f067c4.js','_nuxt/search-cell.0b44601e.css','_nuxt/search-cell.84a7f5a4.js','_nuxt/search-legacy.bfb823a0.js','_nuxt/search-modal.pc-legacy.a7f47da4.js','_nuxt/search-modal.pc.0981274b.css','_nuxt/search-modal.pc.bd6bfb71.js','_nuxt/search-page.mobile-legacy.106f0a18.js','_nuxt/search-page.mobile.6fc89380.css','_nuxt/search-page.mobile.abca6f23.js','_nuxt/search.d8c81491.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/style-legacy.bec7b2b1.js','_nuxt/style.2a26d1c2.css','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.8a4152fa.js','_nuxt/swiper-bundle.35c6f966.js','_nuxt/swiper-bundle.44a6bf01.css','_nuxt/switch-legacy.25e8d5e6.js','_nuxt/switch-legacy.d48fa602.js','_nuxt/switch.36217673.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.7f228aef.js','_nuxt/switchMixin-legacy.ee029398.js','_nuxt/switchMixin.0f416302.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.9551b028.js','_nuxt/user-info.518b0e79.js','_nuxt/user-info.a92680ae.css','_nuxt/utilities.appleyPay-legacy.a0117aad.js','_nuxt/utilities.appleyPay.c894b940.js','_nuxt/utils-legacy.2c9c5fcf.js','_nuxt/utils.39d19989.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.2d48a79f.js','_nuxt/vue.f36acd1f.2377a910.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','gray.js','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/expirePopup/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-channel-item/report/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



