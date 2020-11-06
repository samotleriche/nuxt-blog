<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div>Word of the Day</div>
      <p class="display-1 text--primary">
        {{ post.cons }}
      </p>
      <p>adjective</p>
      <div class="text--primary">
        well meaning and kindly.<br>
        "a benevolent smile"
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
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      words : [
        {
          id: 'idiomatic',
          cons: 'id•i•o•mat•ic',
          pronounce: 'ˌidēəˈmadik',
          pos: 'adjective',
          def: [
            'using, containing, or denoting expressions that are natural to a native speaker',
            'appropriate to the style of art or music associated with a particular period, individual, or group'
          ]
        },
        {
          id: 'idolatry',
          cons: 'i•dol•a•try',
          pronounce: 'īˈdälətrē',
          pos: 'noun',
          def: [
            'extreme admiration, love, or reverence for something or someone'
          ]
        }
      ]
    }
  },
  computed: {
    post() {
      return this.words.find(post => post.id === this.id)
    }
  }
}
</script>

<style>

</style>
