<template>
  <v-container>
   <v-text-field
      filled
      dense
      label="Tu busqueda aquí"
      placeholder="Busqueda por nombre"
      v-model="name"
      @keyup="filter()"
          >
   </v-text-field>
  </v-container>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
   setup() {
      const store = useStore()
      const name = ref('')
      const filter = () => {
         store.dispatch('filterByName', name.value)
      }

      return {
         name,
         filter
      }
   }
}
</script>

<style>

</style>