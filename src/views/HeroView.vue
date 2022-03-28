<template>
<v-container grid-list-lg>
   <v-layout row wrap v-if="heros">
   
      <v-flex xs12 sm6 v-for="hero in heros" :key="hero.id" >
         <CardHero :payload="hero"></CardHero>
     </v-flex>
     <Pagination/>

   </v-layout>
   </v-container>
</template>

<script>
import HeroServices from './../services/HeroServices'
import CardHero from './../components/CardHero.vue'
import Pagination from '@/components/Pagination'

export default{
   name : "HeroView",
   data(){
      return{
         heros: null
      }
   },
   components: {
    CardHero,
    Pagination,
   },
   methods : {
      async getHeros(){
         try {
         const response = await HeroServices.charactersSearch();
         //console.log(response, "Respuesta de servicio")
         // => 'updated'
         return response.data.results 
         
         //this.$store.commit("SetHeros", response.data.results )
         } catch (error) {
            console.log(error);
         }
         
      }
   },
   created(){
      this.getHeros().then(r => {
         this.heros = r;
      });
   }
}
</script>

<style>

</style>