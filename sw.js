

const cacheVersion = 'v1.0.291'

console.log('service worker version', '1.0.291')

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
  console.log('service worker active', '1.0.291', event)
  event.waitUntil(clearOldCache())
  event.waitUntil(clients.claim())
})

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.2d0f132b.js','_nuxt/AboutSA.mobile.68d9ff69.js','_nuxt/AboutSA2-legacy.e101a6f7.js','_nuxt/AboutSA2.5beb7f95.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.3098ba5d.js','_nuxt/PayUtils.ae6e9739.js','_nuxt/UICarouselView-legacy.9a34b908.js','_nuxt/UICarouselView.b3ee4813.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.3d618eaf.js','_nuxt/account-item-legacy.6b1686e8.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.5d0b7396.js','_nuxt/account-item.950742c1.css','_nuxt/account-item.da5f7664.js','_nuxt/api-legacy.45256b4a.js','_nuxt/api.c4cf62d8.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.39a31428.js','_nuxt/bank-views.ed168698.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/e7e35bb8-810f-42fc-8011-163f91ce8b81.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.860fb535.js','_nuxt/channel-view.37db4c3f.js','_nuxt/cko-card-list-legacy.7be10f87.js','_nuxt/cko-card-list.6083b600.js','_nuxt/cko-card-list.6193db4f.css','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.e9c11b5f.js','_nuxt/enter-legacy.fa3c22a5.js','_nuxt/enter.342b3289.css','_nuxt/enter.811e9447.js','_nuxt/enter.97026969.js','_nuxt/enter.d7350a96.css','_nuxt/enterMixin-legacy.bd84e82f.js','_nuxt/enterMixin.4704b8fc.js','_nuxt/entry-legacy.9203cf96.js','_nuxt/entry.414de89a.js','_nuxt/entry.52209fbe.css','_nuxt/error-404-legacy.94aa1b6c.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.eda0d706.js','_nuxt/error-500-legacy.25ddcebf.js','_nuxt/error-500.c5df6088.css','_nuxt/error-500.e48cc538.js','_nuxt/error-legacy.92955aa0.js','_nuxt/error.06313295.css','_nuxt/error.39c04cfe.js','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/frames-legacy.d45fd016.js','_nuxt/frames.c05d7dd3.js','_nuxt/home-legacy.617396a9.js','_nuxt/home.0998e910.js','_nuxt/home.63eb863a.css','_nuxt/home.pc-legacy.db3a21f0.js','_nuxt/home.pc.0c42e083.js','_nuxt/home.pc.8be3e011.css','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.08c4ed67.js','_nuxt/index-legacy.0d948731.js','_nuxt/index-legacy.0e1660e7.js','_nuxt/index-legacy.1455f0c4.js','_nuxt/index-legacy.1cca9136.js','_nuxt/index-legacy.23c6acbd.js','_nuxt/index-legacy.25151246.js','_nuxt/index-legacy.2e07cfa1.js','_nuxt/index-legacy.2ffb73fb.js','_nuxt/index-legacy.318a4a3e.js','_nuxt/index-legacy.42e6450c.js','_nuxt/index-legacy.4b7ab6b1.js','_nuxt/index-legacy.4cca72d4.js','_nuxt/index-legacy.4f214be2.js','_nuxt/index-legacy.512bb091.js','_nuxt/index-legacy.54856b95.js','_nuxt/index-legacy.584bdfe7.js','_nuxt/index-legacy.58c4a300.js','_nuxt/index-legacy.611b2352.js','_nuxt/index-legacy.6bb40bf4.js','_nuxt/index-legacy.6d726a3d.js','_nuxt/index-legacy.6ecf0e93.js','_nuxt/index-legacy.7a167edb.js','_nuxt/index-legacy.7d644135.js','_nuxt/index-legacy.81e4d552.js','_nuxt/index-legacy.8c3100ba.js','_nuxt/index-legacy.8e37f0ae.js','_nuxt/index-legacy.9031223d.js','_nuxt/index-legacy.a3a2e5f7.js','_nuxt/index-legacy.ab028c03.js','_nuxt/index-legacy.b33464d0.js','_nuxt/index-legacy.c05f81b1.js','_nuxt/index-legacy.c48ba420.js','_nuxt/index-legacy.c58a170a.js','_nuxt/index-legacy.cdca4dde.js','_nuxt/index-legacy.cee286b2.js','_nuxt/index-legacy.d3b66691.js','_nuxt/index-legacy.dcdc1fe1.js','_nuxt/index-legacy.df7829eb.js','_nuxt/index-legacy.dfc6d250.js','_nuxt/index-legacy.e33d3e9b.js','_nuxt/index-legacy.effaf4b1.js','_nuxt/index-legacy.f06e3efe.js','_nuxt/index-legacy.f219be8e.js','_nuxt/index-legacy.feb88c00.js','_nuxt/index-legacy.fff8ecbe.js','_nuxt/index.07559b6d.js','_nuxt/index.0a7a721c.js','_nuxt/index.100dcc7d.css','_nuxt/index.112a02e3.js','_nuxt/index.139511b2.css','_nuxt/index.1584c461.css','_nuxt/index.1b4b6ed6.js','_nuxt/index.1b58ac00.js','_nuxt/index.1c18e6bb.css','_nuxt/index.22a86583.js','_nuxt/index.23a90349.css','_nuxt/index.27517127.css','_nuxt/index.29ed9cec.js','_nuxt/index.2a1c672c.js','_nuxt/index.2aa17390.js','_nuxt/index.2f9617a3.js','_nuxt/index.32c8357c.js','_nuxt/index.332ccdab.js','_nuxt/index.39939e89.js','_nuxt/index.3a7e8d77.js','_nuxt/index.3e3f66aa.css','_nuxt/index.3e898ac1.js','_nuxt/index.44638243.css','_nuxt/index.47599534.css','_nuxt/index.47b9d10a.js','_nuxt/index.4fb49c6c.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.609a047b.css','_nuxt/index.65fc1054.js','_nuxt/index.69c12705.css','_nuxt/index.6b308f11.css','_nuxt/index.6c1277f7.css','_nuxt/index.6cacfa23.js','_nuxt/index.6d30943a.js','_nuxt/index.6dab18a1.js','_nuxt/index.7085eef3.js','_nuxt/index.71d24d3c.css','_nuxt/index.71da7ae5.js','_nuxt/index.771c13e6.css','_nuxt/index.79bc6f39.js','_nuxt/index.7b7671a9.css','_nuxt/index.7fbd7787.js','_nuxt/index.815202c8.css','_nuxt/index.823949b3.js','_nuxt/index.828f2288.js','_nuxt/index.851145cc.js','_nuxt/index.891cf9a2.js','_nuxt/index.89afa0a7.js','_nuxt/index.8e201a5d.js','_nuxt/index.9462e41a.js','_nuxt/index.94ed0697.js','_nuxt/index.978e8cb5.js','_nuxt/index.9b1599a9.css','_nuxt/index.9d1de308.css','_nuxt/index.9e5e65f5.js','_nuxt/index.9faa3fdf.css','_nuxt/index.a186eb11.css','_nuxt/index.a76252f9.css','_nuxt/index.ae40bec6.css','_nuxt/index.b26ad712.css','_nuxt/index.b5f9afcb.js','_nuxt/index.b6b233ed.css','_nuxt/index.c0a2c05e.css','_nuxt/index.c8621a6b.css','_nuxt/index.c8eb2b8a.js','_nuxt/index.c9086ade.js','_nuxt/index.ce047708.js','_nuxt/index.d0233f63.css','_nuxt/index.d0ccfbab.js','_nuxt/index.d1ea6fe7.css','_nuxt/index.d83f749f.css','_nuxt/index.dad14dde.css','_nuxt/index.dafa9688.js','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e347bd15.css','_nuxt/index.e46c25fd.css','_nuxt/index.e66c3ae1.js','_nuxt/index.e7b8b0b2.js','_nuxt/index.eca05f2b.js','_nuxt/index.f17c7b44.js','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.fd19517a.js','_nuxt/index.mobile-legacy.585aa03f.js','_nuxt/index.mobile-legacy.5de53394.js','_nuxt/index.mobile-legacy.de10b735.js','_nuxt/index.mobile-legacy.ed8a2dc0.js','_nuxt/index.mobile-legacy.fc450aa3.js','_nuxt/index.mobile.0746538f.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.1de5aea7.js','_nuxt/index.mobile.658424ed.js','_nuxt/index.mobile.85ed7a89.js','_nuxt/index.mobile.8f7eceeb.js','_nuxt/index.mobile.a1466456.css','_nuxt/index.mobile.b0a7dccf.css','_nuxt/index.mobile.e6e7523a.css','_nuxt/index.moble-legacy.ff03a61a.js','_nuxt/index.moble.4669505e.css','_nuxt/index.moble.c0a29412.js','_nuxt/index.pc-legacy.14d49c53.js','_nuxt/index.pc-legacy.1b38ec79.js','_nuxt/index.pc-legacy.5f1b6d75.js','_nuxt/index.pc-legacy.a7243b01.js','_nuxt/index.pc-legacy.b98f0f2a.js','_nuxt/index.pc-legacy.d525867b.js','_nuxt/index.pc-legacy.f63a1984.js','_nuxt/index.pc-legacy.f95b236c.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.4c216fa0.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.58e98aa1.js','_nuxt/index.pc.654af8f5.css','_nuxt/index.pc.7013576d.js','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.8c03d427.js','_nuxt/index.pc.94785866.js','_nuxt/index.pc.9bcc667e.js','_nuxt/index.pc.aab4ada2.css','_nuxt/index.pc.c31f35b3.css','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.e2be9a1a.js','_nuxt/index.pc.e9b54709.js','_nuxt/index.pc.vue-legacy.3059fc88.js','_nuxt/index.pc.vue-legacy.5025a9f6.js','_nuxt/index.pc.vue.0e7ac9a4.js','_nuxt/index.pc.vue.86d4ea11.js','_nuxt/index.vue-legacy.4c650da3.js','_nuxt/index.vue-legacy.8369ced5.js','_nuxt/index.vue-legacy.9502c0da.js','_nuxt/index.vue-legacy.97073721.js','_nuxt/index.vue-legacy.daa62533.js','_nuxt/index.vue.4e06972d.js','_nuxt/index.vue.5aa62cbf.js','_nuxt/index.vue.6c5597d5.js','_nuxt/index.vue.7722aed2.js','_nuxt/index.vue.bd96b0f5.js','_nuxt/indexMixin-legacy.4c0cd8ce.js','_nuxt/indexMixin.48dfcf6f.js','_nuxt/index_mobile-legacy.224f62fe.js','_nuxt/index_mobile-legacy.db6a0a70.js','_nuxt/index_mobile.26bea37c.js','_nuxt/index_mobile.8e90586e.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.ec3c2fe3.css','_nuxt/index_pc-legacy.375dd629.js','_nuxt/index_pc-legacy.deed2b9b.js','_nuxt/index_pc.37148f42.css','_nuxt/index_pc.5dccebc8.js','_nuxt/index_pc.a71cff98.css','_nuxt/index_pc.c5858ef7.js','_nuxt/init-legacy.d0fb54a3.js','_nuxt/init.fe475420.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.1f89590c.js','_nuxt/login.modal.pc.12ad3798.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.534a815d.js','_nuxt/model-cell.4e5f384e.js','_nuxt/model-legacy.04c1f957.js','_nuxt/model-legacy.0f0a5b3c.js','_nuxt/model-legacy.13bb365e.js','_nuxt/model-legacy.160a7fef.js','_nuxt/model-legacy.1b00c42d.js','_nuxt/model-legacy.1c05d16b.js','_nuxt/model-legacy.20cb0abf.js','_nuxt/model-legacy.50a47d2f.js','_nuxt/model-legacy.53bea0d0.js','_nuxt/model-legacy.5a6448ca.js','_nuxt/model-legacy.5d531074.js','_nuxt/model-legacy.921d837a.js','_nuxt/model-legacy.99b1beef.js','_nuxt/model-legacy.a3013472.js','_nuxt/model-legacy.a91394fd.js','_nuxt/model-legacy.b8806e3b.js','_nuxt/model-legacy.b8b9c36a.js','_nuxt/model-legacy.bf292bf1.js','_nuxt/model-legacy.c5d8087e.js','_nuxt/model-legacy.dea1a036.js','_nuxt/model-legacy.e2d1fbdb.js','_nuxt/model-legacy.f2faf84b.js','_nuxt/model.0661b1c4.js','_nuxt/model.161f9987.js','_nuxt/model.1ab686dd.js','_nuxt/model.2122a4a0.js','_nuxt/model.2482fc46.js','_nuxt/model.3a671bcf.js','_nuxt/model.4b4bc806.js','_nuxt/model.5b8dfaa5.js','_nuxt/model.5db45fb6.js','_nuxt/model.836baa3e.js','_nuxt/model.8f6726b7.js','_nuxt/model.9d484dc3.js','_nuxt/model.aa986a09.js','_nuxt/model.d81e2413.js','_nuxt/model.dabace5c.js','_nuxt/model.e5409610.js','_nuxt/model.e606095e.js','_nuxt/model.ebf29f6c.js','_nuxt/model.f149bbb1.js','_nuxt/model.f2a8156b.js','_nuxt/model.f606f6c6.js','_nuxt/model.f6760544.js','_nuxt/pay-drawer-legacy.d11bfd52.js','_nuxt/pay-drawer.5740160c.js','_nuxt/pay-drawer.64366f16.css','_nuxt/pay-legacy.de333609.js','_nuxt/pay-legacy.f6c6686d.js','_nuxt/pay-step-legacy.774f2e18.js','_nuxt/pay-step.4b7f8d5d.js','_nuxt/pay-step.pc-legacy.68da461a.js','_nuxt/pay-step.pc.1718b89e.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay.4bf1bf41.css','_nuxt/pay.7a8d6b6a.js','_nuxt/pay.cf9e3b84.css','_nuxt/pay.d770cc46.js','_nuxt/payGoodsListItem-legacy.dbd23cdd.js','_nuxt/payGoodsListItem-legacy.f5b683ea.js','_nuxt/payGoodsListItem.0acaf2b7.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.e0ba9980.js','_nuxt/payMixin-legacy.21eeb1a9.js','_nuxt/payMixin.290215f9.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.0b87a07b.js','_nuxt/public.966d08da.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.b70af3b6.js','_nuxt/recentItemMixin.45eefc4b.js','_nuxt/recharge-item-legacy.d8181cd6.js','_nuxt/recharge-item.5b81f77f.js','_nuxt/recharge-item.935b9836.css','_nuxt/refresh-modal-legacy.bd8b6c4d.js','_nuxt/refresh-modal.a31895cb.js','_nuxt/report-legacy.0a696140.js','_nuxt/report-legacy.12746d1d.js','_nuxt/report-legacy.25e6dbfe.js','_nuxt/report-legacy.27d5a7b7.js','_nuxt/report-legacy.4f97d3aa.js','_nuxt/report-legacy.5451113a.js','_nuxt/report-legacy.5caa9efb.js','_nuxt/report-legacy.65315529.js','_nuxt/report-legacy.777db212.js','_nuxt/report-legacy.854bddb9.js','_nuxt/report-legacy.98748738.js','_nuxt/report-legacy.a10c49fd.js','_nuxt/report-legacy.b007d172.js','_nuxt/report-legacy.c4d5e2a7.js','_nuxt/report-legacy.ce765b4c.js','_nuxt/report-legacy.d3056579.js','_nuxt/report-legacy.f6b2925b.js','_nuxt/report-legacy.fb2461ca.js','_nuxt/report.05ddb047.js','_nuxt/report.14de8c47.js','_nuxt/report.188cf926.js','_nuxt/report.40717da7.js','_nuxt/report.45fa778d.js','_nuxt/report.4dabf37a.js','_nuxt/report.525abfd5.js','_nuxt/report.54f8c9c6.js','_nuxt/report.574dfcdc.js','_nuxt/report.5abd6c34.js','_nuxt/report.68c9270d.js','_nuxt/report.6b049f5e.js','_nuxt/report.8ee1b6f5.js','_nuxt/report.a69171b0.js','_nuxt/report.c124686e.js','_nuxt/report.c7c575d8.js','_nuxt/report.c9c98351.js','_nuxt/report.d1c41997.js','_nuxt/result-view-legacy.d8fb549d.js','_nuxt/result-view.680a6fd2.js','_nuxt/resultModalMixin-legacy.95f44c11.js','_nuxt/resultModalMixin.4c749015.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.c21ccafc.js','_nuxt/search-cell.0b44601e.css','_nuxt/search-cell.8bac9c71.js','_nuxt/search-legacy.0de30fcd.js','_nuxt/search-modal.pc-legacy.9839560e.js','_nuxt/search-modal.pc.0981274b.css','_nuxt/search-modal.pc.ea93081b.js','_nuxt/search-page.mobile-legacy.c3bb0eb5.js','_nuxt/search-page.mobile.3fd59fd3.js','_nuxt/search-page.mobile.6fc89380.css','_nuxt/search.658a7fae.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/style-legacy.bec7b2b1.js','_nuxt/style.2a26d1c2.css','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.8a4152fa.js','_nuxt/swiper-bundle.35c6f966.js','_nuxt/swiper-bundle.44a6bf01.css','_nuxt/switch-legacy.442e0f98.js','_nuxt/switch-legacy.ff9150c2.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.63940327.js','_nuxt/switch.71976432.css','_nuxt/switch.7499c55b.js','_nuxt/switchMixin-legacy.0878304e.js','_nuxt/switchMixin.76260f61.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.87d8895a.js','_nuxt/user-info.612e0f0e.js','_nuxt/user-info.a92680ae.css','_nuxt/utilities.appleyPay-legacy.82282b44.js','_nuxt/utilities.appleyPay.5c324e36.js','_nuxt/utils-legacy.2c9c5fcf.js','_nuxt/utils.39d19989.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.8b0aa5d3.js','_nuxt/vue.f36acd1f.cf47797d.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','gray.js','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/expirePopup/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-channel-item/report/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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
      console.log('service worker', '1.0.291', event.request, event.request.url)
      event.respondWith(networkFirst(event))
    } else {
      event.respondWith(cacheFirst(event))
    }
  }
})



