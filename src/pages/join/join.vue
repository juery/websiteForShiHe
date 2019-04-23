<template>
	<div>
		<Header :menu-active="active"></Header>
		<div clas="container">
			<section class="banner"></section>
			<section class="selection-menu">
				<div class="selection-list">
					<button :class="turnOn === true ? 'active' : '' " @click="turnOn = true">人才招聘</button>
					<button :class="turnOn === false ? 'active' : '' " @click="turnOn = false"> 员工风采</button>
				</div>
				<div class="selection-container" v-show="turnOn">
					<ul class="join-intro">
						<li>
							<h3>
								优秀，是成为十禾员工的唯一要求
							</h3>
						</li>
						<li>
							<p>无论你是学霸、海归、宅男还是逗逼，只要你够优秀，你就是十禾的菜。</p>
							<p>我们拒绝平庸，所以我们需要足够优秀的团队一起去冒险。</p>
							<p>在这风云变换的时代，十禾欢迎优秀的你!</p>
						</li>
						<li class="apart">
							<h3>
								当然，我们的待遇也很“优秀”
							</h3>
						</li>
						<li>
							<p> 1、丰富的团队活动，各种想得到想不到的团建活动。</p>
							<p> 2、节假日福利，生日福利</p>
							<p> 3、薪资待遇：基本工资+绩效</p>
							<p> 4、五险一金，带薪年假，法定节假日</p>
							<p> 5、餐补，加班补助</p>
							<p> 6、系统性的专业知识培训，助你快速成长</p>
						</li>
					</ul>
				</div>
			</section>
			<section class="join-list" v-show="turnOn">
				<div class="join-us-list">
					<div class="vc">
						<div class="item">
							<div class="item-box">
								<div class="font-limit">
									诚聘
								</div>
								<div class="font-flow font-inner">
									只要狠角色
								</div>
							</div>
							<p>简历投递邮箱</p>
							<span>shihehr@shihe.com</span>
							
						</div>
						<div class="items">
							<div class="items-name">
								销售顾问
							</div>
							<div class="items-role">
								岗位职责
								<div>
									任职资格
								</div>
							</div>
							<div class="items-content">
								联系淘宝商家，为商家提供优质专业的店铺运营服务；
								开发新客户，维护老客户，为店铺提供诊断及运营建议；
								挖掘客户需求，提供解决方案，寻找合作机会并完成目标；
								负责客户前期的商务谈判、签约等相关事宜；
							</div>
						</div>
						<div class="items">
							<div class="items-name">
								运营专员
							</div>
							<div class="items-role">
								岗位职责
								<div>
									任职资格
								</div>
							</div>
							<div class="items-content">
								根据淘宝直通车，钻展的基本规则及原理，为淘宝卖家的直通车进行优化设置，提高客户投入产出比；
								根据预算和店铺情况制定广告投放的策略和计划；
								为客户直通车帐号进行推广设置，如优化关键词，制定推广创意；
								定期对相关数据进行有效分析，跟进优化推广效果，为客户做数据分析报告；
							</div>
						</div>
						<div class="items">
							<div class="items-name">
								客户服务专员
							</div>
							<div class="items-role">
								岗位职责
								<div>
									任职资格
								</div>
							</div>
							<div class="items-content">
                            	客户关系管理，衔接客户与运营专员的沟通，维护好客户与公司关系。
								日常客户咨询解答，衔接客户与运营专员的沟通。
								定期跟进账户、回访客户。了解客户需求，整合后提交运营专员解决。
								客户关系维护，提供客户店铺运营相关的知识和建议。
								运营专员推广计划实施情况监督。
								客户后期续签洽谈。
							</div>
						</div>
						<div class="items">
							<div class="items-name">
								天猫淘宝运营专员
							</div>
							<div class="items-role">
								岗位职责
								<div>
									任职资格
								</div>
							</div>
							<div class="items-content">
                            	负责淘宝店铺的推广、提高店铺点击率和浏览量，达成店铺销售目标，维护店铺正常的运营；
								策划淘宝店铺的促销、推广活动方案；
								负责淘宝网店日常的推广项目，如旺铺、店铺与标题关键字策略，搜索引擎营销，淘宝直通车、淘宝客、钻展推广等；
								定期针对推广效果进行跟踪、评估，并提交推广效果的统计分析报表，及时提出营销改进措施，给出确实可行的改进方案。
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="selection-container"  v-show="!turnOn">
				<div class="employe-pic">
					<div class="employe-pic-title">
						<em>| </em><span> 健康生活  努力工作</span>
					</div>
					<div class="vc">
						<div class="employe-pic-list f2">
							<img src="../../../public/join-r6-3.png" alt="">
						</div>
						<div class="employe-pic-list f1">
							<img src="../../../public/join-r6-1.png" alt="">
						</div>
					</div>
					<div class="vc">
						<div class="employe-pic-list f1">
							<img src="../../../public/join-r6-2.png" alt="">
						</div>
						<div class="employe-pic-list f2">
							<img src="../../../public/join-r6-4.png" alt="">
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
			active: 'join',
			turnOn: true
		}
	}
}
</script>

