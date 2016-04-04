import React, { Component } from 'react';
import Organisation from './Organisation';
import 'whatwg-fetch';

class AppContainer extends Component {

  constructor() {
    super();
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    fetch('./public/organisation.json')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({ people: responseData });
    })
    .catch((error) => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (
      <Organisation people={this.state.people} />
    );
  }
}

export default AppContainer;
