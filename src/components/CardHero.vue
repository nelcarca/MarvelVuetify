<template>
  <v-container grid-list-md>
    <v-row wrap>
      <v-col>
        <v-card class="hero bg-black">
          <v-card-title class="hero__info">
            <h5>{{ hero.name }}</h5>
          </v-card-title>
          <v-img
            height="260"
            width="260"
            :src="hero.thumbnail.path + '.' + hero.thumbnail.extension"
            :alt="hero.name"
            cover
          >
          </v-img>

          <v-card-actions class="bg-transparent">
            <v-btn
              flat
              color="secondary"
              @click="conocerMas = true"
            >
              Conocer más
            </v-btn>
          </v-card-actions>
        </v-card>
       </v-col>

        <!-- modales o dialog en vuetify -->
       <v-col x12 sm6>
        <v-dialog v-model="conocerMas"
        transition="fab-transition">
          <v-card class="hero bg-black">
             <v-img
            height="160"
            :src="hero.thumbnail.path + '.' + hero.thumbnail.extension"
            :alt="hero.name"
            cover
          >
          </v-img>
            <v-card-title>
              {{ hero.name }}
            </v-card-title>
            <v-card-text class="text-white">
              <div v-if="hero.description === ''">
                No hay descripción disponible
              </div>
              <div v-else>
                {{ hero.description }}
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card>
              <h4 v-for="name in names" :key=name.id>
              {{ hero.comics.items}}
              </h4>
            </v-card>
            <v-divider></v-divider>
            <v-card-actions>
              <router-link :to="{name: 'herodetails', params:{id:hero.id}}" transition="fab-transition">
              <v-btn @click="selectedHero(hero)">Más detalles</v-btn>
              </router-link>
              <v-btn @click="conocerMas = false">Cerrar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
       </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
  data() {
    return {
      conocerMas: false,
    };
  },
 setup () {
   const store = useStore()
   const selectedHero = ((hero) => {
     store.dispatch('selectedHeros', hero)
   })

   return {
    selectedHero
   }
 },

  props: ["hero"],

  methods: {
    async DetailsHero (hero) {
      console.log(hero, "nelson");
    
    }
  },
 
};
</script>

<style>
</style>