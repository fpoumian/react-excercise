import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

const Form = ({id}) => (
  <section className={`main-form`}>
    <form>
      <div className={`main-form__wrapper`}>
        <label className={`main-form__label`}>{`Post ID`}</label>
        <input className={`input`} type={`text`} value={id}/>
        <div className={`main-form__btn-wrapper`}>
          <Button onClick={() => alert('clicked!')} primary>
          {`Edit`}
        </Button>
        </div>
      </div>
    </form>
  </section>
)

Form.propTypes = {
  id: PropTypes.number,
}

export default Form
