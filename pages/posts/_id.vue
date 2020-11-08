<template>
<v-row>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div>Word of the Day</div>
      <p class="display-1 text--primary">
        {{ post.id }}
      </p>
      <p>{{ post.title }}</p>
      <div class="text--primary">
        {{ post.body}}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Learn More
      </v-btn>
    </v-card-actions>
  </v-card>
  <v-card
    class="mx-auto px-5"
    max-width="344"
  >
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Learn More
      </v-btn>
    </v-card-actions>
  </v-card>
</v-row>


</template>

<script>

export default {
  data() {
    return {
      id: this.$route.params.id,
      post : []
    }
  },
  head() {
    return {
      title: this.post.id,
      meta: [
        { name: 'og:title', content: this.post.id},
        { name: 'og:description', content: this.post.body},
        { name: 'og:image', content: 'https://evepheso.files.wordpress.com/2019/12/vocab.jpg'},
        { name: 'og:card', content: 'summary_large_image'},
        { name: 'og:url', content: `https://nuxt-blog-tleriche.herokuapp.com${this.route}`},

      ]
    }
  },
  async asyncData({params, route, $axios}) {
    console.log(route);
    let response = await $axios.$get('https://jsonplaceholder.typicode.com/posts/' + params.id)
    return {post: response, route: route.fullPath}
  }
  // mounted () {
  //   fetch('https://jsonplaceholder.typicode.com/posts/' + this.id)
  //     .then((response) => {
  //       response.json().then(post => {
  //         this.post = post;
  //         console.log(this.post);
  //       })
  //   })
  // }
}
</script>

<style>

</style>
