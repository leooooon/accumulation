<template>
	<view class="content">
		<view class="item">
			<view class="product" v-for="(goods) in goodsList" :key="goods.goods_id">
				<image mode="widthFix" :src="goods.img"></image>
				<view class="name">
					<text>{{goods.name}}</text>
					<text>{{goods.hotel}}</text>
				</view>
				<view class="grade">
					<text>{{goods.grade}}</text>
					<text>{{goods.distance}}</text>
				</view>
				<view class="info">
					<view class="price" @tap="popup()">
						<text>￥</text>
						{{goods.price}}
						<text>起</text>
					</view>
					<view class="slogan">
						￥{{goods.slogan}}
					</view>
				</view>
				<view class="banjia">
					<image src="../../../static/image/home/banjia.png" mode=""></image>
				</view>
			</view>
		</view>





		<!-- <uni-popup ref="popup" type="bottom" animation>
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

		</uni-popup> -->
	</view>
</template>

<script>
	// import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components: {
			// uniPopup
		},
		data() {
			return {
				//商品数据
				goodsList: [{
						goods_id: 1,
						img: 'http://a3.att.hudong.com/07/06/01300309316150141448065118440.jpg',
						name: '佳兴世尊酒店',
						price: '142',
						slogan: '142',
						hotel: '五星级酒店',
						distance: '距我0.5km·近金星中路',
						grade: '4.8'
					},
					{
						goods_id: 1,
						img: 'http://a3.att.hudong.com/07/06/01300309316150141448065118440.jpg',
						name: '佳兴世尊酒店',
						price: '142',
						slogan: '142',
						hotel: '五星级酒店',
						distance: '距我0.5km·近金星中路',
						grade: '4.8'
					},
					{
						goods_id: 1,
						img: 'http://a3.att.hudong.com/07/06/01300309316150141448065118440.jpg',
						name: '佳兴世尊酒店',
						price: '142',
						slogan: '142',
						hotel: '五星级酒店',
						distance: '距我0.5km·近金星中路',
						grade: '4.8'
					},
					{
						goods_id: 1,
						img: 'http://a3.att.hudong.com/07/06/01300309316150141448065118440.jpg',
						name: '佳兴世尊酒店',
						price: '142',
						slogan: '142',
						hotel: '五星级酒店',
						distance: '距我0.5km·近金星中路',
						grade: '4.8'
					},
					{
						goods_id: 1,
						img: 'http://a3.att.hudong.com/07/06/01300309316150141448065118440.jpg',
						name: '佳兴世尊酒店',
						price: '142',
						slogan: '142',
						hotel: '五星级酒店',
						distance: '距我0.5km·近金星中路',
						grade: '4.8'
					},
					{
						goods_id: 1,
						img: 'http://a3.att.hudong.com/07/06/01300309316150141448065118440.jpg',
						name: '佳兴世尊酒店',
						price: '142',
						slogan: '142',
						hotel: '五星级酒店',
						distance: '距我0.5km·近金星中路',
						grade: '4.8'
					},
				],
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
	.item {
		padding-bottom: 3vw;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.product {
		width: 344rpx;
		height: 426rpx;
		border-radius: 12rpx;
		border: 1px solid #EAEAEA;
		background-color: #fff;
		margin-bottom: 25rpx;
	}

	.product image {
		width: 100%;
		height: 205.4rpx;
		border-radius: 12rpx 12rpx 0 0;
		vertical-align: middle;
	}

	.name,
	.grade {
		width: 100%;
		padding: 10rpx 12rpx;
		padding-bottom: 0;
		display: -webkit-box;
	}

	.name text:nth-child(1) {
		margin-right: 10rpx;
		color: #0B203B;
		font-size: 32rpx;
	}

	.name text:nth-child(2),
	.grade text:nth-child(2) {
		color: #909399;
		font-size: 23rpx;
	}

	.grade {
		padding: 0 12rpx;
	}

	.grade text {
		display: inline-block;
	}

	.grade text:nth-child(1) {
		margin-right: 10rpx;
		color: #303133;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 800;
		line-height: 23rpx;
		border-bottom: 8rpx solid #FFDC2E;
	}

	.grade text:nth-child(2) {
		font-size: 20rpx;
	}

	.info {
		display: flex;
		align-items: flex-start;
		width: 100%;
		padding: 0 12rpx;
		padding-top: 20rpx;
		line-height: 37rpx;
	}

	.info .price {
		margin-right: 15rpx;
		color: #FF4E3C;
		font-size: 38rpx;
		font-weight: 800;
	}

	.info .slogan {
		color: #ccc;
		font-size: 24rpx;
		font-weight: 800;
	}

	.price text:nth-of-type(1) {
		font-size: 24rpx;
	}

	.price text:nth-of-type(2) {
		color: #ccc;
		font-size: 24rpx;
	}

	.banjia {
		width: 100%;
		margin-top: 10rpx;
		padding: 0 12rpx;
	}

	.banjia image {
		width: 116rpx;
		height: 27rpx;
		vertical-align: top;
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

	.bottom-describe {
		padding: 0 50rpx;
		color: #606266;
		font-size: 28rpx;
		text-align: justify;

	}

	.hotel-btn {
		width: 590rpx;
		height: 100rpx;

	}

	.btn-box {
		text-align: center;
		margin-top: 50rpx;

	}

	.bottom-price {
		padding-top: 30rpx;
		height: 96rpx;
	}

	.bottom-title {
		line-height: 60rpx;
	}
</style>
