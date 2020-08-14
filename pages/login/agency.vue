<template>
	<view id="loginBox">
		<image class="logo" src="/static/logo.png"></image>
		<form>
			<view class="userName">
				<input type='text' class='usernameInput' placeholder="用户名" v-model="username"></input>
			</view>
			<view class="password">
				<input type='text' class="passwordInput" placeholder="密码" v-model="password"></input>
			</view>
			<view class='btns'>
				<button type='primary' size='small' class='loginBtn' @click='login'>登录</button>
				<navigator url="./forgetPassword">
					<button type='warn' size='small' class='loginBtn'>忘记密码</button>
				</navigator>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: ''
			}
		},
		onLoad() {

		},
		methods: {
			async login () {
				const res = this.$ask({
					url: 'login/doLoginByPassWord',
					data: {
						userName: this.username,
						password: this.password
					},
					method: 'post'
				})
			}
		}
	}
</script>

<style lang='less' scoped>
	#loginBox {
		.logo {
			display: block;
			height: 200rpx;
			width: 200rpx;
			margin: 200rpx auto;
			border-radius: 50%;
		}
		.userName, .password {
			margin-bottom: 40rpx;
			font-size: 40rpx;
		}
		.usernameInput, .passwordInput {
			margin:0 auto;
			width:70%;
			border:1px solid #bbb;
			border-radius: 10rpx;
			padding-left: 12rpx;
			height: 100rpx;
		}
		.userName {
			margin-top:40rpx;
		}
		.btns {
			display: flex;
			justify-content: space-between;
			width:70%;
			margin:0 auto;
			.loginBtn {
				width:200rpx;
				height:70rpx;
				line-height: 70rpx;
			}
		}
	}
</style>
