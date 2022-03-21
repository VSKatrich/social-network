import { connect } from 'react-redux';
import { compose } from 'redux';
import { actions, InitialStateDialogsReducer } from '../../Redux/dialogs-reducer';
import { AppStateType } from '../../Redux/redux-store';
import Dialogs from './Dialogs';

type MapStateToPropsType = {
  dialogsPage: InitialStateDialogsReducer
}

type MapDispatchToPropsType = {
  sendMessage: (newMessageText: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    dialogsPage: state.dialogsPage
  }
};

let mapDispatchToProps = (dispatch: any): MapDispatchToPropsType => {
  return {
    sendMessage: (newMessageText) => dispatch(actions.sendMessage(newMessageText))
  }
};

export default compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps),
  // withAuthNavigate   ---- include!!
)(Dialogs)

