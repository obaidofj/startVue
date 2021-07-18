<template>
    hi .. {{msg}}
    <input type="text" v-model="searchdata">
    <div class="post" v-for="(post,id) in findData" :key="id"><h3>{{post.title}}</h3><p>{{post.body}}</p></div>
    
</template>

<script>
import { defineComponent } from '@vue/composition-api'
const axios = require('axios').default;

export default defineComponent({
    setup() {
        
    },
    data(){
        return {msg :"hello from obaid",
                posts:[],
                searchdata:''}
    },
    computed:{
      findData(){
          return this.posts.filter(post=>{return post.title.match(this.searchdata)})
      }
    },
    created(){
       axios("https://jsonplaceholder.typicode.com/posts").then(res=>{this.posts=res.data})
       .catch(e=>{console.log(e)});
    }
})
</script>

<style scoped>

</style>
