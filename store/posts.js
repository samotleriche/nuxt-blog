export const state = () => ({
  all: []
})

export const actions = {
  async fetchAllPosts ({commit}) {

    let posts = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts')

    commit('setPosts', posts)
  },

  async fetchPost ({commit}, id) {
    let post = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts/'+id)
    commit('setPost', post);
  }
}

export const mutations = {
  setPost (state, post) {
    state.all.push(post);
  },
  setPosts (state, posts) {
    state.all = posts;
  }
}
