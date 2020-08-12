<template>
	<view id='loginBox'>
		<image class='logo' src='../../static/logo.png'></image>
		<button class='agencyBtn btn' @click='toAgency'>合作机构</button>
		<button class='visitor btn'>普通用户</button>
	</view>
</template>

<script>
	export default {
		data () {
			return {
			}
		},
		methods: {
			toAgency(e) {
				console.log(e)
				// var newsid = e.currentTarget.dataset.newsid
				uni.navigateTo({
					url: './agency',
					success: res => {},
					fail: () => {},
					complete: () => {}
				})
			}
		}
	}
</script>

<style lang='less' scoped>
	#loginBox {
		.logo {
			display: block;
			height: 200rpx;
			width: 200rpx;
			margin: 200rpx auto;
			border-radius: 50%;
		}
		.btn {
			width:600rpx;
			line-height: 130rpx;
			height:130rpx;
		}
		.agencyBtn {
			margin-bottom: 50rpx;
		}
	}
</style>
