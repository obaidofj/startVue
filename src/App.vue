<template>
 <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{name:'About'}">About</router-link> |
       <router-link :to="{name:'Test'}">Test</router-link> |
       <router-link to="/Profile/3324">Profile</router-link>
  </div>
  <br>
  <router-view />
  
</template>

<script>


export default {
  name: 'ep',
  components: {
 
  }
}
</script>

<style>
#ep {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
