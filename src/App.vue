<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <obaid />
  <HR />
  <IT />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import obaid from './components/obaid.vue'
import HR from './components/HR.vue'
import IT from './components/IT.vue'

export default {
  name: 'ep',
  components: {
    HelloWorld,
    obaid,
    HR,
    IT
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
