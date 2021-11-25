<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')

			let count = uni.getStorageSync('count');
			if (!count) {
				uni.setStorageSync('count', 0);
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
