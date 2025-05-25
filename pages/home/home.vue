<template>
	<view>
		<uni-nav title="一点通" />
		<!-- <uni-nav-bar height="160rpx" backgroundColor="#88a169" class="header" color="#fff" dark shadow left-icon="left" title="一点通" /> -->
		<view class="pages">
			<!-- 功能区 -->
			<view class="func_list">
				<!-- 主功能区 -->
				<view class="func_main">
					<view class="func_box" v-for="(item, index) in mainFunc" :key="index" @click="funcDeal(item)">
						<image :src="item.subjectIcon" mode="scaleToFill" class="func_img"></image>
						<view class="func_name">{{ item.subjectName }}</view>
					</view>
				</view>
				<!-- banner -->
				<view class="banner">
					<view class="banner_box" v-for="(item, index) in bannerFunc" :key="index" @click="bannerDeal(item)">
						<view v-if="item.isShow" class="banner_detail">
							<view class="left">
								<image :src="item.icon || '/static/about.png'" mode="scaleToFill" class="func_img"></image>
								<view class="text">{{ item.name }}</view>
							</view>
							<view class="banner_name">{{ item.label }}</view>
						</view>
					</view>
				</view>
				<!-- 底部功能及信息公示区 -->
				<view class="message">
					<!-- 底部功能 -->
					<view class="title_box">
						<view class="left_box" v-for="(item, index) in seconFunc" :key="item.value" @click="handerTab(item)">
							<view :class="item.isActive ? 'title' : 'title_no' ">{{ item.label }}</view>
						</view>
					</view>
					<!-- 资讯区 -->
					<view class="infor_box">
						<view v-if="newList.length > 0" class="infor" v-for="(item, index) in newList" :key="index" @click="newDetail(item)">
							<!-- 教师 -->
							<view v-if="tabValue == 1" class="teacher">
								<view class="msg_box">
									<image :src="item.wechatImgLink" mode="scaleToFill" class="mes_img"></image>
									<view class="address">
										<view class="address_title">{{ item.teacherName + '老师' }}</view>
										<view class="address_text">{{ item.address }}</view>
									</view>
								</view>
								<view class="msg_img_box">
									<view class="text">{{ item.introduction }}</view>
								</view>
							</view>
							<!-- 订单 -->
							<view v-if="tabValue == 2" class="order">
								<view class="order_block">
									<view class="order_header">
										<view class="avatar">
											<image src="/static/user_no.png" mode="scaleToFill" class="avatar_img"></image>
										</view>
										<view class="avatar_name">{{ item.customerName || '六子先生' }}</view>
									</view>
									<view class="order_msg">
										<view class="line">
											<view class="title">年级:</view>
											<view class="text">{{ item.grade }}</view>
										</view>
										<view class="line">
											<view class="title">性别:</view>
											<view class="text">{{ sexAnalyze(item.sex) }}</view>
										</view>
										<view class="line">
											<view class="title">地址:</view>
											<view class="text">{{ item.address }}</view>
										</view>
										<view class="line">
											<view class="title">时间:</view>
											<view class="text">{{ item.timeStr }}</view>
										</view>
										<view class="line">
											<view class="title">教员性别:</view>
											<view class="text">{{ sexAnalyze(item.teacherSex) }}</view>
										</view>
										<view class="line">
											<view class="title">其他补充:</view>
											<view class="text">{{ item.otherInfo }}</view>
										</view>
									</view>
								</view>
							</view>
						</view>
						<view v-if="newList.length == 0" class="empty">
							<image src="/static/empty.png" mode="aspectFit" class="empty_img"></image>
							<view class="text">暂无信息</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import homeService from '@/api/homeService.js';
	export default {
		data() {
			return {
				mainFunc: [],
				bannerFunc: [],
				seconFunc: [
					{
						value: '1',
						label: '教师风采',
						isActive: true
					},
					{
						value: '2',
						label: '家教订单',
						isActive: false
					}
				],
				tabValue: '1',
				newList: [],
				userInfo: {},
				first: false,
				/**
				 * 此变量作用
				 * 当进入小程序的时候 会触发下拉加载事件和onShow钩子 其执行的代码是一致的
				 * 为了优化性能 当触发下拉的时候就不走onShow里面相同的执行事件 
				 * onShow是为了防止在其他页面触发接口更改数据后回来首页没获取最新数据而设（例如房屋列表页切换房屋后回退）
				 */
			};
		},
		onShow() {
			console.log('onShow')
			this.userInfo = uni.getStorageSync('userInfo') || {} // 用于实时获取最新状态
		},
		onLoad() {
			this.first = true
			this.login()
			console.log('onLoad')
		},
		methods: {
			onShareAppMessage(res) { // 分享小程序
				return {
					title: '一点通',
					imageUrl: '/static/logo.png'
				}
			},
			login() {
				let params = {
					username: 'xcxAdmin',
					password: 'xcxAdmin'
				}
				homeService.login(params, res => {
					if (res.code == 0) {
						console.log(res)
						this.first = false
						this.getMenuList()
						this.getBanner()
					}
				})
			},
			getMenuList() { // 获取功能列表
				homeService.getGradeSubject({
					gradeCode: 2
				}, res => {
					this.mainFunc = res.data
					this.getTeacherList()
					uni.hideLoading()
				}, err => {
					console.log(err)
					uni.showToast({
						icon: 'none',
						title: err.message,
						duration: 1000,
						mask: true
					})
				})
			},
			getTeacherList() { // 获取教师
				homeService.getTeacherList({limit: 9999, page: 1}, res => {
					this.newList = res.data.list
				}, err => {
					console.log(err)
				})
			},
			getBanner() { // 获取banner
				homeService.getBanner('', res => {
					console.log(res, 'res');
					this.bannerFunc = res.data || []
				}, err => {
					console.log(err)
				})
			},
			funcDeal(item) { // 功能事件
				let params = {
					gradeCode: '',
					subjectCode: item.subjectCode
				}
				uni.navigateTo({
					url: '/pages/home/onLine/teacherStarList?params=' + JSON.stringify(params)
				})
			},
			bannerDeal(item) { // bananer事件
				if(item.value == 1) { // 学生
					uni.navigateTo({
						url: '/pages/home/onLine/teacherList'
					})
				} else if(item.value == 2) { // 教师
					// let params = {
					// 	url: item.h5url
					// }
					// uni.navigateTo({
					// 	url: '/pages/common/webView?params=' + JSON.stringify(params)
					// })
					uni.navigateTo({
						url: '/pages/home/onLine/setTeacher'
					})
				}
			},
			newDetail(item) { // 老师详情
				if(this.tabValue == 1) {
					uni.navigateTo({
						url: '/pages/home/onLine/teacherDetail?id=' + item.id
					})
				}
			},
			handerTab(data) { // 底部功能区切换
				this.tabValue = data.value
				this.seconFunc.length > 0 && this.seconFunc.forEach(item => {
					if (item.value == data.value) {
						item.isActive = true
					} else {
						item.isActive = false
					}
				})
				if(data.value == 1) { // 教师
					this.getTeacherList()
				} else if(data.value == 2) { // 订单
					this.getOrderList()
				}
			},
			getOrderList() { // 获取订单
				homeService.getOrderList({limit: 9999, page: 1}, res => {
					this.newList = res.data.list
				}, err => {
					console.log(err)
				})
			},
			sexAnalyze(val) { // 解析性别
				let str = ''
				if(val == 0) {
					str = '未知'
				} else if(val == 1){
					str = '男'
				} else if(val == 2){
					str = '女'
				}
				return str
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pages {
		width: 100%;
		background: #f3f3f3;
		.func_list {
			// 功能区
			.func_main {
				// 主功能区
				display: flex;
				flex-wrap: wrap;
				padding: 48rpx 0 16rpx 0;
				border-radius: 16rpx 16rpx 0 0;
				background: #FFFFFF;
				min-height: 352rpx;

				.func_box {
					width: 25%;
					text-align: center;
					padding-bottom: 28rpx;
					.func_img {
						width: 76rpx;
						height: 76rpx;
						border-radius: 20rpx;
					}

					.func_name {
						color: #333333;
						font-size: 36rpx;
						padding-top: 8rpx;
					}
				}
			}

			.banner {
				height: 100%;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				padding: 16rpx 40rpx;
				background: #FFFFFF;
				margin: 0 0 24rpx 0;
				border-top: 10rpx solid #88a169;
				.banner_box {
					width: 42%;
					padding: 0 20rpx;
					margin: 0 10rpx 8rpx 0;
					background: #fafafa;
					border-radius: 16rpx;
					display: flex;
					justify-content: space-between;
					box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.3);
					&:first-child{
						.banner_name{
							color: #81a362;
						}
					}
					&:last-child{
						margin-right: 0;
						.banner_name{
							color: #eea24e;
						}
					}
					.banner_detail{
						.left{
							padding: 12rpx 12rpx 12rpx 0;
							.func_img{
								width: 110rpx;
								height: 110rpx;
								border-radius: 50%;
							}
							.text{
								font-size: 24rpx;
								color: #CCCCCC;
							}
						}
						.banner_name{
							font-size: 32rpx;
							padding: 20rpx 0 0 0;
						}
					}
				}
			}
			.message {
				// 底部功能及信息公示区
				background: #FFFFFF;
				.title_box {
					// 底部功能
					display: flex;
					border-bottom: 24rpx solid #eeeeee;
					.left_box {
						margin: auto 0;
						width: 50%;
						padding: 0 40rpx;
						text-align: center;
						.title {
							color: #FFFFFF;
							font-weight: bold;
							font-size: 36rpx;
							background: #81a362;
							padding: 18rpx 0;
							border-radius: 8rpx;
						}
						.title_no {
							color: #666666;
							font-size: 36rpx;
							padding: 18rpx 0;
							background: #FFFFFF;
						}
					}
				}

				.infor_box {
					// 资讯区
					width: 100%;
					min-height: 228rpx;
					.infor {
						padding: 28rpx 40rpx;
						border-bottom: 10rpx solid #eeeeee;
						&:first-child {
						}
						.teacher{
							.msg_box {
								display: flex;
								.mes_img {
									width: 180rpx;
									height: 180rpx;
									border-radius: 20rpx;
								}
								.address {
									font-size: 32rpx;
									color: #333333;
									overflow: hidden;
									text-overflow: ellipsis;
									display: -webkit-box;
									-webkit-box-orient: vertical;
									-webkit-line-clamp: 2;
									padding: 0 0 0 40rpx;
									.address_title{
										
									}
									.address_text {
										font-size: 24rpx;
										color: #999999;
										padding-top: 12rpx;
									}
								}
							}
							.msg_img_box {
								.text{
									font-size: 32rpx;
									color: #999999;
									padding: 20rpx 0;
								}
							}
						}
						.order{
							.order_block{
								background: #FFFFFF;
								.order_header{
									display: flex;
									.avatar{
										.avatar_img{
											width: 120rpx;
											height: 120rpx;
											border-radius: 50%;
										}
									}
									.avatar_name{
										font-size: 32rpx;
										color: #75a2d3;
										padding: 20rpx 0 0 32rpx;
									}
								}
								.order_msg{
									.line{
										display: flex;
										font-size: 32rpx;
										padding: 20rpx;
										color: #333333;
										border-bottom: 3rpx solid #eeeeee;
										&:last-child{
											border-bottom: none;
										}
										.title{
											padding: 0 12rpx 0 0;
										}
										.text{
											
										}
									}
								}
							}
						}
					}

					.empty {
						width: 100%;
						text-align: center;
						padding: 114rpx 0;

						.empty_img {
							width: 110rpx;
							height: 72rpx;
						}

						.text {
							font-size: 24rpx;
							color: #CCCCCC;
							padding-top: 14rpx;
						}
					}
				}
			}
		}
	}
</style>