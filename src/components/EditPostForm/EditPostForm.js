import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

const EditPostForm = ({ form: { title, body }, onSubmit, onFieldChange }) => (
  <section className={`main-form`}>
    <form onSubmit={e => e.preventDefault()}>
      <div className={`main-form__wrapper`}>
        <div className={`main-form__field`}>
          <label className={`main-form__field__label`}>{`Title`}</label>
          <input
            type={`text`}
            className={`input`}
            value={title}
            onChange={e => onFieldChange(e, 'title')}
          />
        </div>
        <div className={`main-form__field`}>
          <label className={`main-form__field__label`}>{`Body`}</label>
          <textarea
            className={`input`}
            value={body}
            onChange={e => onFieldChange(e, 'body')}
          />
        </div>
        <div className={`main-form__btn-wrapper`}>
          <Button onClick={() => onSubmit({title, body})} primary>
            {`Edit`}
          </Button>
        </div>
      </div>
    </form>
  </section>
)

EditPostForm.propTypes = {
  id: PropTypes.string,
  onSubmit: PropTypes.func,
  onTitleChange: PropTypes.func,
}

export default EditPostForm
