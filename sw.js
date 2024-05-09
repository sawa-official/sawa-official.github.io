

const cacheVersion = 'v1.0.289'

console.log('service worker version', '1.0.289')

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
  console.log('service worker active', '1.0.289', event)
  event.waitUntil(clearOldCache())
  event.waitUntil(clients.claim())
})

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.5fbdc669.js','_nuxt/AboutSA.mobile.9cd540ff.js','_nuxt/AboutSA2-legacy.5a28fd42.js','_nuxt/AboutSA2.667c34ad.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.5453234d.js','_nuxt/PayUtils.62b3dffd.js','_nuxt/UICarouselView-legacy.539b6ee1.js','_nuxt/UICarouselView.a4ab86a6.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.b61b0a9f.js','_nuxt/account-item-legacy.f4212ff5.js','_nuxt/account-item.2f4846dd.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.8e821428.js','_nuxt/account-item.950742c1.css','_nuxt/api-legacy.4f413c36.js','_nuxt/api.65e703b6.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.1cbcc209.js','_nuxt/bank-views.f7c7dc1d.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/886a3ab9-8e0b-4295-82a0-6e462f1d436a.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.9bb8f1ca.js','_nuxt/channel-view.4f683aa6.js','_nuxt/cko-card-list-legacy.074b53ef.js','_nuxt/cko-card-list.6193db4f.css','_nuxt/cko-card-list.775687a2.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.bf020e1c.js','_nuxt/enter-legacy.c0703242.js','_nuxt/enter.1e715015.js','_nuxt/enter.342b3289.css','_nuxt/enter.47a44351.js','_nuxt/enter.d7350a96.css','_nuxt/enterMixin-legacy.520a7241.js','_nuxt/enterMixin.9b6297d7.js','_nuxt/entry-legacy.87cc56ef.js','_nuxt/entry.52209fbe.css','_nuxt/entry.a43f66b4.js','_nuxt/error-404-legacy.32ded047.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.3dffb409.js','_nuxt/error-500-legacy.718e7c0d.js','_nuxt/error-500.8fe4f74a.js','_nuxt/error-500.c5df6088.css','_nuxt/error-legacy.34d4370e.js','_nuxt/error.06313295.css','_nuxt/error.94db24ae.js','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/frames-legacy.c446da7f.js','_nuxt/frames.fec6e67c.js','_nuxt/home-legacy.1d723928.js','_nuxt/home.63eb863a.css','_nuxt/home.935a1c43.js','_nuxt/home.pc-legacy.726ecb28.js','_nuxt/home.pc.6f9f66ac.js','_nuxt/home.pc.8be3e011.css','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.0037a847.js','_nuxt/index-legacy.09ff31c6.js','_nuxt/index-legacy.0cd94102.js','_nuxt/index-legacy.0ce705f5.js','_nuxt/index-legacy.0d1bca24.js','_nuxt/index-legacy.0f2ae985.js','_nuxt/index-legacy.0f9fe5db.js','_nuxt/index-legacy.14820574.js','_nuxt/index-legacy.1cbf2f49.js','_nuxt/index-legacy.1fa68edc.js','_nuxt/index-legacy.2c823ef0.js','_nuxt/index-legacy.2d7243ac.js','_nuxt/index-legacy.35c40724.js','_nuxt/index-legacy.3cd69acb.js','_nuxt/index-legacy.4392d240.js','_nuxt/index-legacy.4f1cc38f.js','_nuxt/index-legacy.50f438dc.js','_nuxt/index-legacy.51eac690.js','_nuxt/index-legacy.6353cf53.js','_nuxt/index-legacy.675773d2.js','_nuxt/index-legacy.704cb1b4.js','_nuxt/index-legacy.709c49f5.js','_nuxt/index-legacy.744b1ef6.js','_nuxt/index-legacy.77df5205.js','_nuxt/index-legacy.7a34ee62.js','_nuxt/index-legacy.7a6bfca5.js','_nuxt/index-legacy.847c8d03.js','_nuxt/index-legacy.8f921c8b.js','_nuxt/index-legacy.91e14438.js','_nuxt/index-legacy.928ccbde.js','_nuxt/index-legacy.95e39418.js','_nuxt/index-legacy.991b3564.js','_nuxt/index-legacy.a2780e36.js','_nuxt/index-legacy.a38f0bd3.js','_nuxt/index-legacy.aa6ebc92.js','_nuxt/index-legacy.b7ddd730.js','_nuxt/index-legacy.c29ffeb5.js','_nuxt/index-legacy.c41fae1a.js','_nuxt/index-legacy.c516c37c.js','_nuxt/index-legacy.cc98ca00.js','_nuxt/index-legacy.cce0b228.js','_nuxt/index-legacy.ce107741.js','_nuxt/index-legacy.d3f7e7c9.js','_nuxt/index-legacy.e27024ec.js','_nuxt/index-legacy.e7cc3f4d.js','_nuxt/index-legacy.f7d96ec4.js','_nuxt/index.0df800f7.js','_nuxt/index.0ebc3905.js','_nuxt/index.0fba2ad9.js','_nuxt/index.0fbf0e9f.js','_nuxt/index.100dcc7d.css','_nuxt/index.138baee5.js','_nuxt/index.139511b2.css','_nuxt/index.1584c461.css','_nuxt/index.15c6c2b5.js','_nuxt/index.1c18e6bb.css','_nuxt/index.22495541.js','_nuxt/index.23a90349.css','_nuxt/index.27517127.css','_nuxt/index.3092c72d.js','_nuxt/index.31cecdb1.js','_nuxt/index.3e3f66aa.css','_nuxt/index.44638243.css','_nuxt/index.4517e836.js','_nuxt/index.47599534.css','_nuxt/index.4917c561.js','_nuxt/index.4994e063.js','_nuxt/index.50279550.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.53e39694.js','_nuxt/index.5badebc3.js','_nuxt/index.605c0ca9.js','_nuxt/index.609a047b.css','_nuxt/index.69c12705.css','_nuxt/index.69f35791.js','_nuxt/index.6ab736e2.js','_nuxt/index.6b308f11.css','_nuxt/index.6b6df31d.js','_nuxt/index.6b74d682.js','_nuxt/index.6c1277f7.css','_nuxt/index.71d24d3c.css','_nuxt/index.72bb6b07.js','_nuxt/index.771c13e6.css','_nuxt/index.7b7671a9.css','_nuxt/index.815202c8.css','_nuxt/index.8c024bdf.js','_nuxt/index.8cb3b66e.js','_nuxt/index.8d4868b7.js','_nuxt/index.8d7f2c5a.js','_nuxt/index.93c9e024.js','_nuxt/index.951c8afb.js','_nuxt/index.963fd3b7.js','_nuxt/index.9992577d.js','_nuxt/index.9a86318f.js','_nuxt/index.9b1599a9.css','_nuxt/index.9d1de308.css','_nuxt/index.9ecaea67.js','_nuxt/index.9faa3fdf.css','_nuxt/index.a186eb11.css','_nuxt/index.a5fd762f.js','_nuxt/index.a76252f9.css','_nuxt/index.a941492e.js','_nuxt/index.aa2b2fb1.js','_nuxt/index.aa6018ff.js','_nuxt/index.ae40bec6.css','_nuxt/index.aec54927.js','_nuxt/index.b26ad712.css','_nuxt/index.b6b233ed.css','_nuxt/index.bd1a12ba.js','_nuxt/index.c0251397.js','_nuxt/index.c0a2c05e.css','_nuxt/index.c1b003d8.js','_nuxt/index.c8621a6b.css','_nuxt/index.cb303ff6.js','_nuxt/index.d0233f63.css','_nuxt/index.d1ea6fe7.css','_nuxt/index.d66da1ec.js','_nuxt/index.d83f749f.css','_nuxt/index.dad14dde.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e347bd15.css','_nuxt/index.e3eddc4b.js','_nuxt/index.e46c25fd.css','_nuxt/index.e59a422d.js','_nuxt/index.eac6b15a.js','_nuxt/index.ebb120ec.js','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.ff5b8899.js','_nuxt/index.mobile-legacy.1b9fff9f.js','_nuxt/index.mobile-legacy.6a1e4936.js','_nuxt/index.mobile-legacy.895128ac.js','_nuxt/index.mobile-legacy.a39e2894.js','_nuxt/index.mobile-legacy.da2d85b0.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.3c703c30.js','_nuxt/index.mobile.4bc69b77.js','_nuxt/index.mobile.7aa4e40b.js','_nuxt/index.mobile.a1466456.css','_nuxt/index.mobile.b0a7dccf.css','_nuxt/index.mobile.b5504e2e.js','_nuxt/index.mobile.c2dfaf24.js','_nuxt/index.mobile.e6e7523a.css','_nuxt/index.moble-legacy.719a6e1f.js','_nuxt/index.moble.41ddf652.js','_nuxt/index.moble.4669505e.css','_nuxt/index.pc-legacy.0e331de1.js','_nuxt/index.pc-legacy.51bf873c.js','_nuxt/index.pc-legacy.6aa0ba4e.js','_nuxt/index.pc-legacy.732b4e82.js','_nuxt/index.pc-legacy.a2af0bee.js','_nuxt/index.pc-legacy.c2fdf296.js','_nuxt/index.pc-legacy.cf877b59.js','_nuxt/index.pc-legacy.fb3f5968.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.20f086c2.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.6454b22e.js','_nuxt/index.pc.654af8f5.css','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.79c61d5f.js','_nuxt/index.pc.aab4ada2.css','_nuxt/index.pc.b1676b55.js','_nuxt/index.pc.b370253a.js','_nuxt/index.pc.b8a09f0f.js','_nuxt/index.pc.c31f35b3.css','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.d462062c.js','_nuxt/index.pc.e272a4ec.js','_nuxt/index.pc.vue-legacy.25e1a3c2.js','_nuxt/index.pc.vue-legacy.aaf0ef9d.js','_nuxt/index.pc.vue.7299a181.js','_nuxt/index.pc.vue.ef34e827.js','_nuxt/index.vue-legacy.0b1bb27e.js','_nuxt/index.vue-legacy.54918f84.js','_nuxt/index.vue-legacy.80839092.js','_nuxt/index.vue-legacy.e437bdea.js','_nuxt/index.vue-legacy.f1250fa2.js','_nuxt/index.vue.2c852714.js','_nuxt/index.vue.46825c5d.js','_nuxt/index.vue.683ba2a2.js','_nuxt/index.vue.99ae489a.js','_nuxt/index.vue.c62268a5.js','_nuxt/indexMixin-legacy.16d7e43a.js','_nuxt/indexMixin.612f33a9.js','_nuxt/index_mobile-legacy.243cacc3.js','_nuxt/index_mobile-legacy.6e3b351a.js','_nuxt/index_mobile.727fa030.js','_nuxt/index_mobile.83fc14f8.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.ec3c2fe3.css','_nuxt/index_pc-legacy.4badef3f.js','_nuxt/index_pc-legacy.fbb48033.js','_nuxt/index_pc.37148f42.css','_nuxt/index_pc.3ab1a6cf.js','_nuxt/index_pc.662e8bbf.js','_nuxt/index_pc.a71cff98.css','_nuxt/init-legacy.4166f696.js','_nuxt/init.1f3ec3d6.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.7d856f3f.js','_nuxt/login.modal.pc.407895d0.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.5578ffe9.js','_nuxt/model-cell.8b9c6ee9.js','_nuxt/model-legacy.05ccd3cd.js','_nuxt/model-legacy.267ccbb7.js','_nuxt/model-legacy.28a189b9.js','_nuxt/model-legacy.40051438.js','_nuxt/model-legacy.437ce1d7.js','_nuxt/model-legacy.4f139a74.js','_nuxt/model-legacy.61db0572.js','_nuxt/model-legacy.6c66f9c6.js','_nuxt/model-legacy.6cb38791.js','_nuxt/model-legacy.71bc52df.js','_nuxt/model-legacy.75d5470b.js','_nuxt/model-legacy.7811921a.js','_nuxt/model-legacy.91a83431.js','_nuxt/model-legacy.968872f3.js','_nuxt/model-legacy.b96628f9.js','_nuxt/model-legacy.c024b266.js','_nuxt/model-legacy.c8a5d18d.js','_nuxt/model-legacy.c90f9b34.js','_nuxt/model-legacy.d295f1a9.js','_nuxt/model-legacy.e740a7f3.js','_nuxt/model-legacy.eefde898.js','_nuxt/model-legacy.f3290a0f.js','_nuxt/model.030458ec.js','_nuxt/model.076ff53b.js','_nuxt/model.34f225b3.js','_nuxt/model.35f84c21.js','_nuxt/model.4207f69f.js','_nuxt/model.4546970c.js','_nuxt/model.46e05217.js','_nuxt/model.516fe2c1.js','_nuxt/model.5c07f7eb.js','_nuxt/model.6651c7b3.js','_nuxt/model.689d96b5.js','_nuxt/model.735e6d88.js','_nuxt/model.73b8a7ad.js','_nuxt/model.7f433462.js','_nuxt/model.7f9fb1de.js','_nuxt/model.80d21269.js','_nuxt/model.a30bd166.js','_nuxt/model.a8fb6593.js','_nuxt/model.a96e9dff.js','_nuxt/model.c08397c7.js','_nuxt/model.ca016335.js','_nuxt/model.fb673a66.js','_nuxt/pay-drawer-legacy.1c77fa44.js','_nuxt/pay-drawer.64366f16.css','_nuxt/pay-drawer.80e356e2.js','_nuxt/pay-legacy.45584422.js','_nuxt/pay-legacy.f852e39d.js','_nuxt/pay-step-legacy.9a6af545.js','_nuxt/pay-step.5cd8a62b.js','_nuxt/pay-step.pc-legacy.768693ed.js','_nuxt/pay-step.pc.4d5b8dcc.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay.4bf1bf41.css','_nuxt/pay.cf9e3b84.css','_nuxt/pay.dc643830.js','_nuxt/pay.f0d114c7.js','_nuxt/payGoodsListItem-legacy.08e21a1b.js','_nuxt/payGoodsListItem-legacy.6ac7c340.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.55b26be9.js','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.bafed704.js','_nuxt/payMixin-legacy.7350cf93.js','_nuxt/payMixin.ced4d129.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.ac70a5ae.js','_nuxt/public.4466e2d8.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.e6c0aa5f.js','_nuxt/recentItemMixin.b4f3837d.js','_nuxt/recharge-item-legacy.b340ebd2.js','_nuxt/recharge-item.05c897fe.js','_nuxt/recharge-item.935b9836.css','_nuxt/refresh-modal-legacy.367d640e.js','_nuxt/refresh-modal.e7dbab5b.js','_nuxt/report-legacy.04b821a8.js','_nuxt/report-legacy.14dab518.js','_nuxt/report-legacy.18c1d481.js','_nuxt/report-legacy.2480ef9a.js','_nuxt/report-legacy.65ca1955.js','_nuxt/report-legacy.67c6567a.js','_nuxt/report-legacy.6b3adb97.js','_nuxt/report-legacy.7427eca9.js','_nuxt/report-legacy.7e209565.js','_nuxt/report-legacy.90988ba8.js','_nuxt/report-legacy.bdaadc40.js','_nuxt/report-legacy.c4134b77.js','_nuxt/report-legacy.c44c608b.js','_nuxt/report-legacy.c53d6100.js','_nuxt/report-legacy.c6674166.js','_nuxt/report-legacy.c6aea718.js','_nuxt/report-legacy.ebd3959d.js','_nuxt/report-legacy.fd257cd0.js','_nuxt/report.0b72f6dd.js','_nuxt/report.1e5115f6.js','_nuxt/report.2316dc9f.js','_nuxt/report.46b37e60.js','_nuxt/report.50f30d6f.js','_nuxt/report.5c06841d.js','_nuxt/report.6b78e6f2.js','_nuxt/report.7130c54a.js','_nuxt/report.74300f53.js','_nuxt/report.7c0e7956.js','_nuxt/report.93a57e45.js','_nuxt/report.99666a30.js','_nuxt/report.a52d1308.js','_nuxt/report.ae4626a7.js','_nuxt/report.b3870d4e.js','_nuxt/report.cd6914e3.js','_nuxt/report.d018ea09.js','_nuxt/report.f225956f.js','_nuxt/result-view-legacy.cab63096.js','_nuxt/result-view.46a73f03.js','_nuxt/resultModalMixin-legacy.d8c5a605.js','_nuxt/resultModalMixin.851c6862.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.987c824b.js','_nuxt/search-cell.0b44601e.css','_nuxt/search-cell.f07d6890.js','_nuxt/search-legacy.8451f9ba.js','_nuxt/search-modal.pc-legacy.881b4e5b.js','_nuxt/search-modal.pc.0981274b.css','_nuxt/search-modal.pc.63b70c2a.js','_nuxt/search-page.mobile-legacy.08512aaa.js','_nuxt/search-page.mobile.37e9366f.js','_nuxt/search-page.mobile.6fc89380.css','_nuxt/search.9bad0fea.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/style-legacy.bec7b2b1.js','_nuxt/style.2a26d1c2.css','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.8a4152fa.js','_nuxt/swiper-bundle.35c6f966.js','_nuxt/swiper-bundle.44a6bf01.css','_nuxt/switch-legacy.25289e9d.js','_nuxt/switch-legacy.3b97c577.js','_nuxt/switch.05764b55.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.79eb0542.js','_nuxt/switchMixin-legacy.373e0230.js','_nuxt/switchMixin.205b2aaf.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.a3926c4d.js','_nuxt/user-info.62470482.js','_nuxt/user-info.a92680ae.css','_nuxt/utilities.appleyPay-legacy.6c3b9d63.js','_nuxt/utilities.appleyPay.30ff3065.js','_nuxt/utils-legacy.2c9c5fcf.js','_nuxt/utils.39d19989.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.61f564eb.js','_nuxt/vue.f36acd1f.ed66205b.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','gray.js','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/expirePopup/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-channel-item/report/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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
      console.log('service worker', '1.0.289', event.request, event.request.url)
      event.respondWith(networkFirst(event))
    } else {
      event.respondWith(cacheFirst(event))
    }
  }
})



