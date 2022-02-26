import { useState } from 'react';
import Preloader from '../../common/preloader/Preloader';
import imgUser from './../../../assets/images/imgUser.png';
import ProfileDescription from './ProfileDescription';
import EditDescriptionForm from './ProfileDescriptionEditForm';
import ObjStyle from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false)


  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length != 0) {
      props.updateMainPhoto(e.target.files[0])
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
            <img src={props.profile.photos.large || imgUser} />
          </div>
          <div>
            {props.isOwner && <input type='file' onChange={onMainPhotoSelected} />}
          </div>
        </div>

        <div className={ObjStyle.description} >
          <div className={ObjStyle.fullName}>
            {props.profile.fullName}
          </div>
          <ProfileStatus
            status={props.status}
            getUserStatus={props.getUserStatus}
            updateUserStatus={props.updateUserStatus} />

          {editMode
            ? <EditDescriptionForm updateUserData={props.updateUserData}
              profile={props.profile}
              setEditMode={setEditMode} />

            : <ProfileDescription profile={props.profile} />}
        </div>

        <div>
          {props.isOwner && !editMode && <button onClick={() => { setEditMode(true) }} >edit card</button>}
        </div>
      </div>

    </div >
  );
}

export default ProfileInfo;