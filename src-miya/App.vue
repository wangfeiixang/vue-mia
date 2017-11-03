<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
   @import './styles/_reset.scss';
   @import './styles/_common.scss';
   .swiper-pagination-bullet-active {
      background:#fa4b9b;
   }
   .mint-msgbox-wrapper button.mint-msgbox-confirm{
    	color: #f34fa1 !important;
   }  
</style>
