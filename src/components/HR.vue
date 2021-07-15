<template>
    HR
    <div>
     <h3 v-for="(item,i) in employees " :key="i" >{{item.name}}</h3>
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
    }
})
</script>

<style scoped>

</style>
