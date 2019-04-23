<template>
	<div>
		<header>
			<div class="menu vc">
				<div class="logo">
					<img src="../../../public/logo.png" alt="">
					<span>十禾科技</span>
				</div>
				<ul>
					<li v-for="item in menuList" :key="item.name">
						<template v-if="item.url">
							<a :href="item.url+'.html'" :class="menuActive === item.url ? 'active' : '' ">{{item.name}}</a>
						</template>
						<template v-if="item.childs">
							<a @mouseenter="showSubMenu=!showSubMenu" @mouseleave="!showSubMenu">{{item.name}}</a>
							<div v-if="showSubMenu" class="subMenu"  @mouseleave="showSubMenu = false">
								<ul class="subBanner">
									<li v-for="subitem in item.childs" :key="subitem.name">
										<a :href="subitem.url+'.html'" :class="menuActive === subitem.url ? 'active' : '' ">{{subitem.name}}</a>
									</li>
								</ul>
							</div>
						</template>
					</li>
				</ul>
			</div>
		</header>
	</div>
</template>

<script>
export default {
	props:['menuActive'],
	data() {
		return {
			showSubMenu: false,
			menuList: [
				{ name: '首页', url: 'home' },
				{ name: '我们的业务', url: '', childs: [
					{ name: '智慧营销', url: 'intelligent' },
					{ name: '品牌运营', url: 'business' },
					{ name: '效果营销', url: 'market' },
					{ name: '智能客服', url: 'support' },
					{ name: '创新技术', url: 'tech' }
				]},
				{ name: '加入我们', url: 'join' },
				{ name: '关于我们', url: 'about' },
			]
		}
	}
}
</script>

<style scoped lang="scss">
.subBanner {
	z-index: 99;
	position: absolute;
	margin-top: 8px;
	height: auto;
	padding: 0px;
	display: block;
	list-style: none;
	background-color: rgb(41,14,148);
	text-align: center;
	width: 130px;
	margin-left: -25px;
	&:after {
		content: '';
		position: absolute;
		width:0;
		height:0;
		border-width:0 8px 8px;
		border-style:solid;
		border-color:transparent transparent rgb(41,14,148);/*透明 透明  灰*/
		left: 50%;
		margin-left: -8px;
		top: -8px;
	}
	li {
		float: none;
		margin: 0px;
		margin-left: auto;
		padding: 1.5px;
	}
	a { 
		text-decoration:none;
		display:block;
		text-align: center;
		padding: 10px 0px;
	}
	a:hover{color: #fff;background: #265BF7;}
}
.subMenu {
	// background-image: url('../../../public/back_menu.png')
	text-align: center;
	// position: relative;
}
</style>

