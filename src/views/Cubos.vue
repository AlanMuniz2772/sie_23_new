<script setup>
import img1 from '../assets/images/carousel/cubos.jpg';
import CarruselTop from '../components/CarruselTop.vue';
const aImgInicio = [img1]
</script>

<template>
    <CarruselTop class="mt-[-4.3%]" :imagenes="aImgInicio"></CarruselTop>
    <div class="mx-96 my-24">
        <p class="mb-8">
            Una de las formas de analizar la información es mediante el uso de cubos. Básicamente, un cubo es una estructura
            de datos organizada mediante jerarquías. Cada indicador se puede evaluar en cualquiera de los niveles de las
            jerarquías. Así, por ejemplo, se pueden obtener los "aspirantes" a nivel de género, por periodo escolar,
            aceptados para una escuela determinada o por unidad o toda la universidad.
        </p>
        <div class="mb-8">
            <p class=""> <strong> Es agilizar la consulta de grandes cantidades de datos…</strong> </p>
            <div class="flex items-center mx-8">
                <p>
                    La liga donde se encuentra los diferentes modelos generados por el Departamento SIE:
                    <strong>
                        http://dwhouse.uadec.mx/cognos
                    </strong>
                    <br>
                    <br>
                    Para accesar puede dar un clic a la imagen del CUBO
                </p>
                <a href="http://dwhouse.uadec.mx/cognos"><img alt="" src="../assets/images/other/olap.png"
                        style="width: 60%;"></a>
            </div>
        </div>
        <p class="mb-4">
            Es importante aclarar que es necesario que cuente con un usuario y contraseña para poder accesar para el manejo
            de los diferentes modelos. Para información al correo <strong>ecrespo@uadec.edu.mx</strong>
        </p>
        <div>
            <p class="">Imagen del modelo de ADMISIONES ( aspirantes por unidad y periodo)</p>
            <img class="my-8" src="../assets/images/other/madm_uno.jpg" alt="">
            <div>
                <strong>Estos son algunos ejemplos de indicadores que maneja el modelo:</strong>
                <ul class="my-4 mx-8">
                    <li class="mb-2">Aspirantes por unidad, por nivel educativo, aceptados y géneros</li>
                    <li class="mb-2">Carreras con mayor demanda, aspirantes, aceptados</li>
                    <li class="mb-2">Gráficos, alumnos demandantes por carrera</li>
                    <li class="mb-2">Aspirantes por ciclo</li>
                    <li class="mb-2">Aspirantes (carreras más demandantes a través de los años)</li>
                    <li class="mb-2">Aspirantes (estado de procedencia)</li>
                    <li class="mb-2">Primeros lugares calificaciones más altas del examen de admisión... College Board</li>
                    <li class="mb-2">Calificaciones de aceptados</li>
                    <li class="mb-2">Puntuaciones de mayores a 80 del examen de admisión</li>
                    <li class="mb-2">Aspirantes de Bachilleratos de la UADEC a licenciaturas de la UADEC</li>
                </ul>
                <strong>Otros cubos:</strong>
                <ul class="my-4 mx-8">
                    <li>Matricula auditada 911</li>
                    <li>Títulos</li>
                    <li>Eficiencia Terminal</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
li {
    list-style: circle;
}
</style>