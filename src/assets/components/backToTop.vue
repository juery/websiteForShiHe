<template>
	<div>
		<div class="back-to-top" @click="backToTop" v-show="showReturnToTop" @mouseenter="show" @mouseleave="hide">
			<!-- <i :class="[bttOption.iClass]" :style="{color:bttOption.iColor,'font-size':bttOption.iFontsize}"></i> -->
			<img src="../../../public/arrow-up.png" alt="">
			<span class="tips" :class="[bttOption.iPos]" :style="{color:bttOption.textColor}" v-show="showTooltips">{{bttOption.text}}</span>
		</div>
	</div>
  	
</template>

<script>
import { scrollIt } from "../scrollIt"; // 引入动画过渡的实现
export default {
	name: "back-to-top",
	components: {
		scrollIt
	},
  	props: {
		text: {
			// 文本提示
			type: String,
			default: "返回顶部"
		},
		textColor: {
			// 文本颜色
			type: String,
			default: "#fff"
		},
		iPos: {
			// 文本位置
			type: String,
			default: "left"
		},
		iClass: {
			// 图标形状
			type: String,
			default: "iconfont icon-iconcc-plane"
		},
		iColor: {
			// 图标颜色
			type: String,
			default: "#f00"
		},
		iFontsize: {
			// 图标大小
			type: String,
			default: "32px"
		},
		pageY: {
			// 默认在哪个视图显示返回按钮
			type: Number,
			default: 400
		},
		transitionName: {
			// 过渡动画名称
			type: String,
			default: "linear"
		}
  	},
  	data: function() {
		return {
		showTooltips: false,
		showReturnToTop: false
		};
  	},
  	computed: {
    	bttOption() {
      		return {
				text: this.text,
				textColor: this.textColor,
				iPos: this.iPos,
				iClass: this.iClass,
				iColor: this.iColor,
				iFontsize: this.iFontsize
     		};
    	}
	},
	methods: {
		show() {
			// 显示隐藏提示文字
			return (this.showTooltips = true);
		},
		hide() {
			return (this.showTooltips = false);
		},
		currentPageYOffset() {
			// 判断滚动区域大于多少的时候显示返回顶部的按钮
			window.pageYOffset > this.pageY
				? (this.showReturnToTop = true)
				: (this.showReturnToTop = false);
		},
		backToTop() {
			scrollIt(0, 1500, this.transitionName, this.currentPageYOffset);
		}
	},
	created() {
		window.addEventListener("scroll", this.currentPageYOffset);
	},
	beforeDestroy() {
		window.removeEventListener("scroll", this.currentPageYOffset);
	}
};
</script>

<style scoped>
.back-to-top {
	position: fixed;
	bottom: 5%;
	right: 100px;
	z-index: 9999;
	cursor: pointer;
	width: 52px;
	height:52px;
	border-radius: 3px;
	background-color: #373737;
	padding: 13px;
	text-align: center;}
	.back-to-top img {
		width: 100%;
		height: auto;
	}
	.back-to-top i {
		font-size: 32px;
		display: inline-block;
		position: relative;
		text-align: center;
		padding: 5px;
		background-color: rgba(234, 231, 231, 0.52);
		border-radius: 5px;
		transition: all 0.3s linear;}

		.back-to-top i:hover {
			border-radius: 50%;
			background: #222;
			color: #fff !important;
		}

	.back-to-top .tips {
		display: inline-block;
		position: absolute;
		/* word-break: normal; */
		/* white-space: nowrap; */
		width: 52px;
		height: 52px;;
		font-size: 14px;
		color: #fff;
		z-index: -1;
		padding: 10px;
		border-radius: 3px;
		background-color: #3C73F4;
	}

	.back-to-top .left {
		right: 0;
		top: 50%;
		margin-right: 60px;
		transform: translateY(-50%);
	}

	.back-to-top .right {
		left: 0;
		top: 50%;
		margin-left: 50px;
		transform: translateY(-50%);
	}

	.back-to-top .bottom {
		bottom: 0;
		margin-top: 50px;
	}

	.back-to-top .top {
		top: 0;
		margin-bottom: 50px;
	}
</style>
