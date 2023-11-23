<template>
    <swiper :slidesPerView="swiperSlidesPerView" :spaceBetween="1" :navigation="{ enabled: bNavigation, }"
        autoplay="autoplay" :modules="modules" :scrollbar="true" :loop="true">
        <swiper-slide>
            <!-- <a href="sie.html"> -->
            <img src="../assets/images/carousel/E_J22.jpg" title="Ir a información SIE">
            <!-- </a> -->
        </swiper-slide>
        <swiper-slide>
            <!-- <a href="statics.html"> -->
            <img src="../assets/images/carousel/estadistica_2.jpg" title="Ir a Estadísticas">
            <!-- </a> -->
        </swiper-slide>
        <swiper-slide>
            <!-- <a href="statics.html"> -->
            <img src="../assets/images/carousel/contacto.jpg" title="Ir a Estadísticas">
            <!-- </a> -->
        </swiper-slide>
    </swiper>
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
    </div><!-- /.container -->
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';

const modules = [Autoplay, Pagination, Navigation];
const swiperSlidesPerView = ref(1); // Valor predeterminado
const bNavigation = ref(true); // Valor predeterminado
</script>

<style scoped>
p span {
    @apply text-naranja1 mx-2 text-2xl;
}

p a {
    @apply text-blue1 text-lg;

}
</style>