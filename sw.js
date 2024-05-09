

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.406d1a4e.js','_nuxt/AboutSA.mobile.01b3aaff.js','_nuxt/AboutSA2-legacy.21c3ec12.js','_nuxt/AboutSA2.1c16fbf0.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.528538ac.js','_nuxt/PayUtils.412fccf6.js','_nuxt/UICarouselView-legacy.7a8c489b.js','_nuxt/UICarouselView.331aea01.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.3ea32783.js','_nuxt/account-item-legacy.e0638fd4.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.ea00e373.js','_nuxt/account-item.f99404f2.js','_nuxt/api-legacy.d3933c1d.js','_nuxt/api.85c368db.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.9e12b063.js','_nuxt/bank-views.821df49b.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/08d5a451-3d15-48a9-95bd-2ae34cefe8a7.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.1abf4d15.js','_nuxt/channel-view.4129ef14.js','_nuxt/cko-card-list-legacy.200369fc.js','_nuxt/cko-card-list.6193db4f.css','_nuxt/cko-card-list.72fa049b.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.9e54faf8.js','_nuxt/enter-legacy.c492f4c0.js','_nuxt/enter.342b3289.css','_nuxt/enter.6c663c62.js','_nuxt/enter.caf9231d.js','_nuxt/enter.d7350a96.css','_nuxt/enterMixin-legacy.f4c515db.js','_nuxt/enterMixin.376321f6.js','_nuxt/entry-legacy.2beeb6cc.js','_nuxt/entry.52209fbe.css','_nuxt/entry.d55431de.js','_nuxt/error-404-legacy.1551bcb4.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.f1693a8d.js','_nuxt/error-500-legacy.fe4888ca.js','_nuxt/error-500.c5df6088.css','_nuxt/error-500.fbd69f91.js','_nuxt/error-legacy.9df80e5a.js','_nuxt/error.06313295.css','_nuxt/error.06a2e3a5.js','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/frames-legacy.eeb29c67.js','_nuxt/frames.8ec3c77a.js','_nuxt/home-legacy.e49db795.js','_nuxt/home.63eb863a.css','_nuxt/home.e57c9675.js','_nuxt/home.pc-legacy.e6baf7c7.js','_nuxt/home.pc.14a12b5a.js','_nuxt/home.pc.8be3e011.css','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.01d1b2fc.js','_nuxt/index-legacy.07406c5c.js','_nuxt/index-legacy.1aea4ef2.js','_nuxt/index-legacy.1cc61e46.js','_nuxt/index-legacy.20bf9a32.js','_nuxt/index-legacy.237c13cf.js','_nuxt/index-legacy.3026fd2e.js','_nuxt/index-legacy.321c981a.js','_nuxt/index-legacy.4a153252.js','_nuxt/index-legacy.5043b4e3.js','_nuxt/index-legacy.507cf1fc.js','_nuxt/index-legacy.516f921f.js','_nuxt/index-legacy.53e01132.js','_nuxt/index-legacy.57bd8f64.js','_nuxt/index-legacy.599ddacb.js','_nuxt/index-legacy.60b9809e.js','_nuxt/index-legacy.6b50e4c8.js','_nuxt/index-legacy.706cd631.js','_nuxt/index-legacy.742ecada.js','_nuxt/index-legacy.7a4b6d06.js','_nuxt/index-legacy.7d5b71ec.js','_nuxt/index-legacy.83ef4e35.js','_nuxt/index-legacy.87c9400a.js','_nuxt/index-legacy.93915ad2.js','_nuxt/index-legacy.9567880e.js','_nuxt/index-legacy.a0ee0be7.js','_nuxt/index-legacy.a7614f92.js','_nuxt/index-legacy.a76d9815.js','_nuxt/index-legacy.b18040c0.js','_nuxt/index-legacy.b3c3dc06.js','_nuxt/index-legacy.b462dce8.js','_nuxt/index-legacy.bd988b80.js','_nuxt/index-legacy.d11b7ba8.js','_nuxt/index-legacy.d3e5d1a6.js','_nuxt/index-legacy.d6177d85.js','_nuxt/index-legacy.d61e4efc.js','_nuxt/index-legacy.d804e157.js','_nuxt/index-legacy.d9004633.js','_nuxt/index-legacy.e2c69db6.js','_nuxt/index-legacy.e31d793c.js','_nuxt/index-legacy.e4e4f6ab.js','_nuxt/index-legacy.e51a1e9d.js','_nuxt/index-legacy.ef4bc98a.js','_nuxt/index-legacy.f0c3d67c.js','_nuxt/index-legacy.f5c49fe1.js','_nuxt/index-legacy.ff7ed8d6.js','_nuxt/index.02644b68.js','_nuxt/index.08912d67.js','_nuxt/index.08e8f1ba.js','_nuxt/index.0ceffd81.js','_nuxt/index.0eac8d29.js','_nuxt/index.0ed28877.js','_nuxt/index.100dcc7d.css','_nuxt/index.12fe427b.js','_nuxt/index.139511b2.css','_nuxt/index.1584c461.css','_nuxt/index.1918caaa.js','_nuxt/index.1c18e6bb.css','_nuxt/index.1e61fd88.js','_nuxt/index.1fc82fbf.js','_nuxt/index.23a90349.css','_nuxt/index.27517127.css','_nuxt/index.2cb4c73c.js','_nuxt/index.3679443f.js','_nuxt/index.3d74dbcd.js','_nuxt/index.3e3f66aa.css','_nuxt/index.4027fef0.js','_nuxt/index.44638243.css','_nuxt/index.44eae5ec.js','_nuxt/index.47599534.css','_nuxt/index.48536078.js','_nuxt/index.49eea28f.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.57ac5418.js','_nuxt/index.5eddc1e0.js','_nuxt/index.5ff6b6e3.js','_nuxt/index.609a047b.css','_nuxt/index.673194d9.js','_nuxt/index.69c12705.css','_nuxt/index.6b308f11.css','_nuxt/index.6c1277f7.css','_nuxt/index.6d67090a.js','_nuxt/index.71d24d3c.css','_nuxt/index.771c13e6.css','_nuxt/index.793e9648.js','_nuxt/index.7b7671a9.css','_nuxt/index.815202c8.css','_nuxt/index.832617f4.js','_nuxt/index.85e187f0.js','_nuxt/index.8b4a4aad.js','_nuxt/index.908d982c.js','_nuxt/index.9b1599a9.css','_nuxt/index.9d1de308.css','_nuxt/index.9faa3fdf.css','_nuxt/index.a0bd264d.js','_nuxt/index.a186eb11.css','_nuxt/index.a76252f9.css','_nuxt/index.a7f4dffa.js','_nuxt/index.aa5b3aeb.js','_nuxt/index.acf1b36d.js','_nuxt/index.ae40bec6.css','_nuxt/index.afaa48a3.js','_nuxt/index.b0bdfbd1.js','_nuxt/index.b26ad712.css','_nuxt/index.b6b233ed.css','_nuxt/index.b6e09573.js','_nuxt/index.b9404d72.js','_nuxt/index.bbd170ea.js','_nuxt/index.bdb84700.js','_nuxt/index.c0a2c05e.css','_nuxt/index.c8621a6b.css','_nuxt/index.c9972da4.js','_nuxt/index.ca2dcef6.js','_nuxt/index.ca58f755.js','_nuxt/index.ca5d3415.js','_nuxt/index.ca7e9a3d.js','_nuxt/index.d012326d.js','_nuxt/index.d0233f63.css','_nuxt/index.d1ea6fe7.css','_nuxt/index.d83f749f.css','_nuxt/index.dad14dde.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e12879b3.js','_nuxt/index.e347bd15.css','_nuxt/index.e46c25fd.css','_nuxt/index.ed1df612.js','_nuxt/index.f44a8010.js','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.mobile-legacy.39c7ac4d.js','_nuxt/index.mobile-legacy.91cb1ab8.js','_nuxt/index.mobile-legacy.9e3bc16b.js','_nuxt/index.mobile-legacy.adc35384.js','_nuxt/index.mobile-legacy.bda33a89.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.398c69f8.js','_nuxt/index.mobile.46cae1a4.js','_nuxt/index.mobile.6bd067ba.js','_nuxt/index.mobile.a1466456.css','_nuxt/index.mobile.b0a7dccf.css','_nuxt/index.mobile.bec73e14.js','_nuxt/index.mobile.df2f4836.js','_nuxt/index.mobile.e6e7523a.css','_nuxt/index.moble-legacy.93432545.js','_nuxt/index.moble.4669505e.css','_nuxt/index.moble.eb1d2384.js','_nuxt/index.pc-legacy.0ef981ee.js','_nuxt/index.pc-legacy.28a2c0a3.js','_nuxt/index.pc-legacy.2b0cb212.js','_nuxt/index.pc-legacy.608b1efc.js','_nuxt/index.pc-legacy.609f69f2.js','_nuxt/index.pc-legacy.7283b563.js','_nuxt/index.pc-legacy.a190a37d.js','_nuxt/index.pc-legacy.a768aa62.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.3bef428f.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.654af8f5.css','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.9ab3c9bb.js','_nuxt/index.pc.a88ef1c8.js','_nuxt/index.pc.aab4ada2.css','_nuxt/index.pc.c31f35b3.css','_nuxt/index.pc.cdb667b9.js','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.e55515bc.js','_nuxt/index.pc.ea85d0fd.js','_nuxt/index.pc.f34137b3.js','_nuxt/index.pc.fbb07155.js','_nuxt/index.pc.vue-legacy.18497731.js','_nuxt/index.pc.vue-legacy.9985ee26.js','_nuxt/index.pc.vue.743f046d.js','_nuxt/index.pc.vue.e20d85ae.js','_nuxt/index.vue-legacy.21799a9f.js','_nuxt/index.vue-legacy.4886af91.js','_nuxt/index.vue-legacy.a827762e.js','_nuxt/index.vue-legacy.af7ed0e7.js','_nuxt/index.vue-legacy.c29f6471.js','_nuxt/index.vue.41111b74.js','_nuxt/index.vue.9bcd60a5.js','_nuxt/index.vue.a2dba224.js','_nuxt/index.vue.d72b669e.js','_nuxt/index.vue.d90746d0.js','_nuxt/indexMixin-legacy.ebbc4b62.js','_nuxt/indexMixin.b4830d62.js','_nuxt/index_mobile-legacy.254ee86a.js','_nuxt/index_mobile-legacy.61c20630.js','_nuxt/index_mobile.4e42a5ce.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.c8431953.js','_nuxt/index_mobile.ec3c2fe3.css','_nuxt/index_pc-legacy.c3e96313.js','_nuxt/index_pc-legacy.c6f60768.js','_nuxt/index_pc.37148f42.css','_nuxt/index_pc.a71cff98.css','_nuxt/index_pc.abec3252.js','_nuxt/index_pc.d5668af4.js','_nuxt/init-legacy.21fd4b98.js','_nuxt/init.442e8a90.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.eea5c1f4.js','_nuxt/login.modal.pc.86389e49.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.d1c668e3.js','_nuxt/model-cell.92950bab.js','_nuxt/model-legacy.0342a06c.js','_nuxt/model-legacy.09da0add.js','_nuxt/model-legacy.12f76692.js','_nuxt/model-legacy.23c1dd6c.js','_nuxt/model-legacy.26555fc9.js','_nuxt/model-legacy.4defdbba.js','_nuxt/model-legacy.4eb6b489.js','_nuxt/model-legacy.4f779bd2.js','_nuxt/model-legacy.648495be.js','_nuxt/model-legacy.693e0b0f.js','_nuxt/model-legacy.7983ab54.js','_nuxt/model-legacy.890bf1f2.js','_nuxt/model-legacy.9de9e855.js','_nuxt/model-legacy.aef1355b.js','_nuxt/model-legacy.ce550c8c.js','_nuxt/model-legacy.ddc9602b.js','_nuxt/model-legacy.dede901b.js','_nuxt/model-legacy.eb249884.js','_nuxt/model-legacy.ec9789bb.js','_nuxt/model-legacy.f1660524.js','_nuxt/model-legacy.f6a2872a.js','_nuxt/model-legacy.f6e550fb.js','_nuxt/model.078abebf.js','_nuxt/model.08c5b293.js','_nuxt/model.0cfe82b2.js','_nuxt/model.136f8144.js','_nuxt/model.187d92bb.js','_nuxt/model.195d8a06.js','_nuxt/model.288681b2.js','_nuxt/model.2f2c35b0.js','_nuxt/model.3811f97f.js','_nuxt/model.557ee96c.js','_nuxt/model.6475f27c.js','_nuxt/model.7762af91.js','_nuxt/model.8c977534.js','_nuxt/model.9de1fd9f.js','_nuxt/model.b54789e4.js','_nuxt/model.b5e57f60.js','_nuxt/model.c0bcc3ad.js','_nuxt/model.c606491a.js','_nuxt/model.c87fe0f5.js','_nuxt/model.ca73b7c7.js','_nuxt/model.cb20048f.js','_nuxt/model.faf101b1.js','_nuxt/pay-drawer-legacy.02ad5734.js','_nuxt/pay-drawer.4786413e.js','_nuxt/pay-drawer.64366f16.css','_nuxt/pay-legacy.00e89941.js','_nuxt/pay-legacy.5582dc45.js','_nuxt/pay-step-legacy.8f0f3f7f.js','_nuxt/pay-step.70540a06.js','_nuxt/pay-step.pc-legacy.24687240.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay-step.pc.a26f75ae.js','_nuxt/pay.0bc29997.js','_nuxt/pay.194f7211.js','_nuxt/pay.4bf1bf41.css','_nuxt/pay.cf9e3b84.css','_nuxt/payGoodsListItem-legacy.15bd8cc9.js','_nuxt/payGoodsListItem-legacy.6654c99f.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.8f3bf2cc.js','_nuxt/payGoodsListItem.f75c440e.js','_nuxt/payMixin-legacy.588fd944.js','_nuxt/payMixin.c75991c8.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.825d1f46.js','_nuxt/public.110f9cfe.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.7158fb57.js','_nuxt/recentItemMixin.439582e3.js','_nuxt/recharge-item-legacy.9ea116f0.js','_nuxt/recharge-item.7fa07e89.js','_nuxt/recharge-item.935b9836.css','_nuxt/refresh-modal-legacy.1a699af2.js','_nuxt/refresh-modal.3a58a587.js','_nuxt/report-legacy.08920460.js','_nuxt/report-legacy.0af30687.js','_nuxt/report-legacy.21e29212.js','_nuxt/report-legacy.23751fc3.js','_nuxt/report-legacy.38efecb2.js','_nuxt/report-legacy.4149c0bf.js','_nuxt/report-legacy.55b100fc.js','_nuxt/report-legacy.56969191.js','_nuxt/report-legacy.60a1180d.js','_nuxt/report-legacy.6e5f00cc.js','_nuxt/report-legacy.725a14da.js','_nuxt/report-legacy.900e4868.js','_nuxt/report-legacy.ac590d32.js','_nuxt/report-legacy.bb996f17.js','_nuxt/report-legacy.c169bc4d.js','_nuxt/report-legacy.d995ac54.js','_nuxt/report-legacy.f9df7e3f.js','_nuxt/report-legacy.fe19b0c6.js','_nuxt/report.0d30736a.js','_nuxt/report.11940853.js','_nuxt/report.20f525a9.js','_nuxt/report.25061bee.js','_nuxt/report.4d31240c.js','_nuxt/report.55a6d195.js','_nuxt/report.783d04b3.js','_nuxt/report.79059cc4.js','_nuxt/report.7e106c19.js','_nuxt/report.87e655fd.js','_nuxt/report.a3857913.js','_nuxt/report.a71fe39d.js','_nuxt/report.bae3ddb3.js','_nuxt/report.bb46ec75.js','_nuxt/report.ccff9109.js','_nuxt/report.d0950017.js','_nuxt/report.f786b733.js','_nuxt/report.fb42a32e.js','_nuxt/result-view-legacy.4ed1a2e1.js','_nuxt/result-view.8267d0c6.js','_nuxt/resultModalMixin-legacy.1b44a353.js','_nuxt/resultModalMixin.42564892.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.85a6c365.js','_nuxt/search-cell.0b44601e.css','_nuxt/search-cell.b9fbeb76.js','_nuxt/search-legacy.529e7562.js','_nuxt/search-modal.pc-legacy.965e5fde.js','_nuxt/search-modal.pc.0981274b.css','_nuxt/search-modal.pc.b8a68537.js','_nuxt/search-page.mobile-legacy.4a5c71b7.js','_nuxt/search-page.mobile.222d5617.js','_nuxt/search-page.mobile.6fc89380.css','_nuxt/search.8a0a98fe.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/style-legacy.bec7b2b1.js','_nuxt/style.2a26d1c2.css','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.8a4152fa.js','_nuxt/swiper-bundle.35c6f966.js','_nuxt/swiper-bundle.44a6bf01.css','_nuxt/switch-legacy.387c7e4e.js','_nuxt/switch-legacy.846303d2.js','_nuxt/switch.2fd93a88.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.ff5e1da5.js','_nuxt/switchMixin-legacy.176b16ad.js','_nuxt/switchMixin.3eeab48e.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.fbbe66cb.js','_nuxt/user-info.4edcd667.js','_nuxt/user-info.a92680ae.css','_nuxt/utilities.appleyPay-legacy.98f5e059.js','_nuxt/utilities.appleyPay.788acac9.js','_nuxt/utils-legacy.2c9c5fcf.js','_nuxt/utils.39d19989.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.c41e01d8.js','_nuxt/vue.f36acd1f.89a95587.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','gray.js','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/expirePopup/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-channel-item/report/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



