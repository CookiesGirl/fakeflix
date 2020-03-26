<!------------- 
  TEMPLATE
-------------->
<template>
  <div class="login">
    <p>Veuillez vous identifier pour continuer :</p>
      <label>Utilisateur</label>
            <input v-model="username" />
            <br/>
            <label>Mot de passe</label>
            <input v-model="password"/>

            <button @click="authentication">Se connecter</button>

  </div>
</template>

<!------------- 
  SCRIPT
-------------->
<script>
export default {
  name: "LogPage",
/*-
  mixins:[fetchers],
  data(){
    return{
      urlConnection : process.env.VUE_APP_BASE_URL + process.env.VUE_APP_AUTH_LOGIN + process.env.VUE_APP_API_KEY,
      urlToken: process.env.VUE_APP_BASE_URL + process.env.VUE_APP_NEW_TOKEN + process.env.VUE_APP_API_KEY,
      urlSession: process.env.VUE_APP_BASE_URL + process.env.VUE_APP_NEW_SESSION + process.env.VUE_APP_API_KEY,
      requestToken :"",
      guest_session_id :"",
      username:"",
      password:"",
      error:false
    }
  },
  created: async function(){
      this.requestToken = await this.getData(this.urlToken)
  },
  components: {

  },
  methods:{
    authentication:function(){
        fetch(this.urlConnection,{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                    "username": this.username,
                    "password": this.password,
                    "request_token": this.requestToken.request_token
            })
        })
        .then(response => response.json())
        .then(json => {
            json.success ? location = "/" : this.error = "Échec d’authentification"
        });

    }
  }
  -*/
}
</script>

<!------------- 
  STYLE 
-------------->
<style scoped>

</style>