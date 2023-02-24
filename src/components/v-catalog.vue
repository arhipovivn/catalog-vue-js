<template>
    <div class="v-catalog">
    <h1>catalog</h1>
    <VCatalogItem/>
    </div>
</template>
<script>
import VCatalogItem from './v-catalog-item.vue';
export default {
    name: "v-catalog",
    data() {
        return {}
    },
    components: { VCatalogItem }
}
</script>