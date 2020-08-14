<template>
	<view id='pageBody'>
		<view id='topBar'>
			<view class='title'>确认订单</view>
			<view class='name common'>
				<view class='appoint'>预约姓名</view>
				<view class='appointname commonpart'><input v-model="name"></input></view>
			</view>
			<view class='phone common'>
				<view class='appoint'>预约电话</view>
				<view class='appointphone commonpart'><input v-model="phone"></input></view>
			</view>
		</view>
		<view id='classroom'>
			<view class='title'>{{shop}}</view>
			<view class='detail'>
				<image src='https://img.yzcdn.cn/upload_files/2020/06/28/Fhxh7YuXOq2SfSGeKeqTgr2CULlG.jpg!large.webp' class='img'></image>
				<view class='rightBox'>
					<view class='name'>{{classroomName}}</view>
					<view class='size'>{{size}}</view>
					<view class='aid'>{{device}}</view>
					<view class='price'>￥<text class='integer'>{{integer}}</text>.<text>{{decimal}}</text></view>
				</view>
			</view>
		</view>
		<view id='aiddevice'>
			<image src='https://img.yzcdn.cn/upload_files/2020/06/28/Fhxh7YuXOq2SfSGeKeqTgr2CULlG.jpg!large.webp' class='img'></image>
			<view class='rightBox'>
				<view class='name'>{{deviceName}}</view>
				<view class='size'>{{deviceSize}}</view>
				<view class='price'>￥<text class='integer'>{{integer}}</text>.<text>{{decimal}}</text></view>
			</view>
		</view>
		<view id='other'>
			<view class='receipt'></view>
			<view class='coupon'>
				<view class='left'></view>
				<veiw class='right'></veiw>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				name: '客户昵称',
				phone: '18546418165',
				shop: '南开广开四马路乐享门店',
				classroomName: '教室名称',
				size: '教室规格',
				device: '提供的教具',
				integer: 39,
				decimal: '90',
				deviceName: '教具名称',
				deviceSize: '教具规格',
			}
		}
	}
</script>

<style lang='less' scoped>
	#pageBody {
		background-color: #eee;
	}
	#topBar {
		background-color: #fff;
		margin-bottom: 10rpx;
		.title {
			text-align: center;
			padding-bottom: 50rpx;
		}
		.common {
			display: flex;
			padding-bottom: 70rpx;
			padding-left: 30rpx;
		}
		.commonpart {
			padding-left:70rpx;
		}
	}
	#classroom {
		background-color: #fff;
		border-radius: 30rpx;
		padding: 10rpx 30rpx;
		margin-bottom: 30rpx;
		.title {
			font-size: 36rpx;
			font-weight: 600;
			margin-bottom: 14rpx;
		}
		.detail {
			display: flex;
			.img {
				display: block;
				width:200rpx;
				height:200rpx;
			}
			.rightBox {
				padding-left: 56rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				font-size: 28rpx;
				.price {
					font-size: 22rpx;
					color:red;
					font-weight: 600;
					.integer {
						font-size: 32rpx;
						font-weight: 600;
					}
				}
			}
		}
	}
	#aiddevice {
		background-color: #fff;
		border-radius: 30rpx;
		padding: 10rpx 30rpx;
		margin-bottom: 30rpx;
		display: flex;
		.img {
			width:200rpx;
			height:200rpx;
		}
		.rightBox {
			padding-left: 56rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			font-size: 28rpx;
			.price {
				font-size: 22rpx;
				color:red;
				font-weight: 600;
				.integer {
					font-size: 32rpx;
					font-weight: 600;
				}
			}
		}
	}
</style>
