import { NavLink } from 'react-router-dom';
import ObjectStyle from './Navbar.module.css';  //создаем объект, откуда возьмем стили классов

const Navbar = () => {

  const Selected = ({ isActive }: any) => isActive ? ObjectStyle.active : '';

  return (
    <nav className={ObjectStyle.sidebar}>
      <div className={ObjectStyle.item}>
        <NavLink to='/profile/me' className={Selected}>
          Profile
        </NavLink>
      </div>
      <div className={ObjectStyle.item}>
        <NavLink to='/dialogs' className={Selected}>
          Messages
        </NavLink>
      </div>
      <div className={ObjectStyle.item}>
        <NavLink to='/users' className={Selected}>
          Users
        </NavLink>
      </div>
      <div className={ObjectStyle.item}>
        <NavLink to='/news' className={Selected}>
          News
        </NavLink>
      </div>
      <div className={ObjectStyle.item}>
        <NavLink to='/music' className={Selected}>
          Music
        </NavLink>
      </div>
      <div className={ObjectStyle.item}>
        <NavLink to='/settings' className={Selected}>
          Settings
        </NavLink>
      </div>
    </nav >
  )
}
export default Navbar;



