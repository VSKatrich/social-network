import style from './ProfileInfo.module.css'

const ProfileDescription = ({ profile }) => {

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
            return <Contact key={key} contactTitle={key} contactKey={profile.contacts[key]} />
          })}
        </div>
      </div>
    </div>
  )
}

const Contact = ({ contactTitle, contactKey }) => {
  return (
    <div className={style.contact} >
      {contactTitle} : {contactKey}
    </div>
  )
}

export default ProfileDescription;

