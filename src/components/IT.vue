<template>
    <br>IT
    <div>
     <div v-for="(item,i) in employees " :key="i" >  <h3 v-if="item.department=='IT'">{{item.name}}</h3> </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
    data(){
        return { employees:[
            {name:"ahmad",age:22,department:"sales"},
            {name:"Mohamed",age:33,department:"registration"},
            {name:"Khaled",age:30,department:"IT"},
            {name:"Essa",age:28,department:"IT"},
            ]
        }
    },
    computed:{
        itEmp(i) {
             return this.employees[i].department=='IT' ? this.employees[i] : ''
        }
    }
})
</script>

<style scoped>

</style>
