<template>
	<transition enter-active-class="animated slideInDown" leave-active-class="animated bounceOut">
	    <div class="hide" v-if="scrolltop>250">
	       <a href="">
	       	  <div class="lt">
	       	  	 <img src="//img.miyabaobei.com/d1/p4/2016/11/14/e5/d2/e5d2cfcb59d4bdbbf0f1c985a8b0e131194425224.png" alt="" />
	       	  	  下载蜜芽App  购进口母婴正品好货
	       	  </div>
	       	  <div class="rt">
	       	  	  <span>立即打开</span>
	       	  </div>
	       </a>
	    </div>
    </transition>
</template>

<script>
	export default{
		name:"main-hide",
		props:["scrolltop"],
		data(){
		   return{
		   	
		   }
		}
	}
</script>

<style scoped lang="scss">
   .hide{
   	  position:fixed;
   	  top:0;
   	  left:0;
   	  width:100%;
      height: 44px;
      background-color: #3d3d3d;
   	  z-index:10000;
   	  transition: all ease .5s;
   	  a{
   	  	display:flex;
   	  	justify-content:space-between;
   	  	align-items:center;
   	  	color:#fff;
   	  	height:100%;
   	  	padding:0 9px;
   	  	.lt{
   	  		font-size:0.373rem;  	  		
   	  		img{width:30px;height:30px;vertical-align:middle;}
   	  	}
   	  	.rt{
   	  		span{
   	  			display: inline-block;
			    padding: 0 10px;
			    border-radius: 4px;
			    line-height: 22px;
			    background-color: #fa4b9b;
   	  		}
   	  	}
   	  }
   }
</style>