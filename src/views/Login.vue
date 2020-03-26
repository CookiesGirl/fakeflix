<!------------- 
   TEMPLATE
-------------->
<template>
  <div class="login">
    <LogPage />
  </div>
</template>

<!------------- 
    SCRIPT
-------------->
<script>
// @ is an alias to /src
import LogPage from "../components/LogPage.vue";
import fetchers from "../mixins/fetchers";

export default {
  name: "Login",
  components: {
    LogPage
  }
};
</script>

<!------------- 
    STYLE 
-------------->
<style scoped>
</style>