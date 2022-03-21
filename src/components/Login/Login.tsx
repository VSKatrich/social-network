import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../Redux/auth-reducer";
import { AppStateType } from "../../Redux/redux-store";
import LoginForm from "./LoginForm";

type StateToPropsType = {
  isAuth: boolean
  errorMessage: Array<string> | null
}
type DispatchPropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void
}
export type LoginFormDataType = {
  email: string
  password: string
  rememberMe: boolean
}

const Login = ({ login, isAuth, errorMessage }: StateToPropsType & DispatchPropsType): JSX.Element => {

  const onSubmit = async (formData: LoginFormDataType) => {
    login(formData.email, formData.password, formData.rememberMe)
  }

  if (isAuth) return <Navigate to='/profile/me' />

  return (
    <div>
      <LoginForm onSubmit={onSubmit} errorMessage={errorMessage} />
    </div>
  )
}

const mapStateToProps = (state: AppStateType): StateToPropsType => ({
  isAuth: state.auth.isAuth,
  errorMessage: state.auth.errorMessage
})
export default connect<StateToPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, { login })(Login);
