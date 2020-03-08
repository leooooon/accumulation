<template>
	<view class="content">
		<!-- 搜索栏 -->
		<view class="serch-input">
			<view class="postion">
				长沙
			</view>
			<view class="leave">
				<view class="">
					<text >住</text>
					<text class="ls">03-04</text>
				</view>
				<view class="">
					<text>离</text>
					<text class="ls">04-05</text>
				</view>
			</view>
			<input type="text" placeholder="搜索地点/品牌/酒店名称" />
		</view>
		
		<!-- tabControl -->
		<tabControl/>
	</view>
</template>

<script>
	import tabControl from './children/tabControll.vue'
	
	export default {
		components:{
			tabControl
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.serch-input{
		display: flex;
		margin: 20rpx;
		align-items: center;
		height: 58rpx;
		border-radius:29rpx;
		background-color: #F9F9F9;
	}
	.postion{
		width: 140rpx;
		text-align: center;
		color: #2C99FF;
	}
	.leave{
		color: #606266;
		font-size: 18rpx;
		padding-right: 40rpx;
		border-right: 1px solid #EAEAEA;
	}
	.ls{
		color: #2C99FF;
		margin-left: 6rpx;
	}
	.serch-input input{
		padding-left: 20rpx;
	}
</style>
