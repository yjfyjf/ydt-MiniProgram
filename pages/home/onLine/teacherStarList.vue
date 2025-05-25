<template>
	<view>
		<uni-nav title="教师列表" :isLeft="true" />
		<view class="pages">
			<view class="main">
				<!-- <view class="tabs">
					<view :class="item.isChecked ? 'tab_active' : 'tab'" v-for="item in tabList" :key="item.value" @click="tabChange(item)">{{ item.label }}</view>
				</view> -->
				<view class="content" v-if="teacherList.length> 0">
					<view class="teacher" v-for="(item, index) in teacherList" :key="index" @click="teacherDetail(item)">
						<view class="msg_box">
							<image :src="item.wechatImgLink" mode="scaleToFill" class="msg_img"></image>
							<view class="address">
								<view class="address_title">{{ item.teacherName + '老师' }}</view>
								<view class="address_text">{{ item.address }}</view>
							</view>
						</view>
						<view class="msg_img_box">
							<view class="text">{{ item.introduction }}</view>
						</view>
					</view>
				</view>
				<view v-if="teacherList.length == 0" class="empty">
					<image src="/static/empty.png" mode="aspectFit" class="empty_img"></image>
					<view class="text">暂无信息</view>
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
				tabList: [
					{
						value: 1,
						label: '一星',
						isChecked: false
					},
					{
						value: 2,
						label: '二星',
						isChecked: false
					},
					{
						value: 3,
						label: '三星',
						isChecked: false
					},
					{
						value: 4,
						label: '四星',
						isChecked: false
					},
					{
						value: 5,
						label: '五星',
						isChecked: true
					}
				],
				teacherList: [],
				params: {
					limit: 9999,
					page: 1,
					gradeCode: '',
					subjectCode: '',
					starLevel: ''
				}
			};
		},
		onLoad(option) {
			let params = option && JSON.parse(option.params)
			this.params.gradeCode= params.gradeCode || ''
			this.params.subjectCode= params.subjectCode || ''
			this.getTeacherList()
		},
		methods: {
			tabChange(jtem) {
				this.params.starLevel = jtem.value
				this.getTeacherList()
				this.tabList.forEach(item => {
					item.isChecked = false
					if(item.value == jtem.value) {
						item.isChecked = true
					}
				})
			},
			getTeacherList() { // 获取教师
				homeService.getTeacherList(this.params, res => {
					console.log(res);
					this.teacherList = res.data.list
				}, err => {
					console.log(err)
				})
			},
			teacherDetail(item) { // 教师详情
				uni.navigateTo({
					url: '/pages/home/onLine/teacherDetail?id=' + item.id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pages{
		width: 100%;
		background: #fafafa;
		.main{
			.tabs{
				background: #ffffff;
				display: flex;
				padding: 20rpx;
				margin: 0 0 20rpx 0;
				font-size: 32rpx;
				.tab{
					width: 20%;
					color: #333333;
					padding: 20rpx 0;
					text-align: center;
					margin: auto 0;
					border-radius: 20rpx;
				}
				.tab_active{
					width: 20%;
					color: #ffffff;
					background: #81a362;
					padding: 20rpx 0;
					text-align: center;
					margin: auto 0;
					border-radius: 20rpx;
				}
			}
			.content{
				background: #fafafa;
				margin: 20rpx 0 0 0;
				.teacher{
					padding: 20rpx;
					background: #ffffff;
					margin: 0 0 20rpx 0;
					border-bottom: 3rpx solid #eee;
					.msg_box {
						display: flex;
						.msg_img {
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
</style>
