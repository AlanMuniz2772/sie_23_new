import { createRouter, createWebHistory } from "vue-router";
//Importar las diferentes vistas
import Inicio from "./views/Inicio.vue";
const SomosUadec = () => import("./views/SomosUadec.vue");
const Numeralia = () => import("./views/Numeralia.vue");
const Contacto = () => import("./views/Contacto.vue");
const Cubos = () => import("./views/Cubos.vue");
const Documentos = () => import("./views/Documentos.vue");
const Estadisticas = () => import("./views/Estadisticas.vue");
const Auditorias = () => import("./views/Auditorias.vue");
const Sie = () => import("./views/Sie.vue");

//configuracion de rutas
const routes = [
	{
		path: "/",
		name: "Inicio",
		alias: "/Inicio",
		component: Inicio,
	},
	{
		path: "/SomosUadec",
		name: "SomosUadec",
		alias: "/SomosUadec",
		component: SomosUadec,
	},
	{
		path: "/Numeralia",
		name: "Numeralia",
		alias: "/Numeralia",
		component: Numeralia,
	},
	{
		path: "/Contacto",
		name: "Contacto",
		alias: "/Contacto",
		component: Contacto,
	},
	{
		path: "/Cubos",
		name: "Cubos",
		alias: "/Cubos",
		component: Cubos,
	},
	{
		path: "/Documentos",
		name: "Documentos",
		alias: "/Documentos",
		component: Documentos,
	},
	{
		path: "/Estadisticas",
		name: "Estadisticas",
		alias: "/Estadisticas",
		component: Estadisticas,
	},
	{
		path: "/Auditorias",
		name: "Auditorias",
		alias: "/Auditorias",
		component: Auditorias,
	},
	{
		path: "/Sie",
		name: "Sie",
		alias: "/Sie",
		component: Sie,
	},
];

const router = createRouter({
	// mantiene historial de rutas
	history: createWebHistory(),
	routes,
});

export default router;
