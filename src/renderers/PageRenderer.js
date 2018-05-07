import { Component } from 'preact';
import { getPageResources } from '../utils/router';
import { connect } from 'preact-redux';
import store from '../store/store';

const { dispatch } = store;

const mapState = state => ({
  data: state.data,
});

class PageRenderer extends Component {
  state = {
    page: null,
    render: false,
    data: false,
  };

  componentDidMount() {
    const { routeData, page } = this.props;
    const hasResources = this.pageHasResources();
    const render = !hasResources;

    if (routeData.component) {
      if (typeof routeData.component === 'function') {
        this.setPageComponent(routeData.component, render);
      } else {
        import(`../pages/${routeData.component}`).then(module =>
          this.setPageComponent(module.default, render)
        );
      }
    }

    hasResources && dispatch({ type: 'data/loadDataAsync', payload: page });
  }

  pageHasResources = () =>
    typeof this.props.page.data === 'undefined' ? false : getPageResources(this.props.page);

  shouldComponentUpdate(nextProps, nextState) {
    const pageResources = this.pageHasResources() ? false : getPageResources(this.props.page);

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

  setPageComponent = (component, render) => {
    this.setState({ page: component, render });
  };

  render() {
    const { data } = this.state;
    const Page = this.state.page;
    console.log('this.state', this.state);
    return this.state.render && <Page data={data} />;
  }
}

export default connect(mapState)(PageRenderer);
