<template>
	<view class="A-page">
		<web-view :webview-styles="webviewStyles" src="https://wx.zzbek.com/pg/pg1/index.html"></web-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			webviewStyles: {
				progress: {
					color: '#FF3333'
				}
			}
		};
	},
	methods: {}
};
</script>

<style lang="scss"></style>
