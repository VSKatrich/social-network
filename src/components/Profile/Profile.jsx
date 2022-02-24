import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        getUserStatus={props.getUserStatus}
        updateUserStatus={props.updateUserStatus}
        isOwner={props.isOwner}
        updateMainPhoto={props.updateMainPhoto}
      />
      <MyPostsContainer store={props.store} />
    </div>
  )
}
export default Profile; 