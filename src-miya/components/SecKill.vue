<template>
	<div class="seckill">
	   <header>
	   	   <ul>
	   	   	  <li v-for="(time,index) in times" :class="{active:iscur==index}" @click="changeUrl(index,time.active,time.pid,time.end_time)">
	   	   	  	<span v-text="time.tab_time"></span>
	   	   	  	<p>{{time.image_index}}</p>
	   	   	  </li>
	   	   </ul>
	   </header>
	   <section>
	   	  <div class="title">
	   	  	  <div class="left">	   	  	  	
		   	  	  	<span class="iconfont icon-biao"></span>
		   	  	  	<i v-if="num==1||num==2">距本场结束</i>
		   	  	  	<i v-if="num==3">距本场开始</i>
		   	  	  	<div class="timer">
		   	  	  		 <span id="thour"></span>:
		   	  	  		 <span id="tminute"></span>:
		   	  	  		 <span id="tsecond"></span>
		   	  	  	</div>
	   	  	  </div>
	   	  	  <div class="right">
	   	  	  	  <span>活动规则</span><i class="iconfont icon-gengduo"></i>
	   	  	  </div>
	   	  </div>
	   	  <div class="list">
	   	  	  <ul v-for="list in lists">
	   	  	  	 <div class="outer" :class="list[1].inlist.label_id==2?'pp':'pl'" v-if="list[1].inlist">
	   	  	  	 	<div class="tag" v-if="list[1].inlist.label_id==2"><i class="iconfont icon-pinpailiansuo"></i>品牌秒杀</div>
	   	  	  	 	<div class="tag" v-if="list[1].inlist.label_id==3"><i class="iconfont icon-shangpinleibie-copy"></i>品牌分类</div>
	   	  	  	 	<a href="">
	   	  	  	 		<h5 v-text="list[1].inlist.exten"></h5>
	   	  	  	 		<p><span v-text="list[1].inlist.outlet_discount_desc">低至29.0元起</span></p>
	   	  	  	 		<dl>
	   	  	  	 			<dd v-for="good in list[1].inlist.itemList">
	   	  	  	 				<img :src="good.pic" alt="" />
	   	  	  	 				<div class="fix">
	   	  	  	 					<span>¥{{parseInt(good.active_price)}}</span>
	   	  	  	 					<i>¥{{parseInt(good.market_price)}}</i>
	   	  	  	 				</div>
	   	  	  	 			</dd>
	   	  	  	 		</dl>
	   	  	  	 	</a>
	   	  	  	 </div>
	   	  	  	 <li v-for="(item,index) in list[0].outlist">
	   	  	  	 	<a href="">
	   	  	  	 		<div class="img-box">
	   	  	  	 		  <img :src="item.pic" alt="" />
	   	  	  	 		</div>
	   	  	  	 		<div class="info-box">
	   	  	  	 			<p class="desc" v-text="item.short_info"></p>
	   	  	  	 			<p class="tit" v-text="item.title"></p>
	   	  	  	 			<div class="tag" v-if="item.warehouse.length">
	   	  	  	 				<span v-for="house in item.warehouse"><i v-if="house.name" :class="house.name"></i>{{house.text}}</span>
	   	  	  	 			</div>
	   	  	  	 			<div class="price" v-if="num==1||num==2">
	   	  	  	 				<p class="sp">¥<span>{{parseInt(item.active_price)}}</span></p>
	   	  	  	 				<p class="mp"><i>¥{{parseInt(item.market_price)}}</i></p>
	   	  	  	 			</div>
	   	  	  	 			<div class="price block" v-if="num==3">
	   	  	  	 				<p class="sp">秒杀价¥<span>{{parseInt(item.active_price)}}</span></p>
	   	  	  	 				<p class="mp"><i>¥{{parseInt(item.market_price)}}</i></p>
	   	  	  	 			</div>
	   	  	  	 			<div class="progress" v-if="num==1||num==2">
	   	  	  	 				<div class="bar"><i></i></div>
	   	  	  	 				<div class="status">已售{{(index+1)*10}}%</div>
	   	  	  	 			</div>
	   	  	  	 			<div class="side">	   	  	  	 				
	   	  	  	 				<button v-if="num==1||num==2">立即秒杀</button>
	   	  	  	 				<button class="start" v-if="num==3">即将开始</button>
	   	  	  	 			</div>
	   	  	  	 		</div>
	   	  	  	 	</a>
	   	  	  	 </li>
	   	  	  </ul>
	   	  	  <p class="btminfo">- 限时秒杀 全场包邮 -</p>
	   	  </div>
	   </section>
	</div>
