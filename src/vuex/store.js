import Vuex from 'vuex';
import actions from './actions/actions';
import getters from './getters/getters';
import mutations from './mutations/mutations';
let store= new Vuex.Store({ // объект Vuex.Store . store- хранилище 
state: {
     products:[],
     cart:[] // корзина
},// состояние в нем хранятся переменные массивы объекты
getters,
actions,
mutations
});
export default store;
