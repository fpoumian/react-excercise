import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import MainFormContainer from '../../containers/MainFormContainer';
import Modal from '../Modal/Modal';
import EditPostFormContainer from '../../containers/EditPostFormContainer';
import Post from '../Post/Post';

const App = ({
  post,
  isModalActive = false,
  onModalCancel,
  onEditPostFormSubmit,
  onMainFormSubmit,
  errors = {},
}) => (
  <main className={`top-wrapper`}>
    <div className={`content-wrapper`}>
      <MainFormContainer id={1} onSubmit={onMainFormSubmit} errors={errors} />
      {post && <Post title={post.title} body={post.body} />}
    </div>
    {(isModalActive && post) &&
      createPortal(
        <Modal title={`Editing: ${post.id}`} onCancel={onModalCancel}>
          <EditPostFormContainer
            post={{ title: post.title, body: post.body }}
            onSubmit={onEditPostFormSubmit}
            onCancel={onModalCancel}
          />
        </Modal>,
        document.getElementById('modal-root')
      )}
  </main>
);

App.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
  isModalActive: PropTypes.bool,
  onModalCancel: PropTypes.func,
  onEditPostFormSubmit: PropTypes.func,
  onMainFormSubmit: PropTypes.func,
  errors: PropTypes.object,
};

export default App;
