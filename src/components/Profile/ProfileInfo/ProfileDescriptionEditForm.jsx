import { Field, Form } from "react-final-form";
import { Input } from "../../FormComponents/FormComponents";
import { composeValidators, maxLengthCreator, required } from "../../utils/validators/validators";
import style from './ProfileInfo.module.css'

const EditDescriptionForm = ({ updateUserData, profile, setEditMode }) => {

  const onSubmit = (formData, form) => {
    updateUserData(formData);
    setEditMode(false)
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={profile}>
      {
        ({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <b>Full name</b>: <Field name='fullName'
                component={Input}
                validate={composeValidators(maxLengthCreator(20), required)} />
              <b>About me</b>: <Field name='aboutMe'
                component={Input}
                validate={composeValidators(maxLengthCreator(20), required)} />
              <div><b>Looking for a job</b>: <Field name='lookingForAJob'
                component='input'
                type="checkbox"
                validate={composeValidators(maxLengthCreator(20), required)} />
              </div>
              <b>My professional skills</b>: <Field name='lookingForAJobDescription'
                component={Input}
                validate={composeValidators(maxLengthCreator(20), required)} />
              <div>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map(key => {
                  return (
                    <div className={style.contact}>
                      {key}: <Field name={'contacts.' + key}
                        component={Input}
                        validate={composeValidators(maxLengthCreator(100))} />
                    </div>
                  )
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

