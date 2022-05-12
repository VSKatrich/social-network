import React from 'react'
import { FieldRenderProps } from 'react-final-form'
import style from './FormComponents.module.css'
import st from './../Login/Login.module.css'

type InputProps = FieldRenderProps<string, any>

export const Textarea = ({ input, meta: { error, touched } }: InputProps): JSX.Element => {
  return (
    <div className={style.formComponent + ' ' + (error && touched ? style.error : ' ')}>
      <textarea {...input} />
      {
        error && touched &&
        <div className={st.errorMessage}>
          {error}
        </div>
      }
    </div >
  )
}

export const Input = ({ input: { ...input }, meta: { error, touched } }: InputProps): JSX.Element => {
  return (
    <div className={style.formComponent + ' ' + (error && touched ? style.error : ' ')}>
      <input {...input} />
      {error && touched &&
        <div className={st.errorMessage}>
          {error}
        </div>}
    </div>
  )
}