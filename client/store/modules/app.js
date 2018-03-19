import { SET_STATE } from '../mutation-types';

const state = {
  appState: 'loading',
};

const getters = {
  appState: state => state.appState,
};

const mutations = {
  [SET_STATE](state, appState) {
    state.appState = appState;
  },
};

const actions = {
  setState({ commit }, appState) {
    commit('SET_STATE', appState);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
