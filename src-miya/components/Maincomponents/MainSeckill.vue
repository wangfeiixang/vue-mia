<template>
    <div class="ms-entry">
       <div class="title">
          <div class="time">{{time}}点场 <span id="dao"></span></div>
          <router-link :to="'seckill/'+pid+'/'+sj" class="more">更多秒杀<i class="iconfont icon-gengduo"></i></router-link>
       </div>
       <div class="items swiper-container">
       	  <div class="swiper-wrapper">
    		<div class="swiper-slide" v-for="item in items">
    			<router-link :to="'seckill/'+pid+'/'+sj">    				
	    			<img :src="item.pic" alt="" />
	    			<p v-text="item.title"></p>
	    			<div class="price">
	    				<span><i>¥</i>{{item.market_price}}</span><i class="original">¥294</i>
	    			</div>
    			</router-link>
    		</div>
    	  </div>
       </div>
    </div>
</template>

<script>
	
	import axios from 'axios'
	export default{
		name:'main-seckill',
		swiper:null,
		data(){
			return{
				items:[],
				time:null,
				end_time:null,
				now:null,
				timer:null,
				pid:null,
				sj:null
			}
		},
		methods:{
		    getTime(){
				var that = this;
				axios.get("https://m.mia.com/instant/seckill/seckillPromotionInfo/1")
				.then(function(res){
//					console.log(res.data)
					var hour = new Date().getHours();
					if(hour<15){
//						console.log(res.data[0])
						that.time = 10;
						that.end_time = res.data[1].start_time
						that.pid = res.data[0].pid
						that.sj = res.data[0].end_time.replace("/","-").replace("/","-")
//						console.log(that.pid,that.sj)
					}else if(hour<22){
//						console.log(res.data[0])
						that.time = 15;
						that.end_time = res.data[1].start_time;
						that.pid = res.data[0].pid
						that.sj = res.data[0].end_time.replace("/","-").replace("/","-")
//						console.log(that.pid,that.sj)
					}else{
//						console.log(res.data[0])
						that.time = 22;
						that.end_time = res.data[1].start_time;
						that.pid = res.data[0].pid
						that.sj = res.data[0].end_time.replace("/","-").replace("/","-")
//						console.log(that.pid,that.sj)
					}
				})
			},
			getData(){
				var that = this;
				axios.get("https://m.mia.com/instant/seckill/seckillPromotionItem/"+this.pid)
				.then(function(res){
					var data = res.data.item_list;
//					console.log(data)
					for(var i=0;i<data.length;i++){
						data[i].active_price = parseInt(data[i].active_price);
						data[i].market_price = parseInt(data[i].market_price);
						that.items.push(data[i])
					}
				    
				})
				
			},
			ShowCountDown(time,divname){
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
				var cc = document.getElementById(divname);
				if(cc){					
					cc.innerHTML = hour+":"+minute+":"+second; 
				}
            }
		},
		mounted(){
			var that = this;
			this.getTime()
			if(this.pid){				
				this.getData()
			}
			this.$options.swiper=new Swiper(".items",{
			  		slidesPerView : 'auto'
	  	    })
            this.timer = setInterval(function(){
            	that.now = new Date().getHours();
            	that.ShowCountDown(that.end_time,'dao');
            },1000);
		},
		watch:{
			pid(val){
			  if(val){
			  	this.getData()
			  }
			},
		    items(val){
		  		let that = this
		  		setTimeout(()=>{
		  			that.$options.swiper.update()
		  		},0) 		
		  	},
		    now(val){		    		
		    	this.getTime()
		    	this.getData()
		    }
		}
	}
</script>

<style scoped lang="scss">
      .ms-entry{
      	  margin-top:10px;
      	  background:#fff;
      	  .title{
  	  	     padding: 0 .26667rem;
			 height: .88rem;
			 line-height: .88rem;
			 display:flex;
			 justify-content:space-between;
		     align-items:center;
		     .time{
	     	    font-size: .37333rem;
			    height: 100%;
			    font-weight: 700;
		     }
			 .time:before {
			    content: '';
			    display: inline-block;
			    width: 2.6rem;
			    height: .4rem;
			    background: url(https://img.miyabaobei.com/d1/p5/2017/03/17/fd/e4/fde408d188279bfd5e4f142fdb13b2bb323276306.png) left center no-repeat;
			    background-size: 2.53333rem .4rem;
			    vertical-align:-2px;
             }
             .more{
             	font-size:.34667rem;
    			color: #ff425f;
    			i{
    			  font-size:0.1rem;
    			}
             }
      	  }
      	  
      	  .swiper-wrapper{
      	  	  padding-left: .26667rem;
			  .swiper-slide{
			  	  padding: 0 .13333rem;
				  width: 2.26667rem;
				  min-width: 2.26667rem;
				  text-align: center;
				  white-space: normal;
				  font-size: .32rem;
				  a{display: block;}
			  	 img{
			  	 	width:2rem;
			  	 	height:2rem;
			  	 }
			  	 p{
		  	 	    margin-top: .16rem;
				    padding: 0 .06667rem;
				    line-height: 1.35;
				    height: .864rem;
				    overflow: hidden;
				    color: #444;
			  	 }
			     .price{
			     	line-height:1.5;
			     	span{
			     	    margin-right: .06667rem;
					    color: #ff425f;
					    font-weight: 700;
					    font-size: .42667rem;
					    i{
					    	font-size:.32rem;
					    }
			     	}
			     	i.original{
			     		text-decoration:line-through;
                        color: #999;
			     	}
			     } 
			  }
      	  }
      }
     
</style>