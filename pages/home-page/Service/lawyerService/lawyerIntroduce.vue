<template>
	<view>
		这是律师服务
		<button @click='sendform' type='primary'>send</button>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				formleft: [],
				sendform1: []
			}
		},
		onShow () {
			this.getForm()
		},
		methods: {
			async getForm () {
				const res = await this.$ask({
					url: 'lawyer/getField'
				})
				console.log(res)
			},
			async sendform () {
				const userid = uni.getStorageSync('userId')
				for (let i = 0; i< this.formleft.length; i++) {
					let left = this.formleft[i].id
					this.sendform1.push({fieldId: left, userId: userid, content: '123123' })
				}
				const res = await this.$ask({
					url: 'lawyer/submitAdvisoryInformation',
					data: this.sendform1,
					method: 'post',
					header: {
						'content-type': 'application/json'
					}
				})
				console.log(res)
			}
		}
	}
</script>

<style>
</style>
