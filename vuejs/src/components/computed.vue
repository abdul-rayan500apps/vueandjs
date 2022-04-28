<template>
    <div>
        <h1>this is one method ,which is in comment</h1>
        <button @click="counter++">Increase</button>
        <button @click="counter--">Decrease</button>
        <p>counter:{{counter}}</p>
        <p>result:{{result()}}</p>
       <!-- <button v-on:click="increase()">Increase</button>
        <button v-on:click="decrease()">Decrease</button>
        <p>counter:{{counter}}</p>
        <p>result:{{result}}</p>-->
    </div>
</template>
<script>


// export default {
//    name:"CoumpteD",
    // data(){
        // return{
    //    /     counter:0,
            // result:''
        // }
    // /},
    // methods:{
    //    / increase(){
            // this.counter++
            // this.result = this.counter > 5 ?'greater 5':'smaller 5'
        // },
        // decrease(){
            // this.counter--
            // this.result=this.counter > 5 ? 'greater 5' : 'smaller 5'
        // }
    // }
// }
export default{
    name:"ComputeD",
    data(){
        return{
            counter:0
        }
    },
    methods:{
        result(){
            return this.counter > 5 ? 'greater than 5' :'smaller than 5'
        }
    }
}
</script>
