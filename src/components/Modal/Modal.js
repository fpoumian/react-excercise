import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ children, title, onCancel }) => (
  <dialog className={`modal`}>
    <div className={`modal__outer-wrapper`}>
      <div className={`modal__top-bar`}>
        <div className="modal__top-bar-wrapper">
          <div className="modal__top-bar-left">{title}</div>
          <div className="modal__top-bar-right">
            <div
              className={`modal__top-bar-close-btn`}
              onClick={() => onCancel()}
            >{`X`}</div>
          </div>
        </div>
      </div>
      <div className="modal__inner-wrapper">{children}</div>
    </div>
  </dialog>
);

Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  onCancel: PropTypes.func,
};

export default Modal;
