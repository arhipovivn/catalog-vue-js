import Vuex from 'vuex'
import axios from 'axios'
let store= new Vuex.Store({ // объект Vuex.Store . store- хранилище 
state: {
     products:[],
     cart:[] // корзина
},// состояние в нем хранятся переменные массивы объекты
mutations:{
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
},// мутации- при помощи из мы меняем данные состояния state, они синхронны
// т.е выполняются  по очереди  
actions:{// для получения данных создаю действие
    DELETE_FROM_CART:({commit},index)=>{//метод для удаления элемента из корзины 
        commit('REMOVE_FROM_CART',index) //  мутация
    },
    ADD_TO_CART:({commit},product)=>{
        commit('SET_CART',product)

    },
GET_PRODUCTS_FROM_API({commit}){
return axios('http://localhost:3000/products',{ // аксиос запрос с параметром get по урл, у аксиоса 2 аргумента один урл дальше настройки 
method:"GET" 
}).then((products)=>{// после того как запрос выполнился(тогда ) вызываем мутацию
    commit('SET_PRODUCTS_TO_STATE',products.data);
    return products.data;})// вызываю мутацию с названием SET_PRODUCTS_TO_STATE
.catch(error=>{console.log(error)// если ошибка вывести ошибку в консоль
return error})
}
},// чтобы не было очереди, они асинхронны можно вызвать 5 действий 
getters:{
    PRODUCTS(state){ //геттер(получатель) продуктс с аргументом state
        return state.products; // возврат того что в стейте называется продуктс
    },// данные обновляются реактивно при изменении state 
CART(state){
    return state.cart
}

} // короткий путь до получения информации о данных в сейте 
});
export default store;
