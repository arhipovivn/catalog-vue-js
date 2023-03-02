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
<span>
   <span class="span_btn" @click="decrimentItem">–</span> 
    {{ this.cart_item_data.quantity }} <span class="span_btn" @click="incrimentItem">+</span>
</span> 
</div>
<button class="btn"
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
        decrimentItem(){
            this.$emit('decriment') // сообщаю родителю о таком событии  т.е о том что надо уменьшить значение на -1
        },
        incrimentItem(){
            this.$emit('incriment')// сообщаю родителю о таком событии 
        },
        removeEl(){
            this.$emit('removeEl')// сообщаю родителю о таком событии 
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
    .span_btn{
        cursor: pointer;
        width: 15px;
        height: 15px;
        background-color: gray;
        padding: 8px;
        margin: 10px;
        border-radius: 5px;
    }
    .span_btn:hover{
       background-color: #c9c2c2;
    }
}
</style>