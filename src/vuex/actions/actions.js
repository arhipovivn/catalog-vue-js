import axios from 'axios';

export default {

// для получения данных создаю действие
    DELETE_FROM_CART:({commit},index)=>{//метод для удаления элемента из корзины 
        commit('REMOVE_FROM_CART',index) //  мутация
    },
    ADD_TO_CART:({commit},product)=>{
        commit('SET_CART',product)

    },
DECRIMENTITEM_ITEM:({commit},index)=>{
    commit('DECRIMENT',index)
},
INCRIMENTITEM_ITEM:({commit},index)=>{
    commit('INCRIMENT',index)


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
}// чтобы не было очереди, они асинхронны можно вызвать 5 действий 
