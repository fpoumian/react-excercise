import React, { Component } from 'react'
import App from '../../components/App'

class AppContainer extends Component {

  state = {
    isModalActive: false,
    post: {
      id: 1,
      title: 'Lorem Ipsum',
      body: 'Lorem Ipsum',
    }
  }

  handleModalCancel = () => {
    this.setState({
      isModalActive: false
    })
  }

  handleEditPostFormSubmit = ({title, body}) => {
    this.setState({
      post: {
        ...this.state.post,
        title,
        body
      },
      isModalActive: false
    })
  }

    render() {
    const { isModalActive, post } = this.state
    return (
      <App
        isModalActive={isModalActive}
        onModalCancel={this.handleModalCancel}
        onEditPostFormSubmit={this.handleEditPostFormSubmit}
        post={post}
      />
    )
  }
}

export default AppContainer
