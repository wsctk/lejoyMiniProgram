<template>
	<view>
		<view id='topbar'>课程名称：{{courseName}}</view>
		<view id='addTitleImg'>
			<view class='addicon' v-if='isTitleImgExist'></view>
			<image :src='url' class='img' v-else></image>
		</view>
		<view id='likeRichText'>
			<view class='content'>
				<view v-for='item in itemList' :key='item.id' class='whatIsThis'>
					<view class='bigImg' v-show='item.bigImg'>
						<view class='titleLine'>
							<view class='name'>大图</view>
							<view  class='arrow1'>
								<uni-icons size='10' type='arrowthindown'></uni-icons>
							</view>
							<view class='arrow2'>
								<uni-icons size='10' type='arrowthinup'></uni-icons>
							</view>
							<view class='xx'>
								<uni-icons type='close'></uni-icons>
							</view>
						</view>
						<image class='bImg' :src='item.url'></image>
					</view>
					<view class='smallImg' v-show='item.smallImg'>12</view>
					<view class='text' v-show='item.text'>1235</view>
					<view class='video' v-show='item.video'>1237</view>
					<view class='tag' v-show='item.tag'>12388</view>
				</view>
			</view>
			<view class='btns'>
				<button class='btn' @click='addBigImg'>大图</button>
				<button class='btn' @click='addSmallImg'>小图</button>
				<button class='btn' @click='addText'>文字</button>
				<button class='btn' @click="addVideo">视频</button>
				<button class='btn' @click='addTag'>标签</button>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		data () {
			return {
				courseName: '什么课程呢',
				isTitleImgExist: true,
				url: '',
				itemList: [],
				count: 0
			}
		},
		components: {uniIcons},
		methods: {
			addBigImg () {
				this.itemList.push({bigImg: true, url: '', id: this.count})
				console.log(this.itemList)
				this.count++
			},
			addSmallImg () {
				this.itemList.push({smallImg: true, url: '', id: this.count})
				this.count++
			},
			addText () {
				this.itemList.push({text: true, content: '', id: this.count})
				this.count++
			},
			addVideo () {
				this.itemList.push({video: true, url: '', id: this.count})
				this.count++
			},
			addTag () {
				this.itemList.push({tag: true, content: '', id: this.count})
				this.count++
			},
		}
	}
</script>

<style lang='less' scoped>
	#topbar {
		height:80rpx;
		text-align: center;
	}
	#addTitleImg {
		width:95%;
		height: 300rpx;
		margin: 0 auto;
		border: 1px solid #eee;
		.addicon {
			position: relative;
			height:300rpx;
		}
		.addicon:before { 
			content: '';
			width:160rpx;
			position: absolute;
			left: 50%;
			top:50%;
			transform: translateX(-80rpx);
			border:1px solid #aaa;
		}
		.addicon:after {
			content: '';
			height:120rpx;
			position: absolute;
			left: 50%;
			top:50%;
			transform: translateY(-60rpx);
			border:1px solid #aaa;
		}
	}
	#likeRichText {
		width: 95%;
		margin: 0 auto;
		.content {
			border: 1px solid #eee;
			.whatIsThis {
				border:1px solid #eee;
				height:100rpx;
				.bigImg {
					.titleLine {
						height:40rpx;
						position: relative;
						.name {
						}
						.arrow1 {
							position: absolute;
							left: 80rpx;
							top: 10rpx;
							text-align: center;
							line-height: 16rpx;
							border: 1px solid #000;
							border-radius: 50%;
							height:24rpx;
							width: 24rpx;
						}
						.arrow2 {
							position: absolute;
							left: 130rpx;
							top: 10rpx;
							text-align: center;
							line-height: 16rpx;
							border: 1px solid #000;
							border-radius: 50%;
							height:24rpx;
							width: 24rpx;
						}
						.xx {
							position: absolute;
							right: 20rpx;
							top: 10rpx;
							width:30rpx;
							height:24rpx;
							line-height: 24rpx;
						}
					}
				}
				.smallImg {}
				.text {}
				.video {}
				.tag {}
			}
		}
		.btns {
			margin-top: 20rpx;
			display: flex;
			.btn {
				width:25%;
				height:70rpx;
				line-height: 70rpx;
			}
		}
	}
</style>
