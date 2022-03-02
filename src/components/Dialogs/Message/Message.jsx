import ObjStyle from './../Dialogs.module.css'

const Message = (props) => {
  return (
    <div className={ObjStyle.message}>
      {props.message}
    </div>
  )
};
export default Message;