export default {
    INCRIMENT:(state,index)=>{
state.cart[index].quantity++
    },
    DECRIMENT:(state,index)=>{
        if(state.cart[index].quantity>1)
        state.cart[index].quantity--

    // setPriceDescription () {
    //   const slugs = this.$route.path.split('/')
    //   for (let i = 0; i < slugs.length; ++i) {
    //     const item = slugs[i]
    //     if (item === 'chernyj-metalloprokat') {
    //       return '*Цены указанные на сайте соответствуют ценам прейскуранта б/н от 03.11.2022'
    //     }
    //   }
    //   return '*Цены указанные на сайте соответствуют ценам прейскуранта б/н от 03.10.2022'
    // }
    },
    REMOVE_FROM_CART:(state,index)=>{
        // удаляю элемент из корзины
state.cart.splice(index,1)
    },
   SET_CART:(state,product)=>{// добавляю элемент в корзины 
   
   if(state.cart.length){
    let isProd=false;//меняем на тру если найдем элемент с таким же артиклем 
    state.cart.map((item)=>{
    if(item.article === product.article){// елси нашел товар в корзине тогда к количеству прибовляем еще 1
        isProd=true;
        item.quantity++;
    }
})
    if(!isProd){ // если не нашли товар в корзине тогда добавляю его туда 
    state.cart.push(product)
}
   }else{
       state.cart.push(product)
   }
   },
    SET_PRODUCTS_TO_STATE:(state,products)=>{
        state.products=products;
    }
// мутации- при помощи из мы меняем данные состояния state, они синхронны
// т.е выполняются  по очереди  
}