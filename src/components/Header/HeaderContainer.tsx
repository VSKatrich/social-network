import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logout } from '../../Store/auth-reducer'
import { AppStateType } from '../../Store/redux-store';

type HeaderContainerType = {
  isAuth: boolean
  login: string | null
  logout: () => void
}

class HeaderContainer extends React.Component<HeaderContainerType> {
  render() {
    return (
      <Header
        isAuth={this.props.isAuth}
        login={this.props.login}
        logout={this.props.logout}
      />
    )
  }
};

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, { logout })(HeaderContainer);