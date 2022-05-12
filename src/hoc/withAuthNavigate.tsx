import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppStateType } from "../Store/redux-store";

let mapStateToProps = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth
  }
}
type PropsType = ReturnType<typeof mapStateToProps>

export const withAuthNavigate = (WrappedComponent: React.ComponentType) => {
  const NavigateComponent = ({ isAuth, ...props }: PropsType): JSX.Element => {
    if (!isAuth) return <Navigate to='/login' />

    return <WrappedComponent {...props} />
  }

  const withAuthNavigateConnect = connect(mapStateToProps)(NavigateComponent);

  return withAuthNavigateConnect;
}

