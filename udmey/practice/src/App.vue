<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <!-- <QuotE quote="a wonderful quote!"/> -->
        <QuotE><h2 slot="title">{{quotetitle}}</h2>
        <p slot="content">A wonderful Quote!</p></QuotE>
      </div>
    </div>
  </div>
</template>
<script>
import QuotE from './components/slots'

export default {
  data(){
    return{
      quotetitle:'quote'
    }
  },
  components:{
    QuotE
  }
}

</script>
