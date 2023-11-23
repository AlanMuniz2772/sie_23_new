import { createRouter, createWebHistory } from "vue-router";
//Importar las diferentes vistas
import Inicio from "./views/Inicio.vue";

//configuracion de rutas
const routes = [
	{
		path: "/",
		name: "Inicio",
		alias: "/",
		component: Inicio,
	},
];

const router = createRouter({
	// mantiene historial de rutas
	history: createWebHistory(),
	routes,
});

export default router;
