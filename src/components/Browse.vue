<template>
  <div id="browse">
    <Header></Header>
    <div class="main-container">
      <Profiles></Profiles>
    </div>
  </div>
</template>

<script>
import Profiles from "@/components/Profiles";
import Header from "@/components/Header";
export default {
  name: 'Browse',
  components: {Header, Profiles}
}
</script>

<style scoped>
  .main-container {
    width: 50%;
    min-height: 100%;
    margin: auto auto;
    padding: 90px 15px 15px 15px;
    background-color: #ffffff;
  }
</style>
