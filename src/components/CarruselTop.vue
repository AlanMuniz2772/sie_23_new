<template>
    <swiper :slidesPerView="swiperSlidesPerView" :spaceBetween="1" :navigation="{ enabled: bNavigation, }"
        autoplay="autoplay" :modules="modules" :scrollbar="true" :loop="true">
        <swiper-slide v-for="imgSrc in imagenes">
            <!-- <a href="sie.html"> -->
            <img :src="imgSrc" title="Ir a información SIE">
            <!-- </a> -->
        </swiper-slide>
    </swiper>
</template>

<script setup>
import { ref } from 'vue';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';
const props = defineProps(['imagenes'])


const modules = [Autoplay, Pagination, Navigation];
const swiperSlidesPerView = ref(1); // Valor predeterminado
const bNavigation = ref(true); // Valor predeterminado
</script>

<style lang="scss" scoped></style>