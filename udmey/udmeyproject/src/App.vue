<template>
  <div id="container">
    <Headers/>
    <div class="row">
      <div class="col-xs-12">
        <router-view/> 
    </div>
    </div>
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Headers from'./components/Header.vue'
export default {
  name: 'App',
  components: {
    Headers
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