</template>

<script>
	import axios from "axios"
	import Vue from "vue"
	var bus = new Vue()
	let SecKill={
		name:"seckill",
		data(){
			return{
			  iscur:2,
			  times:[],
			  lists:[],
			  num:1,
			  pid:null,
			  endtime:null,
			  now:null
			}
		},
		methods:{
		    getTime(){
				var that = this;
				axios.get("https://m.mia.com/instant/seckill/seckillPromotionInfo/2/"+this.pid)
				    .then(function(res){
				    	console.log(res.data)
				    	res.data[0].image_index = "已开抢";
				    	res.data[1].image_index = "已开抢";
				    	res.data[2].image_index = "秒杀中";
				    	res.data[3].image_index = "即将开始";
				    	res.data[4].image_index = "即将开始";
				    	that.times = res.data
				})
			},
			getList(){
				var that = this;
				this.lists = [];
//				console.log(this.pid)
				axios.get("https://m.mia.com/instant/seckill/seckillPromotionItem/"+this.pid+"/"+this.num)
				     .then(function(res){
				     	var data = res.data.item_list;
//				     	console.log(res.data)
				     	for(var i=0;i<data.length;i++){
				     		if(i%4==0){
				     			that.lists.push([{outlist:[]},{inlist:""}])
				     		}
				     	}
				     	var relation = res.data.relation_list
				     	for(var i=0;i<data.length;i++){
				     		that.lists[Math.floor(i/4)][0].outlist.push(data[i])
				     	}
				     	for(var i=1;i<relation.length+1;i++){
                            that.lists[i][1].inlist=relation[i-1]				     		
				     	}
//						console.log(that.lists)
//                      console.log(that.endtime)
				 })
			},
			changeUrl(index,_num,_pid,end_time){
				this.iscur=index;
				this.num = _num;
				this.pid = _pid;
				this.endtime=end_time;
			},
			ShowCountDown(time){
				var now = new Date();
				var endDate = new Date(time); 
				var leftTime=endDate.getTime()-now.getTime(); 
				var leftsecond = parseInt(leftTime/1000); 
				var day1=Math.floor(leftsecond/(60*60*24)); 
				var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
				var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
				var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
				hour=hour<10?"0"+hour:hour;
				minute = minute<10?"0"+minute:minute;
				second = second<10?"0"+second:second;
				var thour = $("#thour");
				var tminute = $("#tminute");
				var tsecond = $("#tsecond");
//				console.log(hour)
				if(thour){					
					thour.html(hour);
					tminute.html(minute);
					tsecond.html(second);
				}
           },
           changePid(){
           	  this.pid = this.$router.currentRoute.params.pid
           	  this.endtime = this.$router.currentRoute.params.sj
           }
			
		},
		mounted(){
		  var that = this;
		  this.changePid();	  	
		  this.getTime();
		  this.getList();
	      setInterval(function(){
	      	    that.now = new Date().getHours();
            	that.ShowCountDown(that.endtime);
          },1000);
		},
		watch:{
			iscur(val){
				var that = this;
				setTimeout(function(){
					that.getList()
				},0)
			},
		    now(val){		    		
		    	this.getTime()
		    	this.getList()
		    }
		}
	}
	
	
	
	
	export default SecKill
</script>

