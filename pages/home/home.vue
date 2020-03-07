<template>
	<view class="content">
		<view class="navbar">
			<view class="status_bar">
				<!-- 这里是状态栏 -->
			</view>
			<image src="../../static/image/logo.png" mode="widthFix" class="logo" />
		</view>
		<!-- 搜索酒店 -->
		<searchHotel />
		<!-- 广告位 -->
		<view class="advertisement">
			广告位
		</view>
		
		<view class="recommend">
			<view class="line"></view>
			<view class="one-title love">
				猜你喜欢
			</view>
		</view>
		
		<!-- 酒店数据展示 -->
		<hotelList/>
		
	</view>
</template>

<script>
	import searchHotel from './children/searchHotel.vue'
    import hotelList from './children/hotelList.vue'
	export default {
		components: {
			searchHotel,
			hotelList
			
		},
		data() {
			return {
				goods: [{
						price: 50
					},
					{
						price: 50
					},
					{
						price: 50
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}

	.logo {
		width: 365upx;
		height: 60upx;
		margin-top: 21upx;
		margin-left: 34upx;
	}

	.advertisement {
		height: 170rpx;
		margin: 23rpx auto;
		border-radius: 16rpx;
		background-color: #7CD0FE;
	}
	.recommend{
		display: flex;
		align-items: center;
		
	}
	.love{
		font-size: 36rpx;
	}
	.line {
		width: 6rpx;
		height: 36rpx;
		margin-right: 27rpx;
		background-color: #FFCF34;
	}
</style>
