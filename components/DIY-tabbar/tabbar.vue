<template name='tabbar'>
	<view class='tabbar'>
		<navigator url="/pages/home-page/home_page" open-type="navigate" class='left1 box'>
			<image src='../../static/1.jpg' class='img'></image>
			<view>首页</view>
		</navigator>
		<navigator url="/pages/info/info" open-type="navigate" class='left2 box'>
			<image src='../../static/2.jpg' class='img'></image>
			<view>资讯</view>
		</navigator>
		<navigator url="/pages/settled/settledinfo" open-type="navigate" class='changable box' v-show='isVisitor'>
			<image src='../../static/3.jpg' class='img'></image>
			<view>申请入驻</view>
		</navigator>
		<navigator url="/pages/personal/firstPage" open-type="navigate" class='right box'>
			<image src='../../static/4.jpg' class='img'></image>
			<view>个人中心</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		name: 'tabbar',
		props: {
			isVisitor: {
				type: Boolean,
				value: true
			}
		}
	}
</script>

<style lang='less' scoped>
	.tabbar {
		display: flex;
		height: 110rpx;
		width:100%;
		position: fixed;
		bottom:0;
		background-color: #FFFFFF;
		.box {
			padding:20rpx;
			min-width: 180rpx;
			flex-grow: 1;
			text-align: center;
			background-color: #eee;
			box-sizing: border-box;
			font-size: 26rpx;
			.img {
				width:40rpx;
				height:40rpx;
			}
		}
	}
</style>
