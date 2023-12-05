<script setup>
import img1 from '../assets/images/carousel/estadistica.jpg';
import CarruselTop from '../components/CarruselTop.vue';
const aImgInicio = [img1]
</script>

<template>
    <CarruselTop class="mt-[-4.3%]" :imagenes="aImgInicio"></CarruselTop>
    <div class="ml-44 mr-96 my-24">
        <p class="pr-96 mb-6">
            La estadística tiene como principal tarea es recopilar e interpretar los datos que se manejan en los Sistemas
            Administrativos de la Universidad. Lo que nos prove una serie de instrumentos que nos sirve de apoyo para la
            toma de decisiones. Las divisiones que maneja este rubro son:
        </p>
        <router-link to="/Documentos" class="flex items-center font-normal w-[25%] my-2 text-blue-700">
            <svg class="mr-4 mt-1" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 384 512">
                <path
                    d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
            </svg>
            Clic para accesar a Documentos</router-link>
        <a class="flex items-center font-normal w-[25%] my-2 text-blue-700" href="">
            <svg class="mr-4 mt-1" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512">
                <path
                    d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
            </svg>
            Clic para accesar a Indicadores</a>
        <router-link to="/Auditorias" class="flex items-center font-normal w-[25%] my-2 text-blue-700">
            <svg class="mr-4 mt-1" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 384 512">
                <path
                    d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z" />
            </svg>
            Clic para accesar a Auditorías</router-link>
    </div>
</template>

<style scoped></style>