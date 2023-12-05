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
                <div v-if="selectedCycle === '1'" class="flex flex-col items-center border rounded-lg p-10">
                    <h3>UNIVERSIDAD AUTÓNOMA DE COAHUILA EN NÚMEROS CICLO 2023-2024 ENE-JUN 2023</h3>
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
                <div v-else-if="selectedCycle === '2'" class="flex flex-col items-center border rounded-lg p-10">
                    <h3>UNIVERSIDAD AUTÓNOMA DE COAHUILA EN NÚMEROS CICLO 2022-2023 AGO-DIC 2022</h3>
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
                <div v-else-if="selectedCycle === '3'" class="flex flex-col items-center border rounded-lg p-10">
                    <h3>UNIVERSIDAD AUTÓNOMA DE COAHUILA EN NÚMEROS CICLO 2021-2022 ENE-JUN 2022</h3>
                    <div>
                        <img src="../assets/images/other/distribucion16.jpg" alt="">
                        <div class="row">
                            <h3>
                                <font color="#808080">FACULTADES, ESCUELAS, CENTROS E INSTITUTOS DE INVESTIGACION</font>
                            </h3>
                            <div class="flex">
                                <div class="flex col-md-6">
                                    <div class="row">
                                        <div class="col-md-9">
                                            <ul>
                                                <li><b>
                                                        <font size="3" color="e36c0a">Eduación superior:</font>
                                                    </b>&nbsp;&nbsp;<b>
                                                        <font size="4" color="9bbb59">43</font>
                                                    </b>&nbsp;&nbsp;<b>
                                                        <font color="#000000">Facultades y/o escuelas</font>
                                                    </b></li>
                                                <p></p>
                                                <li><b>
                                                        <font size="3" color="e36c0a">Bachillerato en los sistemas
                                                            escolarizado y abierto:</font>
                                                    </b>&nbsp;&nbsp;<b>
                                                        <font size="4" color="9bbb59">14</font>
                                                    </b>&nbsp;&nbsp;<b>
                                                        <font color="#000000">Planteles</font>
                                                    </b></li>
                                                <p></p>
                                                <li><b>
                                                        <font size="3" color="e36c0a">Centros de Investigación:</font>
                                                    </b>&nbsp;&nbsp;<b>
                                                        <font size="4" color="9bbb59">2</font>
                                                    </b>&nbsp;&nbsp;<b>
                                                        <font color="#000000">Centros</font>
                                                    </b></li>
                                                <p></p>
                                                <li><b>
                                                        <font size="3" color="00000">2 Unidades Académicas Independientes
                                                        </font>
                                                    </b></li>
                                                <li><b>
                                                        <font size="2" color="000000">Centro de Investigaciones
                                                            Socioeconómicas</font>
                                                    </b></li>
                                                <li><b>
                                                        <font size="2" color="000000">Centro de Estudios e Investigaciones
                                                            Interdisciplinarias</font>
                                                    </b></li>
                                                <p></p>
                                                <li><b>
                                                        <font size="3" color="00000">2 Centros de Investigación dependientes
                                                            de UA</font>
                                                    </b></li>
                                                <li><b>
                                                        <font size="2" color="000000">Centro de Investigaciones Biomédicas
                                                        </font>
                                                    </b></li>
                                                <li><b>
                                                        <font size="2" color="000000">Centro de Investigación en Matemáticas
                                                            Aplicadas</font>
                                                    </b></li>


                                            </ul>

                                        </div><!-- /.col -->
                                        <div class="col-md-1">

                                        </div><!-- /.col -->
                                    </div>
                                </div><!-- /.col -->

                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-9">
                                            <img alt="" src="../assets/images/other/rectoria.jpg" style="width: 50%;">
                                        </div><!-- /.col -->
                                        <div class="col-md-1">



                                        </div><!-- /.col -->
                                    </div>
                                </div><!-- /.col -->


                            </div><!-- /.col -->


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>