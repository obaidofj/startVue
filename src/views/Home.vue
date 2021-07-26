<template>
   
 
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  
  <HR  />
  <IT /><obaid />
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import obaid from '../components/obaid.vue'
import HR from '../components/HR.vue'
import IT from '../components/IT.vue'
export default {
    setup() {
        
    },
    data(){
return {}
    },
    components: {
    HelloWorld,
    obaid,
    HR,
    IT
  }
}
</script>