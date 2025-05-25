(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/common/webView"],{

/***/ 66:
/*!*****************************************************************************************************!*\
  !*** /Users/yjf/Desktop/YDT/XCX/rop-frontend-wechatapp/main.js?{"page":"pages%2Fcommon%2FwebView"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
__webpack_require__(/*! @dcloudio/uni-stat/dist/uni-stat.es.js */ 27);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _webView = _interopRequireDefault(__webpack_require__(/*! ./pages/common/webView.vue */ 67));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_webView.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 67:
/*!**********************************************************************************!*\
  !*** /Users/yjf/Desktop/YDT/XCX/rop-frontend-wechatapp/pages/common/webView.vue ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webView_vue_vue_type_template_id_16960ba4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webView.vue?vue&type=template&id=16960ba4& */ 68);
/* harmony import */ var _webView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webView.vue?vue&type=script&lang=js& */ 70);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _webView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _webView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 38);

var renderjs




/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _webView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _webView_vue_vue_type_template_id_16960ba4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _webView_vue_vue_type_template_id_16960ba4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _webView_vue_vue_type_template_id_16960ba4___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/common/webView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 68:
/*!*****************************************************************************************************************!*\
  !*** /Users/yjf/Desktop/YDT/XCX/rop-frontend-wechatapp/pages/common/webView.vue?vue&type=template&id=16960ba4& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_webView_vue_vue_type_template_id_16960ba4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./webView.vue?vue&type=template&id=16960ba4& */ 69);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_webView_vue_vue_type_template_id_16960ba4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_webView_vue_vue_type_template_id_16960ba4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_webView_vue_vue_type_template_id_16960ba4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_webView_vue_vue_type_template_id_16960ba4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 69:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/yjf/Desktop/YDT/XCX/rop-frontend-wechatapp/pages/common/webView.vue?vue&type=template&id=16960ba4& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 70:
/*!***********************************************************************************************************!*\
  !*** /Users/yjf/Desktop/YDT/XCX/rop-frontend-wechatapp/pages/common/webView.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_webView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./webView.vue?vue&type=script&lang=js& */ 71);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_webView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_webView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_webView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_webView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_webView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 71:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/yjf/Desktop/YDT/XCX/rop-frontend-wechatapp/pages/common/webView.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _homeService = _interopRequireDefault(__webpack_require__(/*! @/api/homeService.js */ 57));
