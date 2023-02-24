<template>
    <div class="v-catalog">
    <!-- циклом по массиву в key уникальное знаечение(не может быть 2-х ключей с одинаковыми значениями) -->
    <!-- :product_data="product" мы связываем product_data дочернего эл та с product родительского  -->
   <!-- на каждой итерации  создает отдельный новый компонент
    VCatalogItem и в его данные засовывает каждый новый объект чтолежит  в массиве  products -->
    <!-- @sendArticle="showArticle"- так происзодит связывание того что передает ребенок родителю  -->
<!-- т.е при нажатии на кнопку в ребенке в функции showArticle я описал что делать в родителе -->
    <VCatalogItem
    v-for="product in products"
    :key="product.article"
    :product_data="product" 
    @sendArticle="showArticle"
    />
    </div>
</template>
<script>
import VCatalogItem from './v-catalog-item.vue';
export default {
    methods:{
showArticle(elem){
console.log(elem)
}
    },
    name: "v-catalog",
    data() {
        return {
            
  products: [
    {
      image: "1.jpg",
      name: "T-shirt 1",
      price: 2100.234234234,
      article: "T1",
      available: true,
      category: "Мужские"
    },
    {
      image: "2.jpg",
      name: "T-shirt 2",
      price: 3150.12312412,
      article: "T2",
      available: true,
      category: "Женские"
    },
    {
      image: "3.jpg",
      name: "T-shirt 5",
      price: 6500.3522314,
      article: "T3",
      available: false,
      category: "Женские"
    }, {
      image: "4.jpg",
      name: "T-shirt 1",
      price: 2100.234234234,
      article: "T4",
      available: true,
      category: "Мужские"
    },
    {
      image: "5.jpg",
      name: "T-shirt 2",
      price: 3150.12312412,
      article: "T5",
      available: true,
      category: "Женские"
    },
    {
      image: "6.jpg",
      name: "T-shirt 5",
      price: 6500.3522314,
      article: "T6",
      available: false,
      category: "Женские"
    }
  ]
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
</style>