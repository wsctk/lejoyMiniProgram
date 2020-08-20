<template>
	<view>
		<view class="mask" v-if="visible1" @click="$emit('cancer')"></view>
		<view class="pickerBtn" v-if="visible1">
			<view class="cancer" @click="$emit('cancer')">取消</view>
			<view class="confirm" @click="$emit('confirm',realvalue)">确定</view>
		</view>
		<view>
		<picker-view v-if="visible1" :indicator-style="indicatorStyle" :value="value" @change="bindChange" class='picker'>
			<picker-view-column class='column'>
				<view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
			</picker-view-column>
			<picker-view-column class='column'>
				<view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
			</picker-view-column>
			<picker-view-column class='column'>
				<view class="item" v-for="(item,index) in days" :key="index">{{item}}日</view>
			</picker-view-column>
			<picker-view-column class='column'>
				<view class="item" v-for="(item,index) in hours" :key="index">{{item}}时</view>
			</picker-view-column>
			<picker-view-column class='column'>
				<view class="item" v-for="(item,index) in mins" :key="index">{{item}}分</view>
			</picker-view-column>
			<picker-view-column class='column'>
				<view class="item" v-for="(item,index) in secs" :key="index">{{item}}秒</view>
			</picker-view-column>
		</picker-view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			visible1: {
				type: Boolean,
				value: true
			}
		},
		data () {
			const date = new Date()
			const years = []
			const year = date.getFullYear()
			const months = []
			const month = date.getMonth() + 1
			const days = []
			const days1 = []
			const days2 = []
			const days3 = []
			const days4 = []
			const day = date.getDate()
			const hours = []
			const hour = date.getHours()
			const mins = []
			const min = date.getMinutes()
			const secs = []
			const sec = date.getSeconds()
			for (let i = 1990; i <= date.getFullYear(); i++) {
				years.push(i)
			}
			for (let i = 1; i <= 12; i++) {
				months.push((i + '').padStart(2, '0'))
			}
			for (let i = 1; i <= 31; i++) {
				days.push((i + '').padStart(2, '0'))
			}
			for (let i = 1; i <= 31; i++) {
				days1.push((i + '').padStart(2, '0'))
			}
			for (let i = 1; i <= 30; i++) {
				days2.push((i + '').padStart(2, '0'))
			}
			for (let i = 1; i <= 29; i++) {
				days3.push((i + '').padStart(2, '0'))
			}
			for (let i = 1; i <= 28; i++) {
				days4.push((i + '').padStart(2, '0'))
			}
			for (let i = 0; i <= 23; i++) {
				hours.push((i + '').padStart(2, '0'))
			}
			for (let i = 0; i <= 59; i++) {
				mins.push((i + '').padStart(2, '0'))
			}
			for (let i = 0; i <= 59; i++) {
				secs.push((i + '').padStart(2, '0'))
			}
			return {
				years,
				year,
				months,
				month,
				days,
				days1,
				days2,
				days3,
				days4,
				day,
				hours,
				hour,
				mins,
				min,
				secs,
				sec,
				value: [year, month -1 , day - 1,hour,min,sec],
				realvalue: [year, month, day,hour,min,sec],
				indicatorStyle: `height: 28px;`
			}
		},
		methods: {
			bindChange (e) {
				const val = e.detail.value
				console.log(this.months[val[1]])
				switch (`${this.months[val[1]]}`) {
					case '01':
					case '03':
					case '05':
					case '07':
					case '08':
					case '10':
					case '12':
						this.days = this.days1;
						break;
					case '04':
					case '06':
					case '09':
					case '11':
						this.days = this.days2;
						break;
					default:
						this.days = this.days3;
						break
				}
				if ((this.years[val[0]] % 4) === 0 && `${this.months[val[1]]}` === '02') {
					this.days = this.days4
				}
				this.realvalue[0] = this.years[val[0]]
				this.realvalue[1] = this.months[val[1]]
				this.realvalue[2] = this.days[val[2]]
				this.realvalue[3] = this.hours[val[3]]
				this.realvalue[4] = this.mins[val[4]]
				this.realvalue[5] = this.secs[val[5]]
			}
		}
	}
</script>

<style lang='less' scoped>
	.picker {
	  background-color: #fff;
	  width: 100%;
	  height: 400rpx;
	  position: fixed;
	  bottom: 0;
	  z-index: 1;
	  .column {
	    font-size: 40rpx;
	    color: #000;
	    text-align: center;
	    line-height: 68rpx;
	  }
	}
	.indicator {
	  height: 68rpx;
	  border-top: 1rpx solid #ADB0A7;
	  border-bottom: 1rpx solid #ADB0A7;
	}
	.mask {
		position:absolute;
		top:0;
		left:0;
		margin-top: 0%;
		width: 100%;
		height: 100%;
		z-index: 0;
		background: rgba(0,0,0,0.5);
	}
	.pickerBtn {
		width: 100%;
		height: 101rpx;
		line-height: 101rpx;
		background-color: #fff;
		font-size: 40rpx;
		display: flex;
		justify-content: space-between;
		position: fixed;
		bottom: 401rpx;
		border-bottom: 1rpx solid #ADB0A7;
		z-index: 1;
		.cancer {
			color: #0076FF;
			padding-left: 40rpx;
			box-sizing: border-box;
		}
		.confirm {
			color: #FE4533;
			padding-right: 40rpx;
			box-sizing: border-box;
		}
	}
</style>
