<template>
<v-row>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div>Word of the Day</div>
      <p class="display-1 text--primary">
        {{ post.cons }}
      </p>
      <p>{{ post.pos }}</p>
      <div class="text--primary">
        {{ post.def[0]}}<br><br>
        {{ post.def[1] !== null ? post.def[1] : ''}}
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
    <v-card-text v-for="(item, i) in relatedWords" :key='item.id'>
      <nuxt-link :to="'/words/' + item.id">{{ i+1 }}. {{ item.id }}</nuxt-link>
    </v-card-text>
  </v-card>
</v-row>


</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      words : []
    }
  },
  head() {
    return {
      title: this.post.id,
      meta: [
        { name: 'twitter:title', content: this.post.id},
        { name: 'twitter:description', content: this.post.def[0]},
        { name: 'twitter:image', content: 'https://evepheso.files.wordpress.com/2019/12/vocab.jpg'},
        { name: 'twitter:card', content: 'summary_large_image'},

      ]
    }
  },
  computed: {
    post() {
      return this.$store.state.words.all.find(post => post.id === this.id)
    },
    relatedWords() {
      return this.$store.state.words.all.filter(post => post.id !== this.id)
    }
  }
}
</script>

<style>

</style>
