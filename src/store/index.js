// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
    posts: [],
    profile: [],
    user: [],
}

//to handle state
const getters = {
    postSelected: (state) => (id) => {
        return state.posts.selected.indexOf(id) > -1
    }
}

//to handle actions
const actions = {
    getUser({ commit }){
        axios.get('https://private-517bb-wad20postit.apiary-mock.com/users/1')
            .then(response => {
                commit('SET_USER', response.data)
            })
    },
    getProfiles({ commit }){
        axios.get('https://private-517bb-wad20postit.apiary-mock.com/profiles')
            .then(response => {
                commit('SET_PROFILES', response.data)
            })

    },
    getPosts({ commit }) {
        axios.get('https://private-anon-0457f21cf7-wad20postit.apiary-mock.com/posts')
            .then(response => {
                commit('SET_POSTS', response.data)
            })
    }
}

//to handle mutations
const mutations = {
    SET_USER(state, user){
        state.user = user
    },
    SET_POSTS(state, posts) {
        state.posts = posts
    },
    SET_PROFILES(state, profiles){
        state.profiles = profiles
    },
    toggleItem: (state, id) => {
        let index = state.posts.selected.indexOf(id);

        if (index > -1) {
            state.posts.selected.splice(index, 1);
            return false;
        }

        state.posts.selected.push(id);
        return true;
    }
}

//export store module
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})