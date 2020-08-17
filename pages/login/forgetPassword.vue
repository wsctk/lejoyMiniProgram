<template>
	<view id='chartBox'>
		<view class='addphone'>
			<input v-model='phone' placeholder="请输入手机号" class='addinput'></input>
		</view>
		<view class='check'>
			<input v-model='checkNumber' placeholder="输入验证码" class='addcode'></input>
			<button @click='getCode' class='sendbtn'>发送验证码</button>
		</view>
		<view class='password'>
			<input v-model='password' placeholder="新密码" class='addpassword' password="true"></input>
		</view>
		<button @click='submit' type='primary'>提交</button>
	</view>
</template>

<script>
	export default{
		data () {
			return {
				phone: '',
				checkNumber: '',
				password: ''
			}
		},
		methods: {
			async getCode () {
				if (this.phone === '') {
					return uni.showToast({
						title: '请输入手机号！',
						icon: 'none'
					})
				} else if (isNaN(this.phone) ||(this.phone.length !== 11)) {
					return uni.showToast({
						title: '手机号格式错误',
						icon: 'none'
					})
				}
				const res = this.$ask({
					url: 'login/getVerifyCode',
					data: {
						phoneNumber: this.phone
					}
				})
			},
			async submit () {
				console.log(this.password.length)
				if (this.phone === '') {
					return uni.showToast({
						title: '请输入手机号！',
						icon: 'none'
					})
				} else if (isNaN(this.phone) ||(this.phone.length !== 11)) {
					return uni.showToast({
						title: '手机号格式错误',
						icon: 'none'
					})
				}
				if (this.checkNumber === '') {
					return uni.showToast({
						title: '请输入验证码！',
						icon: 'none'
					})
				} else if (isNaN(this.checkNumber) ||(this.checkNumber.length !== 6)) {
					return uni.showToast({
						title: '验证码格式错误',
						icon: 'none'
					})
				}
				if (this.password === '') {
					return uni.showToast({
						title: '请输入密码！',
						icon: 'none'
					})
				} else if ((this.password.length <= 6)) {
					return uni.showToast({
						title: '密码不能少于6位',
						icon: 'none'
					})
				}
				const res =this.$ask({
					url: 'login/changePassword',
					data: {
						phoneNumber: this.phone,
						verifyCode: this.checkNumber,
						newPassword: this.password
					},
					method: 'post'
				})
			}
		}
	}
</script>

<style lang='less' scoped>
	#chartBox {
		height: 300rpx;
		margin-top: 100rpx;
		.addphone {
			width: 90%;
			border: 1px solid #eee;
			margin: 0 auto 20rpx auto;
			.addinput {
				height: 60rpx;
				ling-height: 60rpx;
				padding-left: 20rpx;
			}
		}
		.check {
			display: flex;
			justify-content: space-between;
			width:90%;
			margin:0 auto 20rpx auto;
			.addcode {
				border: 1px solid #eee;
				padding-left: 20rpx;
				width:60%;
				height: 60rpx;
				line-height: 60rpx;
			}
			.sendbtn {
				width:40%;
				height: 60rpx;
				line-height: 60rpx;
				margin: 0;
			}
		}
		.password {
			width:90%;
			margin:0 auto 20rpx auto;
			.addpassword {
				border: 1px solid #eee;
				padding-left: 20rpx;
				height: 60rpx;
				line-height: 60rpx;
			}
		}
		
	}
</style>
