<template>
    <div>
        {{this.$route.params.id}}
        <div v-if="video && video.site === 'YouTube'">
            <iframe id="ytplayer" type="text/html" width="100%" height="360"
                    :src="srcVideo"
                    frameborder="0"
            />
        </div>

            <div>
            <img :src="urlImage" class="card-img" alt="">
            </div>
            <div>
            <div v-if="movie.length >0">
                <h5 class="card-title">{{movie.original_title}}</h5>
                <p class="card-text">{{tmovie.original_title}} {{movie.original_language}} Sortie : {{releaseDate}}</p>
                <p class="card-text">{{movie.overview}}</p>
                <h1>Informations</h1>
                <ul>
                    <li>Popularité : {{movie.popularity}}</li>
                    <li>Note : {{movie.vote_average}}/10</li>
                    <li>Nombre de vote : {{movie.vote_count}}</li>
                </ul>
                <p class="card-text">titi toto></p>
            </div>
            </div>
    </div>
</template>

<script>
import fetchers from '../mixins/fetchers'

export default {
    name : 'FilmInfo',
    mixins:[fetchers],
    data(){
        return{
            urlMovie : null,
            urlVideo : null,
            movie : null,
            video : null,
            urlImage:""
            
        }
    },
    computed:{
        srcVideo:function(){
            return `http://www.youtube.com/embed/${this.video.key}?autoplay=0&`;
        },
        releaseDate:function(){
            let options = {weekday: "long", year: "numeric", month: "long", day: "numeric"}

            return  new Date(this.movie.release_date).toLocaleDateString('fr-FR',options);
        },

    },
    created:async function(){
        this.urlMovie = this.getUrl(this.$route.params.id);
        this.urlVideo = this.getUrl(this.$route.params.id,'/videos');
        this.movie = await this.getData(this.urlMovie);
        let json = await this.getData(this.urlVideo);
        if(json.results) this.video = json.results[0];
        this.urlImage = "http://image.tmdb.org/t/p/w342/"+ this.movie.poster_path
    },
    methods:{
        getUrl:function(id_du_film,arg = ''){
            return "https://api.themoviedb.org/3/movie/"+id_du_film+arg+"?api_key=" + process.env.VUE_APP_API_KEY;

            //https://api.themoviedb.org/3/movie/".$id_du_film."?api_key=".APIKEY
        }
    }
    
}
</script>