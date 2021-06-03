import React, { Component } from 'react';
import api from '../services/galleryApi';
import Button from './Button';
import Container from './Container';
import ImageGallery from './ImageGallery';
import MyLoader from './Loader';
import Notification from './Notification';
import Searchbar from './Searchbar';

class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    error: '',
    loader: false,
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
    this.setState({ loader: true });
    return api
      .findImage(query, page)
      .then((images) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }));
      })
      .finally(() => this.setState({ loader: false }));
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
    const { images, error, loader } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormData} />
        {error && <Notification message={error} />}
        <ImageGallery images={images} />
        {loader && <MyLoader />}
        {!loader && images[0] && <Button onClick={this.fetchImages} />}
      </Container>
    );
  }
}

export default App;
