<template>
  <ListHeros class="bg-grey-darken-4"/>
</template>

<script>
import { defineComponent } from 'vue';

// Components
// import HelloWorld from '../components/HelloWorld.vue';
import ListHeros from '@/components/ListHeros'

export default defineComponent({
  name: 'HomeView',

  components: {
  ListHeros
  },
});
</script>

