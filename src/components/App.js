import React, { Component } from 'react';

class App extends Component {
  state = {
    // contacts: [],
    // filter: '',
  };

  // componentDidMount() {
  //   // eslint-disable-next-line
  //   const contacts = localStorage.getItem('contacts');
  //   if (contacts) {
  //     this.setState({ contacts: JSON.parse(contacts) });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const { contacts } = this.state;
  //   if (contacts !== prevState.contacts) {
  //     // eslint-disable-next-line
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }

  render() {
    return <h1>Hi</h1>;
  }
}

export default App;
