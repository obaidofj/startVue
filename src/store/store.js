
import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  state () {
    return {
        employees:[
            {name:"ahmad",age:22,department:"sales" ,salary:2000},
            {name:"Mohamed",age:33,department:"registration",salary:4000},
            {name:"Khaled",age:30,department:"IT",salary:5000},
            {name:"Essa",age:28,department:"IT",salary:6000},
            ]
            ,
      count: 0
    }
  },
  getters:{
      newInfo: state => {
          let newPers=state.employees.map(x=>{
              return {name:'name: '+x.name,age:'age :'+x.age,department:'department : '+x.department}
          })
          return newPers
      },
      newEmp:state => {
          let newPers=state.employees.map(x=>{
              return {name:'name: '+x.name, department:x.department ,salary:'salary :'+ x.salary}
          })
          return newPers 
        }
    },
  mutations: {
    increaseSalary:state=> {
      return state.employees.forEach(x=>{x.salary+=200})
    },
    decreaseSalary:state=> {
      return state.employees.forEach(x=>{x.salary-=200})
    }
  },
  actions:{
    decreaseSal:context=>{
      setTimeout(()=>{context.commit('decreaseSalary')},2000)
    }
  }
})
