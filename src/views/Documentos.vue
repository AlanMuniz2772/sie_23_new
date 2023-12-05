<script setup>
import img1 from '../assets/images/carousel/uadecnumeros.jpg';
import CarruselTop from '../components/CarruselTop.vue';
const aImgInicio = [img1]

</script>

<template>
    <CarruselTop class="mt-[-4.3%]" :imagenes="aImgInicio"></CarruselTop>
    <div class="mx-96 my-24 font-bold">
        <p class="border-b-2 py-8">
            Tríptico semestral que presenta la información más importante y los principales indicadores
            que describen el quehacer de nuestra Universidad.
        </p>
        <ul class="">

            <li class="flex items-center">
                <svg class="mr-9" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512">
                    <path
                        d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
                </svg>
                Tríptico 2019 <a class="font-normal text-blue-700 ml-1" href="pdf/UAdeCNum.pdf">Descargar</a>
            </li>

            <li class="flex items-start">
                <svg class="mr-9 mt-1" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512">
                    <path
                        d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
                </svg>
                <div>
                    <div class="flex flex-col">
                        <span>Video de estadísticas del periodo 2018-1</span>
                        <span>Ago-Dic 2018 <a class="font-normal text-blue-700"
                                href="pdf/Planeación-Numeros.mp4">Vídeo</a></span>
                    </div>
                    <video controls=autoplay width="600">
                        <source src="pdf/Planeación-Numeros.mp4" type="video/mp4" />
                    </video>
                </div>
            </li>

            <li class="flex items-start">
                <svg class="mr-9 mt-1" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512">
                    <path
                        d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
                </svg>
                <div class="flex flex-col">
                    <span>UAdeC en números a Diciembre</span>
                    <span>2019 <a class="font-normal text-blue-700" href="pdf/infografia.pdf">Infografía</a></span>
                </div>
            </li>

            <li class="flex items-center">
                <svg class="mr-9" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512">
                    <path
                        d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
                </svg>
                Formatos Media Superior
            </li>

            <li class="flex flex-col">
                <span>BACHILLERATO GENERAL</span>
                <span>911.7G <a class="font-normal text-blue-700"
                        href="pdf/BACHILLERATO GENERAL 911.7G.pdf">Descargar</a></span>
            </li>

            <li class="flex flex-col">
                <span>PLANTEL</span>
                <span>911.7 <a class="font-normal text-blue-700" href="pdf/PLANTEL 911.7.pdf">Descargar</a></span>
            </li>

            <li>INFRAESTRUCTURA <a class="font-normal text-blue-700" href="pdf/INFRAESTRUCTURA-911-7I.pdf">Descargar</a>
            </li>

            <li class="flex flex-col">
                <span>ANEXO MED SUP</span>
                <span>TECNOLOGÍAS <a class="font-normal text-blue-700"
                        href="pdf/ANEXO MED SUP TECNOLOGIAS.pdf">Descargar</a></span>
            </li>

            <li class="flex items-center">
                <svg class="mr-9" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512">
                    <path
                        d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
                </svg>
                Formatos Nivel Superior
            </li>

            <li>CARRERA 911.9A <a class="font-normal text-blue-700" href="pdf/CARRERA 911.9A.pdf">Descargar</a></li>

            <li>ESCUELA 911.9 <a class="font-normal text-blue-700" href="pdf/ESCUELA 911.9.pdf">Descargar</a></li>

            <li>POSGRADO 911.9B <a class="font-normal text-blue-700" href="pdf/POSGRADO 911.9B.pdf">Descargar</a></li>

            <li>ANEXO TIC SUPERIOR <a class="font-normal text-blue-700" href="pdf/ANEXO TIC SUPERIOR.pdf">Descargar</a></li>

            <li>INFRAESTRUCTURA 911-9I <a class="font-normal text-blue-700"
                    href="pdf/INFRAESTRUCTURA 911-9I.pdf">Descargar</a></li>
        </ul>
    </div>
</template>

<style scoped>
li {
    @apply my-8
}
</style>