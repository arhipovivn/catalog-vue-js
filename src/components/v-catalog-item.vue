<template>
    <div class="v-catalog-item"><p>item</p>
    <p>price:100</p><button>add cart</button>
    </div>
</template>
<script>
</script>
<style lang="scss">
@import './src/assets/styles/styles.scss';// нужно импортироватьтак потому что по другому не работает будет ошибка
.v-catalog-item{
    padding:$padding*8;
}
</style>