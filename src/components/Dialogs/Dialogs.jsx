import React from 'react';
import Dialog from './Dialog/Dialog';
import ObjStyle from './Dialogs.module.css';
import Message from './Message/Message';
import SendMessageForm from './Message/SendMessageForm';

const Dialogs = ({ dialogsPage, sendMessage }) => {
  let DialogElements = dialogsPage.dialogs.map(d => <Dialog id={d.id} name={d.name} image={d.image} key={d.id} />);
  let MessageElements = dialogsPage.messages.map(m => <Message message={m.message} key={m.id} />);

  return (
    <div className={ObjStyle.dialogs}>
      <div className={ObjStyle.dialogItems}>
        {DialogElements}
      </div>
      <div className={ObjStyle.messageItems}>
        <div>
          {MessageElements}
        </div>
        <div className={ObjStyle.addMessage} >
        </div>
        <SendMessageForm sendMessage={sendMessage} />
      </div>
    </div >
  )
};
export default Dialogs;
