import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainForm from '../../components/MainForm';

class MainFormContainer extends Component {
  state = {
    id: '',
  };

  handleValueChange = ({ target: { value } }) => {
    this.setState({
      id: value,
    });
  };

  render() {
    return (
      <MainForm
        id={this.state.id}
        onChange={this.handleValueChange}
        onSubmit={this.props.onSubmit}
        errors={this.props.errors}
      />
    );
  }
}

MainFormContainer.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

export default MainFormContainer;
