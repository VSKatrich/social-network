import { ContactsType, ProfileType } from '../../../types/types'
import style from './ProfileInfo.module.css'

type PropsType = {
  profile: ProfileType
}
const ProfileDescription = ({ profile }: PropsType): JSX.Element => {

  return (
    <div>
      <div className={style.aboutMe}>
        <div>
          <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
          <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        <div>
          <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        <div>
          <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactKey={profile.contacts[key as keyof ContactsType]} />
          })}
        </div>
      </div>
    </div>
  )
}

type ContactPropsType = {
  contactTitle: string
  contactKey: string
}
const Contact = ({ contactTitle, contactKey }: ContactPropsType): JSX.Element => {
  return (
    <div className={style.contact} >
      {contactTitle} : {contactKey}
    </div>
  )
}

export default ProfileDescription;

