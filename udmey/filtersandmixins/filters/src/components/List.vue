<template>
  <div>
    <h1>Filters and mixins</h1>
    <hr />
    <input v-model="filterText" />
    <ul>
      <li v-for="fruit in filteredFruits" :key="fruit.id">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
import  fruitmixins  from './fruitmixins.js ';
export default {
    name:"LisT",
   mixins:[fruitmixins]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
