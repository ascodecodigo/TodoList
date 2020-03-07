import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/HelloWorld";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home // importacion desde una variable
  },
  {
    path: "/todo-list",
    name: "TodoList",
    component: () => import('@/views/TodoList') // importación directa
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
