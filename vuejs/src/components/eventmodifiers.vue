<template>
    <div>
        <h1>eventmodifiers</h1>
        <button @click="increase(5)">clickonit</button>
        <p>{{count}}</p>
     <!--   <p v-on:mousemove="updatecoordinates">coordinates:{{x}}/{{y}}
            -<span v-on:mousemove="dummy">DEAD SPOT</span </p> -->
            <p v-on:mousemove="updatecoordinates">coordinates:{{x}}/{{y}}
            -<span v-on:mousemove.stop="">DEAD SPOT</span> </p>
        
    </div>
</template>
<script>


export default {
    name:"ModifierS",
    data(){
        return{
            count:0,
            x:0,
            y:0
        }
    },
    methods:{
        increase(step){
            this.count+=step
        },
        updatecoordinates(event){
            this.x=event.clientX ///NOTE HERE WILL BE X AND Y SHOULD IN CAPITAL SO IT WILL WORK
            this.y=event.clientY
        }
       // dummy(event){
     //   event.stopPropagation()      NOTE:THIS IS USE WHEN WE ARE USING FUNTION LIKE DUMMY
      //  }

    }
}
</script>
