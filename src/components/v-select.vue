<template>
<div class="v-select"
>
<!-- сворачивавание меню -->
<p class="title"
@click="areOptionsVis = !areOptionsVis" 
>{{selected.name}}</p>
<div class="options"
v-if="areOptionsVis"
>

<p
v-for="option in options"
:key="option.value"
@click="selectOption(option)"
>
{{ option.name }}
</p></div>
</div>
</template>
<script>
export default {
    data() {
return{
    areOptionsVis: false // сворачивавание меню
}
},
    name: "v-select",
    props: { // добавляю пропсы после их связываю в родителе с родиельскими элементами в атрибутах этого компонента 
options:{
    type:Array,
    default(){
        return []
    }
},
selected:{
    type: String,
    default: ''
}

    },
    methods:{
        selectOption(option){
this.$emit('select',option) // передаю родителю эту функцию с переменной option
this.areOptionsVis=false // закрытие селекта когда на него нажимаю 
        }
    }
}
</script>
<style>
.title{
    cursor: pointer;
    border: solid 1px green;
}
.v-select{
    position: relative;
    width: 200px;
}
.v-select p{
 margin: 0;
}
.options{
   border: solid 1px green; 
   position: absolute;
   top: 20px;
   right: 0;
   width: 100%;
}
.options p:hover{
    background-color: green;
}
</style>