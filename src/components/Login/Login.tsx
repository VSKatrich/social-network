import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../Store/auth-reducer";
import { AppStateType } from "../../Store/redux-store";
import LoginForm from "./LoginForm";
import st from './Login.module.css';

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
    <div className={st.box} >
      <LoginForm onSubmit={onSubmit} errorMessage={errorMessage} />
    </div>
  )
}

const mapStateToProps = (state: AppStateType): StateToPropsType => ({
  isAuth: state.auth.isAuth,
  errorMessage: state.auth.errorMessage
})
export default connect<StateToPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, { login })(Login);
