export const required = value => (value ? undefined : 'field is required')

export const maxLengthCreator = (maxLength) => (value) => {
  return (
    value && value.length > maxLength ? `max lenth ${maxLength}` : undefined
  )
}

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)



