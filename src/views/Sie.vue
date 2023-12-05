<script setup>
import img1 from '../assets/images/carousel/bi_22.jpg';
import CarruselTop from '../components/CarruselTop.vue';
const aImgInicio = [img1]
</script>

<template>
    <CarruselTop class="mt-[-4.3%]" :imagenes="aImgInicio"></CarruselTop>
    <div class="ml-44 mr-96 my-24">
        <p class="pb-6 pr-96">
            SIE es un sistema informático utilizado para servir de apoyo, cuya finalidad principal es permitir a los
            usuarios contar con información que les resulte relevante de manera instantánea, con la posibilidad de estudiar
            a detalle apoyando al proceso de toma de decisiones.
        </p>
        <p class="pr-96">
            Su propósito es accesar a los datos de los sistemas, crear información útil y agrupar los resultados en una
            forma clara. Ofreciendo información estadística en línea, orientados a satisfacer requerimientos de numeralia
            universitaria, series históricas de estadística básica, indicadores institucionales y de consultas dinámicas a
            los acervos de datos estadísticos. Son presentadores de información.
        </p>
    </div>
</template>

<style scoped></style>