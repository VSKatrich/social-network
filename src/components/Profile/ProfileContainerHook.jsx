import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { compose } from 'redux';
import {
  getUserProfile,
  getUserStatus,
  setUsersProfile,
  updateUserStatus,
  updateMainPhoto
} from '../../Redux/profile-reducer';
import { getMyId } from '../../Redux/selectors';
import ProfileContainer from './ProfileContainerClass';

//компонента для использования hook
const ProfileUseParams = (props) => {
  const params = useParams();
  const { userId } = params;
  const navigate = useNavigate();
  const [currentUserId, setCurrentUserId] = useState(undefined)
  const [isOwner, setIsOwner] = useState(false)

  useEffect(() => {
    if (params.userId === 'me') {
      setCurrentUserId(props.myUserId)
      setIsOwner(true)
    } else {
      setCurrentUserId(userId)
      setIsOwner(false)
    }
  }, [userId]);

  useEffect(() => {
    if (!props.isAuth && params.userId === 'me') navigate('/login')
  }, [props.isAuth, params.userId])

  return (
    <ProfileContainer
      userId={currentUserId}
      profile={props.profile}
      status={props.status}
      isOwner={isOwner}

      getUserStatus={props.getUserStatus}
      setUsersProfile={props.setUsersProfile}
      getUserProfile={props.getUserProfile}
      updateUserStatus={props.updateUserStatus}
      updateMainPhoto={props.updateMainPhoto}
    />
  )
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  myUserId: getMyId(state),
  isAuth: state.auth.isAuth
})

export default compose(
  connect(mapStateToProps, {
    setUsersProfile, getUserProfile, getUserStatus,
    updateUserStatus, updateMainPhoto
  }),
  // withAuthNavigate
)(ProfileUseParams)
