import React from 'react'
import PropTypes from 'prop-types'
import MainFormContainer from "../../containers/MainFormContainer";

const App = ({post: {id, title, body}}) => (
  <main className={`top-wrapper`}>
      <MainFormContainer id={1}/>
  </main>
)

App.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string
  })
}

export default App