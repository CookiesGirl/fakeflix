<!------------- 
   TEMPLATE
-------------->
<template>
  <div class="favoris">
    <h3>Retrouvez tous vos films préférés</h3>

    <div>COMPOSANT CARROUSEL</div>
    <Carousel />

    <div>COMPOSANT Autres Films</div>
  </div>
</template>

<!------------- 
    SCRIPT
-------------->
<script>
import Carousel from "@/components/Carousel.vue";
import fetchers from "../mixins/fetchers";

export default {
  name: "Favoris",
    components: {
    Carousel
  }
};
</script>

<!------------- 
    STYLE 
-------------->
<style scoped>
</style>