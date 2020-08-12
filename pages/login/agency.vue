<template>
	<view id="loginBox">
		<image class="logo" src="/static/logo.png"></image>
		<form>
			<view class="userName">
				<input type='text' class='usernameInput' placeholder="用户名" name="input"></input>
			</view>
			<view class="password">
				<input type='text' class="passwordInput" placeholder="密码" name="input"></input>
			</view>
			<view class='btns'>
				<navigator url="/pages/home-page/home_page" open-type="switchTab">
					<button type='primary' size='small' class='loginBtn'>登录</button>
				</navigator>
				<navigator url="/pages/home-page/home_page" open-type="switchTab">
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
				username: '用户名：',
				password: '密码：'
			}
		},
		onLoad() {

		},
		methods: {

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
