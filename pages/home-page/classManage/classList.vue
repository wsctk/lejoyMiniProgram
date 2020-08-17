<template>
	<view>
		<view id='filter'>
			<button class='city btn'>城市</button>
			<button class='inorder btn'>排序</button>
			<button class='area btn'>区域</button>
			<button class='teacher btn'>讲师</button>
		</view>
		<view id='classList'>
			<navigator v-for='item in classlist' :key='item.id' class='classNav' :url='item.url'>
				<view class='className text'>班级名称：{{item.name}}</view>
				<view class='school text'>所在校区：{{item.school}}</view>
				<view class='studentnumber text'>班级人数：{{item.number}}</view>
				<view class='teacher text'>授课讲师：{{item.teacher}}</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				classlist: [
					{ id: 1, url: './students', name: 'cs2020', school: '天津小学堂', number: 30, teacher: 'teacher Chen'},
					{ id: 2, url: './students', name: 'cs2020', school: '天津小学堂', number: 30, teacher: 'teacher Chen'},
					{ id: 3, url: './students', name: 'cs2020', school: '天津小学堂', number: 30, teacher: 'teacher Chen'},
					{ id: 4, url: './students', name: 'cs2020', school: '天津小学堂', number: 30, teacher: 'teacher Chen'},
					{ id: 5, url: './students', name: 'cs2020', school: '天津小学堂', number: 30, teacher: 'teacher Chen'},
					{ id: 6, url: './students', name: 'cs2020', school: '天津小学堂', number: 30, teacher: 'teacher Chen'},
				]
			}
		}
	}
</script>

<style lang='less' scoped>
	#filter {
		width:100%;
		display: flex;
		justify-content: space-around;
		text-align: center;
		.btn {
			width: 23%;
			height:80rpx;
			line-height: 80rpx;
			border: 1px solid #eee;
			border-radius: 10rpx;
		}
	}
	#classList {
		width: 100%;
		text-align: center;
		.classNav {
			padding: 40rpx 0 50rpx 0;
			border-top: 1px solid #eee;
			border-bottom: 1px solid #eee;
			.text {
				font-size: 32rpx;
				height:40rpx;
				line-height: 40rpx;
			}
		}
	}
</style>
