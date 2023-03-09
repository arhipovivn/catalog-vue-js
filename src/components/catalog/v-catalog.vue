<template>
        {{ title }}
    <div class="v-catalog">
    <!-- ссылка на нужную страницу, с именетм карт и пропсами в params -->
    <router-link 
    :to ="{name:'cart',params:{cart_data:CART}}" >
    <div class="v-catalog_link">Cart: {{ CART.length }}</div>
    </router-link>
    <!-- циклом по массиву в key уникальное знаечение(не может быть 2-х ключей с одинаковыми значениями) -->
    <!-- :product_data="product" мы связываем product_data дочернего эл та с product родительского  -->
   <!-- на каждой итерации  создает отдельный новый компонент
    VCatalogItem и в его данные засовывает каждый новый объект чтолежит  в массиве  products -->
    <!-- @sendArticle="showArticle"- так происзодит связывание того что передает ребенок родителю  -->
<!-- т.е при нажатии на кнопку в ребенке в функции showArticle я описал что делать в родителе -->
<!-- v-for="product in this.$store.state.products" заменил на PRODUCTS в computed -->
  <VCatalogItem
    v-for="product in PRODUCTS"
    :key="product.article"
    :product_data="product" 
    @addToCart="addToCart"
    />
    </div>
</template>
<script>
import VCatalogItem from './v-catalog-item.vue';
import{mapActions} from 'vuex';
import{mapGetters} from 'vuex'
export default {
    name: "v-catalog",
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'CART'
    ]),
    },
    methods:{
    ...mapActions(['GET_PRODUCTS_FROM_API','ADD_TO_CART']),//  это сделано для простоты обращения к методу GET_PRODUCTS_FROM_API 
    addToCart(data){
this.ADD_TO_CART(data)
}
    },
    mounted(){ //  когда отрендорился весь хтмл будет выполняться то что написано тут 
        this.GET_PRODUCTS_FROM_API()
        .then((response)=>{// проверка на полученные данные, если данные пришли то выведет в консоль 
            if(response){
                console.log("данные получены")
            }
        })

    },
    data() {
        return{
        title :'CATALOG'
       } 

},
components: { VCatalogItem }
        }

</script>
<style lang="scss">
.v-catalog{
    
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    
}
.v-catalog_link{
            position: absolute;
            top:10px;
            right: 10px;
            padding: 16px;
            border: solid 1px gray;
        }

</style>