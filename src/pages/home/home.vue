<template>
	<div>
		<Header :menu-active="active"></Header>
		<section class="banner">
			<div class="banner-intro">
				<h1>让营销变得简单</h1>
				<p>十禾 · 智慧</p>
				<span>SHI HE   INTELLIGENCE</span>
			</div>
		</section>
		<section class="company">
			<!-- <div class="section-title">
				<h3>杭州十禾</h3>
				<p>专注数据营销的电子商务解决方案提供商</p>
			</div> -->
			<div class="company-cover">
				<a href="/about.html">
					<img src="../../../public/home-s2-1.png" alt="">
				</a>
				<!-- <p>
                    十禾专注商业品牌互联网营销服务，涉及智慧数据营销、品牌运营、效果营销、智能客服4大业务板块和创新技术服务中台。我们的业务覆盖从淘宝、
                    天猫到京东、拼多多等国内各大电商平台的服务构建。
                </p>
				<button class="learn-more">了解更多 >></button> -->
			</div>
		</section>
		<section class="service">
			<div class="service-box">
				<div class="service-title">
					<h3>我们的业务</h3>
					<!-- <p>
						十禾拥有近200人的数据营销服务团队，包括品牌策划，视觉涉及，付费推广，数据营销等核心团队。为品牌商家提供从出啊、执行到数据分析优化的全栈营销服务。
					</p> -->
					<p>十禾拥有近500位员工，200人的数据营销服务团队。囊括：智慧营销事业部、品牌运营事业部、效果营销事业部、智能客服事业部、营销中心、视觉中心等多个部门。为品牌商家提供从策划、执行到数据分析优化的全链路营销服务。</p>
				</div>
				<div class="service-intro vc">
					<div class="item bg1" @mouseenter="bg1_front=false" @mouseleave="bg1_front=true" ref="bg1">
						<div v-if="bg1_front" class="item-cover">
							<div class="cycle">
								<img src="../../../public/home-icon-1.png" alt="">
								<p>智慧营销</p>
							</div>
						</div>
						<div v-if="!bg1_front" class="item-back">
							<img src="../../../public/home-s3-bak-2.png" alt="">
						</div>
					</div>
					<div class="item bg2" @mouseenter="bg2_front=false" @mouseleave="bg2_front=true" ref="bg2">
						<div v-if="bg2_front" class="item-cover">
							<div class="cycle">
								<img src="../../../public/home-icon-2.png" alt="">
								<p>品牌运营</p>
							</div>
						</div>
						<div v-if="!bg2_front" class="item-back">
							<img src="../../../public/home-s3-bak-3.png" alt="">
						</div>
					</div>
					<div class="item bg3" @mouseenter="bg3_front=false" @mouseleave="bg3_front=true" ref="bg3">
						<div v-if="bg3_front" class="item-cover">
							<div class="cycle">
								<img src="../../../public/home-icon-3.png" alt="">
								<p>效果运营</p>
							</div>
						</div>
						<div v-if="!bg3_front" class="item-back">
							<img src="../../../public/home-s3-bak-4.png" alt="">
						</div>
					</div>
					<div class="item bg4" @mouseenter="bg4_front=false" @mouseleave="bg4_front=true" ref="bg4">
						<div v-if="bg4_front" class="item-cover">
							<div class="cycle">
								<img src="../../../public/home-icon-4.png" alt="">
								<p>智能客服</p>
							</div>
						</div>
						<div v-if="!bg4_front" class="item-back">
							<img src="../../../public/home-s3-bak-5.png" alt="">
						</div>
					</div>
					<div class="item bg5" @mouseenter="bg5_front=false" @mouseleave="bg5_front=true" ref="bg5">
						<div v-if="bg5_front" class="item-cover">
							<div class="cycle">
								<img src="../../../public/home-icon-5.png" alt="">
								<p>创新技术</p>
							</div>
						</div>
						<div v-if="!bg5_front" class="item-back">
							<img src="../../../public/home-s3-bak-6.png" alt="">
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="custom">
			<div class="custom-title">
				<h3>合作品牌客户</h3>
				<div class="swiper">
					<!-- <div class="vc">
						<span>服装</span>
						<span>新零售</span>
						<span>厨卫</span>
						<span>食品</span>
					</div> -->
					<swiper :options="swiperOption" ref="mySwiper">
						<!-- slides -->
						<swiper-slide>
							<img src="../../../public/home-s4-1.png" alt="">
						</swiper-slide>
						<swiper-slide>
							<img src="../../../public/home-s4-2.png" alt="">
						</swiper-slide>
						<swiper-slide>
							<img src="../../../public/home-s4-3.png" alt="">
						</swiper-slide>
						<swiper-slide>
							<img src="../../../public/home-s4-4.png" alt="">
						</swiper-slide>
						<swiper-slide>
							<img src="../../../public/home-s4-5.png" alt="">
						</swiper-slide>
						<swiper-slide>
							<img src="../../../public/home-s4-6.png" alt="">
						</swiper-slide>
						<swiper-slide>
							<img src="../../../public/home-s4-7.png" alt="">
						</swiper-slide>
						<div class="swiper-button-prev" slot="button-prev"></div>
						<div class="swiper-button-next" slot="button-next"></div>
					</swiper>
				</div>
			</div>
		</section>
		<section class="honour">
			<img src="../../../public/home-s5-2.png" alt="">
		</section>
		<section class="kn_custom">
			<div class="kn_custom_title">
				<h3>品牌客户</h3>
			</div>
			<div class="kn_custom_con">
				<img src="../../../public/home-s6-1.png" alt="">
			</div>
		</section>
		<Footer></Footer>
		<backToTop></backToTop>
	</div>
