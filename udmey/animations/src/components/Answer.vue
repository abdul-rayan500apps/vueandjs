/<template>
  <div class="alert alert-success text-center">
      <h1>That is correct</h1>
      <hr>
      <button class="primary" @click="onNextQuestion" >Next Question</button>
  </div>
</template>

<script>
export default {
    name:"AnsweR",
 methods:{
     onNextQuestion(){
         this.$emit('confirmed');
     }
 }
}
</script>

<style>

</style>