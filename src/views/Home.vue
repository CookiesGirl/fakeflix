<!------------- 
    TEMPLATE
-------------->
<template>
  <div class="home">
    <h3>...</h3>
<br/><br/><br/><br/>

<label for="test"> Nom:</label>
<input id="test" type="text" placeholder="recherche" />
<button >Ok</button>





<br/><br/><br/><br/>

        <div v-if="movies.length > 0">
            <b-container fluid class="p-4 bg-ligth" >
                <b-row >
                    <div v-for="movie in movies" :key="movie.id">
              <div @click="FilmsInfo(movie.id)">
                            <img v-if="movie.poster_path" :src="urlImage + movie.poster_path" alt="Image 1" />
                            <h6 >{{movie.title}}</h6>
                        </div>
                    </div>
                </b-row>
            </b-container>
        </div>

        <div v-else>  
          <div>
            Oups! Il n'y a pas de films pour l'instant .
          </div>
        </div>
    </div>
</template>

<!------------- 
    SCRIPT
-------------->
<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel.vue";
import fetchers from "../mixins/fetchers";

export default {
  name: "Home",
  mixins:[fetchers],
    data(){
        return{
          // FLETCHER LA BONNE URL
          urlMovie : 'https://api.themoviedb.org/3/movie/popular?api_key=c5b60a303647112413ef8353d8516f23&language=en-US&page=1'+ process.env.VUE_APP_API_KEY + '&query=',
           // urlMovie : 'https://api.themoviedb.org/3/search/movie?api_key=' + process.env.VUE_APP_API_KEY + '&query=',
            urlImage : "http://image.tmdb.org/t/p/w342",
            search:'',
            movies:[]
        }
    },
  components: {
    Carousel
  },
    watch:{
      search: async function(query){
        if(query.length >1){
          console.log(query)
            let json = await this.getData(this.urlMovie+query);
            if(json.results) this.movies = json.results;
            }

        }
    },
  methods:{
    filmInfo:function(movie_id){
      console.log(movie_id);
      location = `/movie/${movie_id}`
        }
    },
  created(){
    console.log('tototata')
    fetch(URL)
      .then(response => response.json())
      .then(json => { 
        console.log(json)
        this.movies=json;
        });
  }
};


</script>

<!------------- 
    STYLE 
-------------->
<style scoped>


</style>
