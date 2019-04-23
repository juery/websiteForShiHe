<template>
	<div>
		<Header :menu-active="active"></Header>
		<div clas="container">
			<div class="banner"></div>
		</div>
		<Footer></Footer>
		<backToTop></backToTop>
	</div>
</template>

<script>
import Header from 'assets/components/header';
import Footer from 'assets/components/footer';
import backToTop from 'assets/components/backToTop';
export default {
	components: {
		Header,
		Footer,
		backToTop
	},
	data() {
		return {
			active: 'partner'
		}
	}
}
</script>

<style scoped>

</style>

