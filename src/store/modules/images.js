import api from '../../api/imgur';
import { router } from '../../main';
// import qs from 'qs';
// import { router } from '../../main';

const state = {
  images: []
};

const getters = {
  allImages: state => state.images
};

const actions = {
  fetchImages: async ({ commit, rootState }) => {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    commit('setImages', response.data.data);
  },
  uploadImages: async ({ rootState }, files) => {
    const { token } = rootState.auth;
    await api.uploadImages(files, token).then(() => {
      router.push('/');
    });
  }
};

const mutations = {
  setImages: (state, images) => state.images = images
};

export default {
  state,
  getters,
  actions,
  mutations
}