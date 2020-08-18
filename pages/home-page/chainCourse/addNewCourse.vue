<template>
	<view class='pagebody' :style="{'overflow-y': ismask}">
		<view id='topbar'>课程名称：{{courseName}}</view>
		<view id='addTitleImg'>
			<view class='addicon' v-if='isTitleImgExist'></view>
			<image :src='url' class='img' v-else></image>
		</view>
		<view id='likeRichText'>
			<view class='content' >
				<view v-for='(item, index) in itemList' :key='item.id' class='whatIsThis'>
					<view class='titleLine'>
						<view class='name' v-show="item.mediaType==='bigImg'">大图</view>
						<view class='name' v-show="item.mediaType==='multiImg'">小图</view>
						<view class='name' v-show="item.mediaType==='text'">文字</view>
						<view class='name' v-show="item.mediaType==='video'">视频</view>
						<view class='name' v-show="item.mediaType==='tag'">标签</view>
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
					<view class='bigImg' v-show="item.mediaType==='bigImg'">
						<image class='bImg' :src='item.content' @click='previewBigImg(item.content)'></image>
					</view>
					<movable-area class='smallImg' v-show="item.mediaType==='multiImg'">
						<movable-view v-for='(img, index) in item.contentList' :key='img.id' class='con' :x='img.x' :y='img.y' direction="all" :damping="40" @change='onchange($event,img)' @touchstart='touchstart(img)' @touchend='touchend(img)'>
							<image :src='img.content' class='img'></image>
							<!-- <view class='throwout' @click='worht(id)'>
								<uni-icons type='close'></uni-icons>
							</view> -->
						</movable-view>
						<!-- <view class='addsmallimg' :style="{left: add.x + 'rpx', top:add.y + 'rpx'}" @click='addsmallimg(item)'>
							<uni-icons type='plusempty' size='30'></uni-icons>
						</view> -->
					</movable-area>
					<textarea v-show="item.mediaType==='text'" placeholder="请输入文字" v-model='item.content' class='textarea' auto-height></textarea>
					<view class='videobox' v-show="item.mediaType==='video'">
						<video :src='item.content' class='video'></video>
					</view>
					<view class='tags' v-show="item.mediaType==='tag'">
						<view v-for='(tag, inindex) in item.contentList' :key='tag.id' class='tag'>
							{{tag.content}}
							<uni-icons type='close' class='close' @click='deleteTag(index, inindex)'></uni-icons>
						</view>
					</view>
				</view>
			</view>
			<view class='btns'>
				<button class='btn' @click='addBigImg'>大图</button>
				<button class='btn' @click='addSmallImgs'>小图</button>
				<button class='btn' @click='addText'>文字</button>
				<button class='btn' @click="addVideo">视频</button>
				<button class='btn' @click='showDialog'>标签</button>
			</view>
			<button @click='submit'>提交</button>
		</view>
		<view id='pupup' v-if='dialogVisible'>
			<view class='mask' @click='closeDialog'></view>
			<view class='popup'>
				<view class='addTag'>
					<input placeholder='请输入标签名,最大20字' class='putin' v-model='tag'>
					<button class='btn' @click='addTag'>提交</button>
				</view>
				<view class='commonTags'>
					<view class='title'>常用标签</view>
					<view class='commonTag'>
						<button v-for='tag in commonTagsList' :key='tag.id' class='tagName' @click='addcommontag(tag)'>{{tag.content}}</button>
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
				bigimg: [],
				returnbigimg: '',
				smallimg: [],
				returnSmallImg: [],
				isuploadfail: false,
				video: [],
				returnvideo: '',
				imgcount: 0,
				oldX: '',
				oldY: '',
				lineLast: 0,
				colLastLine: 0,
				add: {
					x: 0,
					y: 0
				},
				dialogVisible: false,
				commonTagsList: [
					{id:1, content: '常回家看看'},
					{id:2, content: '不明觉厉'},
					{id:3, content: '给力'},
					{id:4, content: '神马都是浮云'},
					{id:5, content: '网抑云'}
				],
				istagexist: 0,
				ismask: 'auto',
				tag: ''
			}
		},
		components: {uniIcons},
		methods: {
			addBigImg () {
				uni.chooseImage({
				    count: 1,
				    sizeType: ['original'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album', 'camera'], //从相册选择
				    success: async (res) => {
						this.bigimg = res.tempFilePaths
						const result = await this.$sendimg({
							url: 'picture/uploadPicture',
							filepath: this.bigimg[0],
							name: 'file'
						})
						this.returnbigimg = result.data
						console.log(this.returnbigimg)
						this.itemList.push({mediaType: 'bigImg', content: this.returnbigimg, id: this.count})
						this.bigimg = ''
						this.returnbigimg = []
						this.count++
				    }
				})
			},
			previewBigImg (url) {
				uni.previewImage({
					urls: [url],
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			},
			addSmallImgs () {
				uni.chooseImage({
				    count: 6,
				    sizeType: ['original'], 
				    sourceType: ['album', 'camera'],
				    success: async (res) => {
						this.smallimg = res.tempFilePaths
						for (let i=0; i<this.smallimg.length;i++) {
							const result = await this.$sendimg({
								url: 'picture/uploadPicture',
								filepath: this.smallimg[i],
								name: 'file',
								fail: (err) => {
									this.isuploadfail = true
								}
							})
							if (!!this.isuploadfail) {
								break
							}
							this.returnSmallImg.push({id: this.count, content: result.data, mediaType: 'img',x: '0rpx', y: '0rpx'})
							this.count++
						}
						this.itemList.push({mediaType: 'multiImg', contentList: this.returnSmallImg, id: this.count})
						this.returnSmallImg = []
						this.smallimg = []
						this.count++
				    }
				})
			},
			// addSmallImg (item) {
			// 	uni.chooseImage({
			// 	    count: 6, //默认9
			// 	    sizeType: ['original'],
			// 	    sourceType: ['album'],
			// 	    success: (res) => {
			// 	        const imgs = JSON.stringify(res.tempFilePaths)
			// 			for (let i = 0;i< imgs.length; i++) {
			// 				item.smallImgList.push({ id: this.imgcount, url: imgs.url})
			// 				this.imgcount++
			// 			}
			// 	    }
			// 	})
			// },
			// getAddBtnXY (index) {
			// 	const length = this.itemList[index].smallImgList.length
			// 	const result = Math.floor(length / 3)
			// 	const remainder = length % 3 
				
			// },
			addText () {
				this.itemList.push({mediaType: 'text', content: '', id: this.count})
				this.count++
			},
			addVideo () {
				uni.chooseVideo({
					count: 1,
					sourceType: ['camera', 'album'],
					success: async (res) => {
						this.video = res.tempFilePath
						const result = await this.$sendimg({
							url: 'picture/uploadPicture',
							filepath: this.video,
							name: 'file'
						})
						this.returnvideo = result.data
						console.log(this.returnvideo)
						this.itemList.push({mediaType: 'video', content: this.returnvideo, id: this.count})
						this.count++
					}
				})
			},
			addTag () {
				if (this.istagexist === 0) {
					this.istagexist = 1
					const length = this.itemList.length - 1
					const arr = this.itemList
					this.itemList.push({id: -1})
					for (let i= length; i >= 0; i--) {
						this.$set(this.itemList, i+1, arr[i])
					}
					const newTag = {mediaType: 'tag', contentList: [
						{id: this.count, content: this.tag, mediaType: 'txt'}
					], id: this.count}
					this.$set(this.itemList, 0, newTag)
					this.count++
				} else {
					const newTag = {id: this.count, content: this.tag, mediaType: 'txt'}
					this.itemList[0].contentList.push(newTag)
					this.count++
				}
			},
			addcommontag (tag) {
				this.tag = tag.content
				if (this.istagexist === 0) {
					this.istagexist = 1
					const length = this.itemList.length - 1
					const arr = this.itemList
					this.itemList.push({id: -1})
					for (let i= length; i >= 0; i--) {
						this.$set(this.itemList, i+1, arr[i])
					}
					const newTag = {mediaType: 'tag', tagsList: [
						{id: this.count, content: this.tag, mediaType: 'txt'}
					], id: this.count}
					this.$set(this.itemList, 0, newTag)
					this.count++
				} else {
					const newTag = {id: this.count, content: this.tag, mediaType: 'txt'}
					this.itemList[0].contentList.push(newTag)
					this.count++
				}
			},
			showDialog () {
				this.dialogVisible = true
				this.ismask = 'hidden'
			},
			closeDialog () {
				this.dialogVisible = false
				this.ismask = 'auto'
			},
			deleteTag (outer, inner) {
				this.itemList[outer].tagsList.splice(inner, 1)
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
				if (index === 0 && this.itemList[0].mediaType === 'tag') {
					this.istagexist = 0
				}
				this.itemList.splice(index, 1)
			},
			onchange (e,img) {
				this.oldX = e.detail.x
				this.oldY = e.detail.y
			},
			touchstart (img) {
			},
			touchend (img) {
				img.x = this.oldX
				img.y = this.oldY
				setTimeout(() => {
					this.$nextTick(() => {
					  img.x = '200rpx'
					  img.y = '200rpx'
					})
				}, 0)
			},
			async submit () {
				const res = await this.$ask({
					url: 'dragon/publishDragon',
					data: { arr: this.itemList },
					method: 'post',
					header: {
						'content-tyep': 'application/json'
					}
				})
				console.log(res)
			}
		}
	}
</script>

<style lang='less' scoped>
	.pagebody {
		height:1320rpx;
		overflow-x: hidden;
	}
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
						width:80%;
						height:480rpx;
						display: block;
					}
				}
				.smallImg {
					width:100%;
					height:600rpx;
					/* padding: 20rpx; */
					.con {
						width:200rpx;
						height:200rpx;
						/* margin: 0 20rpx 20rpx 0; */
						.img {
							width:200rpx;
							height:200rpx;
							/* display: inline-block; */
						}
					}
					.addsmallimg {
						width: 200rpx;
						height:200rpx;
						text-align: center;
						line-height: 200rpx;
						position: absolute;
					}
				}
				.textarea {
					min-height:150rpx;
					width:100%;
				}
				.videobox {
					height:400rpx;
					.video {
						width: 100%;
						height:400rpx;
					}
				}
				.tags {
					display: flex;
					flex-wrap: wrap;
					max-height:200rpx;
					overflow: auto;
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
		.mask {
			position: absolute;
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
