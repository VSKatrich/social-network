import { Field, Form } from "react-final-form";
import { Input } from "../FormComponents/FormComponents";
import { required } from "../utils/validators/validators";
import { LoginFormDataType } from "./Login";
import Styles from "./Styles";

type LoginFormType = {
  onSubmit: (formData: LoginFormDataType) => void
  errorMessage: Array<string> | null
}


const LoginForm = ({ onSubmit, errorMessage }: LoginFormType): JSX.Element => {
  return (
    <Styles>
      <h1> Login </h1>
      <Form
        onSubmit={onSubmit}>
        {({ handleSubmit, pristine, form, submitting, submitError }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field placeholder={'Login'} name={'email'} component={Input} validate={required} />
            </div>
            <div>
              <Field placeholder={'Password'} name={'password'} type="password" component={Input} validate={required} />
            </div>
            <div>
              <Field type='checkbox' name={'rememberMe'} component='input' /> remember me
            </div>
            {(submitError || errorMessage) && <div className='errorMessage'> {submitError || errorMessage} </div>}
            <div className='buttons'>
              <button type="submit"
                disabled={submitting || pristine}
              >
                Login</button>
              {/* <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button> */}
            </div>
          </form>
        )}
      </Form>
    </Styles>
  )
};
export default LoginForm;
