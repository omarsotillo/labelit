import { SET_TOKEN, TOGGLE_AUTHENTICATE } from '../mutation-types';

const state = {
  isAuthenticated: false,
  token: window.localStorage.getItem('githubAuthToken') || ''
};
const getters = {
  isAuthenticated: state => state.isAuthenticated,
};
const mutations = {
  [SET_TOKEN](state, token) {
    this.token = token;
  },
  [TOGGLE_AUTHENTICATE](state, authState) {
    this.isAuthenticated = authState;
  },
};
const actions = {
  login({commit}){
    const url = 
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
