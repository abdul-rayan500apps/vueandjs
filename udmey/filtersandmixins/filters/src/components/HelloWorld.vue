<template>
  <div class="container">
    <div class="row"></div>
    <div class="col-xs-12 col-sm-offset-2 col-md-6 col-md-offset-3"></div>
    <h1>Filters and mixins</h1>
    <h1>{{ name | Ucase | Lcase }}</h1>
    <h1>{{ amount | currencyconverter }}</h1>
    <hr />
    <input v-model="filterText" />
    <ol>
      <li v-for="fruit in filteredFruits" :key="fruit.id">{{ fruit}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  mixins:[fruitmixins],
  name: "HelloWorld",
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
