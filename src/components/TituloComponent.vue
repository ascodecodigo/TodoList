<template>
<div>
  <h2>{{ titulo }}</h2>
  <h3>Tareas por hacer: {{ $store.getters.numTareas }}</h3>
</div>
</template>

<script>
// import { bus } from '../main.js'
export default {
  computed: {
    numTareas() {
      return this.$store.state.tareas.reduce((accumulator, tarea) => {
        if (!tarea.terminada) ++accumulator
        return accumulator
      }, 0)
    }
  },
  props: {
    titulo: {
      type: String,
      default: ''
    },
    tareas: {
      type: Array
    }
  },
  created() {
    // bus.$on('actualizarContador', (numTareas) => {
    //   this.numTareas = numTareas
    // })
  }
}
</script>
