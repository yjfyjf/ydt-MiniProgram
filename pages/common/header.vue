<template>
	<view>
		<uni-nav-bar leftIcon="left" color="#fff" backgroundColor="#88a169" dark shadow class="header">
			<template class="left" v-if="isLeft" v-slot:left>
				<view @click="clickLeft" class="left_img_box">
					<image src="/static/left_gray.png" mode="scaleToFill" class="left_img"></image>
				</view>
			</template>
			<view>{{ title }}</view>
			<template class="right" v-if="isRight" v-slot:right>
				<view></view>
			</template>
		</uni-nav-bar>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			isLeft: {
				type: Boolean,
				default: false
			},
			isRight: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			clickLeft() {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header{
		display: flex;
		position: fixed;
		top: 0;
		z-index: 999;
		.left_img_box{
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 6px 6px 6px 12px;
			.left_img{
				width: 26rpx;
				height: 36rpx;
				margin: auto 0;
			}
		}
	}
</style>
