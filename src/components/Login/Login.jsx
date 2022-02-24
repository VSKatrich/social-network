import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "./../../Redux/auth-reducer";
import LoginForm from "./LoginForm";

const Login = (props) => {

  const onSubmit = async (formData, form) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) return <Navigate to='/profile/me' />

  return (
    <div>
      <h1> Login </h1>
      <LoginForm onSubmit={onSubmit} errorMessage={props.errorMessage} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  errorMessage: state.auth.errorMessage
})
export default connect(mapStateToProps, { login })(Login);
