<template>
    <div class="v-main-wrapper">
    {{ title }}
    <VCatalog/>
    <!-- если корзина пута то она не выводится -->
    <!-- :cart_data="CART" связал родительский с дочерним  -->
    <VCart
      v-if="CART.length"
      :cart_data="CART"
    />
    </div>
</template>
<script>
import VCatalog from './v-catalog'
import VCart from './v-cart.vue';
import{mapGetters} from 'vuex';//чтобы поймать геттер корзины
export default {
    name:"v-main-wrapper",
  components: { VCatalog, 
    VCart },
    props:{

    },
    data(){
       return{
        title :'main-wrapper'
       } 
    }, 
     computed :{
      ...mapGetters(['CART'])// сюда положили товар 

    },
    methods:{

    },
    watch:{

    }

}
</script>
<style> 
.v-main-wrapper{
  max-width: 900px;
  margin: 0 auto;
}
</style>