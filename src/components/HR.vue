<template>
    HR
    <div>
     <h3 v-for="(item,i) in newHR " :key="i" >{{item.name}} {{item.age}} {{item.department}}</h3>
     
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
    data(){
        return { 
        }
    },
     computed:{
        
        HR(){
            return this.$store.state.employees
        },
        newHR(){
            return this.$store.getters.newInfo
        }
    },
    
})
</script>

<style scoped>

</style>
