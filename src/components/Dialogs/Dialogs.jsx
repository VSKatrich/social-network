import React from 'react';
import Dialog from './Dialog/Dialog';
import ObjStyle from './Dialogs.module.css'
import Massage from './Massage/Massage';
import SendMassageForm from './Massage/SendMassageForm';

const Dialogs = ({ dialogsPage, sendMassage }) => {
  let DialogElements = dialogsPage.dialogs.map(d => <Dialog id={d.id} name={d.name} image={d.image} key={d.id} />);
  let MassageElements = dialogsPage.massages.map(m => <Massage massage={m.massage} key={m.id} />);

  return (
    <div className={ObjStyle.dialogs}>
      <div className={ObjStyle.dialogItems}>
        {DialogElements}
      </div>
      <div className={ObjStyle.massageItems}>
        <div>
          {MassageElements}
        </div>
        <div className={ObjStyle.addMassage} >
        </div>
        <SendMassageForm sendMassage={sendMassage} />
      </div>
    </div >
  )
};
export default Dialogs;