var _config = _interopRequireDefault(__webpack_require__(/*! @/utils/config.js */ 59));
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    return {
      url: ''
    };
  },
  onLoad: function onLoad(option) {
    var detail = JSON.parse(option.params);
    var url = detail.url;
    var Authorization = uni.getStorageSync('Authorization');
    if (url.indexOf('?') != -1) {
      this.url = url + '&Authorization=' + Authorization + new Date().getTime();
    } else {
      this.url = url + '?Authorization=' + Authorization + new Date().getTime();
    }
  } // onLoad(option) {
  // 	this.url = 'https://m.tb.cn/h.5U6tmCh?tk=LtxhdA9r5vd'
  // 	console.log(111);
  // 	return
  // 	if(option.from == 'h5') { // 首页顶部功能跳转h5
  // 		const Authorization = uni.getStorageSync('Authorization')
  // 		const url = decodeURIComponent(option.url)
  // 		if(url.indexOf('?') != -1) {
  // 			this.url = url + '&Authorization=' + Authorization + '&uid=32364377-2cae-4500-84f2-605b14a1e831' + '&v' + new Date().getTime()
  // 		} else {
  // 			this.url = url + '?Authorization=' + Authorization + '&uid=32364377-2cae-4500-84f2-605b14a1e831' + '&v' + new Date().getTime()
  // 		}
  // 		if(url.indexOf('information') != -1) { // 如果是新闻公告 就设置为可分享
  // 			this.newNoticeUrl = decodeURIComponent(option.url)
  // 			homeService.getNoticeDetails({
  // 				newsId: this.newNoticeUrl.split('newsId=')[1]
  // 			},res => {
  // 				this.newNoticeObj = Object.assign(res, {})
  // 				console.log(res)
  // 			}, err => {
  // 				uni.showToast({
  // 					icon: 'none',
  // 					title: err.message,
  // 					duration: 1000,
  // 					mask: true
  // 				})
  // 			})
  // 		} else {
  // 			uni.hideShareMenu()
  // 		}
  // 	} else if(option.from == 'mall' && option.type == 'applet'){
  // 		this.url = option.sucJumpUrl ? decodeURIComponent(option.sucJumpUrl) : decodeURIComponent(option.failJumpUrl) + '&v' + new Date().getTime()
  // 		console.log(this.url)
  // 	} else if(option.from == 'mallBanner'){ // 小程序商城banner
  // 		this.url = decodeURIComponent(option.url) + '&v' + new Date().getTime()
  // 	} else if(option.from == 'appMall') { // app商城分享微信朋友
  // 		uni.hideLoading()
  // 		this.url = decodeURIComponent(option.url) + '&v' + new Date().getTime()
  // 		console.log(this.url)
  // 	} else if(option.from == 'appMallPosters'){ // 商城生成海报分享
  // 		uni.hideLoading()
  // 		wx.request({
  // 			url: 'https://ser.hbzhsq.cn/web/index.php?_mall_id=2&r=api/default/qr-code-parameter&token=' + option.mallToken,
  // 			method: 'GET',
  // 			success: (res => {
  // 				console.log(res)
  // 				if(res.data.code == 0) {
  // 					if(Object.keys(res.data.data).length > 0) {
  // 						this.url = res.data.data.url + '&v' + new Date().getTime()
  // 						console.log(this.url)
  // 					} else {
  // 						uni.showToast({
  // 							icon: 'none',
  // 							title: '获取商城数据失败',
  // 							duration: 1000,
  // 							mask: true
  // 						})
  // 					}
  // 				} else {
  // 					uni.showToast({
  // 						icon: 'none',
  // 						title: res.data.msg,
  // 						duration: 1000,
  // 						mask: true
  // 					})
  // 				}
  // 			}),
  // 			fail: (err => {
  // 				console.log(err)
  // 				uni.showToast({
  // 					icon: 'none',
  // 					title: err.message,
  // 					duration: 1000,
  // 					mask: true
  // 				})
  // 			})
  // 		})
  // 	} else if(option.from == 'mallShare') { // 分享商品详情页未登录状态跳回小程序登录后跳回商品详情页面
  // 		uni.hideLoading()
  // 		const url = decodeURIComponent(option.url)
  // 		const userInfo = uni.getStorageSync('userInfo') || {}
  // 		console.log(userInfo)
  // 		wx.request({ // 请求商城登录接口换取合法token
  // 			url: config.shopBaseUrl + '/web/index.php?_mall_id=2&r=api/passport/login',
  // 			method: 'POST',
  // 			header: {
  // 				'content-type': 'application/x-www-form-urlencoded',
  // 			},
  // 			dataType: 'FromData',
  // 			data: {
  // 				mobile: userInfo.userInfo.phone,
  // 				password: (new Date()).valueOf().toString()
  // 			},
  // 			success: (res => {
  // 				console.log(res)
  // 				if(res.statusCode == 200) {
  // 					const data = JSON.parse(res.data)
  // 					if(Object.keys(data).length > 0) {
  // 						if(data.code == 0) {
  // 							if(url.indexOf('?') != -1) {
  // 								this.url = url + '&_mall_id=2' + '&access_token=' + data.data.access_token + '&minpro_openid=' + userInfo.userInfo.openId + '&v' + new Date().getTime()
  // 							} else {
  // 								this.url = url + '?_mall_id=2' + '&access_token=' + data.data.access_token + '&minpro_openid=' + userInfo.userInfo.openId + '&v' + new Date().getTime()
  // 							}
  // 							console.log('跳转回商城的url')
  // 							console.log(this.url)
  // 						} else {
  // 							uni.showToast({
  // 								icon: 'none',
  // 								title: res.data.errMsg || '登录商城失败',
  // 								duration: 1000,
  // 								mask: true
  // 							})
  // 						}
  // 					} else {
  // 						uni.showToast({
  // 							icon: 'none',
  // 							title: '登录商城token失败',
  // 							duration: 1000,
  // 							mask: true
  // 						})
  // 					}
  // 				} else {
  // 					uni.showToast({
  // 						icon: 'none',
  // 						title: res.data.msg || '登录商城失败',
  // 						duration: 1000,
  // 						mask: true
  // 					})
  // 				}
  // 			}),
  // 			fail: (err => {
  // 				console.log(err)
  // 				uni.showToast({
  // 					icon: 'none',
  // 					title: err.errMsg,
  // 					duration: 1000,
  // 					mask: true
  // 				})
  // 			})
  // 		})
  // 	}
  // },
  // beforeDestroy() {
  // 	if(this.url.indexOf('evaluate') != -1) {
  // 		uni.$emit('back',{})
  // 	} else if(this.url.indexOf('cusform') != -1) {
  // 		uni.$emit('questionnaireBack',{})
  // 	}
  // },
  // methods: {
  // 	onShareAppMessage(res) { // 新闻公告详情分享
  // 		if(this.url.indexOf('information') != -1) {
  // 			if (res.from === 'menu') {
  // 				return {
  // 					title: this.newNoticeObj.newsTitle,
  // 					imageUrl: this.newNoticeObj.pictureCover,
  // 					path: '/pages/common/webView?from=h5' + '&url=' + encodeURIComponent(this.newNoticeUrl)
  // 				}
  // 			}
  // 		} else if(this.url.indexOf('ser.hbzhsq.cn') != -1) { // 商城分享
  // 			console.log('小程序商城商品分享')
  // 			console.log(res)
  // 			if(res.from == 'menu'){
  // 				if(Object.keys(this.mallShareDetail).length > 0){
  // 					return {
  // 						title: this.mallShareDetail.title,
  // 						imageUrl: this.mallShareDetail.icon,
  // 						path: '/pages/mall/onLine/stop?from=mallShare' + '&url=' + encodeURIComponent(this.mallShareDetail.url)
  // 					}
  // 				} else {
  // 					return {
  // 						title: '',
  // 						imageUrl: '',
  // 						path: '/pages/mall/onLine/stop?from=mallShare' + '&url=' + encodeURIComponent(res.webViewUrl)
  // 					}
  // 				}
  // 			} else {
  // 				return {
  // 					title: this.mallShareDetail.title,
  // 					imageUrl: this.mallShareDetail.icon,
  // 					path: '/pages/mall/onLine/stop?from=mallShare' + '&url=' + encodeURIComponent(this.mallShareDetail.url)
  // 				}
  // 			}
  // 		}
  // 	},
  // 	mallShare(e) {
  // 		console.log('分享时获取商城传过来的信息webview')
  // 		console.log(e)
  // 		if(e.target.data.length > 0) {
  // 			const data = e.target.data[0]
  // 			if(data.from == 'xcxMallShare'){ // 小程序商城分享
  // 				this.mallShareDetail = {...data}
  // 			}
  // 		} else {
  // 			uni.showToast({
  // 				icon: 'none',
  // 				title: '获取商城分享参数失败',
  // 				duration: 2000,
  // 				mask: true
  // 			})
  // 		}
  // 	}
  // }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ })

},[[66,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/common/webView.js.map