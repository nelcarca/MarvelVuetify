import { createStore } from 'vuex'

export default createStore({
  state: {
    heros: [],
    herosFilter: []
  },
  getters: {
  },
  mutations: {
    setHeros(state, payload){
      state.heros = payload
    },
    setHerosFilter(state, payload) {
      state.herosFilter = payload
    }
  },
  actions: {
    async getHeros({commit}) {
      try {
        const  enviroments = {
          url: "https://gateway.marvel.com:443/v1/public/",
          apikey : "16feefe7503a1f9516e39c59842dbf1e",
          hash: "8892f7c14f87084f4624d8404b21a679"
       }
        const path = "characters";
        const $URL = enviroments.url;
        const $AUTH = `?ts=1&apikey=${enviroments.apikey}&hash=${enviroments.hash}`;
        const response = await fetch(`${$URL}${path}${$AUTH}`);
        const data = await response.json();
        console.log(data);
        commit('setHeros', data.data.results)
        commit('setHerosFilter', data.data.results)
      } catch (error) {
        console.log(error);        
      }
    }
  },
  modules: {
  }
})
