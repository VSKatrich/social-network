import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export const withAuthNavigate = (Component) => {
  const NavigateComponent = (props) => {
    if (!props.isAuth) return <Navigate to='/login' />

    return <Component {...props} />
  }

  const withAuthNavigateConnect = connect(mapStateToProps)(NavigateComponent);

  return withAuthNavigateConnect;
}

