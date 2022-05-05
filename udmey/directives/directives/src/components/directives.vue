/<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3"></div>
      <h1>Directives excersise</h1>
      <button v-customOn:click="clicked" class="btn btn-primary">click me</button>
      <hr>
      <div
      style="width:100px; height: 100px; background-color: lightgreen"
      v-customOn:mouseenter="mouseEnter"
      v-customOn:mouseleave="mouseLeave"></div>
    </div>
  </div>
</template>

<script>
export default {
         directives:{
           customOn:{
             bind(el,binding){
               el.onclick = function(){
                 binding.value();
               }
               const type = binding.arg;
               const fn = binding.value();
               el.addEventListener(type,fn)
             }
           }
         },
         methods:{
           clicked(){
             alert('i was clicked!')
           },
           mouseEnter(){
             console.log('Mouse entered')
           },
            mouseLeave(){
             console.log('Mouse leaved')
         }
}
}
</script>

<style>

</style>