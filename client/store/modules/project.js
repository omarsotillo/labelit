import { SET_ORIGINAL_PROJECT, SET_TO_BE_ADDED_PROJECT, ADD_LABEL, REMOVE_LABEL, EDIT_LABEL } from '../mutation-types';

const state = {
  projects: [
    {
      name: 'Prueba',
      recommended: true,
      labels: [
        {
          description: 'Prueba 1',
          color: 'ivory',
        },
        {
          description: 'Prueba 2',
          color: 'yellow',
        },
        {
          description: 'Prueba 3',
          color: 'red',
        },
        {
          description: 'Prueba 4',
          color: 'crimson',
        },
      ],
    },
    {
      name: 'Prueba 2',
      recommended: true,
      labels: [
        {
          description: 'Prueba 3',
          color: 'green',
        },
        {
          description: 'Prueba 4',
          color: 'purple',
        },
      ],
    },
  ],
  projectToBeAdded: {},
  projectOriginal: {},
  middlewareLabels: [],
};

const getters = {
  projects: state => state.projects,
  projectToBeAdded: state => state.projectToBeAdded,
  projectOriginal: state => state.projectOriginal,
  middlewareLabels: state => state.middlewareLabels,
};
const actions = {
  setOriginalProject({commit}, project) {
    commit('SET_ORIGINAL_PROJECT', project);
  },
  setToBeAddedProject({commit}, project) {
    commit('SET_TO_BE_ADDED_PROJECT', project);
  },
  addLabel({commit}, label) {
    commit('ADD_LABEL', label);
  },
  removeLabel({commit}, label) {
    commit('REMOVE_LABEL', label);
  },
  editLabel({commit}, {label, color, name}) {
    commit('EDIT_LABEL', {label, color, name});
  },
};
const mutations = {
  [SET_TO_BE_ADDED_PROJECT](state, project) {
    state.projectToBeAdded = project;
  },
  [SET_ORIGINAL_PROJECT](state, project) {
    state.projectOriginal = project;
  },
  [ADD_LABEL](state, payload) {
    const label = {
      color: payload.color,
      description: payload.description,
    };
    state.middlewareLabels.push(label);
  },
  [REMOVE_LABEL](state, label) {
    state.middlewareLabels.splice(state.middlewareLabels.indexOf(label), 1);
  },
  [EDIT_LABEL](state, {label, color, name}) {
    label.color = color;
    label.name = name;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
