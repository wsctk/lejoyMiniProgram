<template>
	<view id='stu'>
		<view class='title'>【{{classname}}】现在有{{howmany}}名学员</view>
		<view class='box'>
			<view v-for='item in students' :key='item.id' class='student'>
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				classname: '班级名称',
				howmany: 30,
				students: [
					{name: '谷小二', id:1},
					{name: '谷小二', id:2},
					{name: '谷小二', id:3},
					{name: '谷小二', id:4},
					{name: '谷小二', id:5},
					{name: '谷小二', id:6},
					{name: '谷小二', id:7},
					{name: '谷小二', id:8},
					{name: '谷小二', id:9},
					{name: '谷小二', id:10},
					{name: '谷小二', id:11},
					{name: '谷小二', id:12},
					{name: '谷小二', id:13},
					{name: '谷小二', id:14},
					{name: '谷小二', id:15},
					{name: '谷小二', id:16},
					{name: '谷小二', id:17},
					{name: '谷小二', id:18},
					{name: '谷小二', id:19},
					{name: '谷小二', id:20},
					{name: '谷小二', id:21},
					{name: '谷小二', id:22},
					{name: '谷小二', id:23},
					{name: '谷小二', id:24},
					{name: '谷小二', id:25},
					{name: '谷小二', id:26}
				]
			}
		}
	}
</script>

<style lang='less' scoped>
	#stu {
		text-align: center;
		.title {
			font-size: 36rpx;
			height: 80rpx;
			line-height: 80rpx;
			margin-bottom: 40rpx;
		}
		.box {
			display: flex;
			flex-wrap: wrap;
			align-content: space-between;
			height:800rpx;
			margin-right:-10rpx;
			.student {
				width: 180rpx;
				height: 70rpx;
				margin-right:10rpx;
				font-size: 26rpx;
				box-sizing: border-box;
				line-height: 70rpx;
				border: 1px solid #aaa;
				border-radius: 14rpx;
			}
		}
	}
</style>
