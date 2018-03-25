import React, { Component } from 'react'
import App from '../../components/App'

class AppContainer extends Component {

  state = {
    isModalActive: true
  }

  handleModalCancel = () => {
    this.setState({
      isModalActive: false
    })
  }

    render() {
    const { isModalActive } = this.state
    return (
      <App
        isModalActive={isModalActive}
        onModalCancel={this.handleModalCancel}
        post={{
          id: 1,
          title: 'Lorem Ipsum',
          body: 'Lorem Ipsum',
        }}
      />
    )
  }
}

export default AppContainer
