import Preloader from '../../common/preloader/Preloader';
import ObjStyle from './ProfileInfo.module.css'
import imgUser from './../../../assets/images/imgUser.png'
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
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

      <div className={ObjStyle.description}>
        <img src={props.profile.photos.large || imgUser} />
        <div className={ObjStyle.status} >
          <div>ОБО МНЕ</div>

          <ProfileStatus
            status={props.status}
            getUserStatus={props.getUserStatus}
            updateUserStatus={props.updateUserStatus}
          />

          <div className={ObjStyle.aboutMe} >
            <div>
              {props.profile.fullName}
            </div>
            <div>
              {props.profile.aboutMe}
            </div>
            <div>
              {props.profile.lookingForAJob ? 'V poiskah job' : 'Ne ishy job'}
            </div>
            {props.isOwner && <input type='file' onChange={onMainPhotoSelected} />}
          </div>

        </div>
      </div>
    </div >
  );
}
export default ProfileInfo;