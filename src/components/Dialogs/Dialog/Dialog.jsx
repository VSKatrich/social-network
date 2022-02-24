import { NavLink } from 'react-router-dom';
import ObjStyle from './../Dialogs.module.css'

const Dialog = (props) => {
  let path = '/dialogs/' + props.id
  return (
    <div className={ObjStyle.dialog}>
      <img src={props.image} ></img>
      <NavLink to={path} > {props.name} </NavLink>
    </div>
  )
};

export default Dialog;

