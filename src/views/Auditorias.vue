<script setup>
import img1 from '../assets/images/carousel/auditoria.jpg';
import CarruselTop from '../components/CarruselTop.vue';
const aImgInicio = [img1]
</script>

<template>
    <CarruselTop class="mt-[-4.3%]" :imagenes="aImgInicio"></CarruselTop>
    <div class="ml-44 mr-96 my-24">
        <p class="pb-6 pr-96">
            El Cuestionario Estadístico 911 es el instrumento de la Secretaría de Educación Pública (SEP) para recabar
            información educativa de los niveles: Básico, Media Superior y Superior. Es elaborado en conjunto con la
            Asociación Nacional de Universidades e Instituciones de Educación Superior (ANUIES) y la Secretaría de Hacienda
            y Crédito Público (SHCP). Por medio de este, se recopila información como:
        </p>
        <p class="pb-6 pr-96">
            Alumnos por área académica, género, grado escolar, fecha de ingreso, egresados y titulados; número de escuelas,
            facultades, Posgrados, institutos y centros de investigación; personal académico, directivo, administrativo, de
            intendencia; escolaridad del personal, características de los inmuebles, número y tipo de carreras ofertadas;
            así como modalidades educativas.
        </p>
        <p class="pb-6 pr-96">
            Cumpliendo con el requisito de la SEP, la Universidad Autónoma de Coahuila (UAdeC) entrega la información
            correspondiente publicándolas desde el periodo 2011-2 son datos fidedignos y confiables.
        </p>
        <strong class="pb-6 border-b-2">A continuación se muestran los documentos de las auditoria de la matrícula 911 por
            ciclo:</strong>
        <ul class="font-bold">
            <li class="flex items-start">
                <svg class="mr-9 mt-1" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512">
                    <path
                        d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
                </svg>
                <div class="flex flex-col">
                    <span>Auditoría 2014-1 (AGO-DIC 2014)</span>
                    <span class="mt-5"> - RESUMEN <a class="mt-5 font-normal text-blue-700"
                            href="pdf/aud_20141_res.pdf">Descargar</a></span>
                </div>
            </li>
            <li class="flex items-start">
                <svg class="mr-9 mt-1" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512">
                    <path
                        d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
                </svg>
                <div class="flex flex-col">
                    <span>Auditoría 2014-2 (ENE-JUN 2015)</span>
                    <span class="mt-5"> - RESUMEN <a class="mt-5 font-normal text-blue-700"
                            href="pdf/aud_20142_res.pdf">Descargar</a></span>
                </div>
            </li>
            <li class="flex items-start">
                <svg class="mr-9 mt-1" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512">
                    <path
                        d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
                </svg>
                <div class="flex flex-col">
                    <span>Auditoría 2015-1 (AGO-DIC 2015)</span>
                    <span class="mt-5"> - RESUMEN <a class="mt-5 font-normal text-blue-700"
                            href="pdf/aud_20151_res.pdf">Descargar</a></span>
                </div>
            </li>
            <li class="flex items-start">
                <svg class="mr-9 mt-1" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512">
                    <path
                        d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
                </svg>
                <div class="flex flex-col">
                    <span>Auditoría 2015-2 (ENE-JUN 2016)</span>
                    <span class="mt-5"> - RESUMEN <a class="mt-5 font-normal text-blue-700"
                            href="pdf/aud_20161_res.pdf">Descargar</a></span>
                </div>
            </li>
            <li class="flex items-start">
                <svg class="mr-9 mt-1" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512">
                    <path
                        d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
                </svg>
                <div class="flex flex-col">
                    <span>Auditoría 2016-1 (AGO-DIC 2016)</span>
                    <span class="mt-5"> - RESUMEN <a class="mt-5 font-normal text-blue-700"
                            href="pdf/aud_20162_res.pdf">Descargar</a></span>
                </div>
            </li>
            <li class="flex items-start">
                <svg class="mr-9 mt-1" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512">
                    <path
                        d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
                </svg>
                <div class="flex flex-col">
                    <span>Auditoría 2016-2 (ENE-JUN 2017)</span>
                    <span class="mt-5"> - RESUMEN <a class="mt-5 font-normal text-blue-700"
                            href="pdf/aud_20171_res.pdf">Descargar</a></span>
                </div>
            </li>
            <li class="flex items-start">
                <svg class="mr-9 mt-1" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512">
                    <path
                        d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
                </svg>
                <div class="flex flex-col">
                    <span>Auditoría 2017-1 (AGO-DIC 2017)</span>
                    <span class="mt-5"> - RESUMEN <a class="font-normal text-blue-700"
                            href="pdf/2017-2.pdf">Descargar</a></span>
                </div>
            </li>
            <li class="flex items-start">
                <svg class="mr-9 mt-1" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512">
                    <path
                        d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
                </svg>
                <div class="flex flex-col">
                    <span>Auditoría 2017-2 (ENE-JUN 2018)</span>
                    <span class="mt-5"> - RESUMEN <a class="font-normal text-blue-700"
                            href="pdf/2018.1.pdf">Descargar</a></span>
                </div>
            </li>
            <li class="flex items-start">
                <svg class="mr-9 mt-1" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512">
                    <path
                        d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
                </svg>
                <div class="flex flex-col">
                    <span>Auditoría 2018-1 (AGO-DIC 2018)</span>
                    <span class="mt-5"> - RESUMEN <a class="font-normal text-blue-700"
                            href="pdf/2018-2.pdf">Descargar</a></span>
                </div>
            </li>
            <li class="flex items-start">
                <svg class="mr-9 mt-1" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512">
                    <path
                        d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
                </svg>
                <div class="flex flex-col">
                    <span>Auditoría 2018-2 (ENE-JUN 2019)</span>
                    <span class="mt-5"> - RESUMEN <a class="mt-5 font-normal text-blue-700"
                            hhref="pdf/2018-2.pdf">Descargar</a></span>
                </div>
            </li>
            <li class="flex items-start">
                <svg class="mr-9 mt-1" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512">
                    <path
                        d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
                </svg>
                <div class="flex flex-col">
                    <span>Auditoría 2019-1 (AGO-DIC 2019)</span>
                    <span class="mt-5"> - RESUMEN <a class="mt-5 font-normal text-blue-700"
                            href="pdf/2019-1.pdf">Descargar</a></span>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
li {
    @apply my-8
}
</style>










