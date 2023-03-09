<template>
    <div  class="v-cart">
    <!-- ссылка на страницу каталога -->
        <router-link :to="{name:'catalog',}" >
    <div class="v-catalog_link">Catalog</div>
    </router-link>
    <h1>cart</h1>
    <h1 v-if="!CART.length">Empty</h1>
    <!-- если в массиве карт не будет элементов т.е страница пустая будет выводиться empty -->
    <!-- @removeEl="removeElParent(index)"
        @decriment="decriment(index)"
        @incriment="incriment(index)"
        тут из дочернего элемента при помощи this.$emit('decriment')  связываю родителя и дочерний элемент -->
        <vCartItam
        v-for="(item, index) in CART"
        :key="item.article"
        :cart_item_data="item"
        @removeEl="removeElParent(index)"
        @decriment="decriment(index)"
        @incriment="incriment(index)"

        />
        <div class="v-cart-total">
        <p class="total_name">Total:</p>
        <p>{{ cartTotalCost }}</p></div>
    </div>
</template>
<script>
import vCartItam from './v-cart-itam.vue';
import { mapActions } from 'vuex';
import{mapGetters} from 'vuex'

export default {
    name: "v-cart-item",
    components:{
        vCartItam  
    },
    props:{
cart_data:{ // делаю это для связи родителя(v-main-wrapper) с v-cart
    type: Array,
    default(){
        return[]
    }
}
    },
    computed: {
        ...mapGetters([
            'CART'
    ]),
    cartTotalCost(){
        let result=[0];
        for (let item of this.CART){
            result.push(item.price*item.quantity)
        }
        result=result.reduce((sum,el)=>sum+el)
        return result
    }
    },
    methods:{
      
        ...mapActions(['DELETE_FROM_CART',  'DECRIMENTITEM_ITEM','INCRIMENTITEM_ITEM']),// добавил метод
        removeElParent(index){ // методы по изменению данных 
            this.DELETE_FROM_CART(index)
        },
        incriment(index){
            this.INCRIMENTITEM_ITEM(index);// вызову этот метод который описан в store.js 
        },
        decriment(index){
            this.DECRIMENTITEM_ITEM(index)
        }
    },
    data(){
    }
}

</script>
<style lang="scss">
.v-cart{

margin-bottom: 100px;
.v-cart-total{
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 16px;
    display: flex;
    justify-content: center;
    background-color: aquamarine;
    color: black;
    font-size: 20px;
    .total_name{
        margin-right: 16px;
    }
}}
    
</style>