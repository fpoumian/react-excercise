import React, { Component } from 'react'
import MainForm from '../../components/MainForm'

class MainFormContainer extends Component {
  state = {
    id: '',
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
    const result = await response.json()
    console.log(result)
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
        onSubmit={this.props.onSubmit}
      />
    )
  }
}

export default MainFormContainer
