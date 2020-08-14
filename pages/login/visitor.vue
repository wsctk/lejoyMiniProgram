<template>
	<view id='login'>
		<view class='logo'></view>
		<view class='phoneNumber'>
			<input type='text' class="phoneinput" placeholder="请输入手机号" v-model="phonenumber"></input>
		</view>
		<view class='code'>
			<input type='text' class="codeinput" placeholder="请输入验证码" v-model="code"></input>
			<button class='getCode' @click='getCode'>获取验证码</button>
		</view>
		<view class='btns'>
			<button type='primary' size='small' class='loginBtn' @click='login'>登录</button>
			<button class='loginBtn' open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">微信用户快速登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				phonenumber: '',
				code: ''
			}
		},
		onLoad() {
			uni.login({
			  provider: 'weixin',
			  success: async (loginRes) =>{
				const res = await this.$ask({
					url: 'login/wxLogin',
					data: {
						code: loginRes.code
					}
				})
				uni.setStorageSync('token', res.data.data.token)
				uni.setStorageSync('userId', res.data.data.user.id)
			  }
			})
		},
		methods: {
			async getPhoneNumber (e) {
				console.log(e)
				const userid = uni.getStorageSync('userId')
				console.log(e)
				const res = await this.$ask({
					url: 'login/getPhoneNumber',
					data: {encryptedData: e.detail.encryptedData, iv: e.detail.iv, userId: userid},
					method: 'post'
				})
				console.log(res)
				uni.setStorageSync('phonenumber', res.data.data)
			},
			async getCode () {
				const res = await this.$ask({
					url: 'login/getVerifyCode',
					data: {phoneNumber: this.phonenumber}
				})
				console.log(res)
			},
			async login () {
				const userid = uni.getStorageSync('userId')
				const res = await this.$ask({
					url: 'login/doLoginByPhoneNumber',
					data: {phoneNumber: this.phonenumber, verifyCode: this.code, userId: userid},
					method: 'post',
					success: (res) => {
						if(res.data.code === 13) {
							return uni.showToast({
								title:'验证码错误！'
							})
						}
					}
				})
				console.log(res)
			}
		}
	}
</script>

<style lang='less' scoped>
	#login {
		.logo {
			height:300rpx;
		}
		.phoneNumber {
			height:200rpx;
			.phoneinput {
				margin:0 auto;
				width:70%;
				border-bottom:1px solid #bbb;
				padding-left: 12rpx;
				height: 100rpx;
			}
		}
		.code {
			height:100rpx;
			padding:40rpx 0;
			width:70%;
			margin:0 auto;
			position: relative;
			.codeinput {
				margin:0 auto;
				border-bottom:1px solid #bbb;
				padding-left: 12rpx;
				height: 100rpx;
			}
			.getCode {
				position: absolute;
				right:0;
				top:40rpx;
				z-index: 10;
			}
		}
	}
</style>
