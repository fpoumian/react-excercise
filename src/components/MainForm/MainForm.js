import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

const MainForm = ({id, onSubmit, onChange}) => (
  <section className={`main-form`}>
    <form onSubmit={e => e.preventDefault() }>
      <div className={`main-form__wrapper`}>
        <label className={`main-form__label`}>{`Post ID`}</label>
        <input className={`input`} type={`number`} value={id} onChange={e => onChange(e)}/>
        <div className={`main-form__btn-wrapper`}>
          <Button onClick={onSubmit} primary>
          {`Edit`}
        </Button>
        </div>
      </div>
    </form>
  </section>
)

MainForm.propTypes = {
  id: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
}

export default MainForm
