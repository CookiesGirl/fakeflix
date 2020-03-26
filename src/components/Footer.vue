<!------------- 
   TEMPLATE
-------------->
<template>
  <div id="footer">
    <p>
      Fakeflix © 2017-2020 - Powered by
      <a
        href="https://themoviedb.org"
        target="_blank"
      >themoviedb.org</a>
    </p>
  </div>
</template>

<!------------- 
    SCRIPT
-------------->
<script>
export default {
  name: "Footer"
};
</script>

<!------------- 
    STYLE 
-------------->
<style scoped>
#footer {
  position: absolute;
  bottom: 0;
  margin: auto;
  width: 99%;
  font-size: 0.8rem;
  color: slategray;
}
#footer a {
  color: brown;
}
</style>