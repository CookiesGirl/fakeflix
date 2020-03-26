<!------------- 
   TEMPLATE
-------------->
<template>
  <!-- default gallery mode -->
  <v-gallery :images="list"></v-gallery>
</template>

<!------------- 
   SCRIPT
-------------->
<script>
export default {
  data() {
    return {
      list: [
        {
          title: "Image1",
          url: "https://terryz.github.io/vue/img/4.cab09230.jpg"
        },
        {
          title: "Image2",
          url: "https://terryz.github.io/vue/img/5.e6864a34.jpg"
        },
        {
          title: "Image1",
          url: "https://terryz.github.io/vue/img/4.cab09230.jpg"
        },
        {
          title: "Image2",
          url: "https://terryz.github.io/vue/img/5.e6864a34.jpg"
        },
        {
          title: "Image1",
          url: "https://terryz.github.io/vue/img/4.cab09230.jpg"
        },
        {
          title: "Image2",
          url: "https://terryz.github.io/vue/img/5.e6864a34.jpg"
        },
        {
          title: "Image1",
          url: "https://terryz.github.io/vue/img/4.cab09230.jpg"
        },
        {
          title: "Image2",
          url: "https://terryz.github.io/vue/img/5.e6864a34.jpg"
        }
      ]
    };
  }
};
</script>

<!------------- 
    STYLE 
-------------->
<style scoped>
</style>