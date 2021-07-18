<template>
   
 
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <obaid />
  <HR />
  <IT />
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import obaid from '../components/obaid.vue'
import HR from '../components/HR.vue'
import IT from '../components/IT.vue'
export default {
    setup() {
        
    },
    components: {
    HelloWorld,
    obaid,
    HR,
    IT
  }
}
</script>