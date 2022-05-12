import { Field, Form } from "react-final-form";
import { Input } from "../FormComponents/FormComponents";
import { required } from "../utils/validators/validators";
import { LoginFormDataType } from "./Login";
// import Styles from "./Styles";
import st from './Login.module.css';

type LoginFormType = {
  onSubmit: (formData: LoginFormDataType) => void
  errorMessage: Array<string> | null
}


const LoginForm = ({ onSubmit, errorMessage }: LoginFormType): JSX.Element => {
  return (
    <Form
      onSubmit={onSubmit}>
      {({ handleSubmit, pristine, form, submitting, submitError }) => (
        <form className={st.form} onSubmit={handleSubmit}>

          <Field placeholder={'Login'} name={'email'} component={Input} validate={required} />

          <div >
            <Field placeholder={'Password'} name={'password'} type="password" component={Input} validate={required} />
          </div>
          <div className={st.checkbox}>
            <Field type='checkbox' name={'rememberMe'} component='input' /> remember me
          </div>
          {(submitError || errorMessage) && <div className={st.errorMessage}> {submitError || errorMessage} </div>}
          <div className={st.buttons}>
            <button className={st.button} type="submit"
              disabled={submitting || pristine}
            >
              Login</button>
            <button
              className={st.button}
              type="button"
              onClick={() => form.reset()}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
        </form>
      )}
    </Form>
  )
};
export default LoginForm;
