import React from "react";
import { AppStateType } from "../../Redux/redux-store";
import { ProfileType } from "../../types/types";
import Profile from "./Profile";

type PropsType = {
  userId: number | null
  isOwner: boolean
  profile: ProfileType | null
  status: string
  getUserProfile: (userId: number | null) => void
  getUserStatus: (userId: number | null) => void
  updateUserStatus: (status: string) => void
  updateMainPhoto: (photo: any) => void
  updateUserData: (userData: ProfileType) => void
}

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    if (this.props.userId) {
      this.props.getUserProfile(this.props.userId);
      this.props.getUserStatus(this.props.userId)
    }
  };

  componentDidUpdate(prevState: PropsType) {
    if (prevState.userId !== this.props.userId) {
      console.log('componentDidUpdate')
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
          updateUserData={this.props.updateUserData}
        />
      </div>
    )
  }
}

export default ProfileContainer;