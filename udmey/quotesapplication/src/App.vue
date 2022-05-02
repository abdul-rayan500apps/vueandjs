<template>
<div id="app">
  <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <app-new-quote @quoteAdded="newQuote "></app-new-quote>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
      <div class="row">  
        
        <div class="col-sm-12 text-center">
         <div class="alert alert-info">info:click on a Quote to delete it!</div>
        <div col-sm-12></div>
      </div>
  </div>
  </div> 
  </div>
</template>
<script>
 
import QuoteSgrid from '@/components/Quotegrid'
import NewQuote from '@/components/Newquote'
import Header from '@/components/Header'

export default {
  name:"app",
  data(){
    return{
      quotes:[
        'just a quote too see something'
      ],
      maxQuotes:10
    }
   
    },
    methods:{
      newQuote(quote){
        if(this.quotes.length >= this.maxQuotes) {
          return alert('please delete Quote')
        }
      this.quotes.push(quote);
    },
    deleteQuote(index){
      this.quotes.splice(index,1); 
    }
    },
    components:{
      appQuoteGrid:QuoteSgrid,
      appNewQuote:NewQuote,
      appHeader:Header
      
    }
  }

</script>
