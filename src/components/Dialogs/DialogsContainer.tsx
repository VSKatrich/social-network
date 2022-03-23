import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { actions, InitialStateDialogsReducer } from '../../Redux/dialogs-reducer';
import { AppStateType } from '../../Redux/redux-store';
import Dialogs from './Dialogs';

let mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage
  }
};

export default compose<React.ComponentType>(
  connect(
    mapStateToProps, { sendMessage: actions.sendMessage }),
  withAuthNavigate
)(Dialogs)