<style scoped lang="scss">
.banner {
	background-image: url('../../../public/join-r1-1.jpg');
	background-repeat: no-repeat;
	background-position: center;
	padding-bottom: 46.875%;
	background-size: 100% 100%;
	overflow: hidden;
}
.selection-menu {
	padding: 53px 0px 0;
	text-align: center;
	background-color: #eaedf0;
	button {
		width: 200px;
		height: 50px;
		line-height: 50px;
		color: #fff;
		font-size: 22px;
		text-align: center;
		border: 0;
		background-color: #8B8B8B;
		margin-right: 80px;
		background: url('../../../public/join-r2-4.png');
		background-size: 100% 100%;
		cursor: pointer;
		outline: none;
	}
	button:active,button:hover {
		opacity: 0.7;
	}
	button.active {
		background: url('../../../public/join-r2-2.png');
		background-size: 100% 100%;
	}
	
}
.selection-container {
	background: url('../../../public/join-r2-1.png');
	background-repeat: no-repeat;
	background-position: bottom;
	padding-bottom: 38.18%;
	position: relative;
	.join-intro {
		top: 100px;
		position: absolute;
		left: 30%;
		text-align: left;
		h3 {
			font-size: 24px;
			color: #00030A;
			margin-bottom: 22px;
			text-align: left;
		}
		p {
			font-size: 16px;
			color: #686868;
			line-height: 1.8;
		}
		.apart {
			margin-top: 61px;
		}
	}
}
.join-list {
	background: url('../../../public/join-r5-1.png');
	background-repeat: no-repeat;
	background-position: center;
	padding-bottom: 46.52%;
	position: relative;
	.join-us-list {
		width: 1112px;
		position: absolute;
		left: 50%;
		top: 0px;
		margin-left: -556px;
		.item {
			width: 139px;
			margin-right: 35px;
			p {
				color: #00AFFF;
				font-size: 18px;
				text-align: center;
				margin: 5px 0;
			}
			span {
				color: #7B7B7B;
				font-size: 14px;
				text-align: center
			}
		}
		.item-box {
			width: 139px;
			margin-right: 35px;
			background-color: transparent;
			height: 282px;
			border:2px solid #00AFFF;
		}
		.items {
			width: 234.5px;
			padding-top: 78px;
			padding: 78px 20px 0;
			background:  linear-gradient(#1f2845 0%, #172A50 50%, #1f2845 100% );
			height: 800px;
			margin-right: 10px;
			.items-name {
				color: #fff;
				word-wrap: break-word;
				width: 30px;
				font-size: 30px;
				display: inline-block;
				vertical-align: top;
				margin-right: 10px;
			}
			.items-role {
				width: 33px;
				word-wrap: break-word;
				font-size: 18px;
				display: inline-block;
				vertical-align: top;
				color: #fff;
				text-align: center;
				div {
					padding: 10px 7px;
					background: #113794;
					color: #699CE8;
					margin-top: 33px;
				}
			}
			.items-content {
				width: 102px;
				display: inline-block;
				vertical-align: top;
				color: #0083D0;
				writing-mode: vertical-rl;
				line-height: 1.6;
			}
		}
	}
	.font-flow {
		word-wrap: break-word;
	}
	.font-limit {
		font-size: 71px;
		color: #fff;
		width: 70px;
		display: inline-block;
		padding: 20px 10px;
		margin-left: -50px;
		background: #1f2845;
	}
	.font-inner {
		display: inline-block;
		width: 38px;
		color: #00AFFF;
		font-size: 38px;
		margin-left: 50px;
		// padding-top: 20px;
	}
}
.employe-pic {
	width: 1124px;
	position: absolute;
	left: 50%;
	margin-left: -612px;
	.employe-pic-title {
		margin-bottom: 22px;
		em {
			color: #0270F1;
			font-size: 30px;
		}
		span {
			color: #5F5F5F;
			font-size: 24px;
		}
	}
	.vc {
		align-items: stretch;
	}
	.f2 {
		width: 842px;
		background: #fff;
		// height: 215.6px;
		img {
			width: 100%;
		}
	}
	.f1 {
		width: 350px;
		img {
			width: 100%;
		}
	}
}
</style>

