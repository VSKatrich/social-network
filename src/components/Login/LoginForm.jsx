import { Field, Form } from "react-final-form";
import { Input } from "../FormComponents/FormComponents";
import { required } from "../utils/validators/validators";


const LoginForm = (props) => {
  return (
    <Form
      onSubmit={props.onSubmit}>
      {({ handleSubmit, pristine, form, submitting, submitError }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field placeholder={'Login'} name={'email'} component={Input} validate={required} />
          </div>
          <div>
            <Field placeholder={'Password'} name={'password'} type="password" component={Input} validate={required} />
          </div>
          <div>
            <Field type={'Checkbox'} name={'rememberMe'} component={Input} /> remember me
          </div>
          {(submitError || props.errorMessage) && <div >{submitError || props.errorMessage} </div>}
          <div>
            <button type="submit" disabled={submitting} >Login</button>
          </div>
        </form>
      )}
    </Form>
  )
};
export default LoginForm;
