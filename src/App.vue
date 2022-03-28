<template>
  <v-app>
    <v-main>
      <v-app-bar
    color="black"   
    >
    <template v-slot:image>
          <v-img
            src="./assets/SkyLinefinal.png"
          ></v-img>
    </template>
    <router-link to="/">
      <div class="d-flex align-center justify-center">
        
         <v-img
          alt="Marvel Logo"
          class="shrink mt-1"
          contain
          min-width="100"
          src="./assets/marvel-logo.png"
          width="100"
        />
        <v-img
          alt="comics"
          class="shrink mr-2"
          contain
          src="./assets/comicsMarvelF.png"
          transition="scale-transition"
          width="70"
        />

      </div>
    </router-link>
      <v-spacer></v-spacer>
        <SearchName/>
        <v-btn variant="text" icon="mdi-magnify" ></v-btn>
      </v-app-bar>
      <router-view/>
    </v-main>
    <v-footer
    class="bg-black"
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="text-center text-white mt-4"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>CursoFrontEnd Kibernum</strong> <p>by Nelcarca</p>
      </v-col>
    </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import SearchName from '@/components/SearchName'
export default {
  name: 'App',

  components: {
    SearchName,
  },

  data: () => ({
    
  }),
}
</script>
<style scoped>
*{
  background-image: "./assets/ComicBG2.jpg";
}
</style>
