import Vue from "vue";
import VueRouter from "vue-router";

import Grid from "@/views/Grid.vue";
import List from "@/views/List.vue";
import Blank from "@/views/Blank.vue";
Vue.use(VueRouter);

// TODO Web Template Studio: Add routes for your new pages here.
export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/Blank", component: Blank },
    { path: "/List", component: List },
    { path: "/Grid", component: Grid },

    { path:"/", redirect: "/Grid" }
  ]
});
