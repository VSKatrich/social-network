import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { compose } from 'redux';
import {
  getUserProfile,
  getUserStatus, updateMainPhoto,
  updateUserData, updateUserStatus
} from '../../Redux/profile-reducer';
import { AppStateType } from '../../Redux/redux-store';
import { getMyId } from '../../Redux/selectors';
import { ProfileType } from '../../types/types';
import ProfileContainer from './ProfileContainerClass';

type MapStateToPropsType = {
  myUserId: number | null
  isAuth: boolean
  profile: ProfileType | null
  status: string
}
type MapDispatchToProps = {
  getUserStatus: (userId: number | null) => void
  updateUserStatus: (status: string) => void
  updateMainPhoto: (photo: any) => void
  updateUserData: (userData: ProfileType) => void
  getUserProfile: (userId: number | null) => void
}
type PropsType = MapStateToPropsType & MapDispatchToProps

const ProfileUseParams = ({
  myUserId, isAuth, profile, status,
  getUserStatus,
  getUserProfile, updateUserStatus,
  updateMainPhoto, updateUserData }: PropsType): JSX.Element => {

  const params = useParams();
  const { userId } = params;
  const navigate = useNavigate();
  const [currentUserId, setCurrentUserId] = useState<number | null>(null)
  const [isOwner, setIsOwner] = useState(false)

  useEffect(() => {
    if (userId === 'me') {
      setCurrentUserId(myUserId)
      setIsOwner(true)
    } else {
      setCurrentUserId(Number(userId))
      setIsOwner(false)
    }
  }, [userId]);

  useEffect(() => {
    if (!isAuth && userId === 'me') navigate('/login')
  }, [isAuth, userId])

  return (
    <ProfileContainer
      userId={currentUserId}
      profile={profile}
      status={status}
      isOwner={isOwner}

      getUserStatus={getUserStatus}
      getUserProfile={getUserProfile}
      updateUserStatus={updateUserStatus}
      updateMainPhoto={updateMainPhoto}
      updateUserData={updateUserData}
    />
  )
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  myUserId: getMyId(state),
  isAuth: state.auth.isAuth
})

export default compose(
  connect<MapStateToPropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {
    getUserProfile, getUserStatus,
    updateUserStatus, updateMainPhoto, updateUserData
  }),
  // withAuthNavigate
)(ProfileUseParams)
