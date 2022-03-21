import { NavLink } from 'react-router-dom';
import styleObj from './Header.module.css';

type HeaderType = {
  isAuth: boolean
  login: string | null
  logout: () => void
}

const Header = ({ isAuth, login, logout }: HeaderType): JSX.Element => {
  return (
    <header className={styleObj.header}>
      <img src='https://i.pinimg.com/originals/df/95/f7/df95f77a67218f15a6f44cb83dc38259.png' />

      <div className={styleObj.login} >
        {isAuth
          ? <div>
            {login}
            <button onClick={logout}>log out</button>
          </div>
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header >
  )
}

export default Header;
