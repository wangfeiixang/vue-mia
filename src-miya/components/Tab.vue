<template>
		
<div class="tab" id="tab">

   
  <span @click="addCurrent">
 <mt-navbar class="titleBar" v-model="active" >
  <mt-tab-item @click="changeDiv(1)" id="1">商品详情</mt-tab-item>
  <mt-tab-item @click="changeDiv(2)" id="2">产品参数</mt-tab-item>
  <mt-tab-item @click="changeDiv(3)" id="3">问题咨询</mt-tab-item>
</mt-navbar>

</span>

<div id="tt"></div>

 <mt-tab-container v-model="active" swipeable >
  <mt-tab-container-item id="1" class="fisrt">
   <div class="showBlock imgs" style="min-height: 762px; height:100%;" >
	       	   <img v-for="val in data" :src="val.src"/>
   </div> 
  </mt-tab-container-item>
     <mt-tab-container-item id="2" style="min-height:762px; background: #FFFFFF; height:100%;">
      <div class="intro">
         <p>商品名称：德国爱他美 Aptamil 爱他美婴儿配方奶粉2段6~10M 800g*4罐</p>
        <p> 品牌：德国爱他美 Aptamil</p>
         <p>分类：婴幼儿牛奶粉</p>
         <p>商品条码</p>  
     </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="3" style="min-height:762px; height:100%;">
    <div class="QA">
                <dl>
                    <dt class="Q">1、我如何购买？</dt>
                    <dd class="A">每个套餐的价格、包含项目、注意事项会略有不同，请您注意页面描述及套餐温馨提示。购买付款成功后会收到短信，如果商品没有标“免预约”字样，需要您尽快凭下单后收到的短信优惠码和服务商预约服务。服务商预约电话在商品详情页均有标注。</dd>
                </dl>
                <dl>
                    <dt class="Q">2、订单下单后，我如何付款？</dt>
                    <dd class="A">同蜜芽官网的付款方式，我们目前支持支付宝、微信支付等多种支付方式供您选择。</dd>
                </dl>
                <dl>
                    <dt class="Q">3、我怎么知道自己定成功没？</dt>
                    <dd class="A">预订成功并付款后，我们的小蜜芽客服会马上对订单进行处理。订单成功后，会为您发出预订成功的短信。如订单在预订过程中有异常，我们的小蜜芽客服也会第一时间联系您，请您保持手机畅通。</dd>
                </dl>
                <dl>
                    <dt class="Q">4、如果我不想要了可以退吗？</dt>
                    <dd class="A">我们部分服务是支持随时退和延时退的。但是订单一旦在服务商处开始消费或预约成功，平台将不再接受取消订单和退款处理。如果在合理时间内，您需要取消订单，请致电蜜芽客服申请取消并退款。</dd>
                </dl>
                <dl>
                    <dt class="Q">5、取消订单后，多长时间可以退款？</dt>
                    <dd class="A">在您申请退款之后，我们会在24小时之内处理您的取消订单，订单确认取消成功后，您支付的款项最迟将会在3-5个工作日（视银行支付网关情况而定）退到您原支付的账户中，请您耐心等待。</dd>
                </dl>
                <dl>
                    <dt class="Q">6、如何查看我已经预定成功的订单？</dt>
                    <dd class="A">在您的蜜芽账户中，会有订单的相关信息供您查询。您只要访问蜜芽官网，登录后，点击“我的订单”，即可查看到已经预定成功的订单。</dd>
                </dl>
                <dl>
                    <dt class="Q">7、有一些产品细节我该如何确认？</dt>
                    <dd class="A">我们已经在产品的购买页面，详尽的列出了套餐介绍及注意事项，如果您对此还有疑问，欢迎您随时联系蜜芽在线进行确认。</dd>
                </dl>
                <dl>
                    <dt class="Q">8、蜜芽平台商品价格说明</dt>
                    <dd class="A">
                        <ul>
                            <li>1. 折扣价（显示如￥199）：如无特殊说明，折扣指划线价（如：吊牌价，品牌商、供应商的指导价、建议零售价，品牌专柜价或该商品在蜜芽平台上曾经展示过的销售价）等某一价格基础上计算出的优惠比例和优惠金额；</li>
                            <li>2. 划线价（显示如<del>￥399</del>）：商品划线价格可能是吊牌价，品牌商、供应商的指导价、建议零售价，品牌专柜价或该商品在蜜芽平台上曾经展示过的销售价。由于时间、地区的差异性及市场行情的波动性。品牌商品的标价、商品吊牌价可能会与您购物展示不一致。该价格仅供消费者参考；</li>
                            <li>3. 疑问/异常问题：商品促销信息以商品详情页面为准；商品的具体售价以订单结算页面为准；如您在购买商品时发现活动商品价格或促销活动，商品价格异常，请您在购买前联系蜜芽客服，由客服将您的问题第一时间反馈给销售商，进而帮助您解答。</li>
                        </ul>
                    </dd>
                </dl>
            </div>
  </mt-tab-container-item>
