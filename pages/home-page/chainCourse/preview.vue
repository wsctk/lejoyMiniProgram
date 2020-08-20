<template>
	<view>
		<button @click='submit'></button>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				courseName: '',
				price: '',
				starttime: '',
				endtime: '',
				itemList: []
			}
		},
		created () {
			this.courseName = uni.getStorageSync('title')
			this.price = uni.getStorageSync('price')
			this.starttime = uni.getStorageSync('createTime')
			this.endtime = uni.getStorageSync('endTime')
			this.itemList = uni.getStorageSync('contentsList')
		},
		methods: {
			async submit () {
				const userid = uni.getStorageSync('userId')
				const res = await this.$ask({
					url: 'dragon/publishDragon',
					data: { 
						id: userid,
						title: this.courseName,
						isFree: 0,
						price: this.price,
						createTime: this.starttime,
						endTime: this.endtime,
						contentsList: this.itemList
					},
					method: 'post',
					header: {
						'content-tyep': 'application/json'
					}
				})
				console.log(res)
				uni.navigateTo({
					url: 'pages/home-page/chainCourse/relay'
				})
			}
		}
	}
</script>

<style>
</style>
