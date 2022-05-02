<template>
<div class="row">
<app-Quote v-for="quote in quotes" :key="quote" @click.native="deleteQuote(index)">{{ quote}}</app-Quote>
</div>
   
</template>

<script>
  import QuotE from './Quote.vue' 
export default {
  name:"QuoteSgrid",
   props:['quotes'],
   components:{
    appQuote:QuotE
  },
  methods:{
    deleteQuote(index){
      this.$emit("quoteDeletd",index)

    }
  }
  
}
</script>

<style>

</style>