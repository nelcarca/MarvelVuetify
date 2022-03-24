<template>
    <v-row wrap d-flex justify-space-around class="heros">
      
        
          <v-col cols="12" sm="6" md="4" lg="3" xl="2" class="heros__item" v-for="hero in heros" :key="hero.id">
           <CardHero :hero="hero" />
          </v-col>
        
      
   </v-row>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import CardHero from '@/components/CardHero.vue'
import DetailsHero from '@/components/DetailsHero.vue'

export default {
   components:{
      CardHero,
      DetailsHero
   },
 setup () {
   const store = useStore()
   const heros = computed(() =>{
     return store.state.herosFilter
   })
   onMounted(() => {
     store.dispatch('getHeros')
   })

   return {
     heros
   }
 }
}
</script>
