export const required = value => (value ? undefined : 'field is required')

export const maxLengthCreator = (maxLength) => (value) => {
  return (
    value && value.length > maxLength ? `max lenth ${maxLength}` : undefined
  )
}

// export const minValue = min => value => {
//   return (
//     isNaN(value) || value.length >= min ? undefined : `Should be greater than ${min}`
//   )
// }

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)