<style scoped lang="scss">
    .seckill{
    	width:100%;
    	height:100%;
    	header{
	    	position:fixed;
	    	top:0;
	    	left:0;
	    	width:100%;
	    	height:1.3067rem;
	    	background:#eee;
	    	z-index:999;
	    	ul{
	    		width:100%;
	    		height:100%;
	    		display:flex;
	    		li{
	    			flex:1;
	    			display:flex;
	    			flex-direction:column;
	    			justify-content:center;
	    			align-items:center;
	    			line-height:1.3;
	    			color:#555;
	    			position:relative;
	    			span{font-size:.3733rem;font-weight:700;}
	    			p{font-size:.32rem;}
	    			&.active{
	    				background-color: #ff425f;
    					color: #fff;	
	    			}
	    			&.active:after{
					    width: 0;
					    height: 0;
					    border: solid transparent;
					    border-width: .12rem;
					    border-style: solid;
					    border-top-color: #ff425f;
					    position: absolute;
					    content: '';
					    bottom: 0;
					    left: 50%;
					    transform: translate(-50%,95%);
	    			}
	    		}
	    	}
        }
    }
    section{
    	width:100%;
    	height:100%;
    	padding-top:1.3067rem;
    	.title{
    		padding: 0 .2667rem;
    		height: 1.0933rem;
		    background-color: #f9f8f8;
		    font-size: .3467rem;
		    color: #666;
    		display:flex;
    		justify-content:space-between;
    		align-items:center;
    		.left{
    			display:flex;
    			i{margin:0 .1333rem;}
    			.timer span{
    				margin:0 2px;
    				padding:0.0533rem;
    				display:inline-block;
    				background:#4e4e4e;
    				color:#fff;
    			}
    		}
    	}
    	.list{
    		width:100%;
    		background:#fff;
    		ul{
    			li{
				    margin-left: .2667rem;
				    padding: .2667rem .2667rem .4rem 0;
				    border-bottom: 1px solid #d7d7d7;
				    overflow:hidden;
				    a{
				      display:block;;
				    }
				    .img-box{
				    	float:left;
					    margin-right: .2667rem;
					    width: 3.1733rem;
					    height: 3.1733rem;
					    background-color: #f2f2f2;
					    img{width:100%;height:100%;}
				    }
				    .info-box{
				    	position:relative;
                        overflow: hidden;
				    	min-height: 3.1733rem;
				    	.desc{
			    		    white-space: nowrap;
						    text-overflow: ellipsis;
						    overflow: hidden;
						    margin-bottom: .0667rem;
						    font-size: .3467rem;
						    color: #999;    
                            line-height: 1.5;
				    	}
				    	.tit{
							white-space: nowrap;
						    text-overflow: ellipsis;
						    overflow: hidden;
						    line-height: 1.35;
						    font-size: .4rem;
						    color: #222;
				    	}
				    	.tag{
				    		margin-top:.1333rem;
							font-size:.2933rem;
							color: #52b1f6;
							line-height: 1;
							overflow: hidden;
							span{
								margin-right:0.1rem;
							}
							i{
								float:left;
							    margin-right: .0667rem;
							    width: .4267rem;
							    height: .28rem;
							}
							.az{
							   background:url(https://img.miyabaobei.com/d1/p2/2016/01/12/11/93/1193e0c006d84d40b2442ce3c3c70d31.png);
							   background-size:.4rem auto;
							}
							.xg{
                                background: url(https://img.miyabaobei.com/d1/p2/2016/01/12/1e/bf/1ebfd2e3ab393facab61e2454c62182d.png);
                                background-size:.4rem auto;
                            }
                            .haiwai{
   								background: url(https://img.miyabaobei.com/d1/p2/2016/01/12/e9/11/e91156a566041019ba5661348b8bd97b.png);
   								background-size:.4rem auto;
                            }
				    	}
				    	.price{
			    		    position: absolute;
						    left: 0;
						    bottom: .6667rem;
						    line-height: 1;
						    .sp{
						    	display:inline;
						    	margin-left: .1067rem;
							    font-style: normal;
							    font-size: .32rem;
							    color: #ff425f;
    							font-weight: 700;
    							span{font-size: .56rem;}
						    }
						    .mp{
						    	display:inline;
						    	font-size: .32rem;
    						    color: #999;
    						    text-decoration:line-through;
						    }
				    	}
				    	.block{
				    		bottom:0;
				    		.sp{display: block;margin-left:0;}
				    		.mp{display: block;margin-top: .0667rem;}
				    	}
				    	.progress{
				    		position: absolute;
						    left: 0;
						    bottom: 0;
						    width: 3.3333rem;
						    height: .3733rem;
						    border: 1px solid #ff5e77;
						    background-color: #ffb7c1;
						    border-radius: .6667rem;
						    .bar{
					    	    border-radius: .2667rem;
							    overflow: hidden;
							    width: 100%;
							    height: 100%;
							    i{
							    	display: block;
								    height: 100%;
								    background-color: #ff6a81;
								    border-radius: .2667rem;
								    width:20%;
								    transition: width 1s ease;
							    }
						    }
						    .status{
					    	    position: absolute;
								top: 0;
								left: 0;
								width: 100%;
								height: 100%;
						    	text-align: center;
							    line-height: .3733rem;
							    font-size: .2667rem;
							    color: #fff;
						    }
				    	}
				    	.side{
			    		    position: absolute;
						    right: 0;
						    bottom: 0;
						    font-size: .32rem;
						    color: #52b1f6;
						    text-align: right;
						    button{
						    	margin-top: .0667rem;
							    border: none;
							    font-size: .3733rem;
							    color: #fff;
							    border-radius: .1rem;
							    background-color:#ff425f;
							    height: .8533rem;
							    min-width: 2.2667rem;
							    padding: 0 .3733rem;
						    }
						    button.start{
						    	background-color:#52b1f6;
						    }
				    	}
				    }
    			}
    			.outer{
				    position: relative;
				    background-color: #f2f2f2;
				    text-align: center;
				    &.pl{background-color: #cfdde8;}
				    &.pp{background-color: #f9dcc7;}
				    .tag{
				    	position: absolute;
					    top: 0;
					    left: 0;
					    padding: 0 .2133rem 0 .12rem;
					    background-color: #333;
					    font-size: .2933rem;
					    color: #fff;
					    height: .5867rem;
					    line-height: .5867rem;
					    border-bottom-right-radius: .1333rem;
				    }
				    a{ 
				       display:block;
				       padding: .2667rem 0;
				       h5{
			       	       white-space: nowrap;
						   text-overflow: ellipsis;
						   overflow: hidden;
						   margin: 0 auto;
						   max-width: 5.8667rem;
						   font-size: .3733rem;
						   line-height: 1.5;
				       }
				       p{
				       	  margin-top: .0667rem;
    				      font-size: .3467rem;
    				      span{position:relative;padding-right:.32rem;}
                          span:after{
                          	    content: '';
							    position: absolute;
							    top: 50%;
							    right: .0533rem;
							    border-top: 1px solid #333;
							    border-right: 1px solid #333;
							    width: .16rem;
							    height: .16rem;
							    -webkit-transform: translateY(-50%) rotate(45deg);
                          }
				       }
				       dl{
				       	   margin-top: .2rem;
				       	   dd{
				       	   	    position: relative;
							    display: inline-block;
							    vertical-align: top;
							    margin: 0 .1333rem;
							    width: 2.6667rem;
							    height: 2.6667rem;
							    background-color: #fff;
							    border-radius: .1333rem;
							    overflow: hidden;
							    img{width:100%;height:100%;}
							    .fix{
							    	 position: absolute;
									 left: 0;
									 bottom: 0;
									 width: 100%;
									 height: .6667rem;
									 line-height: .6667rem;
									 background-color: rgba(255,255,255,.8);
									 text-align: center;
									 span{
									 	 font-size: .3733rem;
    									 color: #ff425f;
									 }
									 i{
									 	font-size: .32rem;
									 	text-decoration:line-through;
									 	color:#999;
									 }
							    }
				       	   }
				       }
				    }
    			}
    		}
    		
    	}
    }
    .btminfo {
	    margin-top: -2px;
	    padding: .3333rem 0;
	    text-align: center;
	    font-size: .3467rem;
	    color: #666;
	    background-color: #fff;
    }
</style>