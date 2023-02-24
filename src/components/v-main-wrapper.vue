<template>
    <div class="v-main-wrapper">
    {{ title }}
    <VCatalog/>
    <VCart/>
    </div>
</template>
<script>
import VCatalog from './v-catalog'
import VCart from './v-cart.vue';
export default {
    name:"v-main-wrapper",
  components: { VCatalog, 
    VCart },
    props:{

    },
    data(){
       return{
        title :'main-wrapper'
       } 
    }, 
     computed :{

    },
    methods:{

    },
    watch:{

    }

}
</script>
<style> 
</style>