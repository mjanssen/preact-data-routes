import { Container } from 'unstated';

class DataStore extends Container {
  state = {};

  get(key, url) {
    return this.state[url];
  }

  save(url, data) {
    this.setState({
      [url]: data,
    });
  }

  load(key, url) {
    return fetch(url)
      .then(data => data.json())
      .then(json => this.setState({ [url]: [key], data: { ...this.state.data, [key]: json } }));
  }
}

export default new DataStore();
