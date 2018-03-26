import React, { Component } from 'react';
import App from '../../components/App';

const isPostIDValid = value => !isNaN(value) && value > 0;

class AppContainer extends Component {
  state = {
    isModalActive: false,
    post: null,
    errors: {},
  };

  handleModalCancel = () => {
    this.setState({
      isModalActive: false,
    });
  };

  handleMainFormSubmit = async (event, postId) => {
    event.preventDefault();

    // if postID is not valid
    // and error hasn't been added yet
    // abort value change
    // and add error to state
    if (!isPostIDValid(postId)) {
      if (this.state.errors['INVALID_POST_ID']) {
        return;
      }

      return this.setState({
        post: null,
        errors: {
          INVALID_POST_ID: {
            message: `The value you entered is not a not a valid Post ID.`,
          },
        },
      });
    }

    // if postID is valid then try to fetch post from APIA
    // if post is not found then add error to state and abort
    // otherwise add post to state and activate modal
    let response;
    let post;
    try {
      response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      if (response.status !== 200) {
        throw new Error();
      }
      post = await response.json();
    } catch (e) {
      return this.setState({
        post: null,
        errors: {
          RESOURCE_NOT_FOUND: {
            message: `Unable to fetch post with ID ${postId}.`,
          },
        },
      });
    }
    this.setState({
      isModalActive: true,
      post: {
        id: post.id,
        title: post.title,
        body: post.body,
      },
      errors: {},
    });
  };

  handleEditPostFormSubmit = ({ title, body }) => {
    this.setState({
      post: {
        ...this.state.post,
        title,
        body,
      },
      isModalActive: false,
    });
  };

  render() {
    const { isModalActive, post, errors } = this.state;
    return (
      <App
        isModalActive={isModalActive}
        onModalCancel={this.handleModalCancel}
        onEditPostFormSubmit={this.handleEditPostFormSubmit}
        onMainFormSubmit={this.handleMainFormSubmit}
        post={post}
        errors={errors}
      />
    );
  }
}

export default AppContainer;
