<template>
	<view>
		<view style='height:100rpx;'>
			<navigator url="../home_page" open-type="navigate" hover-class="other-navigator-hover">
				<uni-icons type="arrowleft" size="24" class="navBackIcon"></uni-icons>
			</navigator>
		</view>
		<view id='tabs'>
			<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="text" active-color="#0f0f0f"></uni-segmented-control>
			<view class="content">
				<view v-if="current === 0">
					<view class='classroomAd' v-for='item in classroomList' :key='item.id'>
						<navigator url="./classroomReserveDetail" open-type="navigate" hover-class="other-navigator-hover">
							<image class='adImage' :src='item.src'></image>
							<view class='adDetails'>
								<view class='classroomName'>
									<view class='nameLeft'>{{item.name}}({{item.number}}人)</view>
									<view class='price'><text class='leftPrice'>￥{{item.price}}</text>/{{item.perHour}}小时</view>
								</view>
								<view class='address'>
									<uni-icons type="location-filled" size="12" class='locationIcon'></uni-icons>{{item.address}}
								</view>
								<view class='trainingAid'>
									<uni-icons type="starhalf" size="12" class='locationIcon'></uni-icons>{{item.trainingAid}}
								</view>
							</view>
						</navigator>
					</view>
				</view>
				<view v-if="current === 1">
					<view class='classroomAd' v-for='item in classroomList' :key='item.id'>
						<image class='adImage' :src='item.src'></image>
						<view class='adDetails'>
							<view class='classroomName'>
								<view class='nameLeft'>{{item.name}}({{item.number}}人)</view>
								<view class='price'><text class='leftPrice'>￥{{item.price}}</text>/{{item.perHour}}小时</view>
							</view>
							<view class='address'>
								<uni-icons type="location-filled" size="12" class='locationIcon'></uni-icons>{{item.address}}
							</view>
							<view class='trainingAid'>
								<uni-icons type="starhalf" size="12" class='locationIcon'></uni-icons>{{item.trainingAid}}
							</view>
						</view>
					</view>
				</view>
				<view v-if="current === 2">
					<uni-calendar 
					    :insert="true"
					    :lunar="true" 
					    :start-date="'2019-3-2'"
					    :end-date="'2019-5-20'"
					    @change="change"
					/>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	export default {
		components: {uniSegmentedControl, uniIcons, uniCalendar},
		data() {
			return {
				items: ['今天','明天','选择日期'],
				current: 0,
				classroomList: [
					{id:1, name: 'PHP会议室', number: 12, price: 40.00, perHour: 0.5, address: '南开广开四马路乐享教室', trainingAid: '白板、课桌、椅子（特殊需求可提交选择', src: 'https://img.yzcdn.cn/upload_files/2020/06/28/Fhxh7YuXOq2SfSGeKeqTgr2CULlG.jpg!large.webp'},
					{id:2, name: 'PHP会议室', number: 12, price: 40.00, perHour: 0.5, address: '南开广开四马路乐享教室', trainingAid: '白板、课桌、椅子（特殊需求可提交选择', src: 'https://img.yzcdn.cn/upload_files/2020/06/28/Fhxh7YuXOq2SfSGeKeqTgr2CULlG.jpg!large.webp'},
					{id:3, name: 'PHP会议室', number: 12, price: 40.00, perHour: 0.5, address: '南开广开四马路乐享教室', trainingAid: '白板、课桌、椅子（特殊需求可提交选择', src: 'https://img.yzcdn.cn/upload_files/2020/06/28/Fhxh7YuXOq2SfSGeKeqTgr2CULlG.jpg!large.webp'},
					{id:4, name: 'PHP会议室', number: 12, price: 40.00, perHour: 0.5, address: '南开广开四马路乐享教室', trainingAid: '白板、课桌、椅子（特殊需求可提交选择', src: 'https://img.yzcdn.cn/upload_files/2020/06/28/Fhxh7YuXOq2SfSGeKeqTgr2CULlG.jpg!large.webp'}
				]
			}
		},
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			},
			change () {}
		}
	}
</script>
<style lang='less' scoped>
	#tabs {
		padding: 0 20rpx;
		.classroomAd {
			padding: 10rpx 0;
			.adImage {
				height:330rpx;
				width: 100%;
			}
			.adDetails {
				padding-top:18rpx;
				.classroomName {
					display: flex;
					align-items: center;
					justify-content: space-between;
					.nameLeft {
						font-size:30rpx;
						font-weight: bold;
					}
					.price {
						font-size:22rpx;
						font-weight: 400;
						.leftPrice {
							color:#f00;
						}
					}
				}
				.address {
					margin:10rpx 0;
					font-size: 21rpx;
					color:#aaa;
					font-weight: 400;
					.locationIcon {
						margin-right:30rpx;
					}
				}
				.trainingAid {
					margin:10rpx 0 24rpx 0;
					font-size: 21rpx;
					color:#aaa;
					font-weight: 400;
					.locationIcon {
						margin-right:30rpx;
					}
				}
			}
		}
	}
</style>
