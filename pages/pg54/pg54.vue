<template>
	<view class="A-page">
		<web-view :webview-styles="webviewStyles" :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: "",
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				}
			};
		},
		onLoad() {
			let count = uni.getStorageSync('count');
			count++;
			uni.setStorageSync('count', count);
			let pages = getCurrentPages();
			let pageobj = pages[pages.length - 1];
			let pageName = pageobj.$page.fullPath.split('/')[2];
			this.src = `${this.$baseUrl}${pageName}/index.html?count=${count}`

		},
		methods: {}
	};
</script>

<style lang="scss"></style>
