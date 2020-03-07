<template>
	<view class="content">
		<text class="search-hotel">搜索酒店</text>
		<text class="separate">|</text>
		<text class="explain"> 时间可以存，提前离店不浪费！</text>
		<view class="box">
			<image src="../../../static/image/home/search_icon.png" mode="widthFix" class="search_icon"></image>
			<input type="text" v-model="position" />
			<image src="../../../static/image/home/position_icon.png" mode="widthFix" class="position_icon"></image>
		</view>
		<view class="box">
			<view class="item">
				<view class="one-title">03月04日</view>
				<text class="secondary-text">今日入住</text>
			</view>
			<view class="">
				-
			</view>
			<view class="item">
				<view class="one-title">03月05日</view>
				<text class="secondary-text">明日离店</text>
			</view>
			<view class="secondary-text">
				共一晚 >
			</view>
		</view>
		<view class=" box serch-box">
			<input type="text" value="" placeholder="关键词/地点/品牌/酒店名称" />
			<view class="secondary-text">
				>
			</view>
		</view>
		<view class="btn">
			<image src="../../../static/image/home/search_hotel_button.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				position: '长沙'
			};
		}
	}
</script>

<style>
	.content {
		width: 710rpx;
		height: 543rpx;
		margin-top: 40rpx;
		padding-top: 24rpx;
		padding-left: 46rpx;
		box-shadow: 0 0 20rpx 0 rgba(124, 124, 124, 0.2);
		border-radius: 16rpx;
	}

	.search-hotel {
		color: #303133;
		font-size: 36rpx;
		font-weight: bold;
		margin-right: 6rpx;
	}

	.separate {
		width: 4rpx;
		height: 30px;
		margin-right: 6rpx;
	}

	.explain {
		color: #909399;
		font-size: 30rpx;
	}

	.box {
		display: flex;
		height: 110rpx;
		width: 626rpx;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #EAEAEA;
	}

	.search_icon {
		width: 37rpx;
		height: 37rpx;
	}

	.position_icon {
		width: 73rpx;
		height: 57rpx;
		margin-right: 59rpx;
	}

	.item {
		text-align: center;

	}

	.serch-box {
		height: 89rpx;
		justify-content: space-between;
		align-items: center;
		border-bottom: none;
	}

	.serch-box input {
		width: 100%;
	}

	.btn image {
		width: 625rpx;
		height: 135rpx;
		margin-top: 10rpx;
	}
	
</style>
