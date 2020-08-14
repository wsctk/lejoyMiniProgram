<script>
	import amap from './common/amap-wx.js'
	export default {
		data () {
			return {
				address: '',
				amapPlugin: null,
				key: 'd63559894e0fb072ce3576d25057c9dc'
			}
		},
		onLaunch: function() {
			console.log('App Launch')
			this.amapPlugin = new amap.AMapWX({
				key: this.key  
			})
			uni.showLoading({
				title: '获取信息中'  
			})
			this.amapPlugin.getRegeo({  
				success: (data) => {
					console.log(data)
					this.addressName = data[0].regeocodeData.addressComponent.province
					uni.hideLoading()
				}  
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
