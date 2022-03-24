<template>
  <v-container grid-list-md>
    <v-row wrap>
      <v-col>
        <v-card class="hero">
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

          <v-card-actions>
            <v-btn
              variant="outlined"
              color="primary"
              flat
              @click="conocerMas = true"
            >
              Conocer más
            </v-btn>
          </v-card-actions>
        </v-card>
       </v-col>

        <!-- modales o dialog en vuetify -->
       <v-col x12 sm6>
        <v-dialog v-model="conocerMas">
          <v-card>
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
            <v-card-text>
              <div v-if="hero.description === ''">
                No hay descripcion disponible
              </div>
              <div v-else>
                {{ hero.description }}
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn @click="DetailsHero">Más detalles</v-btn>
              <v-btn @click="conocerMas = false">Cerrar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
       </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      conocerMas: false,
    };
  },
  props: ["hero"],
};
</script>

<style>
</style>