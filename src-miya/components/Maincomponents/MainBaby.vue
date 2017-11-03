<template>
  <div>
     <div class="title"><span></span>给孩子买安心，蜜芽100%正品保证</div>
     <div class="baby">
     	<a href="">
     		<img src="https://img.miyabaobei.com/d1/p5/2016/09/28/66/3e/663eb9b89e2d4f2b5c3e0f51d9370501489382370.jpg" alt="" />
     	</a>
     	<a href="">
     		<img src="https://img.miyabaobei.com/d1/p4/2016/09/28/08/68/0868a6b1b300065dc5279e3da3f88249489619774.jpg" alt="" />
     	</a>
     	<a href="">
     		<img src="https://img.miyabaobei.com/d1/p5/2016/09/28/c5/e8/c5e8a4ea10cb8bc9779cdb9a6a4b9710489818229.jpg" alt="" />
     	</a>
     	<a href="">
     		<img src="https://img.miyabaobei.com/d1/p4/2016/09/28/fb/2c/fb2cd151999d562208362ce45ba63cfd489921233.jpg" alt="" />
     	</a>
     	<a href="">
     		<img src="https://img.miyabaobei.com/d1/p4/2016/09/28/67/9f/679f235b4f10be7e59e105554a9f3cfe490071129.jpg" alt="" />
     	</a>
     </div>
  </div>
</template>

<script>
	export default{
	  name:"main-baby"
	}
</script>

<style scoped lang="scss">
	.title{
		padding: 0 10px;
	    height: 40px;
	    line-height: 40px;
	    font-size: 16px;
	}
	span{
	    display: inline-block;
	    vertical-align:-4px;
	    content: '';
	    margin-right:7px;
	    width: 20px;
	    height: 20px;
	    background: url(https://img.miyabaobei.com/d1/p4/2016/09/23/5e/ff/5eff7c11f9747793520ee91ae1591d53134191891.png) no-repeat;
	    background-size: auto 20px;
   }
   .baby{
   	    overflow:hidden;
   	    padding: .26667rem 0 0 .26667rem;
    	background-color: #fff;
	    a{      
		    float: left;
		    margin: 0 .21333rem .18667rem 0;
		    width: 2.96rem;
		    height: 1.88rem;
		    overflow: hidden;
		    background-color: #f0f0f0;
    		&:first-child{
    			width: 3.04rem;
                height: 3.94667rem;
            }
            img{
            	width:100%;
            	height:100%;
            }
    	}
   }
</style>