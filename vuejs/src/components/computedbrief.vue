<template>
  <div>
    <h1>computed properties another example</h1>
    <button @click="counter++">Increase</button>
    <button @click="counter--">Decrease</button>
    <button @click="secondcounter++">secondcounter</button>
    <p>{{counter}} | {{secondcounter}}</p>
    <p>{{result()}} | {{output}}</p>      <!--1)note: output fun is in computed and p tag it doesnot 
                                             require parenthesis as resultrequired
                                             2)check the console while clicking buton increse and decrese both method and computed appered but when clicking secondcounter
                                               it shows only method as output-->
  
  
  </div>                                     
</template>
<script>


export default {
    name:"ComputeD1",
    data(){
        return{
            counter:0,
            secondcounter:0
        }
    },
    computed:{
        output(){
            console.log('computed')
            return this.counter > 5 ? 'greater than 5' : 'smalller than 5'
        }
    },
    methods:{
        result(){
            console.log('method')
            return this.counter > 5 ? 'greater than 5' : 'smaller than 5'
        }
    }
}
</script>
