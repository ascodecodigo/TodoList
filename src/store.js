import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tareas: [
      {
        texto: "Aprender Vue.js",
        terminada: false
      },
      {
        texto: "Aprender Angular 2",
        terminada: false
      },
      {
        texto: "Aprender Ionic 2",
        terminada: false
      }
    ]
  },
  getters: {
    numTareas: state =>
      state.tareas.reduce((accumulator, tarea) => {
        if (!tarea.terminada) ++accumulator
        return accumulator
      }, 0)
  },
  mutations: {},
  actions: {}
})

export default store
