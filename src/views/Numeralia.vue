<script setup>
import { ref } from 'vue';
import img1 from '../assets/images/carousel/numeralia.jpg';
import CarruselTop from '../components/CarruselTop.vue';

const aImgInicio = [img1]
const selectedCycle = ref(1);

</script>

<template>
    <CarruselTop class="mt-[-4.3%]" :imagenes="aImgInicio"></CarruselTop>
    <div class="container mx-auto px-4">
        <div class="md:w-2/3 mx-auto text-justify">
            <div class="my-12">
                <p class="text-justify text-lg text-black mb-3">
                    La numeralia contiene resúmenes con información estadística y cifras significativas de la UAdeC.
                </p>
                <p class="text-justify text-lg text-black">
                    La actualización se realizará cada período escolar con base en la información proporcionada por cada
                    área de responsabilidad y cifras oficiales.
                </p>
            </div>
            <div class="w-full max-w-xs ml-auto">
                <select v-model="selectedCycle"
                    class="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="ciclo">
                    <option :value="1">UAdeC CICLO ENE-JUN 2023</option>
                    <option :value="2">UAdeC CICLO AGO-DIC 2022</option>
                    <option :value="3">UAdeC CICLO ENE-JUN 2022</option>
                    <option :value="4">UAdeC CICLO AGO-DIC 2021</option>
                    <option :value="5">UAdeC CICLO ENE-JUN 2021</option>
                    <option :value="6">UAdeC CICLO AGO-DIC 2020</option>
                    <option :value="7">UAdeC CICLO ENE-JUN 2020</option>
                    <option :value="8">UAdeC CICLO AGO-DIC 2019</option>
                    <option :value="9">UAdeC CICLO ENE-JUN 2019</option>
                    <option :value="10">UAdeC CICLO AGO-DIC 2018</option>
                    <option :value="11">UAdeC CICLO ENE-JUN 2018</option>
                    <option :value="12">UAdeC CICLO AGO-DIC 2017</option>
                    <option :value="13">UAdeC CICLO ENE-JUN 2017</option>
                    <option :value="14">UAdeC CICLO AGO-DIC 2016</option>
                    <option :value="15">UAdeC CICLO ENE-JUN 2016</option>
                    <option :value="16">UAdeC CICLO AGO-DIC 2015</option>
                    <option :value="17">UAdeC CICLO ENE-JUN 2015</option>
                </select>
            </div>
            <div class="my-5">
                <div v-if="selectedCycle === 1" class="flex flex-col items-center border rounded-lg p-10">
                    <strong>UNIVERSIDAD AUTÓNOMA DE COAHUILA EN NÚMEROS CICLO 2023-2024 ENE-JUN 2023</strong>
                    <div>
                        <img src="../assets/images/Num23_/01.jpg" alt="">
                        <img src="../assets/images/Num23_/02.jpg" alt="">
                        <img src="../assets/images/Num23_/03.jpg" alt="">
                        <img src="../assets/images/Num23_/04.jpg" alt="">
                        <img src="../assets/images/Num23_/05.jpg" alt="">
                        <img src="../assets/images/Num23_/06.jpg" alt="">
                        <img src="../assets/images/Num23_/07.jpg" alt="">
                        <img src="../assets/images/Num23_/08.jpg" alt="">
                        <img src="../assets/images/Num23_/09.jpg" alt="">
                        <img src="../assets/images/Num23_/10.jpg" alt="">
                        <img src="../assets/images/Num23_/11.jpg" alt="">
                    </div>
                </div>
                <div v-if="selectedCycle === 2" class="flex flex-col items-center border rounded-lg p-10">
                    <strong>UNIVERSIDAD AUTÓNOMA DE COAHUILA EN NÚMEROS CICLO 2022-2023 AGO-DIC 2022</strong>
                    <div>
                        <img src="../assets/images/Num23_/01.jpg" alt="">
                        <img src="../assets/images/Num23_/02.jpg" alt="">
                        <img src="../assets/images/Num23_/03.jpg" alt="">
                        <img src="../assets/images/Num23_/04.jpg" alt="">
                        <img src="../assets/images/Num23_/05.jpg" alt="">
                        <img src="../assets/images/Num23_/06.jpg" alt="">
                        <img src="../assets/images/Num23_/07.jpg" alt="">
                        <img src="../assets/images/Num23_/08.jpg" alt="">
                        <img src="../assets/images/Num23_/09.jpg" alt="">
                        <img src="../assets/images/Num23_/10.jpg" alt="">
                        <img src="../assets/images/Num23_/11.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>