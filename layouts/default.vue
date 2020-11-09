<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="true"
      permanent
      left
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in posts"
          :key="i"
          :to="'/words/'+item.id"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-book</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.id" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="true"
      fixed
      app
    >
    <v-badge
      :content="1"
      :value="true"
      color="red"
      overlap
    >
      <v-avatar
        color="teal"
        rounded
        size="40"
      >TL</v-avatar>
    </v-badge>
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>

      <v-toolbar-title v-text="title" />


      <div class="text-center mx-4">
        <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-avatar
          tile
          v-bind="attrs"
          v-on="on"
          @click="$vuetify.theme.dark = !$vuetify.theme.dark; lightMode = !lightMode"
          >
            <v-icon
            large
              :color="!lightMode ? 'yellow' : 'blue'"
            >
              mdi-{{ !lightMode ? "white-balance-sunny" : "moon-waxing-crescent" }}
            </v-icon>
          </v-avatar>
        </template>
        <span>Toggle Theme</span>
        </v-tooltip>
      </div>

      <v-spacer />

      <div class="text-center mx-1">
        <a href="https://www.linkedin.com/in/tomasleriche/">
        <v-avatar
          tile
          color="blue"
        >
          <v-icon dark>
            mdi-linkedin
          </v-icon>
        </v-avatar>
        </a>
      </div>

      <div class="text-center mx-1">
        <a href="https://github.com/samotleriche">
        <v-avatar
          tile
          color="blue"
        >
          <v-icon dark>
            mdi-github
          </v-icon>
        </v-avatar>
        </a>
      </div>
    </v-app-bar>


    <v-main>
      <v-container>
        <v-alert v-if="$nuxt.isOffline" type="error">
          You're Currently Offline. Check your connection.
        </v-alert>
        <v-btn @click="refresh">
          Refresh
        </v-btn>
        <nuxt />
      </v-container>
    </v-main>

    <v-navigation-drawer
      v-model="rightDrawer"
      left
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-home
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer
      :absolute="true"
      app
    >
      <v-row
      justify="center"
      no-gutters
    >
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vocabx.io',
      messages: 0,
      lightMode: false
    }
  },
  computed: {
    posts() {
      return this.$store.state.words.all;
    }
  },
  methods: {
    refresh() {
      this.$nuxt.refresh()
    }
  }
}
</script>
