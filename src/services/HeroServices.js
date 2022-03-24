import enviroments from './../enviroments'

class HeroServices {
   static async charactersSearch(){
      try {
         const path = "characters"
         const $URL = enviroments.url;
         const $AUTH = `?ts=1&apikey=${enviroments.apikey}&hash=${enviroments.hash}`
         const data = await fetch(`${$URL}${path}${$AUTH}`);
         const response = await data.json();
         return response;
         } catch (error) {
            throw error;
            console.log(error);
         }
   }
}

export default HeroServices;