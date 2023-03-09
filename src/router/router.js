import { createRouter, createWebHistory } from 'vue-router'
import vCatalog from '../components/catalog/v-catalog.vue';
import vCart from '../components/cart/v-cart.vue'

let router = createRouter({
    history: createWebHistory(),
    routes:[  // массив с путями 
    {
path:'/', // тут указываю по какому урл будет находиться страница 
name:'catalog',
component:vCatalog //какой компонент находится по этому пути path:'/'
},
{
path:'/cart', // тут указываю по какому урл будет находиться страница 
name:'cart',
component:vCart,
props:true // если нужно передавать какие-то данные по переходу на этот урл (пропсы), компоненту который откроется
}
    ]
  })
export default router;
