<template>
    <div>
        <h1>two way binding</h1>
        <input type="text" v-model="name">
        <p>{{name}}</p>
    </div>
</template>
<script>


export default {
    name:"TwoBinding",
    data(){
        return{
            name:""
        }
    }
}
</script>
