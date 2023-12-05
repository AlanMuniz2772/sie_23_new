<script setup>
import { reactive } from 'vue';
import img1 from '../assets/images/carousel/contacto.jpg';
import CarruselTop from '../components/CarruselTop.vue';
const aImgInicio = [img1]
const form = reactive({
    nombre: '',
    email: '',
    telefono: '',
    escuela: '',
    mensaje: '',
});
</script>

<template>
    <CarruselTop class="mt-[-4.3%]" :imagenes="aImgInicio"></CarruselTop>
    <div class="flex mx-96 my-20 justify-center max-w-full">
        <!-- Columna de Contacto y Planeación -->
        <div class="w-1/2 p-4">
            <h2 class="text-lg font-bold mb-4">CONTACTO PLANEACION</h2>
            <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                    <label class="block">Nombre</label>
                    <input type="text" v-model="form.nombre" class="w-full p-2 border border-gray-300 rounded"
                        placeholder="Nombre" />
                </div>
                <div class="mb-4">
                    <label class="block">E-mail</label>
                    <input type="email" v-model="form.email" class="w-full p-2 border border-gray-300 rounded"
                        placeholder="E-mail" />
                </div>
                <div class="mb-4">
                    <label class="block">Número telefónico de contacto</label>
                    <input type="tel" v-model="form.telefono" class="w-full p-2 border border-gray-300 rounded"
                        placeholder="Número telefónico" />
                </div>
                <div class="mb-4">
                    <label class="block">Escuela/Facultad</label>
                    <input type="text" v-model="form.escuela" class="w-full p-2 border border-gray-300 rounded"
                        placeholder="Escuela/Facultad" />
                </div>
                <div class="mb-4">
                    <label class="block">Escriba su mensaje</label>
                    <textarea v-model="form.mensaje" class="w-full p-2 border border-gray-300 rounded resize-none" rows="4"
                        placeholder="Mensaje" />
                </div>
                <div>
                    <button type="reset" class="bg-blue-500 text-white px-4 py-2 rounded mr-2">Borrar</button>
                    <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded">Enviar</button>
                </div>
            </form>
        </div>

        <!-- Columna de Asunto y Prioridad -->
        <div class="w-1/2 p-4">
            <div class="mb-4">
                <label class="block">Asunto:</label>
                <select class="w-full p-2 border border-gray-300 rounded">
                    <option>Modelos-intranet</option>
                    <option>Indicadores</option>
                    <option>Matricula 911</option>
                    <option>Otro</option>
                </select>
            </div>
            <div class="mb-4">
                <label class="block">Prioridad:</label>
                <div>
                    <label class="inline-flex items-center">
                        <input type="radio" name="prioridad" class="form-radio" value="Baja" />
                        <span class="ml-2">Baja</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                        <input type="radio" name="prioridad" class="form-radio" value="Media" />
                        <span class="ml-2">Media</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                        <input type="radio" name="prioridad" class="form-radio" value="Alta" />
                        <span class="ml-2">Alta</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>  

<style scoped></style>