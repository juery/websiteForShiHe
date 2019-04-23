<template>
	<div>
		<Header :menu-active="active"></Header>
		<div clas="container">
			<section class="banner">
				<div class="banner-intro">
					<h3>十禾 · 智慧</h3>
					<span>SHI HE   INTELLIGENCE</span>
					<p>品牌数据营销解决方案提供商</p>
				</div>
			</section>
			<section class="synopsis">
				<div class="vc synopsis-main">
					<div class="synopsis-left">
						<img src="../../../public/about-s2-1.png" alt="">
					</div>
					<div class="synopsis-right">
						<p>公司简介</p>
						<span>杭州十禾信息科技有限公司成立于2013年2月，是一家依托阿里平台核心商业数据和超级媒体矩阵，为品牌客户提供智慧商业营销运营解决方案的公司，核心包括智慧营销事业部、品牌运营事业部、效果营销事业部、智能客服事业部。十禾智慧商业致力于用数据技术驱动营销和运营，提高品牌营销和运营决策的效率和科学性，实现品牌商业价值变现和品牌资产增值以及品牌形象的年轻化。 </span>
					</div>
					<div class="left-tips">THEREI</div>
					<div class="right-tips">WHERET</div>
				</div>
			</section>
			<section class="business-intro">
				<p class="business-intro-title">业务板块</p>
				<div class="intro-cover">
					<div class="vc line">
						<div class="item left">
							<img src="../../../public/home-icon-1.png" alt="">
							<p>智慧营销</p>
						</div>
						<div class="item">
							<img src="../../../public/home-icon-2.png" alt="">
							<p>品牌运营</p>
						</div>
						<div class="item">
							<img src="../../../public/home-icon-3.png" alt="">
							<p>效果营销</p>
						</div>
						<div class="item left">
							<img src="../../../public/home-icon-4.png" alt="">
							<p>智能客服</p>
						</div>
						<div class="item">
							<img src="../../../public/home-icon-5.png" alt="">
							<p>创新技术</p>
						</div>
					</div>
				</div>
				<div class="company-timeline">
					<div class="under-font">
						<p>
							十禾拥有超过500人的智慧商业营运专业团队，6年来，十禾智慧商业凭借先进的数据算法和创新技术，以及对智慧商业的深刻理解，核心          
						</p>
						<p>
							聚焦汽车新零售、服饰、美妆、大家居、大快销等7大垂直行业和类目深得客户信任和好评。
						</p>
					</div>
					<div class="timeline-box">
						<h3>发展历程</h3>
						<div class="timeline-list">
							<ul>
								<li v-for="item in timeline" :key="item.year">
									{{item.year}}<p>{{item.text}}</p>
								</li>
							</ul>
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
			active: 'about',
			timeline: [
				{year: '2013年',text:'十禾成立，成为直通车服务商，淘宝银牌服务商，广告投放超过1亿元'},
				{year: '2014年',text:'新增钻展服务商资质，阿里妈妈银牌服务商，广告投放费用超过2亿元'},
				{year: '2015年',text:'阿里云数据平台合作伙伴，大数据算法技术赋能效果营销业务，效果广告投放超过3.6亿元'},
				{year: '2016年',text:'效果营销事业部广告投放超过5.4亿元；成立品牌运营事业部，运营品牌客户5家，淘宝天猫GMV成交金额超过5亿元'},
				{year: '2017年',text:'效果营销事业部广告投放超过8亿元；品牌运营事业部，运营品牌客户8家，淘宝天猫GMV成交金额超过12亿元；成立智能客服事业部，客服成交金额超过7.6亿元'},
				{year: '2018年',text:'效果营销事业部广告投放超过12亿元；品牌运营事业部，运营品牌客户10家，淘宝天猫GMV成交金额超过20亿元；智能客服事业部，客服成交金额超过15亿元；成立智慧营销事业部，服务品牌客户18家，广告投放超过9亿元'},
			]
		}
	}
}
</script>

