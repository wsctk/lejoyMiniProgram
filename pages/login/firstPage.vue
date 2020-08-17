<template>
	<view id='loginBox'>
		<image class='logo' src='../../static/logo.png'></image>
		<navigator url="./agency" open-type="navigate" hover-class="none">
			<button class='agencyBtn btn'>合作机构</button>
		</navigator>
		<navigator url="./visitor" open-type="navigate" hover-class="none">
			<button class='visitor btn'>普通用户</button>
		</navigator>
	</view>
</template>

<script>
	export default {
		data () {
			return {
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
