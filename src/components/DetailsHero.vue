<template>
<div class="bg-grey-darken-4">
  <v-container class="body">
    <nav class="mx-auto mb-7">
    <router-link to="/" color="success">Inicio
    <v-icon
      x-large
      color="white"
    >
      mdi-home-circle
    </v-icon>
    </router-link>
    </nav>
  <v-divider></v-divider>
    <v-card
      v-model="heros"
      class="mx-auto hero bg-black"
      >
      <v-card-title class="justify-center">{{heros.name}}</v-card-title>
      <v-img
              max-height="220"
              :src="heros.thumbnail.path + '.' + heros.thumbnail.extension"
              :alt="heros.name"
              contain
            >
            </v-img>
      <v-card-text  class="mx-auto">
      <h2 v-if="heros.description === ''" class="text-white">
         <br> No hay descripción disponible <br>
          Lo lamentamos mucho, hablaremos con Marvel.
      </h2>
      <h3 v-else class="text-white">
          {{ heros.description }}
      </h3>
      </v-card-text>

    </v-card>
  </v-container>
</div>
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