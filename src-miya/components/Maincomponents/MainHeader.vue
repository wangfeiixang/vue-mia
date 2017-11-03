<template>
	<header>
		<h3><span></span>进口母婴正品特卖</h3>
		<router-link to="classify"></router-link>
	</header>
</template>

<script>
	export default{
		name:'main-header'
	}
</script>

<style scoped lang="scss">
   header{
   	  width:100%;
   	  height:40px;
   	  display:flex;
   	  justify-content:center;
   	  align-items:center;
   	  background:#fff;
   	  position: relative;
   	  h3{
   	  	font-size:15px;
   	  	span{
	   	    display: inline-block;
		    margin-right: 3px;
		    vertical-align: -2px;
		    width: 32px;
		    height: 16px;
		    background: url(https://img.miyabaobei.com/d1/p5/2016/09/23/b3/4e/b34e6d21b2dd580f3a01cec18bb136df133561100.png) no-repeat;
		    background-size: 100%;
   	    }
   	  }
   	  a{
   	  	position:absolute;
   	  	right:5px;
   	  	display: block;
	    margin-right: 4px;
	    width: 36px;
	    height: 36px;
	    background: url(https://img.miyabaobei.com/d1/p5/2016/09/23/90/cb/90cb5f50e0f82e707c31d09984181a7b181194647.png) center no-repeat;
	    background-size: 24px auto;
   	  }
   }
</style>