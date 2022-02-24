import { NavLink } from 'react-router-dom';
import imgUser from './../../assets/images/imgUser.png';

const User = (props) => {
  const u = props.user
  return (
    <div>
      <span>
        <div >
          <NavLink to={'/profile/' + u.id} >
            <img src={(u.photos.small != null) ? u.photos.small : imgUser} />
          </NavLink>
        </div>
        <div>
          {u.followed ? (
            <button
              disabled={props.isFollowingProgress.some(id => id === u.id)}
              onClick={() => { props.unfollow(u.id) }} >
              Unfollow </button>
          ) : (
            <button
              disabled={props.isFollowingProgress.some(id => id === u.id)}
              onClick={() => { props.follow(u.id) }} >
              Follow </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{u.name}</div>
          <div>{u.status}</div>
        </span>
        <span>
          <div> {"u.location.city"} </div>
          <div> {"u.location.country"} </div>
        </span>
      </span>
    </div >
  )
};


export default User;