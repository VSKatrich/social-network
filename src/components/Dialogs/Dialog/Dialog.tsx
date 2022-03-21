import { NavLink } from 'react-router-dom';
import ObjStyle from './../Dialogs.module.css'

type DialogType = {
  id: number
  image: string
  name: string
}

const Dialog = ({ id, image, name }: DialogType): JSX.Element => {
  let path = '/dialogs/' + id
  return (
    <div className={ObjStyle.dialog}>
      <img src={image} ></img>
      <NavLink to={path} > {name} </NavLink>
    </div>
  )
};

export default Dialog;

