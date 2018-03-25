import React, { Component } from 'react'
import App from '../../components/App'

class AppContainer extends Component {
  render() {
    return (
      <App
        post={{
          id: 1,
          title: 'Lorem Ipsum',
          body: 'Lorem Ipsum',
          isModalActive: true,
        }}
      />
    )
  }
}

export default AppContainer
