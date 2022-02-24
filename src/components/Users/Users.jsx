import Paginator from '../common/paginator/paginator';
import User from './User';
import styleObj from './Users.module.css';

const Users = (props) => {

  return (
    <div>
      <Paginator totalItemsCount={props.totalCount}
        pageSize={props.pageSize}
        onClickChange={props.onClickChange}
        currentPage={props.currentPage}
      />
      {
        props.users.map(u => <div className={styleObj.userCard} key={u.id}  >
          <User user={u}
            isFollowingProgress={props.isFollowingProgress}
            follow={props.follow}
            unfollow={props.unfollow}
          />
        </div >)
      }
    </ div >
  )
};


export default Users;