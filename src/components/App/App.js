import React from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import MainFormContainer from '../../containers/MainFormContainer'
import Modal from '../Modal/Modal'

const App = ({ post: { id, title, body }, isModalActive = false, onModalCancel }) => (
  <main className={`top-wrapper`}>
    <MainFormContainer id={1} />
    {isModalActive &&
      createPortal(
        <Modal title={`Editing: ${id}`} onCancel={onModalCancel}>
          <p>testing</p>
        </Modal>,
        document.getElementById('modal-root')
      )}
  </main>
)

App.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
  isModalActive: PropTypes.bool,
}

export default App
