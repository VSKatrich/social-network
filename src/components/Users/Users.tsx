import React from 'react';
import { UsersType } from '../../types/types';
import Paginator from '../common/paginator/paginator';
import SearchUsersForm from './SearchUsersForm';
import User from './User';
import styleObj from './Users.module.css';

type PropsType = {
  pageSize: number
  totalCount: number
  onClickChange: (pageNumber: number) => void
  currentPage: number
  users: Array<UsersType>
  isFollowingProgress: Array<number>
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

const Users: React.FC<PropsType> = ({ totalCount, pageSize, onClickChange, currentPage, users, isFollowingProgress, follow, unfollow }) => {
  return (
    <div >
      <SearchUsersForm />
      <Paginator totalItemsCount={totalCount}
        pageSize={pageSize}
        onClickChange={onClickChange}
        currentPage={currentPage}
      />
      {
        users.map(u => <div className={styleObj.userCard} key={u.id}  >
          <User user={u}
            isFollowingProgress={isFollowingProgress}
            follow={follow}
            unfollow={unfollow}
          />
        </div >)
      }
    </ div >
  )
};


export default Users;