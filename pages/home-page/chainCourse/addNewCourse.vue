<template>
	<view>
		<view id='topbar'>课程名称：{{courseName}}</view>
		<view id='addTitleImg'>
			<view class='addicon' v-if='isTitleImgExist'></view>
			<image :src='url' class='img' v-else></image>
		</view>
		<view id='likeRichText'>
			<view class='content'>
				<view v-for='(item, index) in itemList' :key='item.id' class='whatIsThis'>
					<view class='titleLine'>
						<view class='name'>{{item.desc}}</view>
						<view  class='arrow1 arrow' @click='upup(index)' v-if='(index!==0)'>
							<uni-icons size='10' type='arrowthinup'></uni-icons>
						</view>
						<view  class='arrow1 arrow arrowno' v-else>
							<uni-icons size='10' type='arrowthinup'></uni-icons>
						</view>
						<view class='arrow2 arrow arrowno' v-if='((index+1)===count)'>
							<uni-icons size='10' type='arrowthindown'></uni-icons>
						</view>
						<view class='arrow2 arrow' @click='downdown(index)' v-else>
							<uni-icons size='10' type='arrowthindown'></uni-icons>
						</view>
						<view class='xx' @click='eleted(index)'>
							<uni-icons type='close'></uni-icons>
						</view>
					</view>
					<view class='bigImg' v-show='item.bigImg'>
						<image class='bImg' :src='item.url'></image>
					</view>
					<movable-area class='smallImg' v-show='item.smallImg'>
						<!-- <movable-view v-for='(img, id) in item.smallImgList' :key='img.id' class='con' :x="img.x" :y="img.y" direction="all" :damping="40" @change='onchange($event, img)'@touchstart='touchstart($event,img)' @touchend='touchend(img)' @mouseup='touchend(img)'>
							<image :src='img.url' class='img'></image>
							<view class='throwout' @click='worht(id)'>
								<uni-icons type='close'></uni-icons>
							</view>
						</movable-view> -->
					</movable-area>
					<textarea v-show='item.text' placeholder="请输入文字" v-model='item.content' class='textarea' auto-height></textarea>
					<view class='video' v-show='item.video'>1237</view>
					<view class='tags' v-show='item.tag'>
						<view v-for='tag in item.tagsList' :key='tag.id' class='tag'>
							{{tag.content}}
							<uni-icons type='close' class='close'></uni-icons>
						</view>
					</view>
				</view>
			</view>
			<view class='btns'>
				<button class='btn' @click='addBigImg'>大图</button>
				<button class='btn' @click='addSmallImg'>小图</button>
				<button class='btn' @click='addText'>文字</button>
				<button class='btn' @click="addVideo">视频</button>
				<button class='btn' @click='dialogVisible=true'>标签</button>
			</view>
		</view>
		<view id='pupup' v-if='dialogVisible' @touchmove.stop.prevent="moveHandle">
			<view class='mask' @click='dialogVisible=false'></view>
			<view class='popup'>
				<view class='addTag'>
					<input placeholder='请输入标签名,最大20字' class='putin'>
					<button class='btn' @click='addTag'>提交</button>
				</view>
				<view class='commonTags'>
					<view class='title'>常用标签</view>
					<view class='commonTag'>
						<view v-for='tag in commonTagsList' :key='tag.id' class='tagName'>{{tag.name}}</view>
					</view>
				</view>
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
				count: 0,
				oldX: '',
				oldY: '',
				dialogVisible: false,
				commonTagsList: [
					{id:1, name: '常回家看看'},
					{id:2, name: '不明觉厉'},
					{id:3, name: '给力'},
					{id:4, name: '神马都是浮云'},
					{id:5, name: '网抑云'}
				],
				istagexist: 0
			}
		},
		components: {uniIcons},
		methods: {
			moveHandle () {
				return 
			},
			addBigImg () {
				this.itemList.push({desc: '大图', url: 'https://img.yzcdn.cn/upload_files/2020/06/28/Fhxh7YuXOq2SfSGeKeqTgr2CULlG.jpg!large.webp', id: this.count, bigImg: true})
				console.log(this.itemList)
				this.count++
			},
			addSmallImg () {
				this.itemList.push({desc: '小图', smallImgList: [
					{id:1, url: 'https://img.yzcdn.cn/upload_files/2020/06/28/Fhxh7YuXOq2SfSGeKeqTgr2CULlG.jpg!large.webp', x: '0rpx', y: '0rpx'},
					{id:2, url: 'https://img.yzcdn.cn/upload_files/2020/06/28/Fhxh7YuXOq2SfSGeKeqTgr2CULlG.jpg!large.webp', x: '200rpx', y: '0rpx'},
					{id:3, url: 'https://img.yzcdn.cn/upload_files/2020/06/28/Fhxh7YuXOq2SfSGeKeqTgr2CULlG.jpg!large.webp', x: '400rpx', y: '0rpx'},
					{id:4, url: 'https://img.yzcdn.cn/upload_files/2020/06/28/Fhxh7YuXOq2SfSGeKeqTgr2CULlG.jpg!large.webp', x: '0rpx', y: '200rpx'},
				], id: this.count, smallImg: true})
				this.count++
			},
			addText () {
				this.itemList.push({desc: '文本', content: '', id: this.count, text: true})
				this.count++
			},
			addVideo () {
				this.itemList.push({desc: '视频', url: '', id: this.count, video: true})
				this.count++
			},
			addTag () {
				if (this.istagexist === 0) {
					this.istagexist = 1
					let length = this.itemList.length
					const arr = this.itemList
					console.log(arr)
					arr.push('123')
					for (let i=length-1; i<0; i--) {
						this.$set(this.itemList, i+1, arr[i])
						this.$set(this.itemList, i, arr[i+1])
					}
					const newTag = {desc: '标签', tagsList: [
						{id:1, content: '123'},
						{id:2, content: '123123123'},
						{id:3, content: '12312'},
						{id:4, content: '12323123333333'},
					], id: 0, tag: true}
					this.$set(this.itemList, 0, newTag)
					this.count++
				} else {
					
				}
			},
			upup (index) {
				const arr = []
				arr[0] = this.itemList[index]
				arr[1] = this.itemList[index-1]
				this.$set(this.itemList, index-1, arr[0])
				this.$set(this.itemList, index, arr[1])
			},
			downdown (index) {
				const arr = []
				arr[0] = this.itemList[index]
				arr[1] = this.itemList[index+1]
				this.$set(this.itemList, index+1, arr[0])
				this.$set(this.itemList, index, arr[1])
			},
			eleted (index) {
				this.itemList.splice(index, 1)
				this.count--
			},
			onchange (e, img) {
				console.log('123')
			},
			touchstart (e, img) {
				this.oldX = img.x
				this.oldY = img.y
				console.log(e)
				console.log(this.oldX)
			},
			touchend (img) {
				img.offset = '200rpx'
				img.y = '200rpx'
				console.log(e)
			}
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
				.titleLine {
					height:40rpx;
					position: relative;
					.name {
					}
					.arrow {
						position: absolute;
						top: 10rpx;
						height:26rpx;
						width: 26rpx;
						border: 1px solid #000;
						border-radius: 50%;
						text-align: center;
						line-height: 15rpx;
					}
					.arrowno {
						border-color:#aaa;
					}
					.arrow1 {
						left: 80rpx;
					}
					.arrow2 {
						left: 130rpx;
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
				.bigImg {
					.bImg {
						width:320rpx;
						height:320rpx;
						display: block;
					}
				}
				.smallImg {
					width:750rpx;
					height:600rpx;
					.con {
						.img {
							width:200rpx;
							height:200rpx;
						}
					}
				}
				.textarea {
					min-height:150rpx;
					width:100%;
				}
				.video {}
				.tags {
					display: flex;
					flex-wrap: wrap;
					.tag {
						text-align: center;
						height:50rpx;
						line-height: 50rpx;
						background-color: #ff9;
						margin:10rpx;
						.close {
							margin-left: 50rpx;
						}
					}
				}
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
	#pupup {
		overflow: hidden;
		.mask {
			position: absolute;
			height:100%;
			left:0 ; right:0;
			top:0 ; bottom:0;
			background-color: #444;
			opacity: 0.6;
		}
		.popup {
			position: fixed;
			background-color: #fff;
			width:100%;
			box-sizing: border-box;
			bottom:0;
			border-top-left-radius: 20rpx;
			border-top-right-radius: 20rpx;
			z-index: 9;
			padding:20rpx;
			.addTag {
				height:100rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 20rpx;
				.putin {
					height:80rpx;
				}
				.btn {
					margin:0;
					height:50rpx;
					line-height: 50rpx;
					font-size: 30rpx;
				}
			}
			.commonTags {
				.title {
					color:#aaa;
					font-size: 30rpx;
					margin-bottom: 20rpx;
				}
				.commonTag {
					display: flex;
					flex-wrap: wrap;
					.tagName {
						padding: 5rpx;
						font-size: 28rpx;
						margin:0 40rpx 10rpx 0;
						border: 1px solid #ccc;
						border-radius: 15rpx;
						font-weight: 500;
					}
				}
			}
		}
	}
</style>
