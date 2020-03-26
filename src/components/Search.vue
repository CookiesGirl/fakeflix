<!------------- 
   TEMPLATE
-------------->
<template>
  <div class="search">
     <form action = "verif-form.php" method = "get">
   <input type = "search" name = "terme">
   <input type = "submit" name = "s" value = "Rechercher">
  </form>
  </div>
</template>

<!------------- 
    SCRIPT
-------------->
<script>
export default {
  name: "Search"
};
</script>

<!------------- 
    STYLE 
-------------->
<style scoped>
#site-search {
  height: 50px;
  margin-top: 5px;
}
button {
  height: 50px;
}
</style>