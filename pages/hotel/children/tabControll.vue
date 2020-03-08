<template>
	<view class="content">
		<view class="tab-control">
			<block v-for="(item,index) in titles" :key="index">
				<view class="item" @tap="select(index)">
					<text>{{item}}</text>
					<image src="../../../static/image/hotel/zk.svg" mode=""></image>
				</view>
			</block>
			<view class="line line-one">

			</view>
			<view class="line line-tow">

			</view>
		</view>
		<view class="container" v-show="currentIndex==0 && isshow">
			<view class="top-box">
				<view class="">
					<text>星级</text>
				<text>(可多选)</text>
				</view>
				<view class="tag layout-xy-center">
					<view class="tag-item">
						不限
					</view>
					<view class="tag-item">
						经济
					</view>
					<view class="tag-item">
						三星舒适
					</view>
					<view class="tag-item">
						三星舒适
					</view>	
				</view>
				
			</view>
			
			<view class="center-box">
				
			</view>
			
			
			<view class="bottom-btn layout-xy-center">
				<view class="reset-btn">
					重置
				</view>
				<view class="complete-btn">
					完成
				</view>
			</view>
		</view>
		<view class="container" v-show="currentIndex==1 && isshow">
			2
		</view>
		<view class="container" v-show="currentIndex==2 && isshow">
			3
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex: null,
				isshow: false,
				titles: ["档次价格", "位置区域", "筛选"]
			};
		},
		methods: {
			select(index) {
				if (this.currentIndex == index) {
					this.isshow = !this.isshow
				} else {
					this.isshow = true
				}
				this.currentIndex = index
			}
		}
	}
</script>

<style>
	page{
		padding: 0;
	}
	
	.tab-control {
		position: relative;
		display: flex;
		height: 86rpx;
		color: #0E2946;
		font-size: 26rpx;
		border-bottom: 1px solid #eee;
	}

	.item {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	.item image {
		width: 30rpx;
		margin-left: 15rpx;
	}

	.container {
		padding: 0 20rpx;
		width: 100%;
		height: 887.5rpx;
		border-top: 1rpx solid #eee;
		background-color: pink;
	}

	.line {
		position: absolute;
		top: 30rpx;
		width: 1rpx;
		height: 26rpx;
		background-color: #B1B7C3;
	}

	.line-one {
		left: 241rpx;
	}

	.line-tow {
		right: 241rpx;
	}

	/* tabcontrol */
	.bottom-btn{
		justify-content: space-between;
	}
	.tag{
		justify-content: space-between;
		text-align: center;
		flex-wrap: wrap;
	}
	.tag-item{
		width: 212rpx;
		height: 68rpx;
		line-height: 68rpx;
		margin-bottom: 24rpx;
		color: #303133;
		background-color: #F6F6F6;
		border-radius: 8rpx;
	}
	.center-box{
		height: 490rpx;
		border-top: 1px solid #EEEEEE;
		border-bottom: 1px solid #EEEEEE;
	}
</style>
