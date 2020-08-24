<template>
	<view>
		<view id='drawPoster'>
			<view><canvas style="width: 700rpx; height: 1130rpx;" canvas-id='posterCanvas'></canvas></view>
		</view>
		<view id='btns' v-if='isposter'>
			<button open-type="share">转发</button>
			<button @click='createQrAndPoster'>生成海报</button>
		</view>
		<view id='save' v-else>
			<button @click='saveTolocal'>保存到本地</button>
			<button @click='shareToFriends'>分享到朋友圈</button>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				qrCodeUrl: ''
			}
		},
		onShareAppMessage(res) {
			const userid = uni.getStorageSync('userId')
			const id = uni.getStorageSync('id')
		    return {
		      title: '我正在使用群接龙',
		      path: `/pages/home-page/chainCourse/preview?uid=${userid}&id=${id}`,
			  imageUrl: '/static/logo.png'
		    }
		},
		methods: {
			async createQrAndPoster () {
				const userid = uni.getStorageSync('userId')
				const id = uni.getStorageSync('id')
				const res = await this.$ask({
					url: 'qrCode/getQRCode',
					data: {
						path: `/pages/home-page/chainCourse/preview?uid=${userid}&id=${id}`,
						width: 200
					}
				})
				this.qrCodeUrl = res.data.data
				let Ccontext = uni.createCanvasContext('posterCanvas')
				Ccontext.font = "18px bold 黑体"
				Ccontext.fillStyle = "#ff0"
				Ccontext.textAlign = "center"
				uni.getImageInfo({
					src: res.data.data,
					success: function (image) {
						console.log(image.path)
						Ccontext.drawImage('/static/logo.png',0,0,375,667)
						Ccontext.fillText('长按识别图中二维码',187,100)
						Ccontext.drawImage(image.path,137,450,100,100)
						Ccontext.draw()
					}
				})
			},
			saveTolocal () {
				
			}
		}
	}
</script>

<style>
</style>
