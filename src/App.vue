<!------------- 
   TEMPLATE
-------------->
<!-- -->
<template>
  <div id="app">

<div class="titre-site">
    <h1>Fakeflix</h1>
  </div>
    
<div id="navbar" class="container-fluid.bg-dark.mb-5">
  <nav class="collapse navbar-collapse">
       <a href="/" class="nav-link">Acceuil </a>|
       <a href="/favoris" class="nav-link">Favoris </a>|
       <a href="/filmAV" class="nav-link">Films à voir </a>|
      <a href="/login" class="nav-link">Connexion </a>
    </nav>

  <div id="search">
    <form action = "verif-form.php" method = "get">
      <input type = "search" name = "Rechercher un film" placeholder="Rechercher un film" class="form-control">
      <input type = "submit" name = "s" value = "Rechercher">
    </form>
  </div>

  </div>

    <router-view></router-view>

    <Footer></Footer>
  </div>
</template>

*
<!------------- 
    SCRIPT
-------------->
<script>
// @ is an alias to /src
//import NavBar from "@/components/NavBar.vue";
import TitreSite from "@/components/TitreSite.vue";
import Footer from "@/components/Footer.vue";
import fetchers from '@/mixins/fetchers'

export default {
  name: "App",
  mixins:[fetchers],
  data(){
    return{
      urlToken: process.env.VUE_APP_BASE_URL + process.env.VUE_APP_NEW_TOKEN + process.env.VUE_APP_API_KEY,
      urlSession: process.env.VUE_APP_BASE_URL + process.env.VUE_APP_NEW_SESSION + process.env.VUE_APP_API_KEY,
      requestToken :"",
      guest_session_id :"",
    }

  },
  created: async function(){
      this.requestToken = await this.getData(this.urlToken)
  },
  components: {
    Footer
  },
  methods:{
  }
};


</script>
<!------------------------------------ 
    STYLE PRINCIPAL DE L'APPLICATION
-------------------------------------->
<style lang="scss">
//@import "./assets/custom.scss";
//@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import url("https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap");

html,
body {
  background-color: #000;
  font-family: "Bebas Neue", cursive;
}

h1 {
  color: #db202c;
  font-size: 7rem;
  font-weight: 200;
}
h3 {
  margin: 40px 0 0;
}
.navbar-brand {
    display: inline-block;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
    color: #fff;
    text-decoration: none;
    background-color: transparent;
}

.navbar-dark .navbar-brand {
    color: #fff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e4e4e4;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
#navbar {
  height: 60px;
  background-color: rgb(39, 39, 39);
}

#nav a:link {
  color: #fff;
}
#nav a:visited {
  color: rgb(197, 197, 197);
}
#nav a:hover {
  color: rgb(185, 50, 50);
}
#nav a:active {
  color: #fff;
}

#nav {
  display: inline-block;
  float: left;
  height: 50px;
  margin: auto;
}

#searchF {
  display: inline-block;
  float: left;
  height: 50px;
  margin: auto;
}

#search::after {
  content: "";
  display: block;
  clear: both;
}
</style>
