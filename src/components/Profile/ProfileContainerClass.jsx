import React from "react";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    if (this.props.userId) {
      this.props.getUserProfile(this.props.userId);
      this.props.getUserStatus(this.props.userId)
    }
  };

  componentDidUpdate(prevState, prevProps) {
    if (prevState.userId !== this.props.userId) {
      this.props.getUserStatus(this.props.userId);
      this.props.getUserProfile(this.props.userId);
    }

  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateUserStatus={this.props.updateUserStatus}
          isOwner={this.props.isOwner}
          updateMainPhoto={this.props.updateMainPhoto}
        />
      </div>
    )
  }
}

export default ProfileContainer;