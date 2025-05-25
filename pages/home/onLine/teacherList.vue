<template>
	<view>
		<uni-nav title="学员入口" :isLeft="true" />
		<view class="pages">
			<view class="main">
				<view class="grade_list">
					<view :class="item.isChecked ? 'block block_active' : 'block'" v-for="item in gradeList" :key="item.gradeCode" @click="gradeChange(item)">
						<image :src="item.icon" mode="scaleToFill" class="icon_img"></image>
						<view class="name">{{ item.gradeName }}</view>
					</view>
				</view>
				<view class="subject_list">
					<view :class="item.isChecked ? 'block block_active' : 'block'" v-for="item in subjectList" :key="item.subjectCode" @click="subjectChange(item)">
						<image :src="item.subjectIcon" mode="scaleToFill" class="icon_img"></image>
						<view class="name">{{ item.subjectName }}</view>
					</view>
				</view>
				<view class="teacher_list">
					<view class="title">资深教师</view>
					<view v-if="teacherList.length > 0" class="content">
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
	</view>
</template>

<script>
	import homeService from '@/api/homeService.js';
	export default {
		data() {
			return {
				gradeList: [],
				gradeListStandby: [],
				subjectList: [],
				gradeCode: 2,
				subjectCode: '',
				teacherList: [],
				params: {
					limit: 9999, 
					page: 1,
					gradeCode: ''
				}
			};
		},
		onLoad() {
			this.getGradeList()
		},
		methods: {
			getGradeList() { // 获取年级
				homeService.getListGradeInfo({}, res => {
					let gradeList = res.data
					this.gradeListStandby = res.data
					gradeList.forEach(item => {
						item.isChecked = false
					})
					this.gradeList = gradeList
					this.getSubjectList()
					this.getTeacherList()
				}, err => {
					console.log(err)
				})
			},
			getSubjectList() { // 获取科目
				homeService.getGradeSubject({gradeCode: this.gradeCode}, res => {
					let subjectList = res.data
					subjectList.forEach(item => {
						item.isChecked = false
					})
					this.subjectList = subjectList
				}, err => {
					console.log(err)
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
			gradeChange(jtem) { // 年级改变
				this.gradeCode = jtem.gradeCode
				this.params.gradeCode = jtem.gradeCode
				this.gradeList.forEach(item => {
					item.isChecked = false
				})
				jtem.isChecked = !jtem.isChecked
				this.getSubjectList()
				this.getTeacherList()
				let isOk = this.subjectList.some(item => { return item.isChecked })
				if(isOk) { // 选择科目后就跳转对应的讲师页面
					let params = {
						gradeCode: this.gradeCode,
						subjectCode: this.subjectCode
					}
					uni.navigateTo({
						url: '/pages/home/onLine/teacherStarList?params=' + JSON.stringify(params)
					})
				}
			},
			subjectChange(jtem) { // 科目改变
				const _this = this
				let isOk = this.gradeList.some(item => { return item.isChecked })
				if(isOk) { // 选择年级后就跳转对应的讲师页面
					let params = {
						gradeCode: this.gradeCode,
						subjectCode: this.subjectCode
					}
					uni.navigateTo({
						url: '/pages/home/onLine/teacherStarList?params=' + JSON.stringify(params)
					})
				} else {
					uni.showToast({
						icon: 'none',
						title: '请先选择年级',
						duration: 1000,
						mask: true
					})
				}
				// _this.subjectCode = jtem.subjectCode
				// _this.subjectList.forEach(item => {
				// 	item.isChecked = false
				// 	if(item.subjectCode == jtem.subjectCode) {
				// 		item.isChecked = !item.isChecked
				// 	}
				// })
				// let isOk = this.gradeList.some(item => { return item.isChecked })
				// if(isOk) { // 选择年级后就跳转对应的讲师页面
				// 	let params = {
				// 		gradeCode: this.gradeCode,
				// 		subjectCode: this.subjectCode
				// 	}
				// 	uni.navigateTo({
				// 		url: '/pages/home/onLine/teacherStarList?params=' + JSON.stringify(params)
				// 	})
				// }
				// if(['4', '5', '6', '7', '8', '9'].includes(jtem.subjectCode)){
				// 	_this.gradeList = _this.gradeListStandby.filter(item => { return item.gradeCode != 1 })
				// } else {
				// 	_this.gradeList = _this.gradeListStandby
				// }
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
			padding: 0 0 20rpx 0;
			.grade_list{
				display: flex;
				justify-content: space-around;
				padding: 16rpx 0;
				border-radius: 16rpx 16rpx 0 0;
				background: #FFFFFF;
				margin: 20rpx 0;
				.block{
					width: 33.33%;
					text-align: center;
					padding: 14rpx 0;
					.icon_img{
						width: 76rpx;
						height: 76rpx;
						border-radius: 20rpx;
					}
					.name{
						color: #333333;
						font-size: 36rpx;
						padding-top: 8rpx;
					}
				}
				.block_active{
					background: #65d979;
					border-radius: 10rpx;
				}
			}
			.subject_list{
				display: flex;
				flex-wrap: wrap;
				padding: 16rpx 0;
				border-radius: 16rpx 16rpx 0 0;
				background: #FFFFFF;
				margin: 20rpx 0;
				.block{
					width: 25%;
					text-align: center;
					padding: 14rpx 0;
					.icon_img{
						width: 76rpx;
						height: 76rpx;
						border-radius: 20rpx;
					}
					.name{
						color: #333333;
						font-size: 36rpx;
						padding-top: 8rpx;
					}
				}
				.block_active{
					background: #65d979;
					border-radius: 10rpx;
				}
			}
			.teacher_list{
				.title{
					color: #FFFFFF;
					padding: 24rpx;
					background: #81a362;
					font-size: 40rpx;
				}
				.content{
					.teacher{
						padding: 30rpx 20rpx 0rpx 20rpx;
						border-bottom: 6rpx solid #eee;
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
	}
</style>
