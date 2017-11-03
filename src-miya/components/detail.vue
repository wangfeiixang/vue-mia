<template>
	<div class="detail">
		<header class="dHeader">
			<router-link to="/list">
				<span class="iconfont icon-fanhuijian"></span>
			</router-link>
			<span>商品详情</span>
			<router-link to="/main">
				<span class="iconfont icon-shouye"></span>
			</router-link>
		</header>
		<!--以上是头部信息-->
		<section class="imgBox">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide"><img :src="data?data.m_search_pic:''" /></div>
				</div>
				<div class="swiper-pagination"></div>
			</div>

		</section>
		<!-- 以上是图片轮播-->
		<!--  详情条目-start-->
		<div class="mask" v-show="btn1|btn2" @click="clear"></div>
		<!--遮罩层-->

		<section class="details">

			<div class="detail-nameInfo">
				<div class="proSign">
					<span>
		                   <i class="country-icon">
		                   <img class="flag flagDE" src="https://img03.miyabaobei.com/d1/p2/2016/01/12/26/08/2608df7d60d44a4e79de550b68cbbf58.png">
		                   </i>
		                                        荷兰品牌
		           </span>
					<span>蜜芽保税仓发货 </span>

				</div>

				<h4 class="title">

                <a title="品牌：荷兰牛栏 Nutrilon" v-text="data?data.brand_name:''">

                               
                </a>
                <span v-text="data?data.name:''"></span>
                 
				
				</h4>
				<div class="priceBox">
					<!-- 团购或秒杀，隐藏价格信息 -->
					<i>￥</i><span class="sp" v-text="data?data.sale_price:''">558</span>
					<del v-text="data?data.market_price:''">¥796</del>
					<span class="span-icon">包邮</span>
					<div class="activity-price"></div>
				</div>
				<div class="descInfo">
					【蜜芽自营 品质保证】不含蔗糖，口味纯正，拥有恰好比例的健康脂肪酸，蕴含丰富的钙、铁、磷等微量元素，营养丰富，妈妈口碑之选 </div>
			</div>

		</section>

		<section class="itembars">

			<div class="itembar">
				<ul class="Sign">
					<li>自营</li>
					<li>花呗分期</li>
					<li>进口税</li>
					<li>假一赔十</li>
				</ul>
				<span class="moreBtn" id="btn1" @click="btn1=!btn1">●●●</span>
			</div>

			<div class="itembar itembar-t">
				<div style="color: #999;margin-left: 6px;">选择
					<span style="color:#000; margin-left: 5px;">4 罐</span>
				</div>

				<span class="moreBtn" id="btn2" @click="btn2=!btn2">●●●</span>
			</div>

			<!--弹出的盒子111-->
			<div class="detail-tankuang hidebox" id="explainPop" v-show="btn1">
				<div class="tk-title">商品说明</div>
				<div class="tk-body">
					<div class="shrink">
						<dl class="mes-notice">
							<dt>商品税费</dt>
							<dd>据国家政策规定，本商品适用于护肤品类“跨境综合稅”，税率为11.9%，实际结算以订单时的实付金额明细为准</dd>
						</dl>

						<dl class="mes-notice jiap">
							<dt>假一赔十</dt>
							<dd>蜜芽自营的每一件商品，都通过严格的品质把关，保证正品。特做出“假一赔十“的正品保证承若，杜绝一切假货，请放心购买</dd>
						</dl>

						<dl class="mes-notice return">
							<dt>7天无理由退货</dt>
							<dd>收到商品之日起7天（含）内如有商品质量，溢露损失等问题，可申请售后进行退换货处理</dd>
						</dl>
					</div>

				</div>

				<div class="tk-btnGroup">
					<button class="pop-closeBtn" @click="clear">知道啦</button>
				</div>

			</div>

			<!--弹出的盒子111 end-->
			<!--弹出的盒子2 start-->
			<div class="detail-tankuang hidebox detail-selectBox" id="selectBoxPop" v-show="btn2">
				<div class="tk-title">
					<div id="typeInfoBox">

						<div class="selProImg">
							<img :src="data?data.m_search_pic:''">
						</div>

						<div class="selInfo">
							<div class="selPriceWrapper">
								<span class="selPrice" v-text="data?'￥'+data.sale_price:''"></span>
								<span class="iconfont  icon-iconquxiaohuodong01" @click="clear"></span>
							</div>

							<span class="selected">
	                                                                        已选 “<b class="kx">4罐</b>”
	                        </span>
						</div>
					</div>

				</div>

				<div class="tk-body selParams">

					<dl class="taozhuangItem" id="typeSel">
						<dt>可选</dt>
						<dd class="active">4罐</dd>
					</dl>
					<!--<dl class="taozhuangItem" id="specificationSel" style="display: none;">
		       	<dt>规格 </dt><dd data-stock="10">SINGLE</dd>	
		       </dl>-->
					<!--<input type="hidden" value="SINGLE" id="item_size" name="size" readonly="readonly">-->

					<dl class="taozhuangItem" id="jsq">
						<dt>购买数量</dt>
						<dd class="gw_num">

							<span class="jian">-</span>
							<input type="text" value="1" class="num" />
							<span class="add">+</span>

						</dd>
					</dl>
				</div>
				<div class="tk-btnGroup defaultBlock">
					<button id="addToCart" @click="clear">确定</button>
				</div>
				<input type="hidden" id="item_id">
			</div>

			<!--弹出的盒子2 end-->
		</section>

		<!--  详情条目-end-->
		<!--蜜芽全 start-->
		<div class="detail-miaquan">
			<a class="title">

				<span class="title-cn">
					蜜芽圈<b>7867</b>条热评
				</span>
				<span class="arrow_r">好评率98.00%</span>
			</a>
			<div class="detail-koubei">
				<ul class="swiper-wrapper">
					<li class="koubei-item swiper-slide">
						<div class="koubei-img">
							<img src="https://img05.miyabaobei.com/d1/p3/2016/06/06/95/c5/95c523e81d1766ef01e37957ef15d2a4805216979.jpg@style@koubeilist">
						</div>

						<div class="koubei-desc">
							结识蜜芽是在一位友人的朋友圈，那时候我宝宝才满月，吃的是明一奶粉，那奶粉对于我来说还挺贵的，在我们这边超市368一罐，对于一个没工作的宝妈来说确实有点承受不了，不过我都很想得开，因为每个麻麻都想给自己孩子最好的，我也不例外，所以我想只要宝宝喝了好，自己节约一点就好，那奶粉很甜，宝贝吃了上火很严重，那会吃明一的时候宝贝眼睛全眼屎，每天都要给他擦很多次，有时候眼睛都擦红了，但还是没用，有时候眼屎多的眼睛都睁不开，在这要说明一下，并不是我偏袒牛栏吧，因为我家喝明一确实很上火，不过因人而异吧。一开始我看很多宝宝都吃的牛栏，所以抱着试一试的心态在蜜芽买了一1罐来试一试，奶粉很清淡，味道微甜，我尝了一下，于是迫不及待的给宝宝直接换成牛栏了，原谅我是一个90后的新手麻麻，对于这些常识根本一窍不通换，以致最后害宝宝拉了几天肚子。而且一开始给宝宝在蜜芽上买奶粉其实是有顾虑的，因为奶粉不同于玩具和衣服，毕竟是要进肚皮里的，而且不是只吃一两次，因为我家是全奶粉，所以我有这方面的顾虑也很正常，最后我到实体店买了2罐和蜜芽上买到的牛栏做了细致的比较，最后的结果还比较满意，除了生产日期和保质期不同，其他基本一样，味道也一样，实体店225一罐，比蜜芽上贵太多，我肯定会选择经济实惠的来买了，所以我家直到现在吃的都是蜜芽上买的牛栏！包装也蛮好的，从一开始到现在从来没有出现过爆罐这种情况。下面是我这个6.1淘的牛栏一段和二段奶粉，还有两套小背带套装，6.1晒单，顺便晒晒我的小牛牛，拍摄得不好，请大家凑合看吧，希望超级免单大奖能够砸中我。
						</div>

						<div class="koubei-author">

							<span class="author-name">!</span>
							<span class="author-icon">
                              <img src="https://q.qlogo.cn/qqapp/1101525942/BE6C719C8534C3B38ACE4ECAB411A2E4/100" alt="" class="photo"> 
							</span>
						</div>
					</li>

					<li class="koubei-item swiper-slide">
						<div class="koubei-img">
							<img src="https://img05.miyabaobei.com/d1/p5/2017/05/04/91/37/91371ecaf22dccae6459babfbc9f02a0822237445.jpg@style@koubeilist">
						</div>

						<div class="koubei-desc">
							结识蜜芽是在一位友人的朋友圈，那时候我宝宝才满月，吃的是明一奶粉，那奶粉对于我来说还挺贵的，在我们这边超市368一罐，对于一个没工作的宝妈来说确实有点承受不了，不过我都很想得开，因为每个麻麻都想给自己孩子最好的，我也不例外，所以我想只要宝宝喝了好，自己节约一点就好，那奶粉很甜，宝贝吃了上火很严重，那会吃明一的时候宝贝眼睛全眼屎，每天都要给他擦很多次，有时候眼睛都擦红了，但还是没用，有时候眼屎多的眼睛都睁不开，在这要说明一下，并不是我偏袒牛栏吧，因为我家喝明一确实很上火，不过因人而异吧。一开始我看很多宝宝都吃的牛栏，所以抱着试一试的心态在蜜芽买了一1罐来试一试，奶粉很清淡，味道微甜，我尝了一下，于是迫不及待的给宝宝直接换成牛栏了，原谅我是一个90后的新手麻麻，对于这些常识根本一窍不通换，以致最后害宝宝拉了几天肚子。而且一开始给宝宝在蜜芽上买奶粉其实是有顾虑的，因为奶粉不同于玩具和衣服，毕竟是要进肚皮里的，而且不是只吃一两次，因为我家是全奶粉，所以我有这方面的顾虑也很正常，最后我到实体店买了2罐和蜜芽上买到的牛栏做了细致的比较，最后的结果还比较满意，除了生产日期和保质期不同，其他基本一样，味道也一样，实体店225一罐，比蜜芽上贵太多，我肯定会选择经济实惠的来买了，所以我家直到现在吃的都是蜜芽上买的牛栏！包装也蛮好的，从一开始到现在从来没有出现过爆罐这种情况。下面是我这个6.1淘的牛栏一段和二段奶粉，还有两套小背带套装，6.1晒单，顺便晒晒我的小牛牛，拍摄得不好，请大家凑合看吧，希望超级免单大奖能够砸中我。
						</div>

						<div class="koubei-author">

							<span class="author-name">西欧你刚才</span>
							<span class="author-icon">
                              <img src="https://img05.miyabaobei.com/d1/p5/2017/05/04/91/37/91371ecaf22dccae6459babfbc9f02a0822237445.jpg@style@koubeilist" alt="" class="photo"> 
							</span>
						</div>
					</li>
					<li class="koubei-item swiper-slide">
						<div class="koubei-img">
							<img src="https://img05.miyabaobei.com/d1/p3/2016/06/06/95/c5/95c523e81d1766ef01e37957ef15d2a4805216979.jpg@style@koubeilist">
						</div>

						<div class="koubei-desc">
							结识蜜芽是在一位友人的朋友圈，那时候我宝宝才满月，吃的是明一奶粉，那奶粉对于我来说还挺贵的，在我们这边超市368一罐，对于一个没工作的宝妈来说确实有点承受不了，不过我都很想得开，因为每个麻麻都想给自己孩子最好的，我也不例外，所以我想只要宝宝喝了好，自己节约一点就好，那奶粉很甜，宝贝吃了上火很严重，那会吃明一的时候宝贝眼睛全眼屎，每天都要给他擦很多次，有时候眼睛都擦红了，但还是没用，有时候眼屎多的眼睛都睁不开，在这要说明一下，并不是我偏袒牛栏吧，因为我家喝明一确实很上火，不过因人而异吧。一开始我看很多宝宝都吃的牛栏，所以抱着试一试的心态在蜜芽买了一1罐来试一试，奶粉很清淡，味道微甜，我尝了一下，于是迫不及待的给宝宝直接换成牛栏了，原谅我是一个90后的新手麻麻，对于这些常识根本一窍不通换，以致最后害宝宝拉了几天肚子。而且一开始给宝宝在蜜芽上买奶粉其实是有顾虑的，因为奶粉不同于玩具和衣服，毕竟是要进肚皮里的，而且不是只吃一两次，因为我家是全奶粉，所以我有这方面的顾虑也很正常，最后我到实体店买了2罐和蜜芽上买到的牛栏做了细致的比较，最后的结果还比较满意，除了生产日期和保质期不同，其他基本一样，味道也一样，实体店225一罐，比蜜芽上贵太多，我肯定会选择经济实惠的来买了，所以我家直到现在吃的都是蜜芽上买的牛栏！包装也蛮好的，从一开始到现在从来没有出现过爆罐这种情况。下面是我这个6.1淘的牛栏一段和二段奶粉，还有两套小背带套装，6.1晒单，顺便晒晒我的小牛牛，拍摄得不好，请大家凑合看吧，希望超级免单大奖能够砸中我。
						</div>

						<div class="koubei-author">

							<span class="author-name">西欧你刚才</span>
							<span class="author-icon">
                              <img src="https://q.qlogo.cn/qqapp/1101525942/BE6C719C8534C3B38ACE4ECAB411A2E4/100" alt="" class="photo"> 
							</span>
						</div>
					</li>

					<li class="koubei-item koubei-moreBtn swiper-slide" id="last">
						<div class="a-inner">
							<p>分享更多</p>
							<span class="grayColor">MORE</span>
						</div>

					</li>

				</ul>
			</div>
		</div>

		<!--蜜芽全 end-->
		<!--商品详情  参数 资讯-->
		<tab></tab>

		<!--  脚部 start -->

		<div class="pub" style="height: auto;">
			<div class="line"></div>

			<div class="download-
				 app_down" id="bi-bottom">

				<img src="https://img.miyabaobei.com/d1/p5/2016/11/14/01/e1/01e1de76f2290e4e2adc1133d95b4c31192884044.jpg">
				<a class="btn mia-downApp" href="https://lnk0.com/NRZJZh" alt="立即下载"></a>

			</div>
			<p style="padding-top:0.5rem;font-size: 13px;">
				<a>电脑版首页</a> |
				<a>蜜芽触屏版首页</a> |
				<a>关于我们</a>
			</p>
			<p>通过本网站直接或者间接地推销商品或者服务的商业宣传活动均属“广告”</p>
			<p>Copyright © 2017 </p>
			<p>北京花旺在线商贸有限公司 Mia.com 保留一切权利</p>
		</div>
		<!--  脚步end  -->
		<footer>

			<a href="#/shopping" class="left">
				<em class="zb" id="cartNum">{{tnum}}</em>
				<span class="iconfont icon-gouwuche1"></span>
				<span>购物车</span>
			</a>
			<div class="right" @click="add(data.id,data.name,data.m_search_pic,data.market_price)">
				加入购物车
			</div>

		</footer>

	</div>
