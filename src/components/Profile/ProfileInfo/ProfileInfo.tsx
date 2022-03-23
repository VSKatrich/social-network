import React, { ChangeEvent, useState } from 'react';
import { ProfileType } from '../../../types/types';
import Preloader from '../../common/preloader/Preloader';
import imgUser from './../../../assets/images/imgUser.png';
import ProfileDescription from './ProfileDescription';
import EditDescriptionForm from './ProfileDescriptionEditForm';
import ObjStyle from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

type PropsType = {
  isOwner: boolean
  profile: ProfileType | null
  status: string
  updateUserStatus: (status: string) => void
  updateMainPhoto: (photo: any) => void
  updateUserData: (userData: ProfileType) => void
}

const ProfileInfo = ({
  profile, updateMainPhoto,
  isOwner, status,
  updateUserStatus, updateUserData
}: PropsType): JSX.Element => {
  const [editMode, setEditMode] = useState(false)


  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      updateMainPhoto(e.target.files[0])
    }
  }

  return (
    <div>
      <div className={ObjStyle.wallPaper} >
        <img src='https://cdn.wallpaperhub.app/cloudcache/d/3/c/2/b/f/d3c2bf863b952ad8d93816729ce85bb0bbebcbc8.png' />
      </div>

      <div className={ObjStyle.profileCard}>
        <div className={ObjStyle.mainImage}>
          <div>
            <img src={profile.photos.large || imgUser} />
          </div>
          <div>
            {isOwner && <input type='file' onChange={onMainPhotoSelected} />}
          </div>
        </div>

        <div className={ObjStyle.description} >
          <div className={ObjStyle.fullName}>
            {profile.fullName}
          </div>
          <ProfileStatus
            status={status}
            updateUserStatus={updateUserStatus} />

          {editMode
            ? <EditDescriptionForm updateUserData={updateUserData}
              profile={profile}
              setEditMode={setEditMode} />

            : <ProfileDescription profile={profile} />}
        </div>

        <div>
          {isOwner && !editMode && <button onClick={() => { setEditMode(true) }} >edit card</button>}
        </div>
      </div>

    </div >
  );
}

export default ProfileInfo;