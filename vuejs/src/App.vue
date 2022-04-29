<template>
  <div id="app">
    <router-view />
    <div>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <UseR/>
                <UdetailS :name="name"/>
                
            </div>
        </div>
    </div>
</div>
  </div>
</template>

<script>
import UseR from '@/components/componentscommunication/user.vue'
import UdetailS from '@/components/componentscommunication/Userdetails.vue'
export default {
  name:"app",
  components: { UseR , UdetailS}
  
    
}
</script>


