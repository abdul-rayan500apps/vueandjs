<template>
    <div>
        <h1>event directive</h1>
        <button v-on:click="increase">click</button>
        <p>{{count}}</p>
    </div>
</template>
<script>


export default {
    name:"EvenT",
    data(){
        return{
            count:0
        }
    },
    methods:{
        increase:function(){
          this.count++
        }
    }
}
</script>
