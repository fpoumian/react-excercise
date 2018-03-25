import React, { Component } from 'react'
import MainForm from '../../components/MainForm'

class MainFormContainer extends Component {
  state = {
    id: '',
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`The value is ${this.state.id}`)
  }

  handleValueChange = ({ target: { value } }) => {
    this.setState({
      id: value,
    })
  }

  render() {
    return (
      <MainForm
        id={this.state.id}
        onChange={this.handleValueChange}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

export default MainFormContainer
