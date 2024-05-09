

const cacheVersion = 'v1.0.292'

console.log('service worker version', '1.0.292')

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
  console.log('service worker active', '1.0.292', event)
  event.waitUntil(clearOldCache())
  event.waitUntil(clients.claim())
})

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.9e7318f4.js','_nuxt/AboutSA.mobile.e8c1125d.js','_nuxt/AboutSA2-legacy.aaee6b3d.js','_nuxt/AboutSA2.455626f2.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.d60db4c5.js','_nuxt/PayUtils.887f5043.js','_nuxt/UICarouselView-legacy.bb9a0918.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/UICarouselView.f426a47e.js','_nuxt/account-item-legacy.7d4c531d.js','_nuxt/account-item-legacy.ed7c4d64.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.b2644844.js','_nuxt/account-item.cc5c19d2.js','_nuxt/api-legacy.4b89051c.js','_nuxt/api.22a68920.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.e5fd781d.js','_nuxt/bank-views.ba403af7.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/3fe8c936-569f-4ad4-96ea-ad4559de8087.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.f8d35db2.js','_nuxt/channel-view.7f465c87.js','_nuxt/cko-card-list-legacy.764da6e0.js','_nuxt/cko-card-list.462fd3ee.js','_nuxt/cko-card-list.6193db4f.css','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.59383386.js','_nuxt/enter-legacy.5a8ef88f.js','_nuxt/enter.342b3289.css','_nuxt/enter.a3c0c265.js','_nuxt/enter.aa42bb8f.js','_nuxt/enter.d7350a96.css','_nuxt/enterMixin-legacy.416cb3f4.js','_nuxt/enterMixin.7ce4cff7.js','_nuxt/entry-legacy.9f6b3903.js','_nuxt/entry.52209fbe.css','_nuxt/entry.9d51b9b2.js','_nuxt/error-404-legacy.41bb8db3.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.ef5f9a02.js','_nuxt/error-500-legacy.619def1e.js','_nuxt/error-500.c5df6088.css','_nuxt/error-500.f174fbb3.js','_nuxt/error-legacy.77faf644.js','_nuxt/error.06313295.css','_nuxt/error.6485c427.js','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/frames-legacy.84e22656.js','_nuxt/frames.2e4210e0.js','_nuxt/home-legacy.534184d5.js','_nuxt/home.63eb863a.css','_nuxt/home.ea9823ff.js','_nuxt/home.pc-legacy.2998c940.js','_nuxt/home.pc.491f1d7b.js','_nuxt/home.pc.8be3e011.css','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.00526a4f.js','_nuxt/index-legacy.07bd4e7b.js','_nuxt/index-legacy.0f012025.js','_nuxt/index-legacy.0f77aa21.js','_nuxt/index-legacy.1168cded.js','_nuxt/index-legacy.15d191d9.js','_nuxt/index-legacy.180128c1.js','_nuxt/index-legacy.1912fd3d.js','_nuxt/index-legacy.1dc2aed2.js','_nuxt/index-legacy.255a32ee.js','_nuxt/index-legacy.2d6faa25.js','_nuxt/index-legacy.34a1d969.js','_nuxt/index-legacy.398eaf98.js','_nuxt/index-legacy.3be0d3dd.js','_nuxt/index-legacy.4025fb39.js','_nuxt/index-legacy.459dac51.js','_nuxt/index-legacy.46ac5ead.js','_nuxt/index-legacy.4cc0d024.js','_nuxt/index-legacy.624864df.js','_nuxt/index-legacy.67d8a792.js','_nuxt/index-legacy.6886ca4d.js','_nuxt/index-legacy.68aa723c.js','_nuxt/index-legacy.72e26a44.js','_nuxt/index-legacy.81041087.js','_nuxt/index-legacy.9585a03f.js','_nuxt/index-legacy.9903339e.js','_nuxt/index-legacy.9d0aad7d.js','_nuxt/index-legacy.a2cca398.js','_nuxt/index-legacy.a3090fda.js','_nuxt/index-legacy.b374bc9d.js','_nuxt/index-legacy.bd9490cd.js','_nuxt/index-legacy.c08fa47f.js','_nuxt/index-legacy.c65de8b3.js','_nuxt/index-legacy.c6c5adf0.js','_nuxt/index-legacy.c8cf03d6.js','_nuxt/index-legacy.c94dcf2b.js','_nuxt/index-legacy.ca8344b6.js','_nuxt/index-legacy.cca1f518.js','_nuxt/index-legacy.ce3e5ee8.js','_nuxt/index-legacy.d83adb73.js','_nuxt/index-legacy.dbeae9b8.js','_nuxt/index-legacy.f06e8eda.js','_nuxt/index-legacy.f352d72b.js','_nuxt/index-legacy.f984c663.js','_nuxt/index-legacy.f9dcd52f.js','_nuxt/index-legacy.fac80b19.js','_nuxt/index.0504fce6.js','_nuxt/index.0510b11d.js','_nuxt/index.0a5b733a.js','_nuxt/index.100dcc7d.css','_nuxt/index.12e95a67.js','_nuxt/index.12f2b23e.js','_nuxt/index.139511b2.css','_nuxt/index.14a55fb9.js','_nuxt/index.1579f2df.js','_nuxt/index.1584c461.css','_nuxt/index.177341b9.js','_nuxt/index.1c18e6bb.css','_nuxt/index.1e58a142.js','_nuxt/index.223541bd.js','_nuxt/index.23a90349.css','_nuxt/index.27517127.css','_nuxt/index.2a3ed8b4.js','_nuxt/index.3e3f66aa.css','_nuxt/index.44638243.css','_nuxt/index.4590b726.js','_nuxt/index.47599534.css','_nuxt/index.4a763e25.js','_nuxt/index.4ad9a163.js','_nuxt/index.4d53fe01.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.56a44c6a.js','_nuxt/index.58c5f71f.js','_nuxt/index.5d8dd08e.js','_nuxt/index.609a047b.css','_nuxt/index.69c12705.css','_nuxt/index.6b308f11.css','_nuxt/index.6c1277f7.css','_nuxt/index.6e3a0516.js','_nuxt/index.71d24d3c.css','_nuxt/index.771c13e6.css','_nuxt/index.7aa4a419.js','_nuxt/index.7b7671a9.css','_nuxt/index.7cbec06f.js','_nuxt/index.7d15af98.js','_nuxt/index.815202c8.css','_nuxt/index.83280bd6.js','_nuxt/index.869312bb.js','_nuxt/index.9ac15712.js','_nuxt/index.9b1599a9.css','_nuxt/index.9d1de308.css','_nuxt/index.9faa3fdf.css','_nuxt/index.a186eb11.css','_nuxt/index.a76252f9.css','_nuxt/index.a7790f09.js','_nuxt/index.ad464149.js','_nuxt/index.ae40bec6.css','_nuxt/index.b0abe686.js','_nuxt/index.b1259fee.js','_nuxt/index.b26ad712.css','_nuxt/index.b4d9f5c1.js','_nuxt/index.b5de8069.js','_nuxt/index.b6b233ed.css','_nuxt/index.c0a2c05e.css','_nuxt/index.c2624907.js','_nuxt/index.c28a6208.js','_nuxt/index.c366a53b.js','_nuxt/index.c5b2d4f1.js','_nuxt/index.c5bd6317.js','_nuxt/index.c60e78a8.js','_nuxt/index.c72b376a.js','_nuxt/index.c8621a6b.css','_nuxt/index.d0233f63.css','_nuxt/index.d0eafa50.js','_nuxt/index.d1ea6fe7.css','_nuxt/index.d2c58654.js','_nuxt/index.d83f749f.css','_nuxt/index.dad14dde.css','_nuxt/index.dc174102.js','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e347bd15.css','_nuxt/index.e46c25fd.css','_nuxt/index.e572cbe0.js','_nuxt/index.f0a816f5.js','_nuxt/index.f573559f.js','_nuxt/index.f7872780.css','_nuxt/index.f936ec73.js','_nuxt/index.fa6af505.css','_nuxt/index.fbebcb77.js','_nuxt/index.mobile-legacy.6e1075b5.js','_nuxt/index.mobile-legacy.b847136d.js','_nuxt/index.mobile-legacy.d663dec0.js','_nuxt/index.mobile-legacy.f2bb37ee.js','_nuxt/index.mobile-legacy.f4ec9616.js','_nuxt/index.mobile.15f6714d.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.3fa27eb8.js','_nuxt/index.mobile.9479fca1.js','_nuxt/index.mobile.a1466456.css','_nuxt/index.mobile.a85bc6d5.js','_nuxt/index.mobile.b0a7dccf.css','_nuxt/index.mobile.d4b5b0a5.js','_nuxt/index.mobile.e6e7523a.css','_nuxt/index.moble-legacy.80f3704d.js','_nuxt/index.moble.4669505e.css','_nuxt/index.moble.99d298ab.js','_nuxt/index.pc-legacy.13267d04.js','_nuxt/index.pc-legacy.2061a718.js','_nuxt/index.pc-legacy.35223ecc.js','_nuxt/index.pc-legacy.43d5fd11.js','_nuxt/index.pc-legacy.5f0ca030.js','_nuxt/index.pc-legacy.b08dbcd1.js','_nuxt/index.pc-legacy.c8b0bf3d.js','_nuxt/index.pc-legacy.ccf662ff.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.4f00afaa.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.654af8f5.css','_nuxt/index.pc.66edc3c9.js','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.a2e1529e.js','_nuxt/index.pc.a8e4fab9.js','_nuxt/index.pc.aab4ada2.css','_nuxt/index.pc.c31f35b3.css','_nuxt/index.pc.c392df37.js','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.e467202f.js','_nuxt/index.pc.e5372c51.js','_nuxt/index.pc.fc51002d.js','_nuxt/index.pc.vue-legacy.d41ecacf.js','_nuxt/index.pc.vue-legacy.f7d1eee6.js','_nuxt/index.pc.vue.04aa8ec0.js','_nuxt/index.pc.vue.5def514e.js','_nuxt/index.vue-legacy.17d5c65e.js','_nuxt/index.vue-legacy.1af35321.js','_nuxt/index.vue-legacy.24576fc5.js','_nuxt/index.vue-legacy.9ff47b8b.js','_nuxt/index.vue-legacy.c2a89628.js','_nuxt/index.vue.066c7cfc.js','_nuxt/index.vue.79f1200e.js','_nuxt/index.vue.bc5c57a8.js','_nuxt/index.vue.de2998e5.js','_nuxt/index.vue.eb17f3f5.js','_nuxt/indexMixin-legacy.4d9ce9f4.js','_nuxt/indexMixin.415fcbf2.js','_nuxt/index_mobile-legacy.18648a3b.js','_nuxt/index_mobile-legacy.c629f0ca.js','_nuxt/index_mobile.11496106.js','_nuxt/index_mobile.137255aa.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.ec3c2fe3.css','_nuxt/index_pc-legacy.59083221.js','_nuxt/index_pc-legacy.8eafdc03.js','_nuxt/index_pc.37148f42.css','_nuxt/index_pc.a71cff98.css','_nuxt/index_pc.a98e6d96.js','_nuxt/index_pc.c7381e2d.js','_nuxt/init-legacy.f23bc76b.js','_nuxt/init.a74a042f.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.77368219.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/login.modal.pc.d7968fc8.js','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.f0ed2d26.js','_nuxt/model-cell.6de9abaf.js','_nuxt/model-legacy.026239d9.js','_nuxt/model-legacy.1fb46c96.js','_nuxt/model-legacy.245b6787.js','_nuxt/model-legacy.4625ba54.js','_nuxt/model-legacy.481509a3.js','_nuxt/model-legacy.5dccc5ab.js','_nuxt/model-legacy.675e9f6c.js','_nuxt/model-legacy.6b389e86.js','_nuxt/model-legacy.7e2666a0.js','_nuxt/model-legacy.8e132435.js','_nuxt/model-legacy.92991d1f.js','_nuxt/model-legacy.9df544c7.js','_nuxt/model-legacy.9e4c25ca.js','_nuxt/model-legacy.9f998885.js','_nuxt/model-legacy.a1ecba13.js','_nuxt/model-legacy.bcdb7c0d.js','_nuxt/model-legacy.c531d047.js','_nuxt/model-legacy.c669e3b2.js','_nuxt/model-legacy.d7a4f90e.js','_nuxt/model-legacy.e03354e0.js','_nuxt/model-legacy.e6b23469.js','_nuxt/model-legacy.f621cc1d.js','_nuxt/model.06cc328e.js','_nuxt/model.160d89b1.js','_nuxt/model.1872e4dc.js','_nuxt/model.1e82d57b.js','_nuxt/model.3b5ebd7e.js','_nuxt/model.64943e36.js','_nuxt/model.699b6334.js','_nuxt/model.8002fab8.js','_nuxt/model.8723a419.js','_nuxt/model.9780ab8b.js','_nuxt/model.9c888933.js','_nuxt/model.c0523e6e.js','_nuxt/model.c2485804.js','_nuxt/model.c69ec6e9.js','_nuxt/model.cc742033.js','_nuxt/model.ce77dbf0.js','_nuxt/model.dd2b0254.js','_nuxt/model.debc99c9.js','_nuxt/model.e200e8d1.js','_nuxt/model.e6a343be.js','_nuxt/model.ed60d3c8.js','_nuxt/model.f963a86e.js','_nuxt/pay-drawer-legacy.6bc3609a.js','_nuxt/pay-drawer.0e40e402.js','_nuxt/pay-drawer.64366f16.css','_nuxt/pay-legacy.45a1a14e.js','_nuxt/pay-legacy.59d76023.js','_nuxt/pay-step-legacy.1732518c.js','_nuxt/pay-step.9801ad0d.js','_nuxt/pay-step.pc-legacy.a2559ec8.js','_nuxt/pay-step.pc.358004bf.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay.4bf1bf41.css','_nuxt/pay.5bc71c20.js','_nuxt/pay.c75e042f.js','_nuxt/pay.cf9e3b84.css','_nuxt/payGoodsListItem-legacy.393a1ce3.js','_nuxt/payGoodsListItem-legacy.6379a6ef.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.888d7c79.js','_nuxt/payGoodsListItem.e9521860.js','_nuxt/payMixin-legacy.d316fa4a.js','_nuxt/payMixin.a7440650.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.d5fcc998.js','_nuxt/public.3c90f91f.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.eb1da621.js','_nuxt/recentItemMixin.3a2981a6.js','_nuxt/recharge-item-legacy.50370f22.js','_nuxt/recharge-item.935b9836.css','_nuxt/recharge-item.f6364da4.js','_nuxt/refresh-modal-legacy.9a81262c.js','_nuxt/refresh-modal.cbde9aee.js','_nuxt/report-legacy.048628cc.js','_nuxt/report-legacy.060e5d41.js','_nuxt/report-legacy.1bedcb2e.js','_nuxt/report-legacy.2248bc51.js','_nuxt/report-legacy.25b38644.js','_nuxt/report-legacy.2cae659a.js','_nuxt/report-legacy.338dc8bb.js','_nuxt/report-legacy.357483a9.js','_nuxt/report-legacy.3a2df688.js','_nuxt/report-legacy.4f8c0da0.js','_nuxt/report-legacy.54440d75.js','_nuxt/report-legacy.66f401fd.js','_nuxt/report-legacy.9e12a31f.js','_nuxt/report-legacy.ba5b97f3.js','_nuxt/report-legacy.ded2f9ba.js','_nuxt/report-legacy.ee04dc0c.js','_nuxt/report-legacy.eefbfb8c.js','_nuxt/report-legacy.fb220771.js','_nuxt/report.06b355b1.js','_nuxt/report.0cfabd1e.js','_nuxt/report.1cee8f0b.js','_nuxt/report.2a2c0b6f.js','_nuxt/report.3d8409de.js','_nuxt/report.52a70e65.js','_nuxt/report.5925f2d3.js','_nuxt/report.6381a148.js','_nuxt/report.83325adb.js','_nuxt/report.99d5cb8f.js','_nuxt/report.9d306f20.js','_nuxt/report.b4331949.js','_nuxt/report.bf226c45.js','_nuxt/report.c93aee25.js','_nuxt/report.df8eb031.js','_nuxt/report.f037836b.js','_nuxt/report.f8e9c6df.js','_nuxt/report.fcfe2933.js','_nuxt/result-view-legacy.6f5e66a0.js','_nuxt/result-view.c6e06999.js','_nuxt/resultModalMixin-legacy.680cfc6b.js','_nuxt/resultModalMixin.f7c62c09.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.7551e54d.js','_nuxt/search-cell.07a265ab.js','_nuxt/search-cell.0b44601e.css','_nuxt/search-legacy.5fdc9a2f.js','_nuxt/search-modal.pc-legacy.b05390b2.js','_nuxt/search-modal.pc.0981274b.css','_nuxt/search-modal.pc.8d73737a.js','_nuxt/search-page.mobile-legacy.4f8db41a.js','_nuxt/search-page.mobile.598cd48e.js','_nuxt/search-page.mobile.6fc89380.css','_nuxt/search.0be75594.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/style-legacy.bec7b2b1.js','_nuxt/style.2a26d1c2.css','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.8a4152fa.js','_nuxt/swiper-bundle.35c6f966.js','_nuxt/swiper-bundle.44a6bf01.css','_nuxt/switch-legacy.2df6f7c2.js','_nuxt/switch-legacy.94ec1440.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.702fc9a3.js','_nuxt/switch.71976432.css','_nuxt/switch.d5ee937c.js','_nuxt/switchMixin-legacy.7fa2caac.js','_nuxt/switchMixin.b374bdb8.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.9d808801.js','_nuxt/user-info.a92680ae.css','_nuxt/user-info.ae052b46.js','_nuxt/utilities.appleyPay-legacy.e4282750.js','_nuxt/utilities.appleyPay.ac3421cb.js','_nuxt/utils-legacy.2c9c5fcf.js','_nuxt/utils.39d19989.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.57a332eb.js','_nuxt/vue.f36acd1f.bb7dfb7b.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','gray.js','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/expirePopup/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-channel-item/report/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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
      console.log('service worker', '1.0.292', event.request, event.request.url)
      event.respondWith(networkFirst(event))
    } else {
      event.respondWith(cacheFirst(event))
    }
  }
})



