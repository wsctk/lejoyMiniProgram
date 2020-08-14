<template>
	<view>
		<view class='navBack'>
			<navigator url="./chooseClassroom" open-type="navigate" hover-class="other-navigator-hover">
				<uni-icons type="arrowleft" size="24" class="navBackIcon"></uni-icons>
			</navigator>
		</view>
		<image :src='titleImage' class='titleImage'></image>
		<view class='imageInfo'>
			<view class='left'>PHP会议室(12人)</view>
			<view class='right'><text class='money'>￥40</text><text class='sliant'>/</text>0.5小时</view>
		</view>
		<view id='tabs'>
			<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="text" active-color="#0f0f0f"></uni-segmented-control>
			<view class="content">
				<view v-if="current === 0">
					<view class='timeList'>
						<view class='someTime' v-for='time in timeList1'>{{time}}</view>
					</view>
				</view>
				<view v-if="current === 1">
					123
				</view>
				<view v-if="current === 2">
					<uni-calendar 
						:insert="true"
						:lunar="true"
						:start-date="'2019-3-2'"
						:end-date="'2019-5-20'"
						@change="change"
					/>
				</view>
			</view>
		</view>
		<view id='payBar'>
			<view class='left'>应付：<text class='amount'>￥{{amount}}</text></view>
			<view class='right' @click="toNextPage">下一步</view>
		</view>
	</view>
</template>

<script>
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	export default {
		components: {uniSegmentedControl, uniIcons, uniCalendar},
		data() {
			return {
				items: ['今天','明天','选择日期'],
				current: 0,
				titleImage: 'https://img.yzcdn.cn/upload_files/2020/06/28/Fhxh7YuXOq2SfSGeKeqTgr2CULlG.jpg!large.webp',
				timeList1: ['07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30'],
				amount: '0.00'
			}
		},
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			},
			change () {},
			toNextPage () {
				uni.navigateTo({
					url: './addTrainAid',
					success: res => {},
					fail: () => {},
					complete: () => {}
				})
			}
		}
	}
</script>

<style lang='less' scoped>
	.navBack {
		height:102rpx;
		line-height: 102rpx;
		.navBackIcon {
			font-weight: 600;
			margin-left:36rpx;
		}
	}
	.titleImage {
		width:100%;
		height:340rpx;
		margin-bottom: 0;
		display: block;
	}
	.imageInfo {
		height:60rpx;
		background-color: #000;
		color:#fff;
		display: flex;
		justify-content: space-between;
		.left {
			padding-left: 30rpx;
		}
		.right {
			font-size: 24rpx;
			padding-right: 30rpx;
			.money {
				font-size: 36rpx;
				color:red;
			}
			.sliant {
				padding: 0 8rpx;
			}
		}
	}
	#tabs {
		padding: 0 20rpx;
		.timeList {
			.someTime {
				display: inline-block;
				text-align: center;
				margin-right:20rpx;
				line-height: 70rpx;
				width: 162.5rpx; height: 70rpx;
				border: 2rpx solid #000;
				box-sizing: border-box;
			}
		}
	}
	#payBar {
		display: flex;
		height:90rpx;
		border-top: 1px solid #ddd;
		width:100%;
		position: fixed;
		bottom:0;
		line-height: 90rpx;
		.left {
			width:60%;
			padding-left: 30rpx;
			font-size: 32rpx;
			.amount {
				color:#f00;
			}
		}
		.right {
			width:40%;
			background-color: #f00;
			text-align: center;
		}
	}
</style>
