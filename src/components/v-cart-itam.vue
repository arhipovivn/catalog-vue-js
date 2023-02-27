<template>
    <div class="v-cart-item">
        <img  class="v-cart-item-img"
    :src="require('../assets/images/'+cart_item_data.image)" 
    alt="img"> 
    <div class="cart-item_info">
<p>
    {{ cart_item_data.name }}
</p>
<p>
    {{ cart_item_data.price }}
</p>   <p>
    {{ cart_item_data.article }}
</p> 
</div>
<div class="v-cart-item_quantity">
<p>Qty:
</p>
{{ this.cart_item_data.quantity }}
</div>
<button
@click="removeEl"
>delete</button>
       </div>
</template>
<script>
export default {
    name:"v-cart-item",
    props:{
        cart_item_data:{
            type: Object,
            default(){
                return{}
            }
        }
    },
    methods: {
        removeEl(){
            this.$emit('removeEl')
        }
    },
    computed(){},
    mounted(){
        const cartItemData = this.cart_item_data;
	cartItemData.quantity = 1;// добавил количество 
    }
}
</script>
<style lang="scss">
    @import './src/assets/styles/styles.scss';// нужно импортироватьтак потому что по другому не работает будет ошибка
.v-cart-item{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between ;
    align-items: center;
    box-shadow: 0 0 8px 0 #979393;
    padding:$padding*2;
    margin: $margin*2;
    .v-cart-item-img{

        max-width: 50px ;
    
    }
}
</style>