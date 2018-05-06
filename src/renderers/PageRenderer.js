import { Component } from 'preact';
import { getPageResources } from '../utils/router';
import { connect } from 'preact-redux';
import store from '../store/store';

const { dispatch } = store;

const mapState = state => ({
  data: state.data,
});

@connect(mapState)
export default class PageRenderer extends Component {
  state = {
    page: null,
    render: false,
    data: false,
  };

  componentDidMount() {
    const { routeData, page } = this.props;
    const render = getPageResources(page);

    if (routeData.component) {
      if (typeof routeData.component === 'function') {
        this.setPageComponent(routeData.component, render);
      } else {
        System.import(`../pages/${routeData.component}`).then(module =>
          this.setPageComponent(module.default, render)
        );
      }
    }

    dispatch({ type: 'data/loadDataAsync', payload: page });
  }

  shouldComponentUpdate(nextProps, nextState) {
    const pageResources = getPageResources(this.props.page);

    if (pageResources) {
      if (this.state.render === false) {
        this.setState({
          render: true,
          data: pageResources,
        });
      }

      return true;
    }

    return false;
  }

  setPageComponent = (component, render) => this.setState({ page: component, render });

  render() {
    const { data } = this.state;
    const Page = this.state.page;
    return this.state.render && <Page data={data} />;
  }
}
