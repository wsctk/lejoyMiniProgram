<template>
	<view>
		<view id='title'>
			<view class='top'>
				<image class='top-image' src='https://img.yzcdn.cn/upload_files/2020/06/28/Fhxh7YuXOq2SfSGeKeqTgr2CULlG.jpg!large.webp'></image>
				<view class='rightBox'>
					<view class='name'>教室名称</view>
					<view class='number'>可容纳10人</view>
					<view class='aidType'>可提供相关教具</view>
				</view>
			</view>
			<view class='bottom'>您将预约A教室；请仔细核对教室提供设备，如有其它需要可选择下面设备仪器预约，如果可以满足则直接预约。</view>
		</view>
		<view id='trainingAidList'>
			<view class='title'>其它配套设备</view>
			<view class='aids' v-for='item in aidsList' :key='item.id'>
				<image class='aidImage' :src='item.src'></image>
				<view class='right'>
					<view class='titleLow'>{{item.name}}</view>
					<view class='size'>{{item.size}}</view>
					<view class='bottom'>
						<view class='price'><text class='dollarSymbol'>￥</text><text class='priceNow'>{{item.price}}</text><text class='oldPrice'>￥{{item.oldPrice}}</text></view>
						<view class='number'>
							<view class='minus' @click="minusNumber(item.id)"><span class='iconfont icon-sami-select'></span></view>
							<view class='input'>{{item.number}}</view>
							<view class='plus' @click="addNumber(item.id)"><span class='iconfont icon-add-select'></span></view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view id='payBar'>
			<view class='left'>应付：<text class='amount'>￥{{amount}}</text></view>
			<view class='right' @click="toNextPage">立即预约</view>
		</view>
	</view>
</template>

<script>
	export default{
		data () {
			return {
				aidsList: [
					{ id:0, src:'https://img.yzcdn.cn/upload_files/2020/06/28/Fhxh7YuXOq2SfSGeKeqTgr2CULlG.jpg!large.webp', name: '这是名字1', size: '这是规格', price: '18.9', oldPrice: '30', number: 0},
					{ id:1, src:'https://img.yzcdn.cn/upload_files/2020/06/28/Fhxh7YuXOq2SfSGeKeqTgr2CULlG.jpg!large.webp', name: '这是名字2', size: '这是规格', price: '18.9', oldPrice: '30', number: 0},
					{ id:2, src:'https://img.yzcdn.cn/upload_files/2020/06/28/Fhxh7YuXOq2SfSGeKeqTgr2CULlG.jpg!large.webp', name: '这是名字3', size: '这是规格', price: '18.9', oldPrice: '30', number: 0},
					{ id:3, src:'https://img.yzcdn.cn/upload_files/2020/06/28/Fhxh7YuXOq2SfSGeKeqTgr2CULlG.jpg!large.webp', name: '这是名字4', size: '这是规格', price: '18.9', oldPrice: '30', number: 0}
				],
				amount: 1000000000000000
			}
		},
		methods: {
			minusNumber (id) {
				this.aidsList[id].number -= 1;
			},
			addNumber (id) {
				this.aidsList[id].number += 1;
			},
			toNextPage () {
				uni.navigateTo({
					url: './appoint',
					success: res => {},
					fail: () => {},
					complete: () => {}
				})
			}
		}
	}
</script>

<style lang='less' scoped>
	#title {
		padding:20rpx;
		.top {
			display: flex;
			.top-image {
				width:60%;
				height:200rpx;
			}
			.rightBox {
				padding-left: 20rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
			}
		}
		.bottom {
			margin-top: 40rpx;
			font-weight: 600;
			line-height: 60rpx;
		}
	}
	#trainingAidList {
		.title {
			font-weight: 700;
			text-align: center;
			height:80rpx;
			line-height: 80rpx;
			margin-bottom: 40rpx;
		}
		.aids {
			display: flex;
			padding:20rpx;
			.aidImage {
				width:42%;
				height:200rpx;
			}
			.right {
				width:58%;
				padding: 0 20rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.titleLow {
					font-size: 34rpx;
					font-weight: 600;
				}
				.size {
					font-size: 24rpx;
					color: #999;
				}
				.bottom {
					display: flex;
					justify-content: space-between;
					.price {
						.dollarSymbol {
							font-size: 26rpx;
							color:#f00;
						}
						.priceNow {
							font-size: 34rpx;
							color:#f00;
						}
						.oldPrice {
							font-size: 22rpx;
							color:#999;
							text-decoration: line-through;
							padding-left:8rpx;
						}
					}
					.number {
						display: flex;
						justify-content: space-between;
						width:160rpx;
						.iconfont {
							font-size: 34rpx;
							color:#fff;
							
						}
						.minus, .plus {
							width: 50rpx;
							height:50rpx;
							line-height: 50rpx;
							background-color: #00b7ff;
							border-radius: 100%;
							text-align: center;
						}
						.input {
							margin:0 8rpx;
							width:60rpx;
							height:40rpx;
							line-height: 40rpx;
							text-align: center;
							border-radius: 10rpx;
						}
					}
				}
			}
		}
	}
	#payBar {
		background-color: #fff;
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
