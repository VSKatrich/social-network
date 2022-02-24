import style from './FormComponents.module.css'

export const Textarea = ({ input, meta: { error, touched } }) => {
  return (
    <div className={style.formComponent + ' ' + (error && touched ? style.error : ' ')}>
      <textarea {...input} />
      {
        error && touched &&
        <div>
          <span>{error}</span>
        </div>
      }
    </div >
  )
}

export const Input = ({ input, meta: { error, touched } }) => {
  return (
    <div className={style.formComponent + ' ' + (error && touched ? style.error : ' ')}>
      <input {...input} />
      {error && touched &&
        <div>
          <span>{error}</span>
        </div>}
    </div>
  )
}