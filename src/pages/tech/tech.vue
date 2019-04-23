<template>
	<div>
		<Header :menu-active="active"></Header>
		<div clas="container">
			<section class="banner">
				<div class="banner-title">
					<h3>创新技术</h3>
					<p>Technological innovation </p>
					<span>is an innovation aimed </span>
				</div>
			</section>
			<section class="technical">
				<div class="technical-title">
					<h3>创新技服务</h3>
					<p>通过多年对电商营销的实践经验，深入理解互联网营销内核，建立起了在付费推广，精准人群画像，智能美工等方向的技术应用和软件体系。</p>
				</div>
				<div class="technical-list">
					<div class="vc">
						<div class="item">
							<img src="../../../public/join-s2-1.png" alt="">
							<p>淘宝直通车推广智能化工具，实现自动出价，智能优化，自动加词，一键推广。如24小时的专业营销顾问为你开车护航指导。</p>
							<a href="https://fuwu.taobao.com/ser/detail.htm?spm=a1z13.8114210.1234-fwlb.4.4dbc5acatEh99x&service_code=FW_GOODS-1000041478&tracelog=search&from_key=%E4%BA%91%E6%99%BA%E6%8A%95" target="_blank">[了解详情]</a>
						</div>
						<div class="item">
							<img src="../../../public/join-s2-2.png" alt="">
							<p>利用人体骨点识别，人像识别等生物识别技术，实现美工详情制作的智能化，自动化，提升其10倍的制图效率提升。</p>
							<a href="https://pc.1688.com/product/detail.htm?productCode=88H24mMXzL9ts7TW9ikCVTEZ84FtPM39RrDzPAz%2FDOc%3D&productType=GROUP" target="_blank">[了解详情]</a>
						</div>
						<div class="item">
							<img src="../../../public/join-s2-3.png" alt="">
							<p>淘宝钻展智能化工具，通过大数据分析实现精准定位，精准营销，引爆流量。</p>
							<a href="https://fuwu.taobao.com/ser/detail.htm?spm=a1z13.8114210.1234-fwlb.5.7a635acak6kOHP&service_code=FW_GOODS-1000404631&tracelog=search&from_key=%E4%BA%91%E6%99%BA%E5%87%86" target="_blank">[了解详情]</a>
						</div>
					</div>
				</div>
			</section>
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
			active: 'tech'
		}
	}
}
</script>

<style scoped lang="scss">
.banner {
	background-image: url('../../../public/join-s1-1.png');
	background-repeat: no-repeat;
	background-position: center;
	padding-bottom: 46.875%;
	background-size: 100% 100%;
	overflow: hidden;
	.banner-title {
		width: 400px;
		position: absolute;
		left: 50%;
		margin-left: -200px;
		top: 151px;
		text-align: center;
		h3 {
			color: #fff;
			font-size: 90px;
			margin-bottom: 10px;
		}
		p {
			color: #fff;
			font-size: 18px;
			margin-bottom: 5px;
			letter-spacing: 2px;
		}
		span {
			color: #34BFFF;
			letter-spacing: 2px;
			font-size: 18px;
		}
	}
}
.technical {
	padding: 65px 0 110px;
	.technical-title {
		text-align: center;
		h3 {
			font-size: 26px;
			margin-bottom: 22px;
		}
		p {
			width: 1000px;
			margin: 0 auto;
			font-size: 16px;
			color: #666666;
		}
	}
	.technical-list {
		.vc {
			width: 1000px;
			margin: 0 auto;
			align-items: flex-start;
			justify-content: space-between;
			padding-top: 51px;
		}
		.item {
			width: 239px;
			img {
				width: 100%;
				height: auto;
			}
			p {
				margin-top: 18px;
				color: #6A6A6A;
				font-size: 16px;
				padding: 0 7px;
				line-height: 1.6;
			}
			a {
				text-decoration: none;
				padding: 3px 8px 0;
				font-size: 16px;
				color: #4F80EE;
			}
		}
	}
}
</style>

