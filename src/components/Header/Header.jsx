import { NavLink } from 'react-router-dom';
import styleObj from './Header.module.css';

const Header = (props) => {
  return (
    <header className={styleObj.header}>
      <img src='https://i.pinimg.com/originals/df/95/f7/df95f77a67218f15a6f44cb83dc38259.png' />

      <div className={styleObj.login} >
        {props.isAuth
          ? <div>
            {props.login}
            <button onClick={props.logout}>log out</button>
          </div>
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header >
  )
}

export default Header;
