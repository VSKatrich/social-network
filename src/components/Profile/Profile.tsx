import { ProfileType } from '../../types/types';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type PropsType = {
  profile: ProfileType | null
  status: string
  isOwner: boolean
  updateUserStatus: (status: string) => void
  updateMainPhoto: (photo: any) => void
  updateUserData: (userData: ProfileType) => void
}

const Profile = ({ profile, status, updateUserStatus, isOwner, updateMainPhoto, updateUserData }: PropsType): JSX.Element => {
  return (
    <div>
      <ProfileInfo
        profile={profile}
        status={status}
        updateUserStatus={updateUserStatus}
        isOwner={isOwner}
        updateMainPhoto={updateMainPhoto}
        updateUserData={updateUserData}
      />
      <MyPostsContainer />
    </div>
  )
}
export default Profile; 