<template>
    <div>
        <h1>eventobject</h1>
        <!--<button @click="increase()">clickonit</button> -->
        <button @click="increase(2,$event)">clickonit</button>
        <p>{{count}}</p>
        <p v-on:mousemove="updatecoordinates">updatecoordinates:{{x}}/{{y}}</p>
    </div>
</template>
<script>


export default {
    name:"ObjecT",
    data(){
        return{
            count:0,
            x:0,
            y:0
        }
        },
    
    methods:{
        increase(step){
           // this.count++    
            this.count+=step   //THIS IS WITH ARGUMENTS
    },
     updatecoordinates(event){
        this.x = event.clientX;
        this.y = event.clientY
    }
   
}
}
</script>
