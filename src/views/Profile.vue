<template>
   
Profile is is : {{userid}}
  </template>

  <script>
  import { defineComponent } from '@vue/composition-api'
  
  export default defineComponent({
      setup() {
          
      },
      data(){
          return {
              userid : this.$route.params.userid,
          }
      },
      methods:{
          checkUrl(){
              this.userid= this.$route.params.userid;
          }
      },
      watch:{
          $route:'checkUrl'
      }
  })
  </script>
  