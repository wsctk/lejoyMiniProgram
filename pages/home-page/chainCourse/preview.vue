<template>
	<view>
		<view id='reappear'>
			<view class='extraData'>
				<view class='common'>课程名：{{courseName}}</view>
				<view class='common'>费用：{{price}}</view>
				<view class='common'>人数限制：{{personNumber}}</view>
				<view class='common'>地点：{{place}}</view>
				<view class='time'>
					<view class='start'>起始时间：{{realStartTime}}</view>
					--
					<view class='end'>截止时间：{{realEndTime}}</view>
				</view>
			</view>
			<view v-for='item in itemList' :key='item.id' class='showbox'>
				<view class='bigImg' v-if="item.mediaType==='bigImg'">
					<image class='bImg' :src='item.content'></image>
				</view>
				<view v-if="item.mediaType==='multiImg'" class='smallimgs'>
					<image class='sImg' v-for='img in item.contentList' :key='img.id' :src='img.content'></image>
				</view>
				<textarea v-if="item.mediaType==='text'" v-model='item.content' class='textarea' auto-height></textarea>
				<view class='videobox' v-if="item.mediaType==='video'">
					<video :src='item.content' class='video'></video>
				</view>
				<view class='tags' v-if="item.mediaType==='tag'">
					<view v-for='tag in item.contentList' :key='tag.id' class='tag'>
						{{tag.content}}
					</view>
				</view>
			</view>
		</view>
		<view id='btns' v-if='notvisit'>
			<button @click='submit'>上传</button>
			<button @click='revise'>返回修改</button>
		</view>
		<view id='form' v-else>
			<view class='peoplechain'>
				<view class='courseName'></view>
				<view class='who' v-for='(item,index) in chainList' :key='item.id'>
					<view class='index'>{{index}}</view>
					<image :src='item.src' class='avator'></image>
					<view class='name'>{{item.name}}</view>
				</view>
			</view>
			<button open-type="getUserInfo" @getuserinfo='IwantChain'>我要接龙</button>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				courseName: '',
				price: 0,
				personNumber: 0,
				place: '',
				starttime: 0,
				realStartTime: '',
				endtime: 0,
				realEndTime: '',
				itemList: [],
				notvisit: true,
				chainName: '',
				chainphone: '',
				index: 0,
				transform: [],
				chainList: []
			}
		},
		onLoad (options) {
			const uid = options.uid
			const id = options.id
			if (typeof(uid) === 'string') {
				this.getDragon(uid, id)
				this.notvisit = false
			} else {
				this.courseName = uni.getStorageSync('title')
				this.price = uni.getStorageSync('price')
				this.personNumber = uni.getStorageSync('personNumber')
				this.place = uni.getStorageSync('place')
				this.starttime = uni.getStorageSync('createTime')
				this.endtime = uni.getStorageSync('endTime')
				this.itemList = uni.getStorageSync('contentsList')
			}
			const stime = new Date(this.starttime)
			const year1 = stime.getFullYear()
			const month1 = (stime.getMonth() + '').padStart(2, '0')
			const day1 = (stime.getDate() + '').padStart(2, '0')
			const hour1 = (stime.getHours() + '').padStart(2, '0')
			const min1 = (stime.getMinutes() + '').padStart(2, '0')
			const sec1 = (stime.getSeconds() + '').padStart(2, '0')
			this.realStartTime = year1 + '-' + month1 + '-' + day1 + ' ' + hour1 + ':' + min1 + ':' + sec1
			const etime = new Date(this.endtime)
			const year2 = etime.getFullYear()
			const month2 = (etime.getMonth() + '').padStart(2, '0')
			const day2 = (etime.getDate() + '').padStart(2, '0')
			const hour2 = (etime.getHours() + '').padStart(2, '0')
			const min2 = (etime.getMinutes() + '').padStart(2, '0')
			const sec2 = (etime.getSeconds() + '').padStart(2, '0')
			this.realEndTime = year2 + '-' + month2 + '-' + day2 + ' ' + hour2 + ':' + min2 + ':' + sec2
		},
		methods: {
			revise () {
				uni.navigateBack({
					url: './addNewCourse'
				})
			},
			async getDragon (userid, id) {
				uni.setStorageSync('chainId', id)
				const res = await this.$ask({
					url: 'dragon/getDragon',
					data: { uid: userid, id: id}
				})
				console.log(res)
				this.courseName = res.data.data.title
				this.price = res.data.data.price
				this.personNumber = res.data.data.allowedNumberOfPeople
				this.place = res.data.data.location
				this.starttime = res.data.data.createTime
				this.endtime = res.data.data.endTime
				this.transform = res.data.data.contentsList
				for (let i = 0; i< this.transform.length; i++) {
					switch (this.transform[i].mediaType) {
						case 'bigImg':
						case 'video':
						case 'text':
						 this.itemList.push(this.transform[i])
						 this.index += 1
						 break
						case 'img':
						if (i === 0) {
							this.itemList.push({ mediaType: 'multiImg', contentList: [] })
						} else if (this.transform[i-1].mediaType !== 'img') {
							this.itemList.push({ mediaType: 'multiImg', contentList: [] })
						}
						this.itemList[this.index].contentList.push(this.transform[i])
						 if (i === (this.transform.length -1)) {
						 	this.index = 0
						 } else if ( this.transform[i+1].mediaType !=='img') {
						 	this.index += 1
						 }
						 break
						case 'txt':
						 if (i === 0) {
						 	this.itemList.push({ mediaType: 'tag', contentList: [] })
						 } else if (this.transform[i-1].mediaType !== 'txt') {
						 	this.itemList.push({ mediaType: 'tag', contentList: [] })
						 }
						 this.itemList[this.index].contentList.push(this.transform[i])
						 if (i === (this.transform.length-1)) {
							this.index = 0
						 } else if ( this.transform[i+1].mediaType !=='txt') {
							this.index += 1
						 }
						 break
					}
					
				}
				this.index = 0
				this.getwhocome(id)
				
			},
			async getwhocome (id) {
				const res = await this.$ask({
					url: 'dragon/getDragonUser',
					data: { did: id}
				})
				console.log(res)
				this.chainList = res.data.data
			},
			IwantChain (e) {
				uni.setStorageSync('nickname', e.detail.userInfo.nickName)
				uni.setStorageSync('avatar', e.detail.userInfo.avatarUrl)
				uni.navigateTo({
					url: `/pages/home-page/chainCourse/iwantChain?courseName=${this.courseName}&stime=${this.realStartTime}`
				})
			},
			async submit () {
				const userid = uni.getStorageSync('userId')
				const res = await this.$ask({
					url: 'dragon/publishDragon',
					data: {
						uid: userid,
						title: this.courseName,
						isFree: 0,
						price: this.price,
						createTime: this.starttime,
						endTime: this.endtime,
						activityDetail: { detail: this.itemList }
					},
					method: 'post',
					header: {
						'content-tyep': 'application/json'
					}
				})
				console.log(res)
				uni.setStorageSync('id', res.data.data)
				uni.navigateTo({
					url: '/pages/home-page/chainCourse/relay'
				})
			}
		}
	}
</script>

<style lang='less' scoped>
	#reappear {
		.showbox {
			height: 400rpx;
			width:100%;
			.bigImg {
			}
			.smallimgs {
				width:100%;
				height:100%;
				display: flex;
				justify-content: space-around;
				flex-wrap: wrap;
				.sImg {
					width: 130rpx;
					height:130rpx;
				}
			}
		}
	}
	#form {
		.name {
			display: flex;
		}
		.phone {
			display: flex;
		}
	}
</style>
