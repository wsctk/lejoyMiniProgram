<template>
	<view>
		这是广告服务
	</view>
</template>

<script>
	export default {
		data () {
			return {}
		},
		onShow () {
			this.getad()
		},
		methods: {
			async getad () {
				const res = await this.$ask({
					url: 'advertisement/getAdvertisementList'
				})
				console.log(res)
			}
		}
	}
</script>

<style>
</style>
