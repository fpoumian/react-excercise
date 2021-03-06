import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const MainForm = ({ id, onSubmit, onChange, errors = {} }) => (
  <section className={`form main-form`}>
    <form onSubmit={e => e.preventDefault()}>
      <div className={`form__wrapper main-form__wrapper`}>
        <div className={`form__field`}>
          <label className={`form__field__label`}>{`Post ID`}</label>
          <input
            className={`input`}
            type={`text`}
            value={id}
            onChange={e => onChange(e)}
            placeholder={`Enter a valid Post ID`}
          />
        </div>
        <div className={`form__btn-wrapper`}>
          <Button onClick={e => onSubmit(e, id)} primary>
            {`Edit`}
          </Button>
        </div>
      </div>
      {// if there are any errors in state show them
      Object.keys(errors).length > 0 && (
        <ul className={`error-list`}>
          {Object.keys(errors).map((errorKey, index) => (
            <li key={index} className={`error`}>
              {errors[errorKey].message}
            </li>
          ))}
        </ul>
      )}
    </form>
  </section>
);

MainForm.propTypes = {
  id: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  errors: PropTypes.object,
};

export default MainForm;
