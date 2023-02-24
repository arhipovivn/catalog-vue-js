<template>
    <div class="v-catalog-item">
        <!-- requaerдля того чтобы путь был верный и все картинки отображались -->
    <img  class="v-catalog-item-img"
    :src="require('../assets/images/'+product_data.image)" 
    alt="img">
        <!-- product_data сюдя помещаются данные объекта и мы к ним обращаемся -->
    <p class="v-catalog-item-name">{{product_data.name}}</p>
    <p class="v-catalog-item-price">price: {{ product_data.price }}</p>
    <button 
    @click="sendDataToParent"
    class="v-catalog-item-add_to_cart_btn btn">Add cart</button>
    </div>
</template>
<script>
export default {
    name: "v-catalog-item",
    props:{
        product_data:{
            type:Object,
            default(){// какое дефолтное состояние до момента получения данных
                return{} //это пустой объект 
            }
        }
    },
    methods:{
        sendDataToParent(){
          this.$emit('sendArticle', this.product_data.article)  //вызываю эмитер 
          //в котором указываю что хочу передать 2-м аргументом,
          // а 1-й аргумент как это будет называться в родителе 
        }
    }
    }
</script>
<style lang="scss">
@import './src/assets/styles/styles.scss';// нужно импортироватьтак потому что по другому не работает будет ошибка
.v-catalog-item{
    flex-basis: 25%;// каждый элемент ребенка во флекс контейнере будет занимать 25% ширины максимум
    box-shadow: 0 0 8px 0 #979393;
    padding:$padding*2;
    margin: $margin*2;
    .v-catalog-item-img{
        width: 100px;
    }
}
</style>
