<template>
	<!-- 遮罩层 -->
	<view>
			<view class="mask" v-show="mask"></view>
			<!-- picker-view组件按钮 -->
			<view class="pickerBtn" v-if="pickerBtns">
				<view class="cancer" @click="cancer">取消</view>
				<view class="confirm" @click="confirm">确定</view>
			</view>
	
			  <view class="pickerView" v-show="pickerView">
				   <picker-view class="picker" indicator-class="indicator" :value="value" @change="bindChange">
						<picker-view-column class="column">
						  <view v-for="(item, index) in sexList" :key="index">{{item}}</view>
						</picker-view-column>
					</picker-view>	
				</view>
	</view>	
</template>

<script>
	export default {
		data() {
			return {
				value: [0],
				sexList: ['保密', '男', '女'],
				pickerView: true,
				mask: true,
				pickerBtns: true,
				sex: '保密'
			}
		},
		methods: {
			bindChange(e) {
				console.log(e.detail.value)
			},
			cancer () {
				this.mask = false
			},
			confirm () {
				this.mask = true
			}
		}
	}
</script>

<style lang='less' scoped>
	.pickerView {
		.picker {
		  background-color: #fff;
		  width: 100%;
		  height: 247rpx;
		  position: absolute;
		  bottom: 0;
		  z-index: 1;
		  .column {
			font-size: 40rpx;
			color: #000;
			text-align: center;
			line-height: 68rpx;
		  }
		}
		.indicator {
		  height: 68rpx;
		  border-top: 1rpx solid #ADB0A7;
		  border-bottom: 1rpx solid #ADB0A7;
		}
	}
	.mask {
		position:absolute;
		top:0;
		left:0;
		margin-top: 0%;
		width: 100%;
		height: 100%;
		z-index: 0;
		background: rgba(0,0,0,0.5);
	}
	.pickerBtn {
		width: 100%;
		height: 101rpx;
		line-height: 101rpx;
		background-color: #fff;
		font-size: 40rpx;
		display: flex;
		justify-content: space-between;
		position: absolute;
		bottom: 248rpx;
		border-bottom: 1rpx solid #ADB0A7;
		z-index: 1;
		.cancer {
			color: #0076FF;
			padding-left: 40rpx;
			box-sizing: border-box;
		}
		.confirm {
			color: #FE4533;
			padding-right: 40rpx;
			box-sizing: border-box;
		}
	}
</style>
