<template>
	<view class="content">
		<view class="tab-control">
			<block v-for="(item,index) in titles" :key="index">
				<view class="item" @tap="select(index)">
					<text>{{item}}</text>
					<image src="../../../static/image/hotel/zk.svg" mode=""></image>
				</view>
			</block>
		</view>
		<view class="container" v-show="currentIndex==0 && isshow">
		1
		</view>
		<view class="container"  v-show="currentIndex==1 && isshow">
		2
		</view>
		<view class="container"  v-show="currentIndex==2 && isshow">
		3
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex: null,
				isshow:false,
				titles: ["档次价格", "位置区域", "筛选"]
			};
		},
		methods: {
			select(index) {
				if(this.currentIndex==index){
					this.isshow=!this.isshow
				}else{
					this.isshow=true
				}
				this.currentIndex = index
			}
		}
	}
</script>

<style>
	.tab-control {
		display: flex;
		height: 86rpx;
	}

	.item {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	.item image {
		width: 32rpx;
		margin-left: 15rpx;
	}
	.container{
		width: 100%;
		height: 600rpx;
		background-color: pink;
	}
</style>
