import React, { Component } from 'react';
import api from '../services/galleryApi';
import Container from './Container';
import ImageGallery from './ImageGallery';
import Notification from './Notification';
import Searchbar from './Searchbar';

class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    error: '',
  };

  //  async componentDidMount() {
  //     // eslint-disable-next-line
  //     const images = await api.findImage(this.state.query, this.state.page);
  //     // if (contacts) {
  //       this.setState({ images });
  //     // }
  //   }

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query) {
      const images = await api
        .findImage(query, page)
        // eslint-disable-next-line
        .catch(error => this.setState({ error }));
      // eslint-disable-next-line
      this.setState({ images });
    }
  }

  handleFormData = ({ query }) => {
    this.setState({
      page: 1,
      query,
      images: [],
      error: '',
    });
  };

  render() {
    const { images, error } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormData} />
        {error && <Notification message={error} />}
        <ImageGallery images={images} />
      </Container>
    );
  }
}

export default App;
