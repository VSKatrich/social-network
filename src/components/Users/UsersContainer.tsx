import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../Store/redux-store";
import { actions, follow, getUsers, unfollow } from "../../Store/users-reducer";
import { UsersType } from "../../types/types";
import Preloader from "../common/preloader/Preloader";
import Users from './Users';
import {
  getCurrentPage,
  getIsFetching,
  getIsFollowingProgress,
  getPageSize,
  getTotalCount,
  getUsersInState
} from '../../Store/selectors';
import styleObj from './Users.module.css';

type PropsStateType = {
  currentPage: number
  pageSize: number
  users: Array<UsersType>
  isFetching: boolean;
  totalCount: number
  isFollowingProgress: Array<number>
}
type PropsDispatchType = {
  getUsers: (currentPage: number, pageSize: number) => void
  setCurrentPage: (pageNumber: number) => void
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}
type PropsType = PropsStateType & PropsDispatchType

class UsersAPIcomponent extends React.Component<PropsType> {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onClickChange = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <div className={styleObj.container}>
        <div>{this.props.isFetching ? <Preloader /> : null}</div>

        <Users onClickChange={this.onClickChange}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          isFollowingProgress={this.props.isFollowingProgress} />
      </div>
    )
  };
}

const mapStateToProps = (state: AppStateType): PropsStateType => {
  return {
    users: getUsersInState(state),
    totalCount: getTotalCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isFollowingProgress: getIsFollowingProgress(state)
  }
};

const mapDispatchToProps = (dispatch: any): PropsDispatchType => {
  return {
    getUsers: (currentPage, pageSize) => dispatch(getUsers(currentPage, pageSize)),
    setCurrentPage: (pageNumber) => dispatch(actions.setCurrentPage(pageNumber)),
    follow: (userId) => dispatch(follow(userId)),
    unfollow: (userId) => dispatch(unfollow(userId))
  }
};

export default connect<PropsStateType, PropsDispatchType, {}, AppStateType>
  (mapStateToProps, mapDispatchToProps)(UsersAPIcomponent);
