import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';

const state = {
  token: window.localStorage.getItem('token')
};

const getters = {
  isLoggedIn: state => !!state.token
};

const actions = {
  login: () => {
    api.login();
  },
  finalizeLogin: ({ commit }, hash) => {
    const parsedHash = qs.parse(hash.replace('#', ''));
    window.localStorage.setItem('token', parsedHash.access_token);
    commit('setToken', parsedHash.access_token);
    router.push('/');
  },
  logout: ({ commit }) => {
    window.localStorage.removeItem('token');
    commit('setToken', null)
  }

};

const mutations = {
  setToken: (state, token) => state.token = token
};

export default {
  state,
  getters,
  actions,
  mutations
}