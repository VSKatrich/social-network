import React from "react";
import { connect } from "react-redux";
import Users from './Users';
import Preloader from "../common/preloader/Preloader";
import { getUsers, follow, setCurrentPage, setTotalCount, unfollow, toggleIsFollowingProgress } from "../../Redux/users-reducer";

class UsersAPIcomponent extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onClickChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        <div>{this.props.isFetching ? <Preloader /> : null}</div>
        <Users onClickChange={this.onClickChange}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          isFollowingProgress={this.props.isFollowingProgress}
          toggleIsFollowingProgress={this.props.toggleIsFollowingProgress} />
      </>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowingProgress: state.usersPage.isFollowingProgress
  }
};

export default connect(mapStateToProps, {
  follow, unfollow, toggleIsFollowingProgress,
  setCurrentPage, setTotalCount, getUsers
})(UsersAPIcomponent);