</template>

<script>
	import Header from 'assets/components/header';
	import Footer from 'assets/components/footer';
	import backToTop from 'assets/components/backToTop';
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		components: {
			Header,
			Footer,
			swiperSlide,
			swiper,
			backToTop
		},
		data() {
			return {
				active: 'home',
				bg1_front: true,
				bg2_front: true,
				bg3_front: true,
				bg4_front: true,
				bg5_front: true,
				swiperOption: {
					effect:"coverflow",
					grabCursor: true,
					centeredSlides: true,
					loop: true,
					// spaceBetween: 20,
					// loopedSlides: 6,
          			slidesPerView: 4,
					autoplay: {
						delay: 5000,//自动播放速度
						disableOnInteraction: false//鼠标移上去时是否还继续播放
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					coverflowEffect: {
						rotate: 0,
						stretch: 0,
						depth: 70,
						modifier: 3,
						slideShadows : false
					},
				}
			}
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper
			}
		},
		created() {

		},
		methods: {
			turnAround(row) {
				console.log(row)
				console.log(this.$refs)
			},
			turnLeave() {
				console.log(222)
			}
		}
	}
</script>

<style scoped lang="scss">
	.banner {
		background-image: url('../../../public/home-cover-1.png');
		background-repeat: no-repeat;
		background-position: center;
		padding-bottom: 56.354%;
		background-size: 100% 100%;
		overflow: hidden;
		img {
			width: 100%;
		}
 	}
	.banner-intro {
		width: 700px;
		position: absolute;
		top: 266px;
		left: 50%;
		margin-left: -350px;
		text-align: center;
		h1 {
			margin: 0px 0px 53px 0;
			font-size: 100px;
			color: #fff;
			font-weight: normal;
		}
		p {
			font-size: 50px;
			color: #fff;
			opacity: 0.6;
			display: inline-block;
			padding-bottom: 5px;
			border-bottom: 2px solid rgba(255,255,255,.4);
		}
		span {
			color: #fff;
			font-size: 18px;
			opacity: 0.6;
			display: block;
			padding-top: 5px;
			letter-spacing: 2.5px;
		}
	}
	.company {
		// padding: 35px 0 47px 0;
		background: #fff;
		color: #000;
		text-align: center;
		h3 {
			margin: 24px 0 17px 0;
			font-size: 42px;
		}
		p {
			font-size: 22px;
		}
	}
	.company-cover {
		text-align: center;
		width: 100%;
		margin: 0 auto;
		img {
			width: 100%;
			height: auto;
			margin-top: -80px;
		}
		p {
			width: 1000px;
			margin: 0 auto;
			color: #969696;
			font-size: 16px;
			line-height: 2;
		}
		.learn-more {
			color: #fff;
			font-size: 18px;
			padding: 17px 41px 15px 51px;
			border: none;
			border-radius: 3px;
			background: #026DEF;
			background: -webkit-gradient(linear, left top, left bottom, from(#026DEF), to(#5977FB));
			margin-top: 40px;
		}
		.learn-more:hover,.company-cover .learn-more:active {
			opacity: 0.7;
		}
	}
	.service-box {
		background-image: url('../../../public/home-s3-1.png');
		background-repeat: no-repeat;
		background-position: center;
		padding-bottom: 35.42%;
		background-size: 100% 100%;
		overflow: hidden;
		padding: 68px 0px 90px 0px;
	}
	.service-title { text-align: center }
	.service-title h3 {
		font-size: 42px;
		color: #fff;
		margin: 0px 0px 29px 0px;
	}
	.service-title p {
		color: #C0C0C0;
		font-size: 16px;
		width: 705px;
		margin: 0 auto;
		line-height: 1.8;
	}
	.service-intro {
		width: 	1190px;
		margin: 37px auto 0;
	}
	.service-intro .item {
		width: 239px;
		position: relative;
		background-repeat: no-repeat;
		background-position: center;
		height: 367px;
		/* padding-bottom: 154.2%; */
		background-size: 100% 100%;
		overflow: hidden;
	}
	.service-intro  {
		.item.bg1 {
			background-image: url('../../../public/home-s3-2.png');
		}
		.item.bg2 {
			background-image: url('../../../public/home-s3-3.png');
		}
		.service-intro .item.bg3 {
			background-image: url('../../../public/home-s3-4.png');
		}
		.item.bg4 {
			background-image: url('../../../public/home-s3-5.png');
		}
		.item.bg5 {
			background-image: url('../../../public/home-s3-6.png');
		}
		.item-cover {
			background: rgba(0,0,0,.4);
			height: 100%;
			cursor: pointer;
		}
		.item-cover  {
			.cycle {
				width: 88px;
				height: 88px;
				position: absolute;
				left: 50%;
				top: 50%;
				margin-left: -44px;
				margin-top: -44px;
				border-radius: 50%;
				background: #026DEF;
				background: -webkit-gradient(linear, left top, left bottom, from(#026DEF), to(#5977FB));
				padding: 22px;
				p {
					color: #fff;
					font-size: 18px;
					width: 120px;
					text-align: center;
					margin-left: -38px;
					margin-top: 40px;
				}
				img {
					width: 100%;
					height: auto;
				}
			}
		}
		.item-back {
			width: 239px;
			position: relative;
			background-repeat: no-repeat;
			background-position: center;
			height: 367px;
			/* padding-bottom: 154.2%; */
			background-size: 100% 100%;
			overflow: hidden;
			cursor: pointer;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
	.custom {
		padding: 98px 0 68px;
		background-color: #E4E8EC;
		h3 {
			font-size: 42px;
			margin-bottom: 56px;
		}
	}
	.swiper {
		width: 1260px;
		margin: 0 auto;
		img {
			width: 300px;
			height: auto;
		}
		.vc span {
			width: 300px;
			margin-right: 20px;
			text-align: center;
			font-size: 24px;
			color: #474747;
			margin-bottom: 13px;
			&:last-child {
				margin-right: 0;
			}
		}
	}
	.honour {
		background-repeat: no-repeat;
		background-position: center;
		/* padding-bottom: 37.66%; */
		background-size: 100% 100%;
		overflow: hidden;
		background-image: url('../../../public/home-s5-1.png');
		text-align: center;
		img {
			width: 1014px;
			height: auto;
			padding: 28px 0 53px;
		}
	}
	.kn_custom {
		padding: 50px 0px 66px;
		text-align: center;
		h3 {
			font-size: 42px;
			margin-bottom: 40px;
		}
		img {
			width: 1082px;
			height: auto;

		}
	}
</style>

