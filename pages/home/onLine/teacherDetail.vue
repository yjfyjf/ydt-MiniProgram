<template>
	<view>
		<uni-nav title="教师详情" :isLeft="true" />
		<view class="pages">
			<view class="order">
				<image :src="detail.wechatImgLink" mode="aspectFill" class="avatar_img_big"></image>
				<view class="order_block">
					<view class="order_header">
						<view class="avatar">
							<image :src="detail.wechatImgLink" mode="scaleToFill" class="avatar_img"></image>
						</view>
						<view class="avatar_name">{{ detail.teacherName || '六子先生' }}</view>
					</view>
					<view class="order_msg">
						<view class="line">
							<view class="title">年级:</view>
							<view class="text" v-for="(item,index) in detail.teacherSubjectList" :key="index">{{ item.gradeName }}</view>
						</view>
						<view class="line">
							<view class="title">擅长科目:</view>
							<view class="text" v-for="(item,index) in detail.teacherSubjectList" :key="index">{{ item.subjectName }}</view>
						</view>
						<view class="line">
							<view class="title">补充学科:</view>
							<view class="text">{{ detail.otherSubject }}</view>
						</view>
						<view class="line">
							<view class="title">星级:</view>
							<view class="text">{{ detail.starLevel }}</view>
						</view>
						<view class="line">
							<view class="title">接受时新:</view>
							<view class="text">{{ detail.expectedHourWage }}</view>
						</view>
						<view class="line">
							<view class="title">就读学校:</view>
							<view class="text">{{ detail.school }}</view>
						</view>
						<view class="line">
							<view class="title">居住地址:</view>
							<view class="text">{{ detail.address }}</view>
						</view>
						<view class="line">
							<view class="title">教员风采:</view>
							<view class="text">{{ detail.introduction }}</view>
						</view>
						<view class="line">
							<view class="title">微信:</view>
							<view class="text">{{ detail.wxAccount }}</view>
						</view>
					</view>
				</view>
				<view @click="callPhone" class="btn">一键拨号</view>
			</view>
		</view>
	</view>
</template>

<script>
	import homeService from '@/api/homeService.js';
	export default {
		data() {
			return {
				detail: {}
			};
		},
		onLoad(option) {
			this.getTeacherInfoDetail(option.id)
		},
		methods: {
			getTeacherInfoDetail(id) { // 教师详情
				homeService.getTeacherInfoDetail({teacherId: id}, res => {
					console.log(res, 'res')
					if(res.code == 0) {
						this.detail = res.data || {}
					}
				})
			},
			callPhone() { // 拨打电话
				uni.makePhoneCall({
					phoneNumber: this.detail.phone
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pages{
		background: #f3f3f3;
		width: 100%;
		height: 100%;
		.order{
			padding: 10rpx 0 0 0;
			.avatar_img_big{
				width: 100%;
				height: 400rpx;
			}
			.order_block{
				padding: 20rpx 40rpx 200rpx 40rpx;
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
						padding: 24rpx 0;
						color: #333333;
						border-bottom: 3rpx solid #eee;
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
			.btn{
				width: 100%;
				text-align: center;
				font-size: 32rpx;
				padding: 24rpx 0;
				background: #88a169;
				color: #FFFFFF;
				position: fixed;
				bottom: 0;
				left: 0;
				right: 0;
			}
		}
	}
</style>
