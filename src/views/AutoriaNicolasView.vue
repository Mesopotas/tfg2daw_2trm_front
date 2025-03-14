<script lang="ts">
import TablaOpiniones from '../components/TablaOpiniones.vue';
import FormularioCrearOpinion from '../components/FormularioCrearOpinion.vue';
import FormularioEditarOpinion from '../components/FormularioEditarOpinion.vue';
import FormularioEliminarOpinion from '../components/FormularioEliminarOpinion.vue';
export default {
  components: {
    TablaOpiniones,
    FormularioCrearOpinion,
    FormularioEditarOpinion,
    FormularioEliminarOpinion
  },
};
</script>

<template>
    <div class="layout" style="background-color: #f3e7dc; min-height: 100vh;">
        <br><br>
        <TablaOpiniones />
        <FormularioCrearOpinion />
        
        <FormularioEditarOpinion />
        <FormularioEliminarOpinion />

    </div>
</template>