import React from 'react'
import PropTypes from 'prop-types'
import MainForm from "../MainForm";

const App = ({post: {id, title, body}}) => (
  <main className={`app__wrapper`}>
      <MainForm id={1}/>
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