<style scoped lang="scss">
.banner {
	background-image: url('../../../public/about-s1-1.png');
	background-repeat: no-repeat;
	background-position: center;
	padding-bottom: 46.875%;
	background-size: 100% 100%;
	overflow: hidden;
	// position: relative;
	h3 {
		font-size: 50px;
		color: #fff;
		padding-bottom: 5px;
		display: inline-block;
		border-bottom: 2px solid rgba(255,255,255,.4);
		opacity: 0.8;
	}
	span {
		font-size: 18px;
		color: #fff;
		display: block;
		padding-top: 10px;
		letter-spacing: 2.5px;
		opacity: 0.8;
	}
	.banner-intro { // 设计稿无字体大小
		width: 800px;
		position: absolute;
		top: 110px;
		text-align: center;
		left: 50%;
		margin-left: -400px;
		p {
			font-size: 42px;
			color: #fff;
			margin-top: 20px;
			opacity: 0.8;
		}
	}
}
.synopsis {
	padding: 120px 44px 80px;
	background-color: #E4E8EC;
	position: relative;
	.synopsis-main {
		width: 1490px;
		margin: 0 auto;
	}
	.synopsis-left {
		width: 720px;
		background-color: #fff;
		img {
			width: 100%;
			height: auto;
			box-shadow: 10px 10px 0px #CACBCD;
		}
	}
	.synopsis-right {
		width: 740px;
		margin-left: 30px;
		p {
			color:#00030A;
			font-size: 36px;
			text-align: center;
			margin-bottom: 43px;
		}
		span {
			font-size: 18px;
			color: #595959;
			line-height: 2.5;
			text-align: left;
		}
	}
	.left-tips, .right-tips{
		letter-spacing: 60px;
		color: #675065;
		position: absolute;
		font-size: 26px;
		// top: 0px;
	}
	.left-tips {
		left: -160px;
		transform: rotate(90deg)
	}
	.right-tips {
		right: -160px;
		transform: rotate(-270deg)
	}
}
.business-intro {
	position: relative;
	background-color: #E4E8EC;
	.intro-cover {
		background-image: url('../../../public/about-s3-1.png');
		background-repeat: no-repeat;
		background-position: center;
		// padding-bottom: 23.125%;
		background-size: 100% 100%;
		overflow: hidden;
		padding: 172px 0px 165px;
		text-align: center;
		z-index: 2;
		position: relative;
	}
	.line {
		width: 1005px;
		margin: 0 auto;
	}
	.item {
		flex: 1;
		position: relative;
		img {
			width: 44px;
			height: auto;
		}
		p {
			color: #fff;
			font-size: 18px;
			margin-top: 55px;
		}
		&.left:after {
			content: '';
			width: 1px;
			height: 140px;
			position: absolute;
			right:0px;
			background: linear-gradient(to bottom,  #336992 0%,#ffffff 50%,#336992 100%);
			top: -5px;
			opacity: 0.7;
			
		}
	}
	.business-intro-title {
		position: absolute;
		font-size: 36px;
		left: 50%;
		width: 160px;
		text-align: center;
		margin-left: -80px;
		top: 50px;
	}
	.company-timeline {
		background-image: url('../../../public/about-s3-2.png');
		background-repeat: no-repeat;
		background-position: center;
		padding-bottom: 48.281%;
		background-size: 100% 100%;
		overflow: hidden;
		text-align: center;
		margin-top: -20px;
		z-index: -1;
		.under-font {
			width: 1088px;
			margin: 0 auto;
			p {
				font-size: 18px;
				color: #333333;
				margin-bottom: 17px;
				&:last-child {
					margin-bottom: 0;
				}
			}
		}
		.timeline-box {
			position: absolute;
			width: 1004px;
			left: 50%;
			top: 43%;
			margin-left: -502px;
			h3 {
				font-size: 36px;
				color: #00030A;
				margin-bottom: 38px;
			}
			.timeline-list {
				background-color: rgba(0,0,0,.4);
				padding: 37px 29px 34px 63px;
				text-align: left;
				li {
					color: #71BBFF;
					font-size: 24px;
					margin-bottom: 26px;
					p {
						font-size: 18px;
						color: #fff;
						margin-top: 10px;
					}
				}
			}
		}
	}
	
}

</style>

