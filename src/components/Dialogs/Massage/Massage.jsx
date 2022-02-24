import ObjStyle from './../Dialogs.module.css'

const Massage = (props) => {
  return (
    <div className={ObjStyle.massage}>
      {props.massage}
    </div>
  )
};
export default Massage;