import { fetchResourcesForPage } from '../../utils/router';

export default {
  async loadDataAsync(state, page) {
    const data = await fetchResourcesForPage(page, state.data);
    return { data: { ...state.data, ...data } };
  },
};
