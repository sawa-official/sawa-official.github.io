

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.514cc2a0.js','_nuxt/AboutSA.mobile.4bc58871.js','_nuxt/AboutSA2-legacy.c9db86a0.js','_nuxt/AboutSA2.7fa27919.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.f63ae28d.js','_nuxt/PayUtils.7f7b1990.js','_nuxt/UICarouselView-legacy.2e11539f.js','_nuxt/UICarouselView.d102c61b.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.d6e87139.js','_nuxt/account-item-legacy.e3cbad1f.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.840dc1c4.js','_nuxt/account-item.950742c1.css','_nuxt/account-item.dc836de9.js','_nuxt/api-legacy.39f13146.js','_nuxt/api.4dce2387.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.49971cae.js','_nuxt/bank-views.44ac7aff.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/2a720970-b69b-4fe1-8970-ba84ea2aa3db.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.4340c26d.js','_nuxt/channel-view.0d714cc7.js','_nuxt/cko-card-list-legacy.09509190.js','_nuxt/cko-card-list.6193db4f.css','_nuxt/cko-card-list.c6356eb9.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.438925d0.js','_nuxt/enter-legacy.b0c58882.js','_nuxt/enter.342b3289.css','_nuxt/enter.8003639a.js','_nuxt/enter.ce47fec1.js','_nuxt/enter.d7350a96.css','_nuxt/enterMixin-legacy.1aa05b42.js','_nuxt/enterMixin.0e73cd22.js','_nuxt/entry-legacy.ae6ff8dd.js','_nuxt/entry.52209fbe.css','_nuxt/entry.9c11685c.js','_nuxt/error-404-legacy.09e2dd5e.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.46613af8.js','_nuxt/error-500-legacy.acd3f821.js','_nuxt/error-500.57b29938.js','_nuxt/error-500.c5df6088.css','_nuxt/error-legacy.8a7c1909.js','_nuxt/error.06313295.css','_nuxt/error.1e53d5c8.js','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/frames-legacy.f6156534.js','_nuxt/frames.d460f6fe.js','_nuxt/home-legacy.57a842af.js','_nuxt/home.63eb863a.css','_nuxt/home.8f990f94.js','_nuxt/home.pc-legacy.01a81c72.js','_nuxt/home.pc.48cccd52.js','_nuxt/home.pc.8be3e011.css','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.0909f2bb.js','_nuxt/index-legacy.0cf4e961.js','_nuxt/index-legacy.14170aa6.js','_nuxt/index-legacy.14387edd.js','_nuxt/index-legacy.1612621e.js','_nuxt/index-legacy.1ee35726.js','_nuxt/index-legacy.2025ec0d.js','_nuxt/index-legacy.21c31917.js','_nuxt/index-legacy.36f21bf2.js','_nuxt/index-legacy.385d345b.js','_nuxt/index-legacy.3c175ff5.js','_nuxt/index-legacy.3c77bafc.js','_nuxt/index-legacy.43536b17.js','_nuxt/index-legacy.452f955b.js','_nuxt/index-legacy.46ad2d14.js','_nuxt/index-legacy.4df46a16.js','_nuxt/index-legacy.55bc8c4c.js','_nuxt/index-legacy.57ca2761.js','_nuxt/index-legacy.57e3f550.js','_nuxt/index-legacy.5cc9cf60.js','_nuxt/index-legacy.68d1fe32.js','_nuxt/index-legacy.6ef4acc4.js','_nuxt/index-legacy.779c9f70.js','_nuxt/index-legacy.7bb130d9.js','_nuxt/index-legacy.7e640f60.js','_nuxt/index-legacy.8386e5aa.js','_nuxt/index-legacy.8603d9ae.js','_nuxt/index-legacy.870dbbc7.js','_nuxt/index-legacy.8c98a1b9.js','_nuxt/index-legacy.901e5c9b.js','_nuxt/index-legacy.903268f0.js','_nuxt/index-legacy.935694e2.js','_nuxt/index-legacy.992ffd06.js','_nuxt/index-legacy.99c52b5b.js','_nuxt/index-legacy.ac3cb9bb.js','_nuxt/index-legacy.acf0c81d.js','_nuxt/index-legacy.b4d1d656.js','_nuxt/index-legacy.c4055b52.js','_nuxt/index-legacy.c5803e69.js','_nuxt/index-legacy.cd48e2c8.js','_nuxt/index-legacy.e417c1bc.js','_nuxt/index-legacy.ec293424.js','_nuxt/index-legacy.f01575c2.js','_nuxt/index-legacy.f9b7faf5.js','_nuxt/index-legacy.fa712364.js','_nuxt/index-legacy.fdfdc9a0.js','_nuxt/index.01638d3c.js','_nuxt/index.02ce829f.js','_nuxt/index.0f34d258.js','_nuxt/index.100dcc7d.css','_nuxt/index.139511b2.css','_nuxt/index.1584c461.css','_nuxt/index.17460a84.js','_nuxt/index.179b3ab0.js','_nuxt/index.18b9649b.js','_nuxt/index.1939abe0.js','_nuxt/index.1c18e6bb.css','_nuxt/index.23a90349.css','_nuxt/index.27517127.css','_nuxt/index.2e10ad80.js','_nuxt/index.33632379.js','_nuxt/index.3a61068c.js','_nuxt/index.3b375787.js','_nuxt/index.3cc0205f.js','_nuxt/index.3e3f66aa.css','_nuxt/index.3eeb62cd.js','_nuxt/index.44638243.css','_nuxt/index.47599534.css','_nuxt/index.47f77b16.js','_nuxt/index.4984d197.js','_nuxt/index.50042447.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.557c99dd.js','_nuxt/index.5b0b2d1b.js','_nuxt/index.609a047b.css','_nuxt/index.61917089.js','_nuxt/index.62048213.js','_nuxt/index.63ad3592.js','_nuxt/index.69c12705.css','_nuxt/index.6b308f11.css','_nuxt/index.6c1277f7.css','_nuxt/index.6c29f960.js','_nuxt/index.6e89757f.js','_nuxt/index.7188aa6a.js','_nuxt/index.71d24d3c.css','_nuxt/index.748acad1.js','_nuxt/index.758e5cee.js','_nuxt/index.769c3a9a.js','_nuxt/index.771c13e6.css','_nuxt/index.7b7671a9.css','_nuxt/index.7bc64e01.js','_nuxt/index.7cba505d.js','_nuxt/index.815202c8.css','_nuxt/index.84a3b808.js','_nuxt/index.926c6dcd.js','_nuxt/index.93c4e5fd.js','_nuxt/index.982024b9.js','_nuxt/index.9b1599a9.css','_nuxt/index.9d1de308.css','_nuxt/index.9d6bf44b.js','_nuxt/index.9faa3fdf.css','_nuxt/index.a186eb11.css','_nuxt/index.a3dd2f58.js','_nuxt/index.a76252f9.css','_nuxt/index.ac71e15f.js','_nuxt/index.ae40bec6.css','_nuxt/index.b26ad712.css','_nuxt/index.b4ca0ef7.js','_nuxt/index.b6b233ed.css','_nuxt/index.b9e00297.js','_nuxt/index.bd33b974.js','_nuxt/index.beca500e.js','_nuxt/index.c0a2c05e.css','_nuxt/index.c8621a6b.css','_nuxt/index.cedc31d0.js','_nuxt/index.d0233f63.css','_nuxt/index.d1ea6fe7.css','_nuxt/index.d2819926.js','_nuxt/index.d402c597.js','_nuxt/index.d60ab534.js','_nuxt/index.d83f749f.css','_nuxt/index.dad14dde.css','_nuxt/index.dc4d8142.js','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e10f0222.js','_nuxt/index.e347bd15.css','_nuxt/index.e46c25fd.css','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.mobile-legacy.2d73eb5a.js','_nuxt/index.mobile-legacy.5c1e68bd.js','_nuxt/index.mobile-legacy.bab00864.js','_nuxt/index.mobile-legacy.c8afa70f.js','_nuxt/index.mobile-legacy.e7fb47c4.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.2db2d28a.js','_nuxt/index.mobile.3414019b.js','_nuxt/index.mobile.9e4df18a.js','_nuxt/index.mobile.a1466456.css','_nuxt/index.mobile.b0a7dccf.css','_nuxt/index.mobile.bd0f9ca7.js','_nuxt/index.mobile.e6e7523a.css','_nuxt/index.mobile.edc83820.js','_nuxt/index.moble-legacy.a1d7a24d.js','_nuxt/index.moble.4669505e.css','_nuxt/index.moble.8095e764.js','_nuxt/index.pc-legacy.2125d15d.js','_nuxt/index.pc-legacy.3c60803f.js','_nuxt/index.pc-legacy.54c6554b.js','_nuxt/index.pc-legacy.993542fe.js','_nuxt/index.pc-legacy.b06dfe73.js','_nuxt/index.pc-legacy.f36dff98.js','_nuxt/index.pc-legacy.f6ff3413.js','_nuxt/index.pc-legacy.fee59364.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.24f229c2.js','_nuxt/index.pc.2b5f67a0.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.57ee078c.js','_nuxt/index.pc.654af8f5.css','_nuxt/index.pc.6f40dd14.js','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.9093bf5a.js','_nuxt/index.pc.aab4ada2.css','_nuxt/index.pc.b2a79251.js','_nuxt/index.pc.c31f35b3.css','_nuxt/index.pc.c7ff8153.js','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.cffe3799.js','_nuxt/index.pc.vue-legacy.136a8d9b.js','_nuxt/index.pc.vue-legacy.da469d0b.js','_nuxt/index.pc.vue.7da63950.js','_nuxt/index.pc.vue.9fc970da.js','_nuxt/index.vue-legacy.61537f97.js','_nuxt/index.vue-legacy.9a26e289.js','_nuxt/index.vue-legacy.a2249782.js','_nuxt/index.vue-legacy.ae393988.js','_nuxt/index.vue-legacy.ca825e3b.js','_nuxt/index.vue.7a30597d.js','_nuxt/index.vue.7f63274f.js','_nuxt/index.vue.87b492e8.js','_nuxt/index.vue.8815691e.js','_nuxt/index.vue.a3ba9970.js','_nuxt/indexMixin-legacy.2a3593b9.js','_nuxt/indexMixin.a6f28ffb.js','_nuxt/index_mobile-legacy.ae0ccb89.js','_nuxt/index_mobile-legacy.b434927a.js','_nuxt/index_mobile.380d412e.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.d8d2d51b.js','_nuxt/index_mobile.ec3c2fe3.css','_nuxt/index_pc-legacy.90239c1c.js','_nuxt/index_pc-legacy.dedc1054.js','_nuxt/index_pc.37148f42.css','_nuxt/index_pc.a71cff98.css','_nuxt/index_pc.ce46b083.js','_nuxt/index_pc.ec4b001e.js','_nuxt/init-legacy.8a8c13b7.js','_nuxt/init.d76a1bcd.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.0b6fee19.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/login.modal.pc.d9eb0487.js','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.3f82b0dc.js','_nuxt/model-cell.d596223f.js','_nuxt/model-legacy.00f672b3.js','_nuxt/model-legacy.06aa686b.js','_nuxt/model-legacy.0723e348.js','_nuxt/model-legacy.28374656.js','_nuxt/model-legacy.38d8770e.js','_nuxt/model-legacy.475ac9b5.js','_nuxt/model-legacy.5a804a97.js','_nuxt/model-legacy.5d18be0b.js','_nuxt/model-legacy.5fdcd8cc.js','_nuxt/model-legacy.68c46502.js','_nuxt/model-legacy.69f2a5eb.js','_nuxt/model-legacy.72288498.js','_nuxt/model-legacy.7fbe7837.js','_nuxt/model-legacy.91c3c5a2.js','_nuxt/model-legacy.b3f6f33f.js','_nuxt/model-legacy.b58a8a5c.js','_nuxt/model-legacy.ba4da08d.js','_nuxt/model-legacy.dec2cd49.js','_nuxt/model-legacy.e66f7f99.js','_nuxt/model-legacy.e9f9a2fb.js','_nuxt/model-legacy.f9bb5943.js','_nuxt/model-legacy.fa01909f.js','_nuxt/model.0c0f8e2f.js','_nuxt/model.0d5aae3f.js','_nuxt/model.19e4ea3c.js','_nuxt/model.3130ac92.js','_nuxt/model.3b66b9d7.js','_nuxt/model.4b231940.js','_nuxt/model.4d6f0442.js','_nuxt/model.53b8f7e8.js','_nuxt/model.61029d9b.js','_nuxt/model.6194761e.js','_nuxt/model.6a29f909.js','_nuxt/model.83794529.js','_nuxt/model.8696221b.js','_nuxt/model.8fc7144e.js','_nuxt/model.9438877b.js','_nuxt/model.a2d4856d.js','_nuxt/model.a7ebfe7b.js','_nuxt/model.b1cc1dd6.js','_nuxt/model.b28eb875.js','_nuxt/model.bd342df8.js','_nuxt/model.ea280f98.js','_nuxt/model.ead5d6f6.js','_nuxt/pay-drawer-legacy.10f20f51.js','_nuxt/pay-drawer.64366f16.css','_nuxt/pay-drawer.b24c550f.js','_nuxt/pay-legacy.4618d4cb.js','_nuxt/pay-legacy.59c7503c.js','_nuxt/pay-step-legacy.191fdfed.js','_nuxt/pay-step.0043e23d.js','_nuxt/pay-step.pc-legacy.0a15ac5f.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay-step.pc.c37265d5.js','_nuxt/pay.0eb38a9d.js','_nuxt/pay.4bf1bf41.css','_nuxt/pay.6c3f21ba.js','_nuxt/pay.cf9e3b84.css','_nuxt/payGoodsListItem-legacy.653aef3e.js','_nuxt/payGoodsListItem-legacy.67e06872.js','_nuxt/payGoodsListItem.0d4b631e.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.9790aa8e.js','_nuxt/payMixin-legacy.f8cdb534.js','_nuxt/payMixin.ad2503c0.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.4b48dab5.js','_nuxt/public.5420f83a.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.7a19291a.js','_nuxt/recentItemMixin.7997652c.js','_nuxt/recharge-item-legacy.4e031da7.js','_nuxt/recharge-item.0c790695.js','_nuxt/recharge-item.935b9836.css','_nuxt/refresh-modal-legacy.f9fa0d88.js','_nuxt/refresh-modal.3fbae41c.js','_nuxt/report-legacy.02116b45.js','_nuxt/report-legacy.0dabe8ee.js','_nuxt/report-legacy.1caefd03.js','_nuxt/report-legacy.35c73c66.js','_nuxt/report-legacy.3e8721a0.js','_nuxt/report-legacy.4523e416.js','_nuxt/report-legacy.4f42ba9e.js','_nuxt/report-legacy.6058abc6.js','_nuxt/report-legacy.669768a6.js','_nuxt/report-legacy.66bebf2d.js','_nuxt/report-legacy.9abe8105.js','_nuxt/report-legacy.a162d6cb.js','_nuxt/report-legacy.a1a49448.js','_nuxt/report-legacy.be618a68.js','_nuxt/report-legacy.c3b48763.js','_nuxt/report-legacy.e5aaa9a8.js','_nuxt/report-legacy.e9bf2d76.js','_nuxt/report-legacy.fbc1d4dd.js','_nuxt/report.0073d6b2.js','_nuxt/report.071ac2eb.js','_nuxt/report.0b459764.js','_nuxt/report.1d3de13d.js','_nuxt/report.30533eac.js','_nuxt/report.3c25f62b.js','_nuxt/report.45e6ee9d.js','_nuxt/report.473438fa.js','_nuxt/report.6ae2a65b.js','_nuxt/report.7bbb180f.js','_nuxt/report.8a05694c.js','_nuxt/report.8f4b0ef6.js','_nuxt/report.cc096883.js','_nuxt/report.e9013a6f.js','_nuxt/report.f191bffe.js','_nuxt/report.f1fac7b1.js','_nuxt/report.f7e3530f.js','_nuxt/report.fcb52425.js','_nuxt/result-view-legacy.568964f7.js','_nuxt/result-view.c204e779.js','_nuxt/resultModalMixin-legacy.c2241556.js','_nuxt/resultModalMixin.836f60bb.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.f35231ba.js','_nuxt/search-cell.0b44601e.css','_nuxt/search-cell.c865a71f.js','_nuxt/search-legacy.446ea898.js','_nuxt/search-modal.pc-legacy.a8fe2bfe.js','_nuxt/search-modal.pc.0981274b.css','_nuxt/search-modal.pc.628a8cc3.js','_nuxt/search-page.mobile-legacy.4747baad.js','_nuxt/search-page.mobile.6fc89380.css','_nuxt/search-page.mobile.7063b1a9.js','_nuxt/search.8d9c9bea.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/style-legacy.bec7b2b1.js','_nuxt/style.2a26d1c2.css','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.8a4152fa.js','_nuxt/swiper-bundle.35c6f966.js','_nuxt/swiper-bundle.44a6bf01.css','_nuxt/switch-legacy.08facca8.js','_nuxt/switch-legacy.d0f5fb47.js','_nuxt/switch.03d20ddc.js','_nuxt/switch.2e6042b1.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switchMixin-legacy.fe4b1035.js','_nuxt/switchMixin.bc3d2aa8.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.51a3519a.js','_nuxt/user-info.a92680ae.css','_nuxt/user-info.d3dbfe7b.js','_nuxt/utilities.appleyPay-legacy.c262f6bd.js','_nuxt/utilities.appleyPay.f600a04b.js','_nuxt/utils-legacy.2c9c5fcf.js','_nuxt/utils.39d19989.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.5172a91c.js','_nuxt/vue.f36acd1f.0769a45a.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','gray.js','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/expirePopup/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-channel-item/report/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



