<template>
    <div  class="v-cart">
    <!-- ссылка на страницу каталога -->
        <router-link :to="{name:'catalog',}" >

    <div class="v-catalog_link">Catalog</div>
    </router-link>
    <h1>cart</h1>
    <h1 v-if="!CART.length">Empty</h1>
    <!-- если в массиве карт не будет элементов т.е страница пустая будет выводиться empty -->
        <vCartItam
        v-for="(item, index) in CART"
        :key="item.article"
        :cart_item_data="item"
        @removeEl="removeElParent(index)"
        />
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