<template>
   <div>
   <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
      
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <router-link to="/portfolio" class="navbar-brand">portfolio</router-link>
    <router-link to="/stocks" class="navbar-brand">Stocks</router-link>
<b-nav-item-dropdown text="save & load" >
          <b-dropdown-item href="#">save</b-dropdown-item>
          <b-dropdown-item href="#">load</b-dropdown-item>
         </b-nav-item-dropdown>
         </b-navbar>
  




</div>
   </div>
</template>
 

<script>
export default {
  name: "HeadeR",
};
</script>
