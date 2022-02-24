import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { sendMassage } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
};

export default compose(
  connect(mapStateToProps, { sendMassage }),
  withAuthNavigate
)(Dialogs)
