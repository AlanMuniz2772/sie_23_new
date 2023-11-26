import { createRouter, createWebHistory } from "vue-router";
//Importar las diferentes vistas
import Inicio from "./views/Inicio.vue";
import SomosUadec from "./views/SomosUadec.vue";

//configuracion de rutas
const routes = [
	{
		path: "/",
		name: "Inicio",
		alias: "/",
		component: Inicio,
	},
	{
		path: "/somos-uadec",
		name: "SomosUadec",
		alias: "/",
		component: SomosUadec,
	},
];

const router = createRouter({
	// mantiene historial de rutas
	history: createWebHistory(),
	routes,
});

export default router;
