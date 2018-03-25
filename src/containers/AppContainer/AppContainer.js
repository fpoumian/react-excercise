import React, { Component } from 'react'
import App from '../../components/App'

class AppContainer extends Component {

  state = {
    isModalActive: false,
    post: null
  }

  handleModalCancel = () => {
    this.setState({
      isModalActive: false
    })
  }

  handleMainFormSubmit = async (event, postId) => {
    event.preventDefault()
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const { body, id, title } = await response.json()
    this.setState({
      isModalActive: true,
      post: {
        id,
        title,
        body,
      }
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
        onMainFormSubmit={this.handleMainFormSubmit}
        post={post}
      />
    )
  }
}

export default AppContainer
