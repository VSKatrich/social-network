import ObjStyle from './../Dialogs.module.css'

type MessageType = {
  message: string
}
const Message = ({ message }: MessageType): JSX.Element => {
  return (
    <div className={ObjStyle.message}>
      {message}
    </div>
  )
};
export default Message;