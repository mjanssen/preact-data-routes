import { getResourcesForPage } from '../../utils/router';

export default {
  state: { data: {} }, // initial state
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
      const data = await getResourcesForPage(page, rootState.data);
      this.storeData(data);
    },
  },
};
