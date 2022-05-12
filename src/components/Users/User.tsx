import React from 'react';
import { NavLink } from 'react-router-dom';
import { UsersType } from '../../types/types';
import imgUser from './../../assets/images/imgUser.png';
import st from './Users.module.css'

type PropsType = {
  user: UsersType
  isFollowingProgress: Array<number>
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

const User: React.FC<PropsType> = ({ user, isFollowingProgress, unfollow, follow }) => {
  return (
    <div>
      <span>
        <div >
          <NavLink to={'/profile/' + user.id} >
            <img src={(user.photos.small != null) ? user.photos.small : imgUser} />
          </NavLink>
        </div>
        <div >
          {user.followed ? (
            <button
              className={st.button_unfollow}
              disabled={isFollowingProgress.some(id => id === user.id)}
              onClick={() => { unfollow(user.id) }} >
              Unfollow </button>
          ) : (
            <button
              className={st.button_follow}
              disabled={isFollowingProgress.some(id => id === user.id)}
              onClick={() => { follow(user.id) }} >
              Follow </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div> {"user.location.city"} </div>
          <div> {"user.location.country"} </div>
        </span>
      </span>
    </div >
  )
};


export default User;