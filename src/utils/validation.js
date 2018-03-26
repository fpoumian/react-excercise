const isPostIDValid = (value) => {
  return (!isNaN(value) || value > 0)
}

export {isPostIDValid}
