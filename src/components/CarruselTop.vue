<script setup>
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
const props = defineProps(['imagenes'])


const modules = [Autoplay, Pagination, Navigation];
const swiperSlidesPerView = ref(1); // Valor predeterminado
const bNavigation = ref(true); // Valor predeterminado
</script>

<template>
    <swiper :slidesPerView="swiperSlidesPerView" :spaceBetween="1" :navigation="{ enabled: bNavigation, }"
        autoplay="autoplay" :modules="modules" :scrollbar="true" :loop="true">
        <swiper-slide v-for="imgSrc in imagenes">
            <img class="h-[60vh]" :src="imgSrc" title="Ir a información SIE">
        </swiper-slide>
    </swiper>
</template>

<style lang="scss" scoped></style>