

const cacheVersion = 'v1.0.293'

console.log('service worker version', '1.0.293')

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
  console.log('service worker active', '1.0.293', event)
  event.waitUntil(clearOldCache())
  event.waitUntil(clients.claim())
})

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.cc36f2b4.js','_nuxt/AboutSA.mobile.e07b82c4.js','_nuxt/AboutSA2-legacy.a39308a9.js','_nuxt/AboutSA2.3cbe550a.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.e0d4f83c.js','_nuxt/PayUtils.73651bd9.js','_nuxt/UICarouselView-legacy.1ce9e597.js','_nuxt/UICarouselView.25d7fc43.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.58883bcd.js','_nuxt/account-item-legacy.e63ebe24.js','_nuxt/account-item.174b5cd2.js','_nuxt/account-item.4463ad0a.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/api-legacy.1b6eb1ef.js','_nuxt/api.0d0683b8.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.d33bafe0.js','_nuxt/bank-views.8d8b922c.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/3e922470-c1cd-49ac-b13e-503126ceb7d7.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.37222f04.js','_nuxt/channel-view.9790ba7b.js','_nuxt/cko-card-list-legacy.7d893541.js','_nuxt/cko-card-list.527ad05b.js','_nuxt/cko-card-list.6193db4f.css','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.ce3bcec6.js','_nuxt/enter-legacy.d925666e.js','_nuxt/enter.218556ff.js','_nuxt/enter.342b3289.css','_nuxt/enter.d7350a96.css','_nuxt/enter.e7356395.js','_nuxt/enterMixin-legacy.0fa81f1a.js','_nuxt/enterMixin.b1292da4.js','_nuxt/entry-legacy.1b0a5806.js','_nuxt/entry.52209fbe.css','_nuxt/entry.d8e77354.js','_nuxt/error-404-legacy.68a7989b.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.ebd75a25.js','_nuxt/error-500-legacy.f1f82b06.js','_nuxt/error-500.0761ebce.js','_nuxt/error-500.c5df6088.css','_nuxt/error-legacy.d79902a6.js','_nuxt/error.06313295.css','_nuxt/error.51f6475a.js','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/frames-legacy.bc85a93c.js','_nuxt/frames.5066ad29.js','_nuxt/home-legacy.c8697092.js','_nuxt/home.63eb863a.css','_nuxt/home.ae2e1c59.js','_nuxt/home.pc-legacy.0bc42e1a.js','_nuxt/home.pc.8be3e011.css','_nuxt/home.pc.ebb5e46d.js','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.01506bae.js','_nuxt/index-legacy.053b9152.js','_nuxt/index-legacy.134aeb09.js','_nuxt/index-legacy.1ab33de0.js','_nuxt/index-legacy.25744060.js','_nuxt/index-legacy.28b3a792.js','_nuxt/index-legacy.32fd68d5.js','_nuxt/index-legacy.352ed972.js','_nuxt/index-legacy.3676fb99.js','_nuxt/index-legacy.3e4cdbd0.js','_nuxt/index-legacy.47e7a3b8.js','_nuxt/index-legacy.4876683b.js','_nuxt/index-legacy.5708640d.js','_nuxt/index-legacy.5a020b6d.js','_nuxt/index-legacy.60353adf.js','_nuxt/index-legacy.664aba05.js','_nuxt/index-legacy.68c8249c.js','_nuxt/index-legacy.6f004b34.js','_nuxt/index-legacy.6f402e34.js','_nuxt/index-legacy.6f7ca78e.js','_nuxt/index-legacy.728db3f6.js','_nuxt/index-legacy.8399a992.js','_nuxt/index-legacy.85e5593e.js','_nuxt/index-legacy.89af57c1.js','_nuxt/index-legacy.8ebd524f.js','_nuxt/index-legacy.8f2e0b0d.js','_nuxt/index-legacy.8f52756d.js','_nuxt/index-legacy.a113ec28.js','_nuxt/index-legacy.a265bd16.js','_nuxt/index-legacy.aa6c99d8.js','_nuxt/index-legacy.ace05092.js','_nuxt/index-legacy.ae0e6ab7.js','_nuxt/index-legacy.ae30a0e7.js','_nuxt/index-legacy.b1968843.js','_nuxt/index-legacy.b566b20e.js','_nuxt/index-legacy.b8f4c4f3.js','_nuxt/index-legacy.b974ee8a.js','_nuxt/index-legacy.bd4fc62c.js','_nuxt/index-legacy.c17d9cbd.js','_nuxt/index-legacy.c774e6cc.js','_nuxt/index-legacy.cf94219f.js','_nuxt/index-legacy.d2026948.js','_nuxt/index-legacy.daf4c916.js','_nuxt/index-legacy.e64c0964.js','_nuxt/index-legacy.f49dce8d.js','_nuxt/index-legacy.ff9131be.js','_nuxt/index.01a208b5.js','_nuxt/index.051c1f0f.js','_nuxt/index.057a8d74.js','_nuxt/index.0a009702.js','_nuxt/index.0b1a1439.js','_nuxt/index.100dcc7d.css','_nuxt/index.139511b2.css','_nuxt/index.1584c461.css','_nuxt/index.163f6881.js','_nuxt/index.17d98119.js','_nuxt/index.1c18e6bb.css','_nuxt/index.1c3007ca.js','_nuxt/index.21ffcd1c.js','_nuxt/index.221b3082.js','_nuxt/index.23a90349.css','_nuxt/index.263aeb04.js','_nuxt/index.27517127.css','_nuxt/index.2e1dab86.js','_nuxt/index.306f17fb.js','_nuxt/index.3b4f506a.js','_nuxt/index.3e3f66aa.css','_nuxt/index.41c361fc.js','_nuxt/index.44638243.css','_nuxt/index.46779785.js','_nuxt/index.474c9ffd.js','_nuxt/index.47599534.css','_nuxt/index.4d325ac4.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.529b1ce5.js','_nuxt/index.54443ad0.js','_nuxt/index.54940db6.js','_nuxt/index.5800a7f6.js','_nuxt/index.609a047b.css','_nuxt/index.617a162d.js','_nuxt/index.6411aba0.js','_nuxt/index.69c12705.css','_nuxt/index.6b308f11.css','_nuxt/index.6c1277f7.css','_nuxt/index.71d24d3c.css','_nuxt/index.731ec3a0.js','_nuxt/index.7469d737.js','_nuxt/index.771c13e6.css','_nuxt/index.7a6aeb89.js','_nuxt/index.7b7671a9.css','_nuxt/index.7c045aac.js','_nuxt/index.815202c8.css','_nuxt/index.82cde3c3.js','_nuxt/index.8ea486de.js','_nuxt/index.933f0049.js','_nuxt/index.976c9cee.js','_nuxt/index.9a137352.js','_nuxt/index.9b1599a9.css','_nuxt/index.9d1de308.css','_nuxt/index.9e0c1c5b.js','_nuxt/index.9faa3fdf.css','_nuxt/index.a186eb11.css','_nuxt/index.a76252f9.css','_nuxt/index.ae40bec6.css','_nuxt/index.b26ad712.css','_nuxt/index.b5b63fd7.js','_nuxt/index.b62d479f.js','_nuxt/index.b6b233ed.css','_nuxt/index.bf04b446.js','_nuxt/index.bfb0c1de.js','_nuxt/index.c06f9828.js','_nuxt/index.c0a2c05e.css','_nuxt/index.c8621a6b.css','_nuxt/index.cadff0c7.js','_nuxt/index.d0233f63.css','_nuxt/index.d1ea6fe7.css','_nuxt/index.d63a2ab2.js','_nuxt/index.d83f749f.css','_nuxt/index.d9343888.js','_nuxt/index.da855dd0.js','_nuxt/index.dad14dde.css','_nuxt/index.db1f433b.js','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e347bd15.css','_nuxt/index.e46c25fd.css','_nuxt/index.f240c7b6.js','_nuxt/index.f6ea6066.js','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.mobile-legacy.01301a95.js','_nuxt/index.mobile-legacy.0e9e8602.js','_nuxt/index.mobile-legacy.1c2ac21d.js','_nuxt/index.mobile-legacy.934c1d53.js','_nuxt/index.mobile-legacy.a7723f83.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.63bd793e.js','_nuxt/index.mobile.6bcc56bd.js','_nuxt/index.mobile.9aae5cad.js','_nuxt/index.mobile.a1466456.css','_nuxt/index.mobile.b0a7dccf.css','_nuxt/index.mobile.b6f78498.js','_nuxt/index.mobile.e6e7523a.css','_nuxt/index.mobile.ea5edcca.js','_nuxt/index.moble-legacy.40c65ea0.js','_nuxt/index.moble.4669505e.css','_nuxt/index.moble.5e975dc2.js','_nuxt/index.pc-legacy.08b6588c.js','_nuxt/index.pc-legacy.579199ab.js','_nuxt/index.pc-legacy.9e1c4878.js','_nuxt/index.pc-legacy.a03fdf51.js','_nuxt/index.pc-legacy.abcda9f3.js','_nuxt/index.pc-legacy.b6b989a2.js','_nuxt/index.pc-legacy.bb1d60e2.js','_nuxt/index.pc-legacy.dec5bf99.js','_nuxt/index.pc.055e497e.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.16122aa1.js','_nuxt/index.pc.548676fd.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.654af8f5.css','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.95720334.js','_nuxt/index.pc.aab4ada2.css','_nuxt/index.pc.ad087a49.js','_nuxt/index.pc.c31f35b3.css','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.eef66ccd.js','_nuxt/index.pc.ef60a533.js','_nuxt/index.pc.f3fa7f7d.js','_nuxt/index.pc.vue-legacy.658c8b03.js','_nuxt/index.pc.vue-legacy.bbca9ada.js','_nuxt/index.pc.vue.569dca7f.js','_nuxt/index.pc.vue.7fb43e47.js','_nuxt/index.vue-legacy.0bfb0936.js','_nuxt/index.vue-legacy.59786b41.js','_nuxt/index.vue-legacy.694b6bfc.js','_nuxt/index.vue-legacy.898f4eba.js','_nuxt/index.vue-legacy.fddfe317.js','_nuxt/index.vue.4819b0a2.js','_nuxt/index.vue.acc45f4e.js','_nuxt/index.vue.c561c963.js','_nuxt/index.vue.f4a3cb87.js','_nuxt/index.vue.f8727e39.js','_nuxt/indexMixin-legacy.ce6a8f0a.js','_nuxt/indexMixin.56104495.js','_nuxt/index_mobile-legacy.04ddff4b.js','_nuxt/index_mobile-legacy.d059c7ca.js','_nuxt/index_mobile.33ecabe6.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.ec3c2fe3.css','_nuxt/index_mobile.f5b69b3e.js','_nuxt/index_pc-legacy.1e97a610.js','_nuxt/index_pc-legacy.290f06e6.js','_nuxt/index_pc.37148f42.css','_nuxt/index_pc.78afd55f.js','_nuxt/index_pc.a71cff98.css','_nuxt/index_pc.be7f6072.js','_nuxt/init-legacy.c75c4a16.js','_nuxt/init.e74f73e8.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.5737cd4e.js','_nuxt/login.modal.pc.0bbff0bf.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.38f93029.js','_nuxt/model-cell.910f276b.js','_nuxt/model-legacy.09771ce1.js','_nuxt/model-legacy.11d96a8c.js','_nuxt/model-legacy.1859154b.js','_nuxt/model-legacy.19b3669b.js','_nuxt/model-legacy.31a8c89f.js','_nuxt/model-legacy.3bf09bb7.js','_nuxt/model-legacy.40b5d497.js','_nuxt/model-legacy.49c31a58.js','_nuxt/model-legacy.50d67c90.js','_nuxt/model-legacy.5b2634a9.js','_nuxt/model-legacy.5cb7552c.js','_nuxt/model-legacy.71e803bc.js','_nuxt/model-legacy.743bd129.js','_nuxt/model-legacy.954738a6.js','_nuxt/model-legacy.97449931.js','_nuxt/model-legacy.ab782d7a.js','_nuxt/model-legacy.af82f3e2.js','_nuxt/model-legacy.b768661e.js','_nuxt/model-legacy.b9262eb0.js','_nuxt/model-legacy.d88394eb.js','_nuxt/model-legacy.eb292aa4.js','_nuxt/model-legacy.ff04b26a.js','_nuxt/model.0fc3b87e.js','_nuxt/model.1cd637d8.js','_nuxt/model.27d0ad1e.js','_nuxt/model.3d894d72.js','_nuxt/model.3fef3bfb.js','_nuxt/model.42391d25.js','_nuxt/model.46221390.js','_nuxt/model.4e1656b4.js','_nuxt/model.6aba420e.js','_nuxt/model.87d10693.js','_nuxt/model.b2664ab2.js','_nuxt/model.bf636581.js','_nuxt/model.c0a44796.js','_nuxt/model.c9d76801.js','_nuxt/model.d1178b81.js','_nuxt/model.db7c82c3.js','_nuxt/model.e05d46eb.js','_nuxt/model.e3b51b98.js','_nuxt/model.e49888c5.js','_nuxt/model.e6511162.js','_nuxt/model.ef0ea64f.js','_nuxt/model.fff1b938.js','_nuxt/pay-drawer-legacy.5ab4884d.js','_nuxt/pay-drawer.64366f16.css','_nuxt/pay-drawer.d39908bf.js','_nuxt/pay-legacy.77b8defc.js','_nuxt/pay-legacy.eff80327.js','_nuxt/pay-step-legacy.17780b67.js','_nuxt/pay-step.ba5699d7.js','_nuxt/pay-step.pc-legacy.f067cbf6.js','_nuxt/pay-step.pc.11bee044.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay.4bf1bf41.css','_nuxt/pay.cf9e3b84.css','_nuxt/pay.dcb0a784.js','_nuxt/pay.e77dcc18.js','_nuxt/payGoodsListItem-legacy.579f6009.js','_nuxt/payGoodsListItem-legacy.8e497f57.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.50c1eecb.js','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.b8433995.js','_nuxt/payMixin-legacy.22d3d0fe.js','_nuxt/payMixin.8cc80fba.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.949fbf0c.js','_nuxt/public.908f996b.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.ca2462b1.js','_nuxt/recentItemMixin.76b785f2.js','_nuxt/recharge-item-legacy.e1032e83.js','_nuxt/recharge-item.935b9836.css','_nuxt/recharge-item.982e4d54.js','_nuxt/refresh-modal-legacy.ec9d1bb8.js','_nuxt/refresh-modal.580f99bd.js','_nuxt/report-legacy.00ffb061.js','_nuxt/report-legacy.0cda83e4.js','_nuxt/report-legacy.189894a8.js','_nuxt/report-legacy.2025e77e.js','_nuxt/report-legacy.26d3cc6a.js','_nuxt/report-legacy.50c42951.js','_nuxt/report-legacy.5e02030b.js','_nuxt/report-legacy.5eb5125c.js','_nuxt/report-legacy.65c69968.js','_nuxt/report-legacy.748c273a.js','_nuxt/report-legacy.84e84a62.js','_nuxt/report-legacy.8ea9862d.js','_nuxt/report-legacy.b2f27d3b.js','_nuxt/report-legacy.b7423836.js','_nuxt/report-legacy.bb921bbf.js','_nuxt/report-legacy.c1046dd8.js','_nuxt/report-legacy.ff03056d.js','_nuxt/report-legacy.ff549357.js','_nuxt/report.0f0a2130.js','_nuxt/report.3565b74b.js','_nuxt/report.4cda6b91.js','_nuxt/report.563e4f8b.js','_nuxt/report.5b0d438d.js','_nuxt/report.69dece89.js','_nuxt/report.90355e8c.js','_nuxt/report.912e2f85.js','_nuxt/report.913e9d4e.js','_nuxt/report.9961a025.js','_nuxt/report.ae629dc9.js','_nuxt/report.b443df4e.js','_nuxt/report.d8c4b6cc.js','_nuxt/report.ddb1ccb9.js','_nuxt/report.ddf5be1f.js','_nuxt/report.e4e334f3.js','_nuxt/report.ee4bd340.js','_nuxt/report.f5f73066.js','_nuxt/result-view-legacy.beb3b3c7.js','_nuxt/result-view.5e537118.js','_nuxt/resultModalMixin-legacy.6c30f932.js','_nuxt/resultModalMixin.ef572c8f.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.d4cd8531.js','_nuxt/search-cell.0b44601e.css','_nuxt/search-cell.58e6da26.js','_nuxt/search-legacy.c6d2be9d.js','_nuxt/search-modal.pc-legacy.834ab760.js','_nuxt/search-modal.pc.0981274b.css','_nuxt/search-modal.pc.bdf57e2a.js','_nuxt/search-page.mobile-legacy.8bd92519.js','_nuxt/search-page.mobile.6fc89380.css','_nuxt/search-page.mobile.ee9ba6b0.js','_nuxt/search.316d573b.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/style-legacy.bec7b2b1.js','_nuxt/style.2a26d1c2.css','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.8a4152fa.js','_nuxt/swiper-bundle.35c6f966.js','_nuxt/swiper-bundle.44a6bf01.css','_nuxt/switch-legacy.74f701d7.js','_nuxt/switch-legacy.f200919a.js','_nuxt/switch.265c7c10.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.7d270923.js','_nuxt/switchMixin-legacy.4624cecc.js','_nuxt/switchMixin.23ee02bf.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.82f8fe6d.js','_nuxt/user-info.96f16758.js','_nuxt/user-info.a92680ae.css','_nuxt/utilities.appleyPay-legacy.60e90e7f.js','_nuxt/utilities.appleyPay.2628c2e2.js','_nuxt/utils-legacy.2c9c5fcf.js','_nuxt/utils.39d19989.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.428a66bb.js','_nuxt/vue.f36acd1f.4b971106.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','gray.js','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/expirePopup/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-channel-item/report/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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
      console.log('service worker', '1.0.293', event.request, event.request.url)
      event.respondWith(networkFirst(event))
    } else {
      event.respondWith(cacheFirst(event))
    }
  }
})



