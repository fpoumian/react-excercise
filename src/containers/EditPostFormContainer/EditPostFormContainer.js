import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditPostForm from '../../components/EditPostForm/EditPostForm';

class EditPostFormContainer extends Component {
  state = {
    form: {
      title: '',
      body: '',
    },
  };

  componentDidMount() {
    const { post: { title, body } } = this.props;
    this.setState({
      form: {
        title,
        body,
      },
    });
  }

  handleFieldChange = ({ target: { value } }, field) => {
    this.setState({
      form: {
        ...this.state.form,
        [field]: value,
      },
    });
  };

  render() {
    return (
      <EditPostForm
        form={this.state.form}
        onFieldChange={this.handleFieldChange}
        onSubmit={this.props.onSubmit}
        onCancel={this.props.onCancel}
      />
    );
  }
}

EditPostFormContainer.propTypes = {
  post: PropTypes.object,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
};

export default EditPostFormContainer;
