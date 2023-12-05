<script setup>

import img1 from '../assets/images/carousel/uadec_1.jpg'
import img2 from '../assets/images/carousel/uadec_2.jpg'
import coahuila from '../assets/images/other/coahuila.jpg'
import compe from '../assets/images/other/compe.jpg'
import educacion from '../assets/images/other/educacion.jpg'
import industria from '../assets/images/other/industria.jpg'
import infraes from '../assets/images/other/infraes.jpg'
import necesidad from '../assets/images/other/necesidad.jpg'
import poblacion from '../assets/images/other/poblacion.jpg'
import regiones from '../assets/images/other/regiones.jpg'
import regionesuadec from '../assets/images/other/regionesuadec.jpg'
import unidadesuadec from '../assets/images/other/unidadesuadec.jpg'

import CarruselTop from '../components/CarruselTop.vue'
const aImgInicio = [img1, img2]
</script>

<template>
    <CarruselTop class="mt-[-4.3%]" :imagenes="aImgInicio"></CarruselTop>
    <div class="container mx-auto my-20 grid grid-cols-3 gap-16">
        <div class="column">
            <img :src=coahuila alt="Coahuila">
            <div class="flex items-start flex-col gap-y-4">
                <h3>El Estado de COAHUILA</h3>
                <p>
                    Se localiza en el noreste de México y comparte límites al norte con el estado de Texas (EU), al sur con
                    Zacatecas y San Luis Potosí, al este con Nuevo León y al oeste con Durango y Chihuahua.

                    Ocupa el 3er. lugar nacional en extensión territorial (151,571 km² ) lo que representa el 7.7% de la
                    superficie nacional.
                </p>
            </div>
        </div>
        <div class="column">
            <img :src=regiones alt="regiones">
            <div class="flex items-start flex-col gap-y-4">
                <h3>Regiones del Estado</h3>
                <ul>
                    <li>
                        Fonteriza:Acuña, Allende, Guerrero, Jimenez, Morelos, Nava, Piedras Negras, Zaragoza y Villa Unión
                    </li>
                    <li>Centro: Abasolo, Candela, Castaños, Cuatrociénegas, Escobedo, Frontera, Lamadrid, Monclova,
                        Nadadores,
                        Ocampo,</li>
                    <li>Sacramento, San Buenaventura y Sierra Moajada.</li>
                    <li>Carbonífera: Juárez, Múzquiz, Progreso, Sabinas, San Juan de Sabinas.</li>
                    <li>Laguna: Franciso I., Matamoros, San Pedro, Torreón y Viesca.</li>
                    <li>Sureste: Arteaga, General Cepeda, Parras, Ramos Arizpe y Saltillo</li>
                </ul>
            </div>
        </div>
        <div class="column">
            <img :src=poblacion alt="">
            <p>La población del estado representa 2.4% de la nacional, con 2.95 millones de habitantes; la fuerza de trabajo
                equivale a poco menos de la mitad de la población total. Coahuila participa con 3.7% del producto interno
                bruto del país. El 90%. de la población total vive en zonas urbanas.

                En la economía del estado, el sector industrial tiene un peso mayor que el promedio de todos los estados,
                con una participación del 44%. El ingreso per-cápita de Coahuila es de 126 mil pesos por año, 20% mayor que
                el nacional, y es la séptima entidad con el valor más alto.</p>
        </div>
        <div class="column">
            <img :src=industria alt="">
            <p>Se cuenta con importantes agrupamientos industriales; en la región de la Laguna están ubicadas las
                principales industrias textiles, agropecuarias y ligeras; en la sureste está concentrada la industria
                automotriz, así como empresas químicas, textiles y metalúrgicas; en la centro se encuentra una de las
                compañías siderúrgicas más grandes del país y en la norte, con un posicionamiento estratégico para los
                Estados Unidos de América, se ubican empresas maquiladoras.</p>
        </div>
        <div class="column">
            <img :src=compe alt="">
            <p>Coahuila ocupa el quinto lugar en competitividad global entre las entidades federativas y se encuentra entre
                los cinco estados del país con mejor calificación en materia de desempeño económico.</p>
        </div>
        <div class="column">
            <img :src=educacion alt="">
            <p>La cobertura de los servicios de educación básica es prácticamente 100%.

                La matrícula en la educación media superior ha crecido a un ritmo anual de 3.5% en los últimos cuatro
                periodos escolares; la cifra correspondiente a la educación superior es 4.9%.

                De educación superior egresan 13,300 personas por año; de éstas, 37.7% corresponde a las áreas de ingeniería
                y tecnología, las de mayor relevancia para la vocación industrial del estado.</p>
        </div>
        <div class="column">
            <img :src=regionesuadec alt="">
            <p>La UA de C es una institución de calidad internacional, socialmente responsable y comprometida con la
                sustentabilidad, cuyos estudiantes se distinguen por su formación académica, ética, cultural y deportiva;
                sus egresados conservan el sentido de pertenencia, son altamente competitivos y con capacidad para
                integrarse exitosamente al entorno global.</p>
        </div>
        <div class="column">
            <img :src=unidadesuadec alt="">
            <p>La Universidad Autónoma de Coahuila tiene una Presencia en 13 municipios, teniendo un impacto del 86% de la
                población total.</p>
        </div>
        <div class="column">
            <img :src=necesidad alt="">
            <p>Responde a las necesidades cambiantes de los sectores productivo y social mediante una amplia oferta
                educativa pertinente, innovadora y flexible, respaldada por docentes e investigadores con el perfil idóneo,
                quienes se caracterizan por ser altamente productivos y están organizados en Cuerpos Académicos vinculados
                al desarrollo de la ciencia, la tecnología y las humanidades, mediante redes nacionales e internacionales de
                investigación.</p>
        </div>
        <div class="column">
            <img :src=infraes alt="">
            <p>Su normativa, infraestructura y procesos de gestión respaldan de manera efectiva, eficiente y transparente
                las actividades sustantivas.</p>
        </div>
    </div>
</template>


<style scoped>
.column {
    @apply flex flex-col items-center
}

.column h3 {
    font-weight: bold
}

.column li {
    list-style: circle;
}

.column p {
    line-height: 1.77;
}

.column img {
    @apply h-80;
}
</style>