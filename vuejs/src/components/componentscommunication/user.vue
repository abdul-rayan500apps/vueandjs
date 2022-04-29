<template>
    <div class="component">
    <h1>The User component</h1>
    <p>I'am an awsome User!</p>
    <button @click="changename()">change my name</button>
    <hr>
    <div class="row">
        <div class="col-xs-12 col-sm-6">
          
        </div>
        <!-- <div class="col-xs-12 col-sm-6">
             
        </div> -->
    </div>
    </div>
</template>
<script>
import UdetailS from './Userdetails.vue'

export default {
    name:"UseR",
    components:UdetailS,
    data(){
        return{
         name:'Abdul'
        }
        
    },
    methods:{
        changename(){
            this.name="rayan";
        }
    }

}
</script>
