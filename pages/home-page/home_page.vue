<template>
	<view>
		<view id='topbar'>
			<view class='location' v-if='canigetlocationlist'>{{addressName}}</view>
			<view class='location' v-else>
				<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="uni-input">{{array[index]}}</view>
				</picker>
			</view>
			<input type="text" v-model="search" placeholder="搜索" class='search'></input>
		</view>
		<view style="padding-bottom: 10px;" id='swiper'>
			<swiper :circular="true" class="swiper" :indicator-dots="indicatorDots" indicator-active-color='yellow' indicator-color='#aaa' :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item  v-for='item in swiperList' :key='item.id'>
					<view>
						<image :src="item.src"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view id='btnLine'>
			<navigator url="./classroomReserve/chooseClassroom" hover-class="none" open-type="navigate" class='navBtn'>
				<button type='primary'>教室预定</button>
			</navigator>
			<navigator url="./chainCourse/addNewCourse" open-type="navigate"  class='navBtn' hover-class="none">
				<button type='primary'>课程报名</button>
			</navigator>
			<navigator url="./classManage/classList" open-type="navigate" class='navBtn' hover-class="none">
				<button type='primary' >班级管理</button>
			</navigator>
			<navigator url="./contact/contactPdf" open-type="navigate" class='navBtn' hover-class="none">
				<button type='primary' >机构签约</button>
			</navigator>
			<navigator url="./Service/adService/adService" hover-class="none" open-type="navigate" class='navBtn'>
				<button type='primary'>广告服务</button>
			</navigator>
			<navigator url="./Service/billService/billList" open-type="navigate" class='navBtn' hover-class="none">
				<button type='primary'>记账服务</button>
			</navigator>
			<navigator url="./Service/lawyerService/lawyerIntroduce" open-type="navigate" class='navBtn' hover-class="none">
				<button type='primary'>律师服务</button>
			</navigator>
			<navigator url="./Service/InternetService/InternetIntroduce" open-type="navigate" class='navBtn' hover-class="none">
				<button type='primary'>网络服务</button>
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
		<tabbar :isVisitor='isVisitor'></tabbar>
	</view>
</template>

<script>
	import amap from '../../common/amap-wx.js'
	import tabbar from 'common/tabbar.vue'
	export default {
		data() {
			return {
				isVisitor: true,
				amapPlugin: null,  
				key: 'd63559894e0fb072ce3576d25057c9dc',
				canigetlocationlist: false,
				addressName: '',
				array: ['中国', '美国', '巴西', '日本'],
				index: 0,
				search: '',
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
		components: {tabbar},
		onLoad() { 
			this.amapPlugin = new amap.AMapWX({  
				key: this.key  
			})
			this.getRegeo()
		},
		methods: {
			getRegeo () {
				uni.showLoading({  
					title: '获取信息中'  
				})
				this.amapPlugin.getRegeo({  
					success: (data) => {  
						console.log(data)
						this.addressName = data[0].regeocodeData.addressComponent.province
						uni.hideLoading()
					}  
				})
			},
			bindPickerChange: function(e) {
				this.index = e.target.value
			},
		}
	}
</script>

<style lang='less' scoped>
	#topbar {
		z-index: 10;
		background-color: #FFFFFF;
		position: fixed;
		top: 0;
		display: flex;
		margin-bottom: 20rpx;
		border-top: 1px solid #aaa;
		border-bottom: 1px solid #aaa;
		width:100%;
		height: 70rpx;
		.location {
			width:30%;
		}
		.search {
		}
	}
	#swiper {
		margin-top:70rpx;
		swiper {
			height:400rpx;
			width:100%;
		}
		swiper swiper-item image {
			width:100%;
			height:400rpx;
		}
	}
	#btnLine {
		padding: 8rpx 0;
		width:100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.navBtn {
			padding: 10rpx 6rpx;
			box-sizing: border-box;
			width:25%;
			button {
				font-size: 28rpx;
				height: 70rpx;
			}
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
