import React, { Component } from 'react';
import api from '../services/galleryApi';
import Button from './Button';
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

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (query !== prevState.query) {
      this.fetchImages()
        // eslint-disable-next-line
        .catch(error => this.setState({ error }));
    }
    // eslint-disable-next-line
    window.scrollTo({
      // eslint-disable-next-line
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  fetchImages = () => {
    const { query, page } = this.state;
    return api.findImage(query, page).then((images) => {
      this.setState((prevState) => ({
        images: [...prevState.images, ...images],
        page: prevState.page + 1,
      }));
    });
  };

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
        {images[0] && <Button onClick={this.fetchImages} />}
      </Container>
    );
  }
}

export default App;