</template>

<script>
	import Vue from 'vue'
	import { TabContainer, TabContainerItem } from 'mint-ui';
    import Tab from "./Tab"
	Vue.component(TabContainer.name, TabContainer);
	Vue.component(TabContainerItem.name, TabContainerItem);
	import { mapState, mapActions } from 'vuex'
	import axios from "axios"
	export default {
		mySwiper: null,
		mySwiper2: null,
		name: "detail",
		data() {
			return {
				btn1: false,
				btn2: false,
				tab: true,
				data: null,
			    addnum:1,
				id: this.$router.currentRoute.params.id

			}
		},
		computed:{ 	
  			...mapState({items:'goods',tnum:'totalnum'})
        },
		mounted() {
			var that = this;
			this.mySwiper = new Swiper('.swiper-container', {

				autoplay: 5000, //可选选项，自动滑动
				pagination: '.swiper-pagination',
				paginationClickable: true
			})
			this.mySwiper2 = new Swiper('.detail-koubei', {

				//pagination: '.swiper-pagination',
				slidesPerView: 1.2,
				//paginationClickable: true,
				spaceBetween: 10
			})
			this.getDetail()
			this.scrollTop()
			$(document).ready(function() {
				//加的效果
				$(".add").click(function() {
					var n = $(this).prev().val();
					var num = parseInt(n) + 1;
					if(num == 0) {
						return;
					}
					$(this).prev().val(num);
				});
				//减的效果
				$(".jian").click(function() {
					var n = $(this).next().val();
					var num = parseInt(n) - 1;
					if(num == 0) {
						return
					}
					$(this).next().val(num);
				});
			})

		},
		methods: {
			add(id,name,pic,price){
		      //添加购物车
		    	 var info = {
		    	 	  id:id,
		    	 	  name:name,
		    	 	  pic:pic,
		    	 	  price:price,
		    	 	  isChecked:true,
		    	 	  num:this.addnum
		    	 }
//		    	 console.log(this.addnum)
//		    	 console.log(info)
		    	 this.$store.dispatch("addLists",info)
           },

			totop() {
				var n = $("#tab").offset().top
				//console.log(n)
				$(document).scrollTop(n)

			},
			scrollTop() {

				$(window).scroll(function() {
					var m = $(document).scrollTop();

					//var n = $(".titleBar").offset().top
					//console.log(n)
					if(m >= 888) {
						$("#tt").css("display", "block")
						$(".titleBar").css({
							"position": "fixed",
							"top": 0,
							"left": 0,
							"margin": 0
						})

					} else {
						$(".titleBar").css({
							"position": "static",
							"margin-top": 20
						})
						$("#tt").css("display", "none")

					}
				})

			},

			clear() {
				this.btn1 = false;
				this.btn2 = false;
				this.addnum = parseInt($(".num").val())
			
//				console.log(this.addnum)
			},

			getDetail() {
				var that = this;
				axios.get("https://m.mia.com/s/cat288_jh1_f0.html?per_page=40&per_data=1").then(function(res) {
					//console.log(res.data)
					for(var i = 0; i < res.data.length; i++) {
						if(that.id == res.data[i].id) {
							that.data = res.data[i]
							//console.log(that.data)

						}

					}

				})

			}

		},
		watch:{
		  	items:{//检测商品数据变化，重新计算总价钱和总数量
		  		 handler:function(val){
		  		 	 this.$store.dispatch("getNum");
		  		 },
		  		 deep:true
		  	}
        }

	}
