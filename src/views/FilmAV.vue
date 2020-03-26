<!------------- 
   TEMPLATE
-------------->
<template>
  <div class="filmAV">
    <h3>Votre playlist de films à voir</h3>

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
  name: "FilmAV",
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