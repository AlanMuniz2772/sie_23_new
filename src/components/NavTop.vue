<template>
	<div class="w-full bg-blue-800 p-6 flex" id="NavBar">
		<div class="w-1/5 flex items-center justify-center" id="leftArea">
			<div class="iconPortal">
				<img src="src/assets/iconos/logo_web_portal.png" alt="">
			</div>
		</div>
		<div class="w-4/5 flex flex-col" id="rigthArea">
			<div class="h-1/2 flex justify-end" id="topArea">
				<div class="absolute top-1" id="topLogo">
					<img src="src/assets/iconos/dpfinal.png" alt="">
				</div>
			</div>
			<div class="menuBar flex justify-center" id="menuBar">
				<ul class="flex space-x-4">
					<li>
						<router-link to="/"
							class="text-white px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-700 hover:text-gray-100 focus:outline-none focus:bg-blue-700 focus:text-gray-100">
							Inicio
						</router-link>
					</li>
					<li>
						<router-link to="/somos-uadec"
							class="text-white px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-700 hover:text-gray-100 focus:outline-none focus:bg-blue-700 focus:text-gray-100">
							Somos Uadec
						</router-link>
					</li>
					<li>
						<router-link to="/numeralia"
							class="text-white px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-700 hover:text-gray-100 focus:outline-none focus:bg-blue-700 focus:text-gray-100">
							Numeralia
						</router-link>
					</li>
					<li class="group relative">
						<router-link to="/estadisticas"
							class="text-white px-4 py-2 transition duration-300 ease-in-out group-hover:bg-blue-700 group-hover:text-gray-100 focus:outline-none focus:bg-blue-700 focus:text-gray-100">
							Estadisticas
						</router-link>
						<ul class="absolute hidden bg-blue-800 group-hover:block">
							<li>
								<router-link to="/estadisticas/subpagina1"
									class="text-white px-4 py-2">Documentos</router-link>
							</li>
							<li>
								<router-link to="/estadisticas/subpagina2"
									class="text-white px-4 py-2">Auditorias</router-link>
							</li>
						</ul>
					</li>
					<li class="group relative">
						<router-link to="/sie"
							class="text-white px-4 py-2 transition duration-300 ease-in-out group-hover:bg-blue-700 group-hover:text-gray-100 focus:outline-none focus:bg-blue-700 focus:text-gray-100">
							SIE
						</router-link>
						<ul class="absolute hidden bg-blue-800 group-hover:block">
							<li>
								<router-link to="/sie/subpagina1" class="text-white px-4 py-2 ">Modelos
									(Cubos)</router-link>
							</li>
						</ul>
					</li>
					<li>
						<router-link to="/contacto"
							class="text-white px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-700 hover:text-gray-100 focus:outline-none focus:bg-blue-700 focus:text-gray-100">
							Contacto
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
  
  
<style scoped>
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
#topLogo img {
	height: 80px;

}
</style>
  