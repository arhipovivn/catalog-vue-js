<template>
    <div class="v-main-wrapper">
<v-select
:options="options"
:selected="selected"
@select="optionSelect"  
/>
<p> sel:
{{ selected.name }}
</p>
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
import vSelect from './v-select.vue';
export default {
    name:"v-main-wrapper",
  components: { 
    vSelect
    //VCatalog, 
    // VCart
   },
    data(){
       return{
        title :'CATALOG',
        options :[
          {name:'Options 1',value: 1},
          {name:'Options 2',value: 2},
          {name:'Options 3',value: 3},
          {name:'Options 4',value: 4},
          {name:'Options 5',value: 5}
        ],
        selected:'Select'
       } 
    }, 
     computed :{
      ...mapGetters(['CART'])// сюда положили товар 

    },
    methods:{
      optionSelect(option){
        this.selected = option

      }
    }
}
</script>
<style> 
.v-main-wrapper{
  max-width: 900px;
  margin: 0 auto;
}
</style>