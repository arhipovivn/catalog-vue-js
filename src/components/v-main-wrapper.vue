<template>
    <div class="v-main-wrapper">
   <h1>
   </h1> 
   <!-- в этой области показываются компоненты в зависимости от адреса т.е либо карт или каталог  -->
   <!-- <keep-alive> сохранение состояния при изменении -->

  <keep-alive>
   <router-view></router-view>
  </keep-alive>
    <!-- <VCatalog/> -->
    <!-- если корзина пута то она не выводится -->
    <!-- :cart_data="CART" связал родительский с дочерним  -->
    <!-- <VCart
      v-if="CART.length"
      :cart_data="CART"
    /> -->
    </div>
</template>
<script>
// import VCatalog from './v-catalog'
// import VCart from './v-cart.vue';
import{mapGetters} from 'vuex';//чтобы поймать геттер корзины
export default {
    name:"v-main-wrapper",
  components: { 
    //VCatalog, 
    // VCart
   },
    data(){
       return{
        title :'CATALOG'
       } 
    }, 
     computed :{
      ...mapGetters(['CART'])// сюда положили товар 

    }
}
</script>
<style> 
.v-main-wrapper{
  max-width: 900px;
  margin: 0 auto;
}
</style>