<template>
  <div id="posts">
    <section class="main-container">
      <div class="post" v-for='post in posts' :key='post.id'>
        <span class="post-author">
          <span class="post-author-info">
            <img :src="post.author.avatar" id="avatar" alt="Me">
            <small>{{ post.author.firstname + " " +  post.author.lastname }}</small>
          </span>
          <small>{{ post.createTime | lower }}</small>
        </span>
        <div class="post-title">
          <h3>{{ post.text}}</h3>
        </div>
        <!--<div class="post-image">
          <div v-if="post.media.type === 'image'">
            <img :src="post.media.url" alt="post.text">
          </div>
          <div v-else-if="post.media.type === 'video'">
            <video controls>
              <source :src="post.media.url" type="video/mp4">
            </video>
          </div>
        </div>-->
        <div class="post-actions">
          <!--<button v-bind:class="{'like-button' : !selected, 'liked' : selected}" @click="toggleItem">{{ post.likes }}
          </button>-->
          <button type="button" @click="clicked= !clicked" v-bind:class="{'like-button': !clicked, 'liked' : clicked} ">{{ post.likes }}</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Posts",
  data(){
    return {
      clicked: false
    }
  }, computed: {
    posts: function () {
      return this.$store.state.posts
    }, videoElement () {
      return this.$refs.video;
    },
    /*selected: function () {
      return this.$store.getters.postSelected(this.index)
  }*/
  }/*,methods: {
    toggleItem: function() {
      this.$store.commit('toggleItem', this.index)
    }
  }*/,
  mounted() {
    this.$store.dispatch("getPosts");
  }, filters: {
    lower: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toLowerCase() + value.slice(1)
    }
  }
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

  .post {
    width: 80%;
    margin: 15px auto;
    box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
    border-radius: 5px;
  }

  .post .post-author {
    padding: 10px;
  }

  .post .post-author::after {
    content: "";
    display: block;
    clear: both;
  }

  .post .post-author .post-author-info {
    float: left;
    position: relative;
    width: 50%;
  }

  .post .post-author .post-author-info img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    margin: 5px;
  }

  .post .post-author .post-author-info small {
    position: absolute;
    top: 10px;
    left: 35px;
  }

  .post .post-author .post-author-info + small {
    float: right;
    color: grey;
    padding: 10px;
  }

  .post .post-image img, video {
    width: 100%;
    min-height: 150px;
    max-height: 350px;
    object-fit: cover;
    object-position: top center;
  }

  .post .post-title {
    padding: 10px;
  }

  .post .post-title h3 {
    display: inline;
  }

  .post .post-title ~ .post-actions {
    padding: 10px;
  }
  .like-button {
    background-image: url(../assets/like.png);
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: 5px center;
    background-color: #8a8a8a;
    width: 60px;
    height: 25px;
    padding-left: 23px;
    line-height: 10px;
    text-align: left;
    border: none;
  }

  .liked {
    background-image: url(../assets/like.png);
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: 5px center;
    width: 60px;
    height: 25px;
    padding-left: 23px;
    line-height: 10px;
    text-align: left;
    border: none;
    background-color: #01579b;
  }
</style>