<template>
	<view class="center">
		<HMfilterDropdown :filterData="filterData" :defaultSelected ="filterDropdownValue" @confirm="confirm"></HMfilterDropdown>
	</view>
</template>

<script>
	 import HMfilterDropdown from '@/components/HM-filterDropdown/HM-filterDropdown.vue';
	export default {
		components: {
            'HMfilterDropdown':HMfilterDropdown
        },
		data() {
			return {
				filterData:[] //传入数据
			}
		},
		methods: {
			confirm(){
				
			}
		}
	}
</script>

<style>

</style>
