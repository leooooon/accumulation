<template>
	<view class="content">
		<view class="item">
			<image src="../../../static/image/home/position_icon.png" class="hotel-image"></image>

			<view class="bottom-box">
				<view class="layout hotel-box">
					<view class="one-title hotel-name">
						佳兴世尊酒店
					</view>
					<text class="secondary-text">五星级酒店</text>
				</view>

				<view class="layout hotel-box">
					<view class="score">
						<text class="one-title">4.8</text>
						<view class="w-line">
						</view>
					</view>
					<text class="secondary-text">距我0.5km·近金星中路</text>
				</view>
			</view>

			<view class="price-box">
				<view class="">
					<text class="price" @tap="popup">￥142</text>
					<text class="qi">起</text>
					<text class="dele">284￥</text>
				</view>
				<view class="price-icon">
					<image src="../../../static/image/home/banjia.png" mode=""></image>
				</view>
			</view>
		</view>

		<view class="item">
			<image src="../../../static/image/home/position_icon.png" class="hotel-image"></image>

			<view class="bottom-box">
				<view class="layout hotel-box">
					<view class="one-title hotel-name">
						佳兴世尊酒店
					</view>
					<text class="secondary-text">五星级酒店</text>
				</view>

				<view class="layout hotel-box">
					<view class="score">
						<text class="one-title">4.8</text>
						<view class="w-line">
						</view>
					</view>
					<text class="secondary-text">距我0.5km·近金星中路</text>
				</view>
			</view>

			<view class="price-box">
				<view class="">
					<text class="price" @tap="popup">￥142</text>
					<text class="qi">起</text>
					<text class="delel">284￥</text>
				</view>
				<view class="price-icon">
					<image src="../../../static/image/home/banjia.png" mode=""></image>
				</view>
			</view>
		</view>

		<uni-popup ref="popup" type="bottom" animation>
			<view class="popup-content">
				<view class="title-box">
					<view class="title">
						<text class="one-title">价格优惠说明</text>
					</view>
					<view class="close">
						<image src="../../../static/image/home/close.png" mode=""></image>
					</view>
				</view>
				<view class="center-box">
					<view class="center">
						<text class="basefont">
							集时会员钜惠
						</text>
						<text class="basefont delel">
							￥284
						</text>
					</view>
					<view class="center">
						<text class="basefont">
							(收集时间满24小时)
						</text>
						<text class="special">
							-￥142
						</text>
					</view>
				</view>
				
				<view class="bottom-describe">
					<view class="special  bottom-price">
						<text class="fr special">-￥142</text>
					</view>
					<view class="bottom-title basefont">
						集时会员钜惠
					</view>
					<view class="bottom-xplain">
						 划横线后的价格为集时会员专享半价房价格。时间账户储存时间≥24小时，即可在平台上任意酒店兑换半价入住（半价房不可享受时间储存服务）；
						产品服务展示的划横线价格为产品服务的门市价、服务提供商的指导价、零售价、市场价或该产品服务在集时平台上曾经展示过的销售价等，并非原价；由于地区、时间的差异性和市场行情的波动，该价格可能会与您预订时展示的不一致，该价格仅供您参考。                         
					</view>
				</view>
				 <view class="btn-box">
				 	<image src="../../../static/image/home/chakanjiudian.png" mode="" class="hotel-btn"></image>
				 </view>
				


			</view>

		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components: {
			uniPopup
		},
		data() {
			return {

			};
		},
		methods: {
			popup() {
				this.$refs.popup.open()
			}
		}

	}
</script>

<style>
	.content {
		display: flex;
		justify-content: space-between;
	}

	.item {
		width: 344rpx;
		margin: 20rpx 0;
	}

	.hotel-image {
		width: 100%;
		height: 205rpx;
	}

	.hotel-name,
	.score {
		margin-right: 11rpx;
	}

	.bottom-box {
		padding-left: 15rpx;
	}

	.score {
		position: relative;

	}

	.w-line {
		position: absolute;
		bottom: 0rpx;
		width: 52rpx;
		height: 8rpx;
		background-color: #FFDC2E;
	}

	.price {
		font-size: 38rpx;
		color: #FF4E3C;
	}

	.qi,
	.delel {
		color: #ccc;
		font-size: 24rpx;
		margin-right: 20rpx;
	}



	.price-icon image {
		width: 116rpx;
		height: 27rpx;
	}

	.price-icon {
		margin-left: 4rpx;
		margin-top: -10rpx;
	}

	.hotel-box {
		line-height: 46rpx;
	}

	/* popup */
	.popup-content {
		padding-bottom: 55rpx;
		display: block;
		background-color: #fff;
		border-radius: 16rpx 16rpx 0 0;
	}

	.title-box {
		position: relative;
		height: 95rpx;
		text-align: center;
		border-bottom: 1px solid#EAEAEA;
		line-height: 95rpx;
	}

	.close image {
		position: absolute;
		right: 52rpx;
		top: 34rpx;
		width: 30rpx;
		height: 30rpx;
	}


	.center-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 204rpx;
		padding: 0 50rpx;
		border-bottom: 1px solid#EAEAEA;
	}

	.center {
		display: flex;
		justify-content: space-between;
	}

	.basefont {
		font-size: 32rpx;
		font-weight: bold;
		color: #222;
	}

	.special {
		color: #FF4E3C;
		font-size: 28rpx;
		font-weight: bold;
	}
	.bottom-describe{
		padding: 0 50rpx;
		color: #606266;
		font-size: 28rpx;
		text-align: justify;
		
	}
	.hotel-btn{
		width: 590rpx;
		height: 100rpx;
		
	}
	.btn-box{
		text-align: center;
		margin-top: 50rpx;
		
	}
	.bottom-price{
		padding-top:30rpx ;
		height: 96rpx;
	}
	.bottom-title{
		line-height: 60rpx;
	}
</style>
