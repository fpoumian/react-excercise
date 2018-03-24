import React from 'react'
import PropTypes from 'prop-types'
import Form from "../Form/Form";

const App = ({post: {id, title, body}}) => (
  <div>
    <h1>{`Heading`}</h1>
    <Form id={1}/>
  </div>
)

App.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string
  })
}

export default App