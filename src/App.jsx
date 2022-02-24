import React from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
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

class App extends React.Component {

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
            <Route path="/profile/:userId" element={<ProfileContainerHook />} />
            <Route path="/dialogs/" element={<DialogsContainer />} />
            <Route path="/news/" element={<News />} />
            <Route path="/music/" element={<Music />} />
            <Route path="/settings/" element={<Settings />} />
            <Route path="/users/" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  initialization: state.app.initialization
})

export default connect(mapStateToProps, { InitializationApp })(App);