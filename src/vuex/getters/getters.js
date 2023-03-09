export default {
 
        PRODUCTS(state){ //геттер(получатель) продуктс с аргументом state
            return state.products; // возврат того что в стейте называется продуктс
        },// данные обновляются реактивно при изменении state 
        CART(state){
            return state.cart

} // короткий путь до получения информации о данных в сейте 
}