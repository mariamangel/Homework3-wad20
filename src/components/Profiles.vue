<template>
  <div id="profiles">
    <div v-for='profile in profiles' :key='profile.id' class="profile">
      <img :src="profile.avatar" alt="profile.firstname">
      <h2>{{ profile.firstname + " " + profile.lastname }}</h2>
      <button type="button" class="follow-button" @click="clicked= !clicked" v-bind:class="{'follow-button': !clicked, 'followed' : clicked} ">Follow</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profiles",
  data() {
    return{
      clicked: false
    }
  }, computed: {
    profiles() {
      return this.$store.state.profiles
    }
  },
  mounted() {
    this.$store.dispatch("getProfiles");
  }
}
</script>

<style scoped>

  .profile {
    width: 45%;
    display: inline-block;
    border: 1px solid #dedede;
    border-radius: 5px;
    text-align: center;
    margin: 1%;
  }
  .profile img{
    width: 75px;
    height: 75px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    margin: 5px;
  }

  .profile h2{
    font-size: 16px;
  }
  button {
    padding: 8px 16px;
    margin: 4px 0;
    color: #ffffff;
    background-color: #01579b;
    border: none;
    border-radius: 4px;
  }

  .follow-button{
    background-color: #82008f;
  }

  .followed{
    background-color: #ffffff;
    border: 1px solid #82008f;
    color: #82008f;
  }
</style>