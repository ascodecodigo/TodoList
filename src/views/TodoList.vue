<template>
  <div class="jumbotron">
    <titulo :titulo="titulo" :tareas="$store.state.tareas"></titulo>
    <nueva-tarea :tareas="$store.state.tareas"> </nueva-tarea>
    <lista-tareas></lista-tareas>
    <router-link tag="img" width="50%" src="https://miro.medium.com/max/2401/1*mG4yPf0dVoBk0R6csThChQ.png" class="btn btn-link" :to="{ path: '/' }">Go back</router-link>
  </div>
</template>

<script>
import Titulo from "@/components/TituloComponent";
import NuevaTarea from "@/components/NuevaTareaComponent";
import ListaTareas from "@/components/ListaTareasComponent";
export default {
  name: "todo-list",
  data() {
    return {
      titulo: "Lista de Tareas"
    };
  },
  components: {
    Titulo,
    NuevaTarea,
    ListaTareas
  }
};
</script>
