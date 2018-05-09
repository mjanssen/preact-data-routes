import { Component } from 'preact';
import { getPageResources } from '../utils/router';
import { connect } from 'unistore/preact';
import dataActions from '../store/actions/data';

class PageRenderer extends Component {
  state = {
    page: null,
    render: false,
    data: false,
  };

  componentDidMount() {
    const { routeData, page } = this.props;
    const hasResources = this.pageHasResources();
    const preloadedData = hasResources ? getPageResources(this.props.page) : true;
    const render = hasResources === false || (hasResources && preloadedData !== false);

    if (routeData.component) {
      if (typeof routeData.component === 'function') {
        this.setPageComponent(routeData.component, render, preloadedData);
      } else {
        import(`../pages/${routeData.component}`).then(module =>
          this.setPageComponent(module.default, render, preloadedData)
        );
      }
    }

    hasResources && preloadedData === false && this.props.loadDataAsync(page);
  }

  pageHasResources = () => (typeof this.props.routeData.data === 'undefined' ? false : true);

  shouldComponentUpdate(nextProps, nextState) {
    const pageResources = this.pageHasResources() ? getPageResources(this.props.page) : false;

    if (pageResources) {
      if (this.state.render === false) {
        this.setState({
          render: true,
          data: pageResources,
        });
      }

      return true;
    }

    return true;
  }

  setPageComponent = (component, render, data) => {
    this.setState({ page: component, render, data });
  };

  render() {
    const { data } = this.state;
    const Page = this.state.page;

    return this.state.render && <Page data={data} />;
  }
}

export default connect('data', dataActions)(PageRenderer);
