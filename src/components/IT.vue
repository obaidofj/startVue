<template>
    <br>IT
    <div>
     <div v-for="(item,i) in newIT " :key="i" >  <h3 v-if="item.department=='IT'">{{item.name}} {{item.age}} {{item.salary}}</h3> </div>
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
        itEmp(i) {
             return this.employees[i].department=='IT' ? this.employees[i] : ''
        },
        IT(){
            return this.$store.state.employees
        },
        newIT(){
            return this.$store.getters.newEmp
        }
    }
})
</script>

<style scoped>

</style>
