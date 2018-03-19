import Vue from 'vue';
import Vuex from 'vuex';

// Vuex
import actions from './actions';
import user from './modules/auth';
import project from './modules/project';
import app from './modules/app';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    project,
    user,
    app,
  },
  actions,
});

export default store;