</script>

<style scoped lang="scss">
	.detail {
		background: #F2F2F2;
		overflow: hidden;
	}
	/*header-start*/
	
	.dHeader {
		display: flex;
		justify-content: space-between;
		padding: 0 10px;
		height: 44px;
		align-items: center;
		color: #fff;
		font-size: 18px;
		background: #ff4e88;
		a {
			color: #FFFFFF;
		}
		span.iconfont {
			display: block;
			font-size: 22px;
		}
	}
	/*header-end*/
	/*图片轮播 -start*/
	
	.imgBox {
		max-width: 640px;
		min-width: 300px;
		margin: 0 auto;
		padding: 0;
		background: #FFFFFF;
		.swiper-slide {
			height: 375px;
			img {
				width: 100%;
			}
		}
	}
	/*图片轮播 -end*/
	/* 商品介绍 -start  */
	
	.details {
		width: 100%;
		padding: 0 .4267*0.625rem;
		background: #fff;
		padding-top: .4267*0.625rem;
		height: 8*0.625rem;
		background: #fff;
		border-top: 1px solid #f2f2f2;
		border-bottom: 1px solid #f2f2f2;
	}
	
	.detail-nameInfo .proSign {
		line-height: 1;
		color: #2c83f3;
		font-size: .5973*0.625rem;
		padding: .5547*0.625rem 0 .4267*0.625rem;
		.country-icon {
			display: inline-block;
			height: .5547*0.625rem;
			width: .8533*0.625rem;
			background-size: 100% auto;
			vertical-align: top;
			margin-right: .2133*0.625rem;
			img {
				width: 100%;
			}
		}
	}
	
	.detail-nameInfo .title {
		font-size: .6827*0.625rem;
		line-height: 1.4*0.625rem;
		display: -webkit-box;
		display: box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		box-orient: vertical;
		overflow: hidden;
		font-weight: 400;
		color: #1a1a1a;
	}
	
	.detail-nameInfo .descInfo {
		color: #999;
		margin-top: .32*0.4rem;
		line-height: 15px;
	}
	
	.detail-nameInfo .priceBox {
		color: #fa4b9b;
		font-size: .896*0.625rem;
		.span-icon {
			line-height: 1;
			border: .0213*0.625rem solid #fa4b9b;
			border-radius: .1067*0.625rem;
			color: #fa4b9b;
			font-size: .4267*0.625rem;
			padding: .0853*0.625rem .1067*0.625rem;
			display: inline-block;
			vertical-align: middle;
			margin-right: .2133*0.625rem;
		}
	}
	
	.detail-nameInfo .priceBox del {
		font-size: .5547*0.625rem;
		color: #989898;
		display: inline-block;
		vertical-align: text-bottom;
		margin-right: .2133*0.625rem;
		margin-left: .1493*0.625rem;
	}
	/* 商品介绍 -end  */
	/*//#############*/
	
	.itembar {
		padding: .5973*0.625rem 1.0667*0.625rem .5973*0.625rem .4267*0.625rem;
		border-bottom: .0213*0.625rem solid #f2f2f2;
		position: relative;
		background: #fff;
		font-size: .5547*0.625*0.2rem;
		/*padding-left: 1.8347*0.625rem;*/
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		ul {
			display: flex;
			justify-content: space-around;
			li {
				padding-right: 10px;
				text-align: center;
			}
			li:before {
				content: '●';
				color: #fa4b9b;
				margin-right: .1707*0.625rem;
				font-size: .3413*0.625rem;
				vertical-align: middle;
			}
		}
		span {
			color: #CECECE;
		}
	}
	
	.itembar-t {
		margin: 10px 0;
	}
	
	.hidebox {
		/*display:none;*/
		width: 100%;
		/*height: 330px;*/
		background: #fff;
		bottom: 0;
		left: 0;
		right: 0;
		position: fixed;
		z-index: 100001;
		font-size: .512*0.625rem;
	}
	
	.detail-tankuang {
		.tk-title {
			height: 1.856*0.625rem;
			border-bottom: .0213*0.625rem solid #f2f2f2;
			line-height: 1.856*0.625rem;
			text-align: center;
			font-size: .6827*0.625rem;
			padding: 0 .4267*0.625rem;
		}
		.tk-body {
			min-height: 10.4533*0.625rem;
			overflow: auto;
			width: 100%;
			max-height: 10.4533*0.625rem;
			box-sizing: border-box;
		}
		.mes-notice {
			padding: .4267*0.625rem;
			box-sizing: border-box;
			dt {
				font-size: .5547*0.625rem;
				font-weight: 700;
				line-height: 1.5*0.625rem;
			}
			dd {
				font-size: .512*0.625rem;
				line-height: 1.5*0.625;
			}
		}
		.tk-btnGroup {
			background: #fa4b9b;
			color: #fff;
			height: 2.048*0.625rem;
			text-align: center;
			button {
				color: #fff;
				display: inline-block;
				height: 100%;
				text-align: center;
				font-size: 14px;
				border: none;
				background: 0 0;
				display: block;
				width: 100%;
			}
		}
	}
	/*.detail-tankuang*/
	/*弹框2开始*/
	
	.detail-selectBox {
		.selProImg {
			position: absolute;
			width: 3.7973*0.625rem;
			height: 3.7973*0.625rem;
			border: 1px solid #f2f2f2;
			overflow: hidden;
			left: .4267*0.625rem;
			top: -1.4933*0.625rem;
			img {
				width: 100%;
			}
		}
		.tk-title {
			height: 3.1787*0.625rem;
			padding-left: 4.8213*0.625rem;
			box-sizing: border-box;
		}
		.selInfo {
			.selPriceWrapper {
				font-size: 0.512*0.8rem;
				display: flex;
				justify-content: space-between !important;
				margin-bottom: -10px;
				.iconfont {
					font-size: 14px;
				}
			}
			.selected {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				font-size: 14px;
			}
		}
		/*selfinfo*/
		#typeSel {
			padding-bottom: 0;
			box-sizing: border-box;
			padding: .8533*0.625rem .4267*0.625rem 1.4933*0.625rem;
			overflow: hidden;
			box-sizing: border-box;
			border-bottom: .0213*0.625rem solid #f2f2f2;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-bottom: 0;
			dt {
				padding-bottom: 10px;
				box-sizing: border-box;
			}
			dd {
				height: 1.152*0.625rem;
				line-height: 1.152*0.625rem;
				padding: 0 .8533*0.625rem;
				border: .0213*0.625rem solid #fa4b9b;
				border-radius: .1707*0.625rem;
				margin-bottom: .64*0.625rem;
				cursor: pointer;
				width: 80px;
				color: #333;
				text-align: center;
			}
		}
		#jsq {
			padding: .8533*0.625rem .4267*0.625rem 1.4933*0.625rem;
			overflow: hidden;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			.gw_num {
				border: 1px solid #dbdbdb;
				width: 110px;
				line-height: 26px;
				overflow: hidden;
				margin-top: 10px;
				border-radius: 5px;
			}
			.gw_num span {
				display: block;
				height: 26px;
				width: 26px;
				float: left;
				color: #7A7979;
				border-right: 1px solid #dbdbdb;
				text-align: center;
				cursor: pointer;
			}
			.gw_num .num {
				display: block;
				float: left;
				text-align: center;
				width: 52px;
				font-style: normal;
				font-size: 14px;
				line-height: 24px;
				border: 0;
			}
			.gw_num span.add {
				float: right;
				border-right: 0;
				border-left: 1px solid #dbdbdb;
			}
		}
	}
	/*弹框2结束*/
	
	.mask {
		background: rgba(0, 0, 0, .5);
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 100000;
		/*display:none;*/
	}
	
	.detail-miaquan {
		max-width: 640px;
		min-width: 300px;
		overflow: hidden;
		margin: 0 auto;
		padding: 0;
		background: #fff;
		padding-top: .4267*0.625rem;
		padding-bottom: .8533*0.625rem;
		a.title {
			padding: .4267*0.625rem;
			font-size: .64*0.625rem;
			/*position: relative;*/
			font-size: 0.512rem*0.625;
			display: block;
			display: flex;
			justify-content: space-between;
			b {
				margin: 0 5px;
				color: red;
			}
		}
		.detail-koubei .koubei-item {
			display: inline-block;
			border: 1px solid #f2f2f2;
			overflow: hidden;
			height: 5.0347*0.625rem;
			width: 11.0507*0.625rem !important;
			margin-right: .384*0.625rem;
			position: relative;
			vertical-align: top;
			/*border: 1px solid red;*/
			float: left;
		}
		.detail-koubei .koubei-item .koubei-img {
			box-sizing: border-box;
			float: left;
			width: 4.6933*0.625rem;
			margin-right: .0213*0.625rem;
			img {
				width: 100%;
			}
		}
		.detail-koubei .koubei-item .koubei-desc {
			padding: .4693*0.625rem .5333*0.625rem 1px .5333*0.625rem;
			white-space: normal;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			line-clamp: 3;
			-webkit-box-orient: vertical;
			box-orient: vertical;
			overflow: hidden;
			line-height: 18px;
		}
		.koubei-author {
			display: flex;
			justify-content: flex-end;
			height: 50px;
			align-items: center;
		}
		.detail-koubei .koubei-item .author-icon {
			display: inline-block;
			width: 1.1093*0.625rem;
			height: 1.1093*0.625rem;
			border-radius: 100%;
			vertical-align: middle;
			overflow: hidden;
			text-align: right;
			margin-right: 20px;
			line-height: 1.1093*0.625rem;
			color: #999;
			img {
				width: 100%;
			}
		}
		#last {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 50%;
			text-align: center;
			border: none;
			margin-left: -60px;
			.a-inner {
				width: 50%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				background: #fff;
				border: 1px solid #CECECE;
				p {
					padding-bottom: 10px;
					border-bottom: 1px solid #F2F2F2;
					color: #fa4b9b;
				}
				span {
					display: inline-block;
					margin-top: 5px;
					color: gray;
				}
			}
		}
	}
	
	div.pub {
		width: 100%;
		border-top: 1px solid #d6d6d6;
		background: #ececec;
		padding-top: 20px;
		margin-bottom: 46px;
		box-sizing: border-box;
		color: #CECECe;
		img {
			width: 100%;
		}
		p {
			line-height: 2;
			padding: 0 0.5rem;
			text-align: center;
			a {
				color: #CECECe;
			}
		}
	}
	
	footer {
		width: 100%;
		height: 46px;
		background: #fff;
		display: flex;
		align-items: center;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 200;
		font-size: 0.35rem;
		.left,
		.right {
			flex-grow: 1;
			text-align: center;
			height: 46px;
		}
		.left {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			color: #5f646e;
			em{
				height: .5973*0.625rem;
			    color: #fff;
			    font-size: .4267*0.625rem;
			    border-radius: .5973rem;
			    min-width: .5973*0.625rem;
			    background: #fa4b9b;
			    text-align: center;
			    line-height: .5973*0.625rem;
			    font-style: normal
						}
			
		}
		.right {
			line-height: 46px;
			flex-grow: 1;
			text-align: center;
			background: #FF4E88;
			color: #fff;
		}
	}
</style>