<template>
	<view>
		<button open-type="share">转发</button>
		<button @click='createPoster'>生成海报</button>
		<image :src='qrCodeUrl' class='qrcode'></image>
		<view id='drawPoster'>
			<view><canvas style="width: 400px; height: 800px;" canvas-id='posterCanvas'></canvas></view>
		</view>
		<hchPoster ref="hchPoster" @cancel="canvasCancel" :simpleFlag="simpleFlag" :posterBgFlag="posterBgFlag" :canvasAttr.sync="posterObj" />
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
			async createPoster () {
				this.createQr()
				// uni.chooseImage({
				//     count: 1,
				//     sourceType: ['album'],
				//     success: function (res) {
				//         uni.getImageInfo({
				//             src: res.tempFilePaths[0],
				//             success: function (image) {
				//                 console.log(image)
				//                 console.log(Ccontext)
				// 				Ccontext.drawImage(image.path,0,0)
				//             }
				//         })
				//     }
				// })
			},
			async createQr () {
				const userid = uni.getStorageSync('userId')
				const id = uni.getStorageSync('id')
				const res = await this.$ask({
					url: 'qrCode/getQRCode',
					data: {
						path: `/pages/home-page/chainCourse/preview?uid=${userid}&id=${id}`,
						width: 300
					}
				})
				this.qrCodeUrl = res.data.data
				let Ccontext = uni.createCanvasContext('posterCanvas')
				uni.getImageInfo({
					src: res.data.data,
					success: function (image) {
						console.log(image.path)
						Ccontext.drawImage('/static/logo.png',0,0,200,200)
					}
				})
			}
		}
	}
</script>

<style>
</style>
