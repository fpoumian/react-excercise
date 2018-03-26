import React from 'react'
import ReactDOM from 'react-dom'
import EditPostForm from './EditPostForm'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <EditPostForm
      form={{ id: 1, title: 'Lorem Ipsum', body: 'Lorem Ipsum' }}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
