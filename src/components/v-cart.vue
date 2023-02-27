<template>
    <div  class="v-cart">
    <h1>cart</h1>
        <vCartItam
        v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @removeEl="removeElParent(index)"
        /></div>
</template>
<script>
import vCartItam from './v-cart-itam.vue';
import { mapActions } from 'vuex';
export default {
    name: "v-cart-item",
    components:{
        vCartItam  
    },
    props:{
cart_data:{ // делаю это для связи родителя с v-cart
    type:Array,
    default(){
        return[]
    }
}
    },
    methods:{
        ...mapActions(['DELETE_FROM_CART']),// добавил метод
        removeElParent(index){
            this.DELETE_FROM_CART(index)
        }

    },
    data(){

    }
}

</script>