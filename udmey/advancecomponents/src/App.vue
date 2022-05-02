<!-- <template>
   <div class="container">
    <div class="row">
      <div class="col-xs-12"> -->
        <!-- <QuotE quote="a wonderful quote!"/> -->
        <!-- <QuotE><h2 slot="title">{{quotetitle}}</h2>
        <p slot="content">A wonderful Quote!</p></QuotE> -->
      <!-- </div>
    </div>
  </div> 
</template
 <script>                                     this code is for slot example.
// import QuotE from './components/slots'

// export default {
//   data(){
//     return{
//       quotetitle:'quote'
//     }
//   },
//   components:{
//     QuotE
//   }
// }

// </script>//-->
<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br>
        <b-button variant="primary" @click="selectedcomponent = 'BluE'">load blue template</b-button>
        <b-button variant="success" @click="selectedcomponent = 'GreeN'">load green template</b-button>
        <b-button variant="danger" @click="selectedcomponent = 'ReD'">load red template</b-button>
        <hr>
        <component :is="selectedcomponent">
          <p>This is the content</p>
        </component>
        <!-- <b-button>Button</b-button>
       <b-button variant="primary">load blue template</b-button>
       <b-button variant="success">load green template</b-button>
       <b-button variant="danger">load red template</b-button> -->
       <!-- THIS IS FOR slots -->
        <!-- <BluE>
          
          </BluE>
       <GreeN>
         <p>This is the content</p>
         </GreeN>
        <ReD>
          <p>This is the content</p>
          </ReD> -->
      
      </div>
    </div>

  </div>
</template>
<script>
import BluE from '@/components/Blue'
import GreeN from '@/components/Green'
import ReD from '@/components/Red' 

export default {
  components:{
    BluE,
    GreeN,
    ReD
  },
  data(){
    return{
     selectedcomponent:"BluE"
    }
  }
}
</script>


