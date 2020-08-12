<template>
	<view>
		<view style="padding-bottom: 10px;">
			<swiper :circular="true" class="swiper" :indicator-dots="indicatorDots" indicator-active-color='yellow' indicator-color='#aaa' :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item  v-for='item in swiperList' :key='item.id'>
					<view>
						<image :src="item.src"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view id='btnLine'>
			<navigator url="../classroomReserve/chooseClassroom" open-type="navigate" hover-class="other-navigator-hover">
				<button type='primary' size='small' class='navBtn'>教室预定</button>
			</navigator>
			<navigator url="#" open-type="navigate" hover-class="other-navigator-hover">
				<button type='primary' size='small' class='navBtn'>记账服务</button>
			</navigator>
			<navigator url="#" open-type="navigate" hover-class="other-navigator-hover">
				<button type='primary' size='small' class='navBtn'>律师服务</button>
			</navigator>
			<navigator url="#" open-type="navigate" hover-class="other-navigator-hover">
				<button type='primary' size='small' class='navBtn'>签约入驻</button>
			</navigator>
		</view>
		<view id='infoBox'>
			<text class='infoTitle'>精彩资讯</text>
			<view class='infoDetails'>
				<view class='info' v-for='item in infoList' :key='item.id'>
					<image :src='item.src' class='infoImage'></image>
					<view class='infoRight'>
						<view class='infoRightTitle'>{{item.title}}</view>
						<view class='infoTime'>{{item.time}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: [
					{ id:1, name:1, src:'https://img.yzcdn.cn/upload_files/2020/06/28/Fhxh7YuXOq2SfSGeKeqTgr2CULlG.jpg!large.webp' },
					{ id:2, name:2, src:'https://img.yzcdn.cn/upload_files/2020/06/28/Fhxh7YuXOq2SfSGeKeqTgr2CULlG.jpg!large.webp' },
					{ id:3, name:3, src:'https://img.yzcdn.cn/upload_files/2020/06/28/Fhxh7YuXOq2SfSGeKeqTgr2CULlG.jpg!large.webp' }
				],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				infoList: [
					{ id:1, title:'这是一条资讯的标题这是一条资讯的标题', time:'08月07日', src: 'https://img.yzcdn.cn/upload_files/2020/06/28/Fhxh7YuXOq2SfSGeKeqTgr2CULlG.jpg!large.webp'},
					{ id:2, title:'这是一条资讯的标题这是一条资讯的标题', time:'08月07日', src: 'https://img.yzcdn.cn/upload_files/2020/06/28/Fhxh7YuXOq2SfSGeKeqTgr2CULlG.jpg!large.webp'},
					{ id:3, title:'这是一条资讯的标题这是一条资讯的标题', time:'08月07日', src: 'https://img.yzcdn.cn/upload_files/2020/06/28/Fhxh7YuXOq2SfSGeKeqTgr2CULlG.jpg!large.webp'}
				]
			}
		},
		methods: {
		}
	}
</script>

<style lang='less' scoped>
	swiper {
		height:400rpx;
		width:100%;
	}
	swiper swiper-item image {
		width:100%;
		height:400rpx;
	}
	#btnLine {
		padding: 8rpx 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.navBtn {
			width:170rpx;
			height:100rpx;
			line-height: 100rpx;
			font-size:28rpx;
			background-color: #f00;
		}
	}
	#infoBox {
		height:300rpx;
		padding: 20rpx;
		.infoTitle {
			font-weight: bold;
			font-size: 32rpx;
		}
		.infoDetails {
			margin-top: 20rpx;
			.info {
				margin-bottom:15rpx;
				display:flex;
				align-items: center;
				.infoImage {
					height:180rpx;
					width:240rpx;
				}
				.infoRight {
					padding: 0 20rpx;
					width:300rpx;
					height:180rpx;
					display: flex;
					flex-direction: column;
					justify-content:space-around;
					.infoRightTitle {
						color:#2f2f2f;
						font-weight: 600;
					}
					.infoTime {
						font-size: 24rpx;
						color:#aaa;
					}
				}
			}
		}
	}
</style>
