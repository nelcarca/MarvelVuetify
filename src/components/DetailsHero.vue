<template>
  <v-container>
    <nav class="mx-auto mb-7">
    <router-link to="/">Inicio
    <v-icon
      large
      color="black darken-2"
    >
      mdi-home-circle
    </v-icon>
    </router-link>
  </nav>
  <v-divider></v-divider>
    <v-card
    :loading="loading"
      v-model="heros"
      class="mx-auto hero"
      >
      <v-card-title>{{heros.name}}</v-card-title>
      <v-img
              max-height="220"
              :src="heros.thumbnail.path + '.' + heros.thumbnail.extension"
              :alt="heros.name"
              contain
            >
            </v-img>
      
      <h1 v-if="heros.description === ''">
          No hay descripción disponible <br>
          Lo lamentamos mucho, hablaremos con Marvel 77
      </h1>
      <h3 v-else>
          {{ heros.description }}
      </h3>

    </v-card>
  </v-container>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
  setup () {
   const store = useStore()
   const heros = computed(() =>{
     return store.state.HerosSelected
   })

   return {
     heros
   }
 }
}
</script>

<style>

</style>