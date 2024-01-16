import { createStore } from 'vuex';
import * as state from './state';
import * as mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

const store = createStore({
  state: state.state,
  mutations: mutations.mutations,
  actions: actions.actions,
  getters: getters.getters,
});

export default store;