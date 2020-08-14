<template>
	<view id='chartBox'>
		<input v-model='phone' placeholder="请输入手机号"></input>
		<view class='check'>
			<input v-model='checkNumber' placeholder="输入验证码"></input>
			<button @click='getCode'>发送验证码</button>
		</view>
		<input v-model='password' placeholder="新密码"></input>
		<button @click='submit'>提交</button>
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
				const res = this.$ask({
					url: 'login/getVerifyCode',
					data: {
						phoneNumber: this.phone
					}
				})
			},
			async submit () {
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

<style>
</style>
