<template>
	<view>
		<!-- @message="mallShare" -->
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	import homeService from '@/api/homeService.js'
	import config from '@/utils/config.js'
	export default {
		data() {
			return {
				url: ''
			};
		},
		onLoad(option) {
			let detail = JSON.parse(option.params)
			let url = detail.url
			const Authorization = uni.getStorageSync('Authorization')
			if(url.indexOf('?') != -1) {
				this.url = url + '&Authorization=' + Authorization + new Date().getTime()
			} else {
				this.url = url + '?Authorization=' + Authorization + new Date().getTime()
			}
		},
		// onLoad(option) {
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
	}
</script>

<style lang="scss">

</style>
