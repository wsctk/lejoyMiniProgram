<template>
	<view>
		<view id='courseInfo'>
			<view class='courseName'>{{courseName}}</view>
			<view class='time'>{{startTime}}</view>
		</view>
		<view id='form'>
			<view class='form'>
				<view class='studentname'>学员姓名：<input v-model="studentname" placeholder="请输入姓名"></input></view>
				<view class='studentphone'>学员电话：<input v-model="studentphone" placeholder="请输入电话"></input></view>
				<view class='chooseCompus'>待定</view>
			</view>
			<button @click='enlist'>立即报名/支付</button>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				courseName: '',
				startTime: '',
				studentname: '',
				studentphone: ''
			}
		},
		onLoad (options) {
			this.courseName = options.courseName
			this.startTime = options.stime
		},
		methods: {
			async enlist () {
				const id = uni.getStorageSync('chainId')
				const nickname = uni.getStorageSync('nickname')
				const avatar = uni.getStorageSync('avatar')
				const res = await this.$ask({
					url: 'dragon/participate',
					data: { did: id, name: this.studentname, phone: this.studentphone, nickname: e.detail.userInfo.nickName, avatar: e.detail.userInfo.avatarUrl },
					method: 'post'
				})
				console.log(res)
				uni.showToast({
					title: '报名成功！'
				})
			}
		}
	}
</script>

<style>
</style>
