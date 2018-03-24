import React from 'react'
import PropTypes from 'prop-types'
import Button from "../Button/Button";

const Form = ({id}) => (
  <form>
    <input type={`text`} value={id}/>
    <Button onClick={() => alert('clicked!')} primary={true}>
      {`Edit`}
    </Button>
  </form>
)


Form.propTypes = {
  id: PropTypes.number,
}

export default Form