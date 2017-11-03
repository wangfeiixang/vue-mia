  <template>
	<div class="classify rootbox">
	<classify-header :msg="msg"></classify-header>

  <section class="main" v-show="msg.isShow">
	
			<div class="left" id="leftWrapper">
				 <ul  id="scroller">
			
				  <li v-for="(item,index) in lists.list" @click="addClass(index)" :class="[index==0?'curent':'',index==0?'bg':'','swiper-slide']" :data-pid="lists.pid[index]">{{item}}</li>
				
				</ul>
			</div>


  <div class="content" id="content" >
		 <div id="scroller">
                <div class="info"  v-for="(item,index1) in data" >
                	
	        	        <a v-if="item.type=='banner'">
						     <img :src="item.categorys[0].banner_image">
					    </a>
					    
						<h3 v-if="item.type!='banner'">{{item.title}}</h3>
									
					    <div class="items" v-if="item.type!='banner'" >
								
						       <router-link to="/list" v-for="(val,index2) in item.categorys">
									  <div class="imgbox">
									  	
										  <img :src="val.banner_image">
										
									   </div>
									   <p>{{val.c_name}}</p>
					    	  </router-link>
				
									
						</div>
						
			
					</div>	<!--info-->
						
				</div> <!--scroll-->
					
  </div>
				
			

		</section>
		<public-footer></public-footer>
	</div>
  </template>

  <script>
	import Vue from "vue"
	import axios from "axios"
	import Footer from './Footer'
	import ClassifyHeader from "./ClassifyComponents/ClassifyHeader"
	export default {
		name: 'classify',
		myScroll:null,
		data() {
			return {
                data:null,
              
              
			   msg: {
					curent:true,
					isShow:true

				    },
			   lists:{
			      list:["甄选推荐",
				    "应季热销","宝宝奶粉","屁屁护理",
				    "营养辅食","喂养用品","宝宝洗护",
				    "童装童鞋","玩具书籍","宝宝寝居",
				    "出行装备","孕产母乳","美妆个护",
				    "家居日百","食品保健","服饰鞋包"
				     ],
				  pid:[6811,6660,32,33,63,43,68,83,70,80,72,67,73,74,78,2537]
			
			     }
     
			        }
			},
		methods:{
			  
	           addClass(index){
	           	var that=this
	           	$(".left li").eq(index).addClass("curent bg").siblings().removeClass("curent bg")
	           		axios.get("https://m.mia.com/search/getCategoryClassify",{
	           			params:{pid:that.lists.pid[index]}
	           		}).then(function(res){
	           			that.data=res.data.categorysInfos.son_category
  		               // console.log(that.data)
  		               //https://m.mia.com/special/module/index/20074/wap/
  	                  })
	           	
	           }
		  },
			
		mounted(){
			 this.addClass(0)
			
			var myleft = new iScroll("leftWrapper",{
		 	vScroll:true,
		 	checkDOMChanges:true,
		 	hScrollbar:false
		 	
		 })
			
		  this.myScroll=new iScroll("content",{
		 	vScroll:true,
		 	checkDOMChanges:true,
		 	bounceLock:true
		 	
		 })
		
			
		},
//		watch:{data(val){
//			let that=this;
//			setTimeout(function(){
//				that.myScroll.scrollTo(0,1000,200,true);
//
//			},0)
//			
//		}
//			
//			
//	},
		components: {
			ClassifyHeader
		}
	}
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
	.main {
		width: 100%;
		position:fixed;
		top: 1.85*0.625rem;
		margin-bottom:44px;
		z-index: 4;
		text-align: center;
		display: flex;
		justify-content: flex-start;
		background: #F2F2F2;
		overflow:hidden;
		height:25*0.625rem;
  .left {
			flex: 1;
			width: 20%;
			height:15.4rem;
			overflow: hidden;
			
		}
  .content {
			flex: 3;
			width: 80%;
			background: #FFFFFF;
			height:100%;
		   }
	     }
	
	.left ul li {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		line-height: 2.2*0.625rem;
		font-size: .65*0.625rem;
		cursor: pointer;
		
	}

	.left ul li.bg{
		color:#ff4f8f;
		background: #FFFFFF;
	}
	
	.left ul li.curent:before {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		height: 100%;
		width: .125*0.625rem;
		background-color: #ff4d8e;
	}
	/*右边*/
	.content {background: #FFFFFF;
	    height: 100%;
	    overflow-y:scroll;
	   
	}
    .content .info{height:auto !important;overflow: auto;}
	.content .info img{width:90%;}
	 h3{margin: 1*0.625rem 0 0 .5*0.625rem;
      line-height: 1;
      font-weight: 400;
       font-size: .55*0.625rem;
       color: #333;
       text-align: left;
     }
	.content .items{
		display: flex;
		justify-content:flex-start;
		width: 100%;
		flex-wrap:wrap;
		align-items:center;
    a{ 
      	display: inline-block;
	    vertical-align: top;
	    margin: .5*0.625rem .25*0.625rem .25*0.625rem .75*0.625rem;
	    font-size: .6rem;
	    color: #252525;
	    width: 2.875*0.625rem;
        text-align: center;
        color: #252525;
        width: 2.875*0.625rem;
        text-align: center;
        .imgbox img{
        	width: 100%;
        	
           }
       p{
		   	margin-top: 2px;
		    font-size: .55*0.625rem;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    font-family: "Helvetica Neue",Helvetica,STHeiTi,Arial,sans-serif;
		    word-break: break-word;
		    white-space: nowrap;
		    line-height: 1.3*0.625rem;
		    width:2rem;
        }
   
     }
	
		}	
	
	
  </style>