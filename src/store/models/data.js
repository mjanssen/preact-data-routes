import { fetchResourcesForPage } from '../../utils/router';

export default {
  state: {},
  reducers: {
    // handle state changes with pure functions
    storeData(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    async loadDataAsync(page, rootState) {
      const data = await fetchResourcesForPage(page, rootState.data);
      this.storeData(data);
    },
  },
};
