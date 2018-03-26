import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const EditPostForm = ({
  form: { title, body },
  onSubmit,
  onFieldChange,
  onCancel,
}) => (
  <section className={`form edit-post-form`}>
    <form onSubmit={e => e.preventDefault()}>
      <div className={`form__wrapper edit-post-form__wrapper`}>
        <div className={`form__field edit-post-form__field`}>
          <label className={`form__field__label`}>{`Title`}</label>
          <input
            type={`text`}
            className={`input`}
            value={title}
            onChange={e => onFieldChange(e, 'title')}
          />
        </div>
        <div className={`form__field edit-post-form__field`}>
          <label className={`form__field__label`}>{`Body`}</label>
          <textarea
            className={`input`}
            value={body}
            onChange={e => onFieldChange(e, 'body')}
            rows={8}
          />
        </div>
        <div className={`form__btn-wrapper`}>
          <Button onClick={() => onSubmit({ title, body })} primary>
            {`Save`}
          </Button>
          <Button onClick={() => onCancel()}>{`Cancel`}</Button>
        </div>
      </div>
    </form>
  </section>
);

EditPostForm.propTypes = {
  form: PropTypes.object,
  onSubmit: PropTypes.func,
  onFieldChange: PropTypes.func,
  onCancel: PropTypes.func,
};

export default EditPostForm;
