<template>
	<view>
		<button open-type="share">转发</button>
		<button @click='poster'>生成海报</button>
	</view>
</template>

<script>
	export default {
		data () {
			return {}
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
		}
	}
</script>

<style>
</style>