</mt-tab-container>
 
</div>

</template>


<script>
import Vue from 'vue'
import axios from "axios"
Vue.component(Navbar.name, Navbar);
import {Navbar,TabContainer, TabContainerItem } from 'mint-ui';
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
const Tab=Vue.extend({
	  name:"tab",
	  data(){
	  	return{
	  	    active:1,
	  		data:null,
	  	}
	  	
	  },
	  mounted(){
	  		var that=this;
			axios.get("../../static/json/data.json").then(function(res){
				that.data=res.data
					
			 })
			
		      this.changeDiv(1)	
		      
	  	
	  },
	  methods:{
	  	addCurrent(){
			  var n=$("#tab").offset().top
			   //console.log(n)
			  $(document).scrollTop(n)
			 
			},
		changeDiv(type){

        switch(type){
          case 1: this.active = "1";break;
          case 2: this.active = "2";break;
          case 3: this.active = "3";break;
             }
      }
	  	
	  	
	  }
})

Vue.component("tab",Tab)

export default Tab

	
</script>

<style lang="scss" scoped>
.intro{padding: 0 13px;margin-top: 20px;
       background: #fff !important;
   p{padding:5px 0px;}
  
  }
.QA {
	background: #fff !important;
    padding: 10px 0;
    dl {
    margin: 5px 10px 15px 10px;
    }
     .Q {
    font-weight: 600;
    font-size: 13px;
    color: #343434;
    line-height: 1.3;
   }
     .A {
    margin-top: 8px;
    font-size: 12px;
    color: #5b5b5b;
     }
}
.QA .Q:after, .QA .A:after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 12px;
    height: 15px;
    background: url(../assets/icon_qa.png) no-repeat;
    -webkit-background-size: 12px auto;
    background-size: 12px auto;
}
.QA .A:after {
    top: 2px;
    background-position: 0 -15px;
}

.QA .Q {
    font-weight: 600;
    font-size: 13px;
    color: #343434;
    line-height: 1.3;
}

.QA .A {
    margin-top: 8px;
    font-size: 12px;
    color: #5b5b5b;
}
.QA .Q, .QA .A{
    position: relative;
    padding-left: 20px;
}
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #ff4e88;
    color: #ff4e88;
    margin-bottom: -3px;
    
}
.mint-tab-container-item{background: #ffff !important;}

.titleBar {
    display: flex;
    position: relative;
    margin: 0 auto;
    left: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    background: #fff !important;
    max-width: 640px;
    margin: 0 auto;
    z-index: 3;
    justify-content:space-around;
    margin-top:10px;


    
    }
    #tt{width: 100%;height: 40px;display:none;}

.imgs{
	display: block;
	background: #00AAFF;
	width: 100%;
	height:100%;
	overflow: hidden;
	 img{width:100%;
	    display:block;
	    border: none;
	
	}
	
}
</style>