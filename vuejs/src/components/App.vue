<template>
    <div id="app">
    <input type="text" v-on:input=changetitle>
    <button @click="changetitle">submit</button>
        <p>{{title}}</p>
    </div>
</template>
<script>


export default {
    name:"ApP",
    data(){
        return{
        title:"hello world"
        }
         },
        methods:{
            changetitle:function(event){
                this.title=event.target.value;
            }
           
    }
}
</script>
