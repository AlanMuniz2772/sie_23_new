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
                    id="CICLO">
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
                        <img src="../assets/images/Num23/01.jpg" alt="">
                        <img src="../assets/images/Num23/02.jpg" alt="">
                        <img src="../assets/images/Num23/03.jpg" alt="">
                        <img src="../assets/images/Num23/04.jpg" alt="">
                        <img src="../assets/images/Num23/05.jpg" alt="">
                        <img src="../assets/images/Num23/06.jpg" alt="">
                        <img src="../assets/images/Num23/07.jpg" alt="">
                        <img src="../assets/images/Num23/08.jpg" alt="">
                        <img src="../assets/images/Num23/09.jpg" alt="">
                        <img src="../assets/images/Num23/10.jpg" alt="">
                        <img src="../assets/images/Num23/11.jpg" alt="">
                    </div>
                </div>
                <div v-else-if="selectedCycle === '3'" class="flex flex-col items-center border rounded-lg p-10">
                    <h3>UNIVERSIDAD AUTONOMA DE COAHUILA EN NUMEROS CICLO 2021-2022 ENE-JUN 2022</h3>
                    <div class="flex flex-col items-center">
                        <img class="my-5" src="../assets/images/other/encabezado19.jpg" alt="">
                        <div class="grid justify-items-end	w-full my-5">
                            <p style="color: #e36c0a;">UAdeC EN NÚMEROS Enero 2022</p>
                        </div>
                        <div class="w-full my-5">
                            <p>La Universidad Autónoma de Coahuila (UAdeC), es una Institución de 
                                Educación Superior situada en el noreste de México y cuenta con 
                                presencia en 13 municipios del estado de Coahuila de Zaragoza, 
                                impactando a un 95 por ciento de la población estatal. Actualmente 
                                está conformada por 67 Unidades Académicas (UA) distribuidas en tres 
                                Unidades Regionales: Unidad Saltillo (US), Unidad Torreón (UT) y Unidad 
                                Norte (UN), ofreciendo Educación Media Superior en 14 planteles de 
                                Bachillerato y Educación Superior en 45 Escuelas o Facultades, 
                                8 Centros de Investigación y 3 Hospitales Universitarios.
                            </p>
                        </div>
                        <div class="w-full mt-5">
                            <h1 style="color: #808080; font-size: 20px; font-weight: bold;">DISTRIBUCIÓN UAdeC</h1>
                        </div>
                        <img class="mb-5" src="../assets/images/other/22_mapa.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/22_distr.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/PE_Ene22.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/Pos_Ene22.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/Est_Ene22.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/Academicos_Ene22.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/CAca_Ene22_2.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/CAca_Ene22_3.jpg" alt="">
                    </div>
                </div>

                <!--UAdeC CICLO AGO-DIC 2021-->
                <div v-else-if="selectedCycle === '4'" class="flex flex-col items-center border rounded-lg p-10">
                    <h3>UNIVERSIDAD AUTONOMA DE COAHUILA EN NUMEROS CICLO 2021-2022 AGO-DIC 2021</h3>
                    <div class="flex flex-col items-center">
                        <img class="my-5" src="../assets/images/other/encabezado19.jpg" alt="">
                        <div class="grid justify-items-end	w-full my-5">
                            <p style="color: #e36c0a;">UAdeC EN NÚMEROS Octubre 2021</p>
                        </div>
                        <div class="w-full my-5">
                            <p>La Universidad Autónoma de Coahuila (UAdeC), es una Institución 
                                de Educación Superior situada en el noreste de México y cuenta 
                                con presencia en 13 municipios del estado de Coahuila de Zaragoza, 
                                impactando a un 95 por ciento de la población estatal. Actualmente 
                                está conformada por 67 Unidades Académicas (UA) distribuidas en tres 
                                Unidades Regionales: Unidad Saltillo (US), Unidad Torreón (UT) y Unidad 
                                Norte (UN), ofreciendo Educación Media Superior en 14 planteles de 
                                Bachillerato y Educación Superior en 45 Escuelas o Facultades, 8 Centros 
                                de Investigación y 3 Hospitales Universitarios.
                            </p>
                        </div>
                        <div class="w-full mt-5">
                            <h1 style="color: #808080; font-size: 20px; font-weight: bold;">DISTRIBUCIÓN UAdeC</h1>
                        </div>
                        <img class="mb-5" src="../assets/images/other/22_mapa.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/22_distr.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/22_ProgEdu.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/22_lics.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/22_Est.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/22_academicos.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/22_academicos2.jpg" alt="">
                    </div>
                </div>

                <!--UAdeC CICLO ENE-JUN 2021-->
                <div v-else-if="selectedCycle === '5'" class="flex flex-col items-center border rounded-lg p-10">
                    <h3>UNIVERSIDAD AUTONOMA DE COAHUILA EN NUMEROS CICLO 2020-2021 ENE-JUN 2021</h3>
                    <div class="flex flex-col items-center">
                        <img class="my-5" src="../assets/images/other/encabezado19.jpg" alt="">
                        <div class="grid justify-items-end	w-full my-5">
                            <p style="color: #e36c0a;">UAdeC EN NÚMEROS Mayo 2021</p>
                        </div>
                        <div class="w-full my-5">
                            <p>La Universidad Autónoma de Coahuila (UAdeC), es una Institución 
                                de Educación Superior situada en el noreste de México y cuenta 
                                con presencia en 13 municipios del estado de Coahuila de Zaragoza, 
                                impactando a un 95 por ciento de la población estatal. Actualmente 
                                está conformada por 67 Unidades Académicas (UA) distribuidas en tres 
                                Unidades Regionales: Unidad Saltillo (US), Unidad Torreón (UT) y Unidad 
                                Norte (UN), ofreciendo Educación Media Superior en 14 planteles de 
                                Bachillerato y Educación Superior en 45 Escuelas o Facultades, 8 Centros 
                                de Investigación y 3 Hospitales Universitarios.
                            </p>
                        </div>
                        <div class="w-full mt-5">
                            <h1 style="color: #808080; font-size: 20px; font-weight: bold;">DISTRIBUCIÓN UAdeC</h1>
                        </div>
                        <img class="mb-5" src="../assets/images/other/mapa21.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/Cent_Inv21.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/Prog_Edu21.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/posgrado2021.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/Estudiantes2021.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/Estudiantes2_21.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/Academicos2021.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/Prodep21.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/C_internos21.jpg" alt="">
                    </div>
                </div>

                <!--UAdeC CICLO AGO-DIC 2020-->
                <div v-else-if="selectedCycle === '6'" class="flex flex-col items-center border rounded-lg p-10">
                    <h3>UNIVERSIDAD AUTONOMA DE COAHUILA EN NUMEROS CICLO 2020-2021 AGO-DIC 2020</h3>
                    <div class="flex flex-col items-center">
                        <img class="my-5" src="../assets/images/other/encabezado19.jpg" alt="">
                        <div class="grid justify-items-end	w-full my-5">
                            <p style="color: #e36c0a;">UAdeC EN NÚMEROS Octubre 2020</p>
                        </div>
                        <div class="w-full my-5">
                            <p>La Universidad Autónoma de Coahuila (UAdeC), es una Institución 
                                de Educación Superior situada en el noreste de México y cuenta 
                                con presencia en 13 municipios del estado de Coahuila de Zaragoza, 
                                impactando a un 95 por ciento de la población estatal. Actualmente 
                                está conformada por 67 Unidades Académicas (UA) distribuidas en tres 
                                Unidades Regionales: Unidad Saltillo (US), Unidad Torreón (UT) y Unidad 
                                Norte (UN), ofreciendo Educación Media Superior en 14 planteles de 
                                Bachillerato y Educación Superior en 45 Escuelas o Facultades y 8 
                                Centros de Investigación.
                            </p>
                        </div>
                        <div class="w-full mt-5">
                            <h1 style="color: #808080; font-size: 20px; font-weight: bold;">DISTRIBUCIÓN UAdeC</h1>
                        </div>
                        <img class="mb-5" src="../assets/images/other/mapa21.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/centroInv21.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/ofertaEdu21.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/PE21.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/PE_221.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/posgrado21.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/demanda.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/Estudiantes21.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/distribuciongenero.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/academicos21.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/PTC21.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/SNI21.png" alt="">
                        <img class="my-5" src="../assets/images/other/Vinculacion21.png" alt="">
                        <img class="my-5" src="../assets/images/other/EducacionContinua21.png" alt="">
                        <img class="my-5" src="../assets/images/other/Cultura21.png" alt="">
                        <img class="my-5" src="../assets/images/other/Deporte21.png" alt="">
                        <img class="my-5" src="../assets/images/other/avanza1.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/avanza2.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/avanza3.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/avanza4.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/avanza5.jpg" alt="">
                    </div>
                </div>

                <!--UAdeC CICLO ENE-JUN 2020-->
                <div v-else-if="selectedCycle === '7'" class="flex flex-col items-center border rounded-lg p-10">
                    <h3>UNIVERSIDAD AUTONOMA DE COAHUILA EN NUMEROS CICLO 2019-2020 ENE-JUN 2020</h3>
                    <div class="flex flex-col items-center">
                        <img class="my-5" src="../assets/images/other/encabezado19.jpg" alt="">
                        <div class="grid justify-items-end	w-full my-5">
                            <p style="color: #e36c0a;">UAdeC EN NÚMEROS Mayo 2020</p>
                        </div>
                        <div class="w-full my-5">
                            <p>La Universidad Autónoma de Coahuila (UAdeC), es una Institución 
                                de Educación Superior situada en el noreste de México y cuenta 
                                con presencia en 13 municipios del estado de Coahuila de Zaragoza, 
                                impactando a un 95 por ciento de la población estatal. Actualmente 
                                está conformada por 67 Unidades Académicas (UA) distribuidas en tres 
                                Unidades Regionales: Unidad Saltillo (US), Unidad Torreón (UT) y Unidad 
                                Norte (UN), ofreciendo Educación Media Superior en 14 planteles de 
                                Bachillerato y Educación Superior en 45 Escuelas o Facultades y 8 
                                Centros de Investigación.
                            </p>
                        </div>
                        <div class="w-full mt-5">
                            <h1 style="color: #808080; font-size: 20px; font-weight: bold;">DISTRIBUCIÓN UAdeC</h1>
                        </div>
                        <img class="mb-5" src="../assets/images/other/mapa20.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/CentInve20.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/ProgramasEducativos20.png" alt="">
                        <img class="my-5" src="../assets/images/other/licenciatura20.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/Estudiantes3_20.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/Academicos2020.jpg" alt="">
                    </div>
                </div>

                <!--UAdeC CICLO AGO-DIC 2019-->
                <div v-else-if="selectedCycle === '8'" class="flex flex-col items-center border rounded-lg p-10">
                    <h3>UNIVERSIDAD AUTONOMA DE COAHUILA EN NUMEROS CICLO 2019-2020 AGO-DIC 2019</h3>
                    <div class="flex flex-col items-center">
                        <img class="my-5" src="../assets/images/other/encabezado19.jpg" alt="">
                        <div class="grid justify-items-end	w-full my-5">
                            <p style="color: #e36c0a;">UAdeC en NÚMEROS Octubre 2019</p>
                        </div>
                        <div class="w-full my-5">
                            <p>La Universidad Autónoma de Coahuila (UAdeC), es una Institución 
                                de Educación Superior situada en el noreste de México y cuenta 
                                con presencia en 13 municipios del estado de Coahuila de Zaragoza, 
                                impactando a un 95 por ciento de la población estatal. Actualmente 
                                está conformada por 67 Unidades Académicas (UA) distribuidas en tres 
                                Unidades Regionales: Unidad Saltillo (US), Unidad Torreón (UT) y Unidad 
                                Norte (UN), ofreciendo Educación Media Superior en 14 planteles de 
                                Bachillerato y Educación Superior en 45 Escuelas o Facultades y 8 
                                Centros de Investigación.
                            </p>
                        </div>
                        <div class="w-full mt-5">
                            <h1 style="color: #808080; font-size: 20px; font-weight: bold;">DISTRIBUCIÓN UAdeC</h1>
                        </div>
                        <img class="mb-5" src="../assets/images/other/mapa20.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/distribucion20.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/centroinvestigacion20.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/programaeducativo20.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/licenciaturayposgrado20.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/estudiantes20.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/egresados20.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/academicos20.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/ptc20.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/investigacion20.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/educacioncontinua20.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/becas20.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/movilidad20.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/difusion20.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/distancia20.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/deporte20.jpg" alt="">
                    </div>
                </div>

                <!--UAdeC CICLO ENE-JUN 2019-->
                <div v-else-if="selectedCycle === '9'" class="flex flex-col items-center border rounded-lg p-10">
                    <h3>UNIVERSIDAD AUTONOMA DE COAHUILA EN NUMEROS CICLO 2018-2019 ENE-JUN 2019</h3>
                    <div class="flex flex-col items-center">
                        <img class="my-5" src="../assets/images/other/encabezado19.jpg" alt="">
                        <div class="flex flew-row justify-center w-full my-5">
                            <p style="color: #e36c0a; font-size: 20px; font-weight: bold;">UNIVERSIDAD AUTONÓMA DE COAHUILA EN NÚMEROS Marzo 2019</p>
                        </div>
                        <div class="w-full my-5">
                            <p>La Universidad Autónoma de Coahuila (UAdeC), es una Institución 
                                de Educación Superior situada en el noreste de México y cuenta 
                                con presencia en 13 municipios del estado de Coahuila de Zaragoza, 
                                impactando a un 95 por ciento de la población estatal. Actualmente 
                                está conformada por 65 Unidades Académicas (UA) distribuidas en tres 
                                Unidades Regionales: Unidad Saltillo (US), Unidad Torreón (UT) y Unidad 
                                Norte (UN), ofreciendo Educación Media Superior en 14 planteles de 
                                Bachillerato y Educación Superior en 45 Escuelas o Facultades y 6 
                                Centros de Investigación.
                            </p>
                        </div>
                        <div class="w-full mt-5">
                            <h1 style="color: #808080; font-size: 20px; font-weight: bold;">DISTRIBUCIÓN UAdeC</h1>
                        </div>
                        <img class="mb-5" src="../assets/images/other/Distribucion2019_1.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/CentroInv2019_1.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/PE_2019_1.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/Posgrados_2019_1.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/Estudiantes2019_1.2.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/Egresados_2019_1.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/Academicos2019_1.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/Prodep2019_1.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/Investigacion2019_1.jpg" alt="">
                    </div>
                </div>
                
                <!--UAdeC CICLO AGO-DIC 2018-->
                <div v-else-if="selectedCycle === '10'" class="flex flex-col items-center border rounded-lg p-10">
                    <h3>UNIVERSIDAD AUTONOMA DE COAHUILA EN NUMEROS CICLO 2018-2019 AGO-DIC 2018</h3>
                    <div class="flex flex-col items-center">
                        <img class="my-5" src="../assets/images/other/encabezado19.jpg" alt="">
                        <div class="flex flew-row justify-center w-full my-5">
                            <p style="color: #e36c0a; font-size: 20px; font-weight: bold;">UNIVERSIDAD AUTONÓMA DE COAHUILA EN NÚMEROS Diciembre 2018</p>
                        </div>
                        <div class="w-full my-5">
                            <p>La Universidad Autónoma de Coahuila (UAdeC), es una Institución 
                                de Educación Superior situada en el noreste de México y cuenta 
                                con presencia en 13 municipios del estado de Coahuila de Zaragoza, 
                                impactando a un 95 por ciento de la población estatal. Actualmente 
                                está conformada por 65 Unidades Académicas (UA) distribuidas en tres 
                                Unidades Regionales: Unidad Saltillo (US), Unidad Torreón (UT) y Unidad 
                                Norte (UN), ofreciendo Educación Media Superior en 14 planteles de 
                                Bachillerato y Educación Superior en 45 Escuelas o Facultades y 6 
                                Centros de Investigación.
                            </p>
                        </div>
                        <div class="w-full mt-5">
                            <h1 style="color: #808080; font-size: 20px; font-weight: bold;">DISTRIBUCIÓN UAdeC</h1>
                        </div>
                        <img class="mb-5" src="../assets/images/other/distribucion_uadec_18_2.png" alt="">
                        <img class="my-5" src="../assets/images/other/CenInv.png" alt="">
                        <img class="my-5" src="../assets/images/other/programasdef2019.png" alt="">
                        <img class="my-5" src="../assets/images/other/posgrado2019.png" alt="">
                        <div class="w-full my-5">
                            <div class="mt-5 flex justify-start">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">ALUMNOS</h3>
                            </div>
                            <div class="flex flex-row">
                                <img class="w-1/2" src="../assets/images/other/alumnos4.jpg" alt="">
                                <div class="w-1/2 flex flex-col justify-center">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">37,591</p>
                                        <br>
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;"> Estudiantes</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">11,593</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;"> Bachillerato</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">24,119  </p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;"> Licenciatura</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">1,879</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;"> Posgrado</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img class="my-5" src="../assets/images/other/estudiantes20182.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/unidad182.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/egre20183.png" alt="">
                        <div class="w-full mt-5">
                            <div class="mt-5 flex justify-start">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">ACADEMICOS</h3>
                            </div>
                            <div class="flex flex-row">
                                <img class="w-1/2" src="../assets/images/other/academico20182.jpg" alt="">
                                <div class="w-1/2 flex flex-col justify-center">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">3162</p>
                                        <br>
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;">Docentes</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">1071</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Tiempo completo</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">2,091</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Tiempo parcial</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img class="my-5" src="../assets/images/other/docentes20182.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/docinv20182.jpg" alt="">
                        <div class="w-full my-5">
                            <div class="flex flex-col">
                                <div class="flex flex-row justify-start">
                                    <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">417</p>
                                    <p>Profesores con Reconocimiento de Perfil Deseable PRODEP</p>
                                    
                                </div>
                                <div class="flex flex-row justify-start">
                                    <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">406</p>
                                    <p>Profesores participan en:</p>
                                </div>
                                <div class="flex flex-row justify-start">
                                    <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">84</p>
                                    <p> Cuerpos Académicos  reconocidos ante PRODEP</p>
                                </div>
                            </div>  
                        </div>
                        <img class="my-5" src="../assets/images/other/cais20182.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/investigacion20182.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/edconti20182.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/difcultural20182.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/cooperacion20182.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/edistancia20182.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/deporte20182.jpg" alt="">
                    </div>
                </div>

                <!--UAdeC CICLO ENE-JUN 2018-->
                <div v-else-if="selectedCycle === '11'" class="flex flex-col items-center border rounded-lg p-10">
                    <h3>UNIVERSIDAD AUTONOMA DE COAHUILA EN NUMEROS CICLO 2017-2018 ENE-JUN 2018</h3>
                    <div class="flex flex-col items-center">
                        <img class="my-5" src="../assets/images/other/encabezado19.jpg" alt="">
                        <div class="flex flew-row justify-center w-full my-5">
                            <p style="color: #e36c0a; font-size: 20px; font-weight: bold;">UNIVERSIDAD AUTONÓMA DE COAHUILA EN NÚMEROS Junio 2018</p>
                        </div>
                        <div class="w-full my-5">
                            <p>La Universidad Autónoma de Coahuila (UAdeC), es una Institución 
                                de Educación Superior situada en el noreste de México y cuenta 
                                con presencia en 13 municipios del estado de Coahuila de Zaragoza, 
                                impactando a un 95 por ciento de la población estatal. Actualmente 
                                está conformada por 61 Unidades Académicas (UA) distribuidas en tres 
                                Unidades Regionales: Unidad Saltillo (US), Unidad Torreón (UT) y Unidad 
                                Norte (UN), ofreciendo Educación Media Superior en 14 planteles de 
                                Bachillerato y Educación Superior en 45 Escuelas o Facultades y dos 
                                Centros de Investigación independientes, además de tres Centros de 
                                Investigaciones ligados a alguna UA.
                            </p>
                        </div>
                        <div class="w-full mt-5">
                            <h1 style="color: #808080; font-size: 20px; font-weight: bold;">DISTRIBUCIÓN UAdeC</h1>
                        </div>
                        <img class="mb-5" src="../assets/images/other/distribucion_uadec_18_1.png" alt="">
                        <div class="w-full my-5">
                            <div class="mt-5 flex justify-start">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">PROGRAMAS EDUCATIVOS</h3>
                            </div>
                            <img class="my-5" src="../assets/images/other/proedu2018.jpg" alt="">
                            <div class="my-5 flex justify-center">
                                <p style="color:#e36c0a; font-weight: bold; font-size: 20px;">TOTAL DE PROGRAMAS EDUCATIVOS</p>
                            </div>
                            <div class="flex flex-row w-full">
                                <div class="flex flex-col w-1/2">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">14</p>
                                        <p>Bachillerato</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">12</p>
                                        <p>con sistema escolarizado</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">5</p>
                                        <p>con sistema abierto</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">12</p>
                                        <p>en el Sistema Nacional de Bachillerato</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">86</p>
                                        <p>Licenciaturas</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">2</p>
                                        <p>PE a distancia</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">84</p>
                                        <p>PE presenciales</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">70</p>
                                        <p>PE de evaluables</p>
                                    </div>
                                </div>
                                <div class="flex flex-col w-1/2">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">46</p>
                                        <p>PE de de Calidad</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">51</p>
                                        <p>Posgrado</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">6</p>
                                        <p>Especialidades</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">38</p>
                                        <p>Maestrías</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">7</p>
                                        <p>Doctorados</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">22</p>
                                        <p>Programas de Posgrado se encuentran dentro de PNPC</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;" class="mr-3">17</p>
                                        <p>Maestrías</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;" class="mr-3">5</p>
                                        <p>Doctorados</p>
                                    </div>
                                </div>
                            </div>
                        </div>        
                        <div class="w-full my-5">
                            <div class="mt-5 flex justify-start">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">ALUMNOS</h3>
                            </div>
                            <div class="flex flex-row">
                                <img class="w-1/2" src="../assets/images/other/alumnos2018.jpg" alt="">
                                <div class="w-1/2 flex flex-col justify-center">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">35,688</p>
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;"> Estudiantes</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">11,022</p>
                                        <p style="font-size: 20px; font-weight: bold;">Bachillerato</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">23,063</p>
                                        <p style="font-size: 20px; font-weight: bold;"> Licenciatura</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">1,603</p>
                                        <p style="font-size: 20px; font-weight: bold;"> Posgrado</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img class="my-5" src="../assets/images/other/num2018alumnos.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/tabla2018.jpg" alt="">
                        
                        <div class="w-full mt-5">
                            <div class="mt-5 flex justify-start">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">ACADEMICOS</h3>
                            </div>
                            <div class="flex flex-row">
                                <img class="w-1/2" src="../assets/images/other/docentes2018.jpg" alt="">
                                <div class="w-1/2 flex flex-col justify-center">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">3160</p>
                                        <br>
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;">Docentes</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">1067</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Tiempo completo</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">2,093</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Tiempo parcial</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img class="my-5" src="../assets/images/other/doc2018.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/doc20182.jpg" alt="">
                        
                        <div class="w-full">
                            <div class="flex flex-row justify-start">
                                <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">371</p>
                                <p>Profesores con Reconocimiento de Perfil Deseable PRODEP</p>
                            </div>
                            <div class="flex flex-row justify-start">
                                <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">167</p>
                                <p>Profesores miembros del Sistema Nacional de Investigadores</p>
                            </div>
                            <div class="flex flex-row justify-start">
                                <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">403</p>
                                <p>Profesores participan en 77  Cuerpos Académicos  reconocidos ante PRODEP</p>
                            </div>
                        </div>

                        <img class="my-5" src="../assets/images/other/cais2018.jpg" alt="">
                    </div>
                </div>
                
                <!--UAdeC CICLO AGO-DIC 2017-->
                <div v-else-if="selectedCycle === '12'" class="flex flex-col items-center border rounded-lg p-10">
                    <h3>UNIVERSIDAD AUTONOMA DE COAHUILA EN NUMEROS CICLO 2017-2018 AGO-DIC 2017</h3>
                    <div class="flex flex-col items-center">

                        <img class="my-5" src="../assets/images/other/encabezado19.jpg" alt="">
    
                        <div class="w-full mt-5">
                            <h1 style="color: #808080; font-size: 20px; font-weight: bold;">DISTRIBUCIÓN UAdeC</h1>
                        </div>

                        <img class="mb-5" src="../assets/images/other/Numeralia_17ago-dic.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/Programa17.jpg" alt="">
                        
                        <div class="w-full my-5">
                            <div class="mt-5 flex justify-start">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">ESTUDIANTES</h3>
                            </div>
                            <div class="flex flex-row">
                                <img class="w-1/2" src="../assets/images/other/alumnos5.jpg" alt="">
                                <div class="w-1/2 flex flex-col justify-center">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">36,779</p>
                                        <br>
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;"> Estudiantes</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">11,454</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;"> Bachillerato</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">23,518</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;"> Licenciatura</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">1,807</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;"> Posgrado</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img class="my-5" src="../assets/images/other/galum17.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/tabla17.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/EvolucionMatricula17.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/MatriculaGrafica17.jpg" alt="">
                        
                        <div class="w-full mt-5 flex flex-row justify-center">
                            <p style="color:#808080; font-size:30px; font-weight:bold">Competitividad Académica</p>
                        </div>
                        
                        <img class="my-5" src="../assets/images/other/CompetitivadAcademica17.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/grafica17_2.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/grafica17_3.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/grafica17_4.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/grafica17_5.jpg" alt="">

                        <div class="w-full mt-5 flex flex-row justify-center">
                            <p style="color:#808080; font-size:30px; font-weight:bold">Planta Docente</p>
                        </div>

                        <img class="my-5" src="../assets/images/other/grafica17_6.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/grafica17_7.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/grafica17_8.jpg" alt="">
                        <img class="my-5" src="../assets/images/other/grafica17_9.jpg" alt="">
                    </div>
                </div>

                <!--UAdeC CICLO ENE-JUN 2017-->
                <div v-else-if="selectedCycle === '13'" class="flex flex-col items-center border rounded-lg p-10">
                    <h3>UNIVERSIDAD AUTONOMA DE COAHUILA EN NUMEROS CICLO 2016-2017 ENE-JUN 2017</h3>
                    <div class="flex flex-col items-center">

                        <img class="my-5" src="../assets/images/other/encabezado19.jpg" alt="">
    
                        <div class="w-full mt-5">
                            <h1 style="color: #808080; font-size: 20px; font-weight: bold;">DISTRIBUCIÓN UAdeC</h1>
                        </div>

                        <img class="mb-5" src="../assets/images/other/distribucion171.jpg" alt="">
                        
                        <div class="w-full my-5">
                            <div class="mt-5 flex justify-start">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">UNIDADES ACADÉMICAS</h3>
                            </div>

                            <img class="my-5" src="../assets/images/other/cut.jpg" alt="">
                            
                            <div class="flex flex-row w-full">
                                <div class="flex flex-col w-1/2 m-5">
                                    <p style="color: #e36c0a; font-size: 20px; font-weight: bold;">Eduación superior:</p>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">44</p>
                                        <p>Facultades y/o escuelas</p>
                                    </div>
                                    <p style="color: #e36c0a; font-size: 20px; font-weight: bold;" class="mt-3">Bachillerato en los sistemas escolarizado y abierto:</p>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">14</p>
                                        <p>Planteles</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">4</p>
                                        <p>Centros de Investigación</p>
                                    </div>
                                </div>
                                <div class="flex flex-col w-1/2 m-5">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">2</p>
                                        <p style="font-weight:bold;">Unidades Académicas Independientes:</p>
                                    </div>
                                    <ul> 
                                        <li>Centro de Investigaciones Socioeconómicas</li>
                                        <li>Centro de Estudios e Investigaciones Interdisciplinarias</li>
                                    </ul>
                                    
                                    <div class="flex flex-row justify-center mt-5">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">2</p>
                                        <p style="font-weight:bold;">Centros de Investigación dependientes de UA:</p>
                                    </div>
                                    <ul> 
                                        <li>Centro de Investigaciones Biomédicas</li>
                                        <li>Centro de Investigación en Matemáticas Aplicadas</li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                        
                        <div class="w-full my-5">
                            <div class="mt-5 flex justify-start">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">PROGRAMAS EDUCATIVOS</h3>
                            </div>

                            <img class="my-5" src="../assets/images/other/proedu6.jpg" alt="">

                            <div class="my-5 flex justify-center">
                                <p style="color:#e36c0a; font-weight: bold; font-size: 20px;">TOTAL DE PROGRAMAS EDUCATIVOS</p>
                            </div>
                            <div class="flex flex-row w-full">
                                <div class="flex flex-col w-1/2">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">1</p>
                                        <p style="font-weight:bold">Bachillerato</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">14</p>
                                        <p>Planteles</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">12</p>
                                        <p>con sistema escolarizado</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">2</p>
                                        <p>con sistema abierto</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">11</p>
                                        <p>en el Sistema Nacional de Bachillerato</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">85</p>
                                        <p style="font-weight:bold">Licenciaturas</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">2</p>
                                        <p>PE a distancia</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">83</p>
                                        <p>PE presenciales</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">70</p>
                                        <p>PE evaluables</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">40</p>
                                        <p>PE de Calidad</p>
                                    </div>
                                </div>
                                <div class="flex flex-col w-1/2">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">53</p>
                                        <p style="font-weight:bold">Posgrado</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">5</p>
                                        <p>Especialidades</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">41</p>
                                        <p>Maestrías</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">7</p>
                                        <p>Doctorados</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">21</p>
                                        <p style="font-weight:bold">Programas de Posgrado se encuentran dentro de  PNPC:</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;" class="mr-3">16</p>
                                        <p>Maestrías</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;" class="mr-3">5</p>
                                        <p>Doctorados</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <img class="my-5" src="../assets/images/other/proedu7.jpg" alt="">

                        <img class="my-5" src="../assets/images/other/proedu8.jpg" alt="">
                        
                        <div class="w-full my-5">
                            <div class="mt-5 flex justify-start">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">ESTUDIANTES</h3>
                            </div>
                            <div class="flex flex-row">
                                <img class="w-1/2" src="../assets/images/other/alumnos5.jpg" alt="">
                                <div class="w-1/2 flex flex-col justify-center">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">34,582</p>
                                        <br>
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;"> Estudiantes</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">10,782</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;"> Bachillerato</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">22,147</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;"> Licenciatura</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">1,653</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;"> Posgrado</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img class="my-5" src="../assets/images/other/galum5.jpg" alt="">

                        <img class="my-5" src="../assets/images/other/tabla162.jpg" alt="">

                        <div class="w-full my-5">
                            <div class="mt-5 flex justify-start">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">ACADEMICOS</h3>
                            </div>
                            <div class="flex flex-row">
                                <div class="w-1/2 flex flex-col justify-center">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">3,097</p>
                                        <br>
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;">Docentes</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">1,025</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Tiempo completo</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">2,072</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Tiempo parcial</p>
                                    </div>
                                </div>

                                <img class="w-1/2" src="../assets/images/other/doctp65.jpg" alt="">
                                
                            </div>
                            <p>Delos  829  profesores de tiempo completo del nivel medio superior,  93.2%  cuenta con estudios de posgrado.</p>
                        </div>

                        <img class="my-5" src="../assets/images/other/doctp66.jpg" alt="">

                        <div class="w-full my-5 flex flex-row">
                                <div class="w-1/2 flex flex-col justify-center m-3">
                                    <div class="flex flex-row justify-center mt-3">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">326</p>
                                        <br>
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;">Profesores con Reconocimiento de Perfil Deseable PRODEP</p>
                                    </div>
                                    <div class="flex flex-row justify-center mt-3">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">139</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Profesores miembros del Sistema Nacional de Investigadores</p>
                                    </div>
                                    <div class="flex flex-row justify-center mt-3">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">367</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Profesores participan en 54  Cuerpos Académicos  reconocidos ante PRODEP</p>
                                    </div>
                                </div>

                                <img class="w-1/2 m-3" src="../assets/images/other/doctp67.jpg" alt="">  
                        </div>

                        <img class="my-5" src="../assets/images/other/doctp68.jpg" alt="">

                    </div>
                </div>

                <!--UAdeC CICLO AGO-DIC 2016-->
                <div v-else-if="selectedCycle === '14'" class="flex flex-col items-center border rounded-lg p-10">
                    <h3>UNIVERSIDAD AUTONOMA DE COAHUILA EN NUMEROS CICLO 2016-2017 AGO-DIC 2016</h3>
                    <div class="flex flex-col items-center">

                        <img class="my-5" src="../assets/images/other/encabezado19.jpg" alt="">
    
                        <div class="w-full mt-5">
                            <h1 style="color: #808080; font-size: 20px; font-weight: bold;">DISTRIBUCIÓN UAdeC</h1>
                        </div>

                        <img class="mb-5" src="../assets/images/other/distribucion17.jpg" alt="">
                        
                        <div class="w-full my-5">
                            <div class="mt-5 flex justify-start">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">UNIDADES ACADÉMICAS</h3>
                            </div>

                            <img class="my-5" src="../assets/images/other/academica.jpg" alt="">
                            
                            <div class="flex flex-row w-full">
                                <div class="flex flex-col w-1/2 m-5">
                                    <p style="color: #e36c0a; font-size: 20px; font-weight: bold;">Eduación superior:</p>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">44</p>
                                        <p>Facultades y/o escuelas</p>
                                    </div>

                                    <p style="color: #e36c0a; font-size: 20px; font-weight: bold;" class="mt-3">Bachillerato en los sistemas escolarizado y abierto:</p>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">14</p>
                                        <p>Planteles</p>
                                    </div>

                                    <p style="color: #e36c0a; font-size: 20px; font-weight: bold;" class="mt-3">Centros de Investigación:</p>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">4</p>
                                        <p>Centros</p>
                                    </div>

                                </div>
                                <div class="flex flex-col w-1/2 m-5">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">2</p>
                                        <p style="font-weight:bold;">Unidades Académicas Independientes:</p>
                                    </div>
                                    <ul> 
                                        <li>Centro de Investigaciones Socioeconómicas</li>
                                        <li>Centro de Estudios e Investigaciones Interdisciplinarias</li>
                                    </ul>
                                    
                                    <div class="flex flex-row justify-center mt-5">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">2</p>
                                        <p style="font-weight:bold;">Centros de Investigación dependientes de UA:</p>
                                    </div>
                                    <ul> 
                                        <li>Centro de Investigaciones Biomédicas</li>
                                        <li>Centro de Investigación en Matemáticas Aplicadas</li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                        
                        <div class="w-full my-5">
                            <div class="mt-5 flex justify-start">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">PROGRAMAS EDUCATIVOS</h3>
                            </div>

                            <img class="my-5" src="../assets/images/other/proedu4.jpg" alt="">

                            <div class="my-5 flex justify-center">
                                <p style="color:#e36c0a; font-weight: bold; font-size: 20px;">TOTAL DE PROGRAMAS EDUCATIVOS</p>
                            </div>
                            <div class="flex flex-row w-full">
                                <div class="flex flex-col w-1/2">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">1</p>
                                        <p style="font-weight:bold">Bachillerato</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">14</p>
                                        <p>Planteles</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">12</p>
                                        <p>con sistema escolarizado</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">2</p>
                                        <p>con sistema abierto</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">11</p>
                                        <p>en el Sistema Nacional de Bachillerato</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">84</p>
                                        <p style="font-weight:bold">Licenciaturas</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">2</p>
                                        <p>PE a distancia</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">82</p>
                                        <p>PE presenciales</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">71</p>
                                        <p>PE evaluables</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">36</p>
                                        <p>PE de Calidad</p>
                                    </div>
                                </div>
                                <div class="flex flex-col w-1/2">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">55</p>
                                        <p style="font-weight:bold">Posgrado</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">5</p>
                                        <p>Especialidades</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">43</p>
                                        <p>Maestrías</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">7</p>
                                        <p>Doctorados</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">22</p>
                                        <p style="font-weight:bold">Programas de Posgrado se encuentran dentro de  PNPC:</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;" class="mr-3">17</p>
                                        <p>Maestrías</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;" class="mr-3">5</p>
                                        <p>Doctorados</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <img class="my-5" src="../assets/images/other/proedu5.jpg" alt="">
                        
                        <div class="w-full my-5">
                            <div class="mt-5 flex justify-start">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">ESTUDIANTES</h3>
                            </div>
                            <div class="flex flex-row">
                                <img class="w-1/2" src="../assets/images/other/alumnos4.jpg" alt="">
                                <div class="w-1/2 flex flex-col justify-center">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">36,084</p>
                                        <br>
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;"> Estudiantes</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">11,418</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;"> Bachillerato</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">22,825</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;"> Licenciatura</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">1,494</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;"> Posgrado</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img class="my-5" src="../assets/images/other/galum4.jpg" alt="">

                        <img class="my-5" src="../assets/images/other/tabla161.jpg" alt="">

                        <div class="w-full my-5">
                            <div class="mt-5 flex justify-start">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">ACADEMICOS</h3>
                            </div>
                            <div class="flex flex-row">
                                <div class="w-1/2 flex flex-col justify-center">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">3,126</p>
                                        <br>
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;">Docentes</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">1,032</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Tiempo completo</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">2,094</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Tiempo parcial</p>
                                    </div>
                                </div>

                                <img class="w-1/2" src="../assets/images/other/docente3.jpg" alt="">
                                
                            </div>
                            <img class="my-5" src="../assets/images/other/doctp58.jpg" alt="">
                            <p>De los  829  profesores de tiempo completo del nivel superior, el  91.6%  cuenta con estudios de posgrado.</p>
                        </div>

                        <img class="my-5" src="../assets/images/other/doctp55.jpg" alt="">

                        <img class="my-5" src="../assets/images/other/ptcdoc.jpg" alt="">

                        <div class="w-full my-5"> 
                            <div class="flex flex-row justify-start mt-3">
                                <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">333</p>
                                <br>
                                <p style=" font-size: 20px; font-weight: bold;">Profesores con Reconocimiento de Perfil Deseable PRODEP</p>
                            </div>
                            <div class="flex flex-row justify-start mt-3">
                                <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">114</p>
                                <br>
                                <p style="font-size: 20px; font-weight: bold;">Profesores miembros del Sistema Nacional de Investigadores</p>
                            </div>
                            <div class="flex flex-row justify-start mt-3">
                                <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">369</p>
                                <br>
                                <p style="font-size: 20px; font-weight: bold;">Profesores participan en 54  Cuerpos Académicos  reconocidos ante PRODEP</p>
                            </div>     
                        </div>

                        <img class="my-5" src="../assets/images/other/doctp68.jpg" alt="">

                    </div>
                </div>

                <!--UAdeC CICLO ENE-JUN 2016-->
                <div v-else-if="selectedCycle === '15'" class="flex flex-col items-center border rounded-lg p-10">
                    <h3>UNIVERSIDAD AUTONOMA DE COAHUILA EN NUMEROS CICLO 2015-2016 ENE-JUN 2016</h3>
                    <div class="flex flex-col items-center">

                        <img class="my-5" src="../assets/images/other/encabezado19.jpg" alt="">
    
                        <div class="w-full mt-5">
                            <h1 style="color: #808080; font-size: 20px; font-weight: bold;">DISTRIBUCIÓN UAdeC</h1>
                        </div>

                        <img class="mb-5" src="../assets/images/other/distribucion16.jpg" alt="">
                        
                        <div class="w-full my-5">
                            <div class="mt-5 flex justify-start">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">FACULTADES, ESCUELAS, CENTROS E INSTITUTOS DE INVESTIGACION</h3>
                            </div>

                            <img class="my-5" src="../assets/images/other/rectoria.jpg" alt="">
                            
                            <div class="flex flex-row w-full">
                                <div class="flex flex-col w-1/2 m-5">
                                    <p style="color: #e36c0a; font-size: 20px; font-weight: bold;">Eduación superior:</p>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">43</p>
                                        <p>Facultades y/o escuelas</p>
                                    </div>

                                    <p style="color: #e36c0a; font-size: 20px; font-weight: bold;" class="mt-3">Bachillerato en los sistemas escolarizado y abierto:</p>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">14</p>
                                        <p>Planteles</p>
                                    </div>

                                    <p style="color: #e36c0a; font-size: 20px; font-weight: bold;" class="mt-3">Centros de Investigación:</p>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">2</p>
                                        <p>Centros</p>
                                    </div>

                                </div>
                                <div class="flex flex-col w-1/2 m-5">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">2</p>
                                        <p style="font-weight:bold;">Unidades Académicas Independientes:</p>
                                    </div>
                                    <ul> 
                                        <li>Centro de Investigaciones Socioeconómicas</li>
                                        <li>Centro de Estudios e Investigaciones Interdisciplinarias</li>
                                    </ul>
                                    
                                    <div class="flex flex-row justify-center mt-5">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">2</p>
                                        <p style="font-weight:bold;">Centros de Investigación dependientes de UA:</p>
                                    </div>
                                    <ul> 
                                        <li>Centro de Investigaciones Biomédicas</li>
                                        <li>Centro de Investigación en Matemáticas Aplicadas</li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                        
                        <div class="w-full my-5">
                            <div class="mt-5 flex justify-start">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">PROGRAMAS EDUCATIVOS</h3>
                            </div>

                            <img class="my-5" src="../assets/images/other/proedu2.jpg" alt="">

                            <div class="my-5 flex justify-center">
                                <p style="color:#e36c0a; font-weight: bold; font-size: 20px;">TOTAL DE PROGRAMAS EDUCATIVOS</p>
                            </div>
                            <div class="flex flex-row w-full">
                                <div class="flex flex-col w-1/2">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">1</p>
                                        <p style="font-weight:bold">Bachillerato</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">14</p>
                                        <p>Planteles</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">12</p>
                                        <p>con sistema escolarizado</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">2</p>
                                        <p>con sistema abierto</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">10</p>
                                        <p>en el Sistema Nacional de Bachillerato</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">81</p>
                                        <p style="font-weight:bold">Licenciaturas</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">3</p>
                                        <p>PE a distancia</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">78</p>
                                        <p>PE presenciales</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">67</p>
                                        <p>PE evaluables</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">55</p>
                                        <p>PE de Calidad</p>
                                    </div>
                                </div>
                                <div class="flex flex-col w-1/2">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">56</p>
                                        <p style="font-weight:bold">Posgrado</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">5</p>
                                        <p>Especialidades</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">43</p>
                                        <p>Maestrías</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">8</p>
                                        <p>Doctorados</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">22</p>
                                        <p style="font-weight:bold">Programas de Posgrado se encuentran dentro de  PNPC:</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;" class="mr-3">17</p>
                                        <p>Maestrías</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;" class="mr-3">5</p>
                                        <p>Doctorados</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <img class="my-5" src="../assets/images/other/proedu3.jpg" alt="">
                        
                        <div class="w-full my-5">
                            <div class="mt-5 flex justify-start">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">ALUMNOS</h3>
                            </div>
                            <div class="flex flex-row">
                                <img class="w-1/2" src="../assets/images/other/alumnos3.jpg" alt="">
                                <div class="w-1/2 flex flex-col justify-center">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">34,990</p>
                                        <br>
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;">Estudiantes</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">11,251</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Bachillerato</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">21,742</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Licenciatura</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">1,997</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Posgrado</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img class="my-5" src="../assets/images/other/galum3.jpg" alt="">

                        <img class="my-5" src="../assets/images/other/tabla152.jpg" alt="">

                        <div class="w-full my-5">
                            <div class="mt-5 flex justify-start">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">ACADEMICOS</h3>
                            </div>
                            <div class="flex flex-row">
                                <img class="w-1/2" src="../assets/images/other/docente2.jpg" alt="">

                                <div class="w-1/2 flex flex-col justify-center">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">3,005</p>
                                        <br>
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;">Docentes</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">1,038</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Tiempo completo</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">1,967</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Tiempo parcial</p>
                                    </div>
                                </div>
                            </div>

                            <img class="my-5" src="../assets/images/other/doctp44.jpg" alt="">
                            <p>En el nivel medio superior de los  211  PTC,  66%  cuenta con estudios de posgrado.</p>

                        </div>

                        <img class="my-5" src="../assets/images/other/doctp45.jpg" alt="">

                        <p>De los  827  Profesores de Tiempo Completo del nivel de licenciatura, el  90.2%  cuenta con estudios de posgrado.</p>

                        <img class="my-5" src="../assets/images/other/doctp46.jpg" alt="">

                        <div class="w-full my-5"> 
                            <div class="flex flex-row justify-start mt-3">
                                <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">317</p>
                                <br>
                                <p style=" font-size: 20px; font-weight: bold;">Profesores con Reconocimiento de Perfil Deseable PRODEP</p>
                            </div>
                            <div class="flex flex-row justify-start mt-3">
                                <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">115</p>
                                <br>
                                <p style="font-size: 20px; font-weight: bold;">Profesores miembros del Sistema Nacional de Investigadores</p>
                            </div>
                            <div class="flex flex-row justify-start mt-3">
                                <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">288</p>
                                <br>
                                <p style="font-size: 20px; font-weight: bold;">Profesores participan en 54  Cuerpos Académicos  reconocidos ante PRODEP</p>
                            </div>     
                        </div>

                        <img class="my-5" src="../assets/images/other/doctp47.jpg" alt="">

                    </div>
                </div>

                <!--UAdeC CICLO AGO-DIC 2015-->
                <div v-else-if="selectedCycle === '16'" class="flex flex-col items-center border rounded-lg p-10">
                    <h3>UNIVERSIDAD AUTONOMA DE COAHUILA EN NUMEROS CICLO 2015-2016 AGO-DIC 2015</h3>
                    <div class="flex flex-col items-center">

                        <img class="my-5" src="../assets/images/other/encabezado19.jpg" alt="">
    
                        <div class="w-full mt-5">
                            <h1 style="color: #808080; font-size: 20px; font-weight: bold;">DISTRIBUCIÓN UAdeC</h1>
                        </div>

                        <img class="mb-5" src="../assets/images/other/distribucion_uadec.jpg" alt="">
                        
                        <div class="w-full my-5">
                            <div class="mt-5 flex justify-start">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">FACULTADES, ESCUELAS, CENTROS E INSTITUTOS DE INVESTIGACION</h3>
                            </div>

                            <img class="my-5" src="../assets/images/other/escuela.jpg" alt="">
                            
                            <div class="flex flex-row w-full">
                                <div class="flex flex-col w-1/2 m-5">
                                    <p style="color: #e36c0a; font-size: 20px; font-weight: bold;">Eduación superior:</p>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">43</p>
                                        <p>Facultades y/o escuelas</p>
                                    </div>

                                    <p style="color: #e36c0a; font-size: 20px; font-weight: bold;" class="mt-3">Bachillerato en los sistemas escolarizado y abierto:</p>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">14</p>
                                        <p>Planteles</p>
                                    </div>

                                    <p style="color: #e36c0a; font-size: 20px; font-weight: bold;" class="mt-3">Centros de Investigación:</p>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">2</p>
                                        <p>Centros</p>
                                    </div>

                                </div>
                                <div class="flex flex-col w-1/2 m-5 justify-center">
                                    <ul> 
                                        <li style="font-size:20px; font-weight:bold">Centro de Investigaciones Socioeconómicas</li>
                                        <li style="font-size:20px; font-weight:bold" class="mt-5">Centro de Estudios e Investigaciones Interdisciplinarias</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="w-full my-5">
                            <div class="mt-5 flex justify-start">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">PROGRAMAS EDUCATIVOS</h3>
                            </div>

                            <img class="my-5" src="../assets/images/other/proedu.jpg" alt="">

                            <div class="my-5 flex justify-center">
                                <p style="color:#e36c0a; font-weight: bold; font-size: 20px;">TOTAL DE PROGRAMAS EDUCATIVOS</p>
                            </div>
                            <div class="flex flex-row w-full">
                                <div class="flex flex-col w-1/2">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">1</p>
                                        <p style="font-weight:bold">Bachillerato</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">81</p>
                                        <p>Programas de Carrera</p>
                                    </div>
                                    
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">78</p>
                                        <p>PE presenciales</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">67</p>
                                        <p>PE evaluables</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">57</p>
                                        <p>PE de Calidad</p>
                                    </div>
                                </div>
                                <div class="flex flex-col w-1/2">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">53</p>
                                        <p style="font-weight:bold">Posgrado</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">5</p>
                                        <p>Especialidades</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">40</p>
                                        <p>Maestrías</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">8</p>
                                        <p>Doctorados</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">23</p>
                                        <p style="font-weight:bold">Programas de Posgrado se encuentran dentro de  PNPC:</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;" class="mr-3">18</p>
                                        <p>Maestrías</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;" class="mr-3">5</p>
                                        <p>Doctorados</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <img class="my-5" src="../assets/images/other/maestria.jpg" alt="">

                        <img class="my-5" src="../assets/images/other/proyeccion16.png" alt="">
                        
                        <div class="w-full my-5">
                            <div class="mt-5 flex justify-start">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">ALUMNOS</h3>
                            </div>
                            <div class="flex flex-row">
                                <img class="w-1/2" src="../assets/images/other/alumnos2.jpg" alt="">
                                <div class="w-1/2 flex flex-col justify-center">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">36,063</p>
                                        <br>
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;">Estudiantes</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">11,230</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Bachillerato</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">22,645</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Licenciatura</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">2,188</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Posgrado</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img class="my-5" src="../assets/images/other/galum1.jpg" alt="">

                        <img class="my-5" src="../assets/images/other/tabla151.jpg" alt="">

                        <div class="w-full my-5">
                            <div class="mt-5 flex justify-start">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">ACADEMICOS</h3>
                            </div>
                            <div class="flex flex-row">
                                <img class="w-1/2" src="../assets/images/other/docente.jpg" alt="">

                                <div class="w-1/2 flex flex-col justify-center">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">3064</p>
                                        <br>
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;">Docentes</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">996</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Tiempo completo</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">2,068</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Tiempo parcial</p>
                                    </div>
                                </div>
                            </div>

                            <img class="my-5" src="../assets/images/other/doctp3.jpg" alt="">
                            <p>De los  791  Profesores de Tiempo Completo del nivel de licenciatura, el  89.5%  cuenta con estudios de posgrado.</p>

                        </div>

                        <img class="my-5" src="../assets/images/other/doctp4.jpg" alt="">

                        <div class="w-full my-5"> 
                            <div class="flex flex-row justify-start mt-3">
                                <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">320</p>
                                <br>
                                <p style=" font-size: 20px; font-weight: bold;">Profesores con Reconocimiento de Perfil Deseable PRODEP</p>
                            </div>
                            <div class="flex flex-row justify-start mt-3">
                                <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">105</p>
                                <br>
                                <p style="font-size: 20px; font-weight: bold;">Profesores miembros del Sistema Nacional de Investigadores</p>
                            </div>
                            <div class="flex flex-row justify-start mt-3">
                                <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">288</p>
                                <br>
                                <p style="font-size: 20px; font-weight: bold;">Profesores participan en 54  Cuerpos Académicos  reconocidos ante PRODEP</p>
                            </div>     
                        </div>

                        <img class="my-5" src="../assets/images/other/doctp5.jpg" alt="">

                    </div>
                </div>

                <!--UAdeC CICLO ENE-JUN 2015-->
                <div v-else-if="selectedCycle === '17'" class="flex flex-col items-center border rounded-lg p-10">
                    <h3>UNIVERSIDAD AUTONOMA DE COAHUILA EN NUMEROS CICLO 2014-2015 ENE-JUN 2015</h3>
                    <div class="flex flex-col items-center">

                        <img class="my-5" src="../assets/images/other/encabezado19.jpg" alt="">
    
                        <div class="w-full mt-5">
                            <h1 style="color: #808080; font-size: 20px; font-weight: bold;">DISTRIBUCIÓN UAdeC</h1>
                        </div>

                        <img class="mb-5" src="../assets/images/other/distribucion_uadec.jpg" alt="">
                        
                        <div class="w-full my-5">
                            <div class="mt-5 flex justify-start">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">FACULTADES, ESCUELAS, CENTROS E INSTITUTOS DE INVESTIGACION</h3>
                            </div>

                            <img class="my-5" src="../assets/images/other/escuela.jpg" alt="">
                            
                            <div class="flex flex-row w-full">
                                <div class="flex flex-col w-1/2 m-5">
                                    <p style="color: #e36c0a; font-size: 20px; font-weight: bold;">Eduación superior:</p>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">43</p>
                                        <p>Facultades y/o escuelas</p>
                                    </div>

                                    <p style="color: #e36c0a; font-size: 20px; font-weight: bold;" class="mt-3">Bachillerato en los sistemas escolarizado y abierto:</p>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">14</p>
                                        <p>Planteles</p>
                                    </div>

                                    <p style="color: #e36c0a; font-size: 20px; font-weight: bold;" class="mt-3">Centros de Investigación:</p>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">2</p>
                                        <p>Centros</p>
                                    </div>

                                </div>
                                <div class="flex flex-col w-1/2 m-5 justify-center">
                                    <ul> 
                                        <li style="font-size:20px; font-weight:bold">Centro de Investigaciones Socioeconómicas</li>
                                        <li style="font-size:20px; font-weight:bold" class="mt-5">Centro de Estudios e Investigaciones Interdisciplinarias</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="w-full my-5">
                            <div class="mt-5 flex justify-start">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">PROGRAMAS EDUCATIVOS</h3>
                            </div>

                            <img class="my-5" src="../assets/images/other/proedu.jpg" alt="">

                            <div class="my-5 flex justify-center">
                                <p style="color:#e36c0a; font-weight: bold; font-size: 20px;">TOTAL DE PROGRAMAS EDUCATIVOS</p>
                            </div>
                            <div class="flex flex-row w-full">
                                <div class="flex flex-col w-1/2">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">1</p>
                                        <p style="font-weight:bold">Bachillerato</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">81</p>
                                        <p>Programas de Carrera</p>
                                    </div>
                                    
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">78</p>
                                        <p>PE presenciales</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">67</p>
                                        <p>PE evaluables</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">60</p>
                                        <p>PE de Calidad</p>
                                    </div>
                                </div>
                                <div class="flex flex-col w-1/2">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">53</p>
                                        <p style="font-weight:bold">Posgrado</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">5</p>
                                        <p>Especialidades</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">40</p>
                                        <p>Maestrías</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">8</p>
                                        <p>Doctorados</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">23</p>
                                        <p style="font-weight:bold">Programas de Posgrado se encuentran dentro de  PNPC:</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;" class="mr-3">18</p>
                                        <p>Maestrías</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;" class="mr-3">5</p>
                                        <p>Doctorados</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <img class="my-5" src="../assets/images/other/maestria.jpg" alt="">
                        
                        <div class="w-full my-5">
                            <div class="mt-5 flex justify-start">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">ALUMNOS</h3>
                            </div>
                            <div class="flex flex-row">
                                <img class="w-1/2" src="../assets/images/other/alumnos2.jpg" alt="">
                                <div class="w-1/2 flex flex-col justify-center">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">34,690</p>
                                        <br>
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;">Estudiantes</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">10,584</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Bachillerato</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">21,808</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Licenciatura</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">2,298</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Posgrado</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img class="my-5" src="../assets/images/other/galum.jpg" alt="">

                        <img class="my-5" src="../assets/images/other/tabla142.jpg" alt="">

                        <div class="w-full my-5">
                            <div class="mt-5 flex justify-start">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">ACADEMICOS</h3>
                            </div>
                            <div class="flex flex-row">
                                <img class="w-1/2" src="../assets/images/other/docente.jpg" alt="">

                                <div class="w-1/2 flex flex-col justify-center">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">3077</p>
                                        <br>
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;">Docentes</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">1099</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Tiempo completo</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">2,068</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Tiempo parcial</p>
                                    </div>
                                </div>
                            </div>

                            <img class="my-5" src="../assets/images/other/doctp1.jpg" alt="">
                            <p>De los  804  Profesores de Tiempo Completo del nivel de licenciatura, el  88.8%  cuenta con estudios de posgrado.</p>

                        </div>

                        <img class="my-5" src="../assets/images/other/doctp2.jpg" alt="">

                        <div class="w-full my-5"> 
                            <div class="flex flex-row justify-start mt-3">
                                <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">293</p>
                                <br>
                                <p style=" font-size: 20px; font-weight: bold;">Profesores con Reconocimiento de Perfil Deseable PRODEP</p>
                            </div>
                            <div class="flex flex-row justify-start mt-3">
                                <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">108</p>
                                <br>
                                <p style="font-size: 20px; font-weight: bold;">Profesores miembros del Sistema Nacional de Investigadores</p>
                            </div>
                            <div class="flex flex-row justify-start mt-3">
                                <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">282</p>
                                <br>
                                <p style="font-size: 20px; font-weight: bold;">Profesores participan en 54  Cuerpos Académicos  reconocidos ante PRODEP</p>
                            </div>     
                        </div>

                        <div class="w-full my-5">
                            <div class="mt-5 flex justify-start">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">BECAS A ESTUDIANTES</h3>
                            </div>
                            <div class="flex flex-row">
                                <img class="w-1/2" src="../assets/images/other/becas2.jpg" alt="">

                                <div class="w-1/2 flex flex-col justify-center">
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">2,243</p>
                                        <br>
                                        <p style="color: #e36c0a; font-size: 20px; font-weight: bold;">Total de Becas a Estudiantes</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">838</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Excelencia Académica</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">960</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Apoyo Académico</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">343</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Deportivas</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">16</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Cívicas</p>
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">60</p>
                                        <br>
                                        <p style="font-size: 20px; font-weight: bold;">Artísticas</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full my-5">
                            <div class="mt-5 flex justify-center">
                                <h3 style="color: #808080; font-size: 20px; font-weight: bold;">MOVILIDIAD ACADEMICA Y ESTUDIANTIL</h3>
                            </div>
                            <div class="w-1/2 flex flex-col justify-center">
                                <div class="flex flex-row justify-center">
                                    <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">248</p>
                                    
                                    <p style="font-size: 20px; font-weight: bold;">Becas Movilidad Estudiantil Nacional periodo 2014-2015</p>
                                </div>
                                <div class="flex flex-row justify-center">
                                    <p style="color: #9bbb59; font-size: 20px; font-weight: bold;" class="mr-3">189</p>
                                    
                                    <p style="font-size: 20px; font-weight: bold;">Becas Movilidad Estudiantil Internacional</p>
                                </div>
                                
                            </div>
                        </div>

                        <img class="my-5" src="../assets/images/other/movilidad.jpg" alt="">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>