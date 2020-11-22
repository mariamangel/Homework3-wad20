<template>
  <div id="home">
    <Header/>
    <Posts/>
  </div>

</template>

<script>
import Header from "@/components/Header";
import Posts from "@/components/Posts";
export default {
  name: 'Home',
  components: {Posts, Header},
}
</script>