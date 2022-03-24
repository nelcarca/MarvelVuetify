<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
    <div class="d-flex align-center">
        
         <v-img
          alt="Marvel Logo"
          class="shrink mt-1"
          contain
          min-width="100"
          src="./assets/marvel-logo.png"
          width="100"
        />
        <v-img
          alt="agentsshield"
          class="shrink mr-2"
          contain
          src="./assets/comicsMarvelF.png"
          transition="scale-transition"
          width="70"
        />
      </div>
    </v-app-bar>
    <v-main>
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
        {{ new Date().getFullYear() }} — <strong>CursoFrontEnd Kibernum</strong>
      </v-col>
    </v-row>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    
  }),
}
</script>
<style scoped>

</style>
