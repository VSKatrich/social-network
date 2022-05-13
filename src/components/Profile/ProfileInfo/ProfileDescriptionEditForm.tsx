import { Field, Form } from "react-final-form";
import { ProfileType } from "../../../types/types";
import { Input } from "../../FormComponents/FormComponents";
import { composeValidators, maxLengthCreator, required } from "../../utils/validators/validators";
import style from './ProfileInfo.module.css';

type PropsType = {
  updateUserData: (userData: ProfileType) => void
  setEditMode: (editMode: boolean) => void
  profile: ProfileType
}
const EditDescriptionForm = ({ updateUserData, profile, setEditMode }: PropsType): JSX.Element => {

  const onSubmit = (formData: ProfileType) => {
    updateUserData(formData);
    setEditMode(false)
  }

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={profile}>
      {
        ({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <div className={style.items}>
              <div className={style.item}>
                <div>Full name:</div>
                <Field name='fullName'
                  component={Input}
                  validate={composeValidators(maxLengthCreator(20), required)} />
              </div>
              <div className={style.item}>
                <div>About me:</div> <Field name='aboutMe'
                  component={Input}
                  validate={composeValidators(maxLengthCreator(20), required)} />
              </div>
              <div className={style.item}>
                <div>Looking for a job: </div> <Field name='lookingForAJob'
                  component='input'
                  type="checkbox"
                  validate={composeValidators(maxLengthCreator(20), required)} />
              </div>
              <div className={style.item}>
                <div>Professional skills:</div> <Field name='lookingForAJobDescription'
                  component={Input}
                  validate={composeValidators(maxLengthCreator(20), required)} />
              </div>

              <div >
                <div>Contacts:</div>
                {Object.keys(profile.contacts).map(key => {
                  return (
                    <div className={style.contact} key={key}>
                      {key}: <Field name={'contacts.' + key}
                        component={Input}
                        validate={composeValidators(maxLengthCreator(100))} />
                    </div>)
                })}
              </div>
            </div>

            <div>
              <button type='submit' disabled={submitting} > save </button>
            </div>
          </form>
        )
      }
    </Form>
  )
}
export default EditDescriptionForm;

