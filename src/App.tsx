import React from 'react';
import { connect } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Preloader from './components/common/preloader/Preloader';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainerHook from './components/Profile/ProfileContainerHook';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { InitializationApp } from './Redux/app-reducer';
import { AppStateType } from './Redux/redux-store';

type StateToProps = ReturnType<typeof mapStateToProps>
type DispatchToProps = {
  InitializationApp: () => void
}

class App extends React.Component<StateToProps & DispatchToProps> {


  componentDidMount() {
    this.props.InitializationApp();
  }

  render() {
    if (!this.props.initialization) return <Preloader />

    return (
      <div className='app-wrapper' >
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/" element={<Navigate to='/profile/me' />} />
            <Route path="/profile/:userId" element={<ProfileContainerHook />} />
            <Route path="/dialogs/" element={<DialogsContainer />} />
            <Route path="/news/" element={<News />} />
            <Route path="/music/" element={<Music />} />
            <Route path="/settings/" element={<Settings />} />
            <Route path="/users/" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<div>Sorry, this page isn't available. </div>} />
          </Routes>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state: AppStateType) => ({
  initialization: state.app.initialization
})

export default connect(mapStateToProps, { InitializationApp })(App);
