<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <h1>Vocabx.io</h1>
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
          <p>
            For more information on Vuetify, check out the <a
              href="https://vuetifyjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>.
          </p>

          <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>

          <ul>
            <li v-for="post in posts" :key="post.id">
              {{ post.title }}
            </li>
          </ul>

        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head(){
    return {
      title: '🥶',
      meta: [
        { name: 'twitter:title', content: "Tomas Resume Home"},
        { name: 'twitter:description', content: "Nuxt + Vue Rocks!"},
        { name: 'twitter:image', content: 'https://evepheso.files.wordpress.com/2019/12/vocab.jpg'},
        { name: 'twitter:card', content: 'summary_large_image'},
      ]
    }
  },
  async fetch({store}) {
    await store.dispatch('posts/fetchAllPosts')
  },
  computed: {
    posts() {
      return this.$store.state.posts.all
    }
  }
}
</script>

<style>

</style>
