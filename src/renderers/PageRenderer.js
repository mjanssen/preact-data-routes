import { Component } from 'preact';
import { getResourcesForPage } from '../utils/router';
import store from '../store/store';

const { dispatch } = store;

export default class PageRenderer extends Component {
  state = {
    page: null,
    render: false,
    data: false,
  };

  componentDidMount() {
    const { routeData, page } = this.props;

    if (routeData.component) {
      if (typeof routeData.component === 'function') {
        this.setPageComponent(routeData.component);
      } else {
        System.import(`../pages/${routeData.component}`).then(module =>
          this.setPageComponent(module.default)
        );
      }
    }

    dispatch({ type: 'data/loadDataAsync', payload: page });

    // getResourcesForPage(page).then(data => {
    //   if (data.resourcesLoaded) {
    //     this.updateDataState(data, true);
    //   }
    // });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('this.props', this.props);
    Object.keys(store.getState().data).forEach(url => {});
    console.log('nextProps', nextProps);
    //   if (nextState.render) {
    //     return true;
    //   }

    //   getResourcesForPage(this.props.page).then(data => {
    //     if (data.resourcesLoaded && this.state.render === false) {
    //       this.updateDataState(data, true);
    //       return true;
    //     }

    //     return true;
    //   });

    //   return true;
  }

  setPageComponent = component => this.setState({ page: component });
  updateDataState = (data, render = false) => this.setState({ data, render });

  render() {
    const { data } = this.state;
    const Page = this.state.page;
    return this.state.render && <Page data={data.pageData} />;
  }
}
