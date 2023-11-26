<template>
    <CarruselTop :imagenes="aImgInicio"></CarruselTop>
    <div class="container mx-auto px-4 mb-12">
        <div class="text-center">
            <h1 class="text-2xl text-blue1 my-4 font-bold">PORTAL ESTADISTICA</h1>
            <h4 class="text-lg text-blue1 my-2">VARIABLES E INDICADORES</h4>
            <h3 class="text-2xl text-blue1 my-3 font-bold"> DIRECCIÓN DE PLANEACIÓN </h3>
            <h3 class="text-xl text-blue1"> Subdirección de Fortalecimiento Institucional </h3>
            <h2 class="text-2xl text-naranja1 my-4 font-bold">MATRÍCULA HISTÓRICA DEL 2015 AL 2022</h2>
            <p class="my-4">
                <span>Bachillerato</span>
                <span>Licenciatura</span>
                <span>Posgrado</span>
                <a href="pdf/matr21.pdf">Ver</a>
            </p>

            <div class="flex justify-center">
                <p class="w-3/5 text-center">
                    Con el fin de apoyar las actividades de planeación, evaluación y la toma de
                    decisiones, así como, brindar información a las diferentes entidades (escuelas y/o facultades,
                    dependencias) sobre algunos aspectos de la matrícula, indicadores y cubos(modelos) estadísticos , la
                    Dirección de Planeación pone a su disposición el Portal de Estadística Universitaria.&nbsp;&nbsp;
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import img1 from '../assets/images/carousel/E_J22.jpg'
import img2 from '../assets/images/carousel/estadistica_2.jpg'
import img3 from '../assets/images/carousel/contacto.jpg'
import CarruselTop from '../components/CarruselTop.vue';
const aImgInicio = [img1, img2, img3]
</script>

<style scoped>
p span {
    @apply text-naranja1 mx-2 text-2xl;
}

p a {
    @apply text-blue1 text-lg;

}
</style>