<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';

const isScrolled = ref(false);

const updateScroll = () => {
	isScrolled.value = window.scrollY > 100;
};

onMounted(() => {
	window.addEventListener('scroll', updateScroll);
});

onUnmounted(() => {
	window.removeEventListener('scroll', updateScroll);
});

const navClass = computed(() => ({
	'sticky top-0 z-50': true,
	'bg-black bg-opacity-50 text-white': !isScrolled.value,
	'bg-white text-black': isScrolled.value,
}));

</script>

<template>
	<div class="flex relative font-bold p-5 z-50" :class="navClass">
		<div class="flex">
			<router-link to="/"><img src="src/assets/iconos/logo_web_portal.png" alt="" style="height: 40px;"></router-link>
			<router-link to="/"><img src="src/assets/iconos/dpfinal.png" alt="" style="height: 40px;"></router-link>
		</div>
		<div class="flex items-center ml-16">
			<ul class="flex gap-12">
				<li><router-link to="/">INICIO</router-link></li>
				<li><router-link to="/SomosUadec">SOMOS UADEC</router-link></li>
				<li><router-link to="/Numeralia">NUMERALIA</router-link></li>
				<li class="relative group cursor-pointer">
					<div class="flex items-center">
						<router-link to="/Estadisticas">ESTADÍSTICAS</router-link>
						<svg class="ml-2 menu-icon" xmlns="http://www.w3.org/2000/svg" height="16" width="10"
							viewBox="0 0 320 512">
							<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3
							0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5
							45.3 0l192 192z" />
						</svg>
					</div>
					<ul class="absolute hidden group-hover:block w-56 bg-gray-800 text-white z-50">
						<li class="border-b-2 p-2"><router-link to="">UAdeC Números</router-link></li>
						<li class="border-b-2 p-2"><router-link to="/Documentos">DOCUMENTOS</router-link></li>
						<li class="border-b-2 p-2"><router-link to="">TRANSPARENCIA</router-link></li>
						<li class="relative border-b-2 sub-group-hover p-2">
							<div class="flex items-center">
								INDICADORES BÁSICOS
								<svg class="ml-2 menu-icon-sub" xmlns="http://www.w3.org/2000/svg" height="16" width="10"
									viewBox="0 0 320 512">
									<path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3
							0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5
							45.3 0l192 192z" />
								</svg>
							</div>
							<ul class="absolute hidden sub-dropdown w-56 bg-gray-700 text-white z-50 left-full top-0">
								<li class="border-b-2 p-2">COMP. ACADÉMICO</li>
								<li class="border-b-2 p-2">CAPACIDAD ACADÉMICA</li>
								<li class="p-2">GESTIÓN INSTITUCIONAL</li>
							</ul>
						</li>
						<li class="p-2"><router-link to="/Auditorias">AUDITORIAS 911</router-link></li>
					</ul>
				</li>
				<li class="relative group cursor-pointer">
					<div class="flex items-center">
						<router-link to="/Sie">SIE</router-link>
						<svg class="ml-2 menu-icon" xmlns="http://www.w3.org/2000/svg" height="16" width="10"
							viewBox="0 0 320 512">
							<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3
							0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5
							45.3 0l192 192z" />
						</svg>
					</div>
					<ul class="absolute hidden group-hover:block w-44 bg-gray-800 text-white z-50">
						<li class="p-2"><router-link to="/Cubos">MODELOS (CUBOS)</router-link></li>
					</ul>
				</li>
				<li><router-link to="/Contacto">CONTACTO</router-link></li>
			</ul>
		</div>
		<div class="flex items-center ml-auto">
			<span class="mx-4">UNIVERSIDAD AUTÓNOMA DE COAHUILA</span>
		</div>
	</div>
</template>
  
<style scoped>
.sub-group-hover:hover .sub-dropdown {
	@apply block;
}

.group:hover .menu-icon,
.sub-group-hover:hover .menu-icon-sub {
	@apply rotate-90;
}

/* #NavBar {
  background-color: #1b5083;
  width: 100%;
  max-height: 178px;
  display: flex;
}

#leftArea {
  width: 20%;
}

#rigthArea {
  width: 80%;
  display: flex;
  flex-direction: column;
}

#topLogo {
  height: 50%;
}

#menuBar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

#menuBar ul li {
  margin-right: 20px;
  position: relative;
}

#menuBar ul li a {
  color: #fff;
  text-decoration: none;
  display: block;
  padding: 10px;
}

#menuBar ul li a:hover {
  background-color: #0a314e;
}

#menuBar ul li .dropdown-menu {
  display: none;
  position: absolute;
  background-color: #1b5083;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  z-index: 1;
}

#menuBar ul li .dropdown-menu li {
  display: block;
}

#menuBar ul li .dropdown-menu li a {
  color: #fff;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

#menuBar ul li .dropdown-menu li a:hover {
  background-color: #0a314e;
}

#menuBar ul li:hover .dropdown-menu {
  display: block;
}
*/
/* #topLogo img {
	height: 80px;

} */
</style>
  