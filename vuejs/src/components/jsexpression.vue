<template>
    <div>
        <h1>js expressions</h1>
        <button @click="increase(2)">clickonit</button>
        <button @click="count++">clickonit</button>
        <p>{{count > 10 ? 'greater than 10':'less than 10'}}</p>
    </div>
</template>
<script>


export default{
    name:"JsexpressioN",
    data(){
        return{
            count:0
        }
    },
    methods:{
        increase(step){
            this.count+=step
        }
    }
}
</script>
