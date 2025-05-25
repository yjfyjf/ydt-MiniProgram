<template>
	<view class="pages">
		<uni-nav title="教师" :isLeft="true" />
		<image class="img" mode="scaleToFill" :src="url"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: ''
			};
		},
		onLoad(option) {
			let detail = JSON.parse(option.params)
			this.url = detail.url
		}
	}
</script>

<style lang="scss" scoped>
	.pages{
		width: 100%;
		height: 100%;
		.img{
			width: 100%;
			height: 100%;
		}
	}
</style>